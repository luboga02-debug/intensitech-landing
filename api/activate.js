// =========================================================================
// VASOACTIVOS UCI — SERVIDOR DE ACTIVACIÓN Y CONTROL DE DISPOSITIVOS
// Dr. Luis Enrique Borroto Garcia, MD, MsC
// Máximo: 2 DISPOSITIVOS por licencia PRO
// =========================================================================

import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';

const MAX_DEVICES = 2;
const LICENSE_SECRET = 'DrLuisEnriqueBorrotoUCI2026VasoActivosAngolaLicenciasPro';
const MASTER_KEY_HASH = '4e0c633c0f01fa2f4635c9d92b8eabd9698e8ae69034204a9e6fd75d55c08805';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Max-Age': '86400'
};

// --------- In-Memory & Local Fallback Store ---------
const memoryStore = new Map();
const tempFilePath = path.join(os.tmpdir(), 'vaso_devices_store.json');

async function readLocalFileStore() {
  try {
    const raw = await fs.readFile(tempFilePath, 'utf8');
    return JSON.parse(raw);
  } catch (_) {
    return {};
  }
}

async function writeLocalFileStore(data) {
  try {
    await fs.writeFile(tempFilePath, JSON.stringify(data), 'utf8');
  } catch (_) {}
}

// --------- Storage Abstraction (Netlify Blobs > REST KV > Local File/Memory) ---------
async function getLicenseRecord(key) {
  const normKey = String(key || '').trim().toUpperCase();

  // 1. In-memory L1 cache
  if (memoryStore.has(normKey)) {
    return memoryStore.get(normKey);
  }

  // 2. Netlify Blobs (si está disponible en el entorno)
  try {
    const { getStore } = await import('@netlify/blobs');
    const store = getStore({ name: 'vasoactivos_licenses', consistency: 'strong' });
    const blobData = await store.get(normKey, { type: 'json' });
    if (blobData) {
      memoryStore.set(normKey, blobData);
      return blobData;
    }
  } catch (_) {}

  // 3. Upstash Redis / KV REST (si se configuraron variables de entorno en Netlify)
  const kvUrl = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
  const kvToken = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;
  if (kvUrl && kvToken) {
    try {
      const res = await fetch(`${kvUrl}/get/${encodeURIComponent('vaso:' + normKey)}`, {
        headers: { Authorization: `Bearer ${kvToken}` }
      });
      if (res.ok) {
        const json = await res.json();
        const val = json.result ? (typeof json.result === 'string' ? JSON.parse(json.result) : json.result) : null;
        if (val) {
          memoryStore.set(normKey, val);
          return val;
        }
      }
    } catch (_) {}
  }

  // 4. Fallback a archivo temporal
  const fileStore = await readLocalFileStore();
  const fileVal = fileStore[normKey] || null;
  if (fileVal) memoryStore.set(normKey, fileVal);
  return fileVal;
}

async function saveLicenseRecord(key, data) {
  const normKey = String(key || '').trim().toUpperCase();
  memoryStore.set(normKey, data);

  // 1. Netlify Blobs
  try {
    const { getStore } = await import('@netlify/blobs');
    const store = getStore({ name: 'vasoactivos_licenses', consistency: 'strong' });
    await store.setJSON(normKey, data);
  } catch (_) {}

  // 2. Upstash Redis / KV REST
  const kvUrl = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
  const kvToken = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;
  if (kvUrl && kvToken) {
    try {
      await fetch(`${kvUrl}/set/${encodeURIComponent('vaso:' + normKey)}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${kvToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
    } catch (_) {}
  }

  // 3. Archivo temporal local
  try {
    const fileStore = await readLocalFileStore();
    fileStore[normKey] = data;
    await writeLocalFileStore(fileStore);
  } catch (_) {}
}

// --------- Validación criptográfica idéntica al generador y app ---------
function validateLicenseSyntaxAndHash(rawKey) {
  if (!rawKey || typeof rawKey !== 'string') return false;
  const key = rawKey.trim().toUpperCase();

  if (key === 'PRO-DEMO-1234' || /DEMO|TEST|SAMPLE/i.test(key)) return false;

  const pattern = /^PRO-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/;
  if (!pattern.test(key)) return false;

  const body = key.substring(4);
  const secret = LICENSE_SECRET;
  const bloques = body.split('-');
  const lastBlock = bloques.pop();
  const sumLast = lastBlock.charCodeAt(0) + lastBlock.charCodeAt(1) + lastBlock.charCodeAt(2) + lastBlock.charCodeAt(3);
  if ((sumLast % 7) !== 0) return false;

  const body2 = bloques.join('');
  let h2 = 0;
  for (let i = 0; i < body2.length; i++) {
    h2 = (h2 * 31 + body2.charCodeAt(i) + secret.charCodeAt(i % secret.length)) | 0;
  }
  return (Math.abs(h2) % 17) === (lastBlock.charCodeAt(3) % 17);
}

function isMasterKey(rawKey) {
  if (!rawKey || typeof rawKey !== 'string') return false;
  const sha = crypto.createHash('sha256').update(rawKey.trim().toUpperCase()).digest('hex');
  return sha === MASTER_KEY_HASH;
}

// --------- Lógica Central de Activación ---------
async function processActivation({ licenseKey, deviceId, deviceInfo, clientIp }) {
  if (!licenseKey || typeof licenseKey !== 'string') {
    return {
      status: 400,
      body: { ok: false, error: 'MISSING_KEY', message: 'Se requiere una clave de licencia.' }
    };
  }

  const cleanKey = licenseKey.trim().toUpperCase();
  const cleanDevId = String(deviceId || '').trim() || ('dev-auto-' + Date.now().toString(36));

  // 1. Clave Maestra del Dr. Luis Borroto (dispositivos ilimitados, acceso maestro)
  if (isMasterKey(cleanKey)) {
    return {
      status: 200,
      body: {
        ok: true,
        isMaster: true,
        devicesCount: 1,
        maxDevices: 999,
        deviceId: cleanDevId,
        message: 'Acceso Maestro Dr. Luis Borroto activado sin restricciones de dispositivos.'
      }
    };
  }

  // 2. Bloqueo de códigos demo o de prueba
  if (cleanKey === 'PRO-DEMO-1234' || /DEMO|TEST|SAMPLE/i.test(cleanKey)) {
    return {
      status: 403,
      body: {
        ok: false,
        error: 'DEMO_KEY_REJECTED',
        message: 'Las claves de demostración no están autorizadas en producción.'
      }
    };
  }

  // 3. Validación criptográfica de la clave
  if (!validateLicenseSyntaxAndHash(cleanKey)) {
    return {
      status: 400,
      body: {
        ok: false,
        error: 'INVALID_SIGNATURE',
        message: 'Clave de licencia no válida o con firma criptográfica incorrecta.'
      }
    };
  }

  // 4. Registro y Verificación de Dispositivos (Límite: 2 dispositivos)
  let record = await getLicenseRecord(cleanKey);
  const now = Date.now();

  if (!record) {
    record = {
      key: cleanKey,
      devices: [
        {
          id: cleanDevId,
          firstSeen: now,
          lastSeen: now,
          info: deviceInfo ? String(deviceInfo).slice(0, 150) : '',
          ip: clientIp || ''
        }
      ],
      created: now,
      updated: now
    };
    await saveLicenseRecord(cleanKey, record);

    return {
      status: 200,
      body: {
        ok: true,
        devicesCount: 1,
        maxDevices: MAX_DEVICES,
        isNewDevice: true,
        deviceId: cleanDevId,
        message: `Licencia activada con éxito (Dispositivo 1 de ${MAX_DEVICES}).`
      }
    };
  }

  // Comprobar si el dispositivo ya estaba registrado
  const devIndex = record.devices.findIndex(d => (typeof d === 'string' ? d : d.id) === cleanDevId);

  if (devIndex !== -1) {
    // Ya está registrado: actualizar última conexión y autorizar
    if (typeof record.devices[devIndex] === 'object') {
      record.devices[devIndex].lastSeen = now;
      if (deviceInfo) record.devices[devIndex].info = String(deviceInfo).slice(0, 150);
    }
    record.updated = now;
    await saveLicenseRecord(cleanKey, record);

    return {
      status: 200,
      body: {
        ok: true,
        devicesCount: record.devices.length,
        maxDevices: MAX_DEVICES,
        isNewDevice: false,
        deviceId: cleanDevId,
        message: `Dispositivo verificado correctamente (${record.devices.length} de ${MAX_DEVICES} autorizados).`
      }
    };
  }

  // Es un dispositivo nuevo: verificar si hay cupo disponible (máximo 2)
  if (record.devices.length < MAX_DEVICES) {
    record.devices.push({
      id: cleanDevId,
      firstSeen: now,
      lastSeen: now,
      info: deviceInfo ? String(deviceInfo).slice(0, 150) : '',
      ip: clientIp || ''
    });
    record.updated = now;
    await saveLicenseRecord(cleanKey, record);

    return {
      status: 200,
      body: {
        ok: true,
        devicesCount: record.devices.length,
        maxDevices: MAX_DEVICES,
        isNewDevice: true,
        deviceId: cleanDevId,
        message: `Nuevo dispositivo registrado con éxito (${record.devices.length} de ${MAX_DEVICES}).`
      }
    };
  }

  // Se superó el límite (ya hay 2 dispositivos registrados)
  return {
    status: 403,
    body: {
      ok: false,
      error: 'DEVICE_LIMIT_REACHED',
      devicesCount: record.devices.length,
      maxDevices: MAX_DEVICES,
      message: `Esta licencia ya alcanzó el límite máximo de ${MAX_DEVICES} dispositivos permitidos.`
    }
  };
}

// --------- Exportación para Netlify Functions v2 (Estándar Web) ---------
export default async function (req, res) {
  if (req.method === 'OPTIONS') {
    if (res && typeof res.status === 'function') {
      Object.entries(corsHeaders).forEach(([k, v]) => res.setHeader(k, v));
      return res.status(204).end();
    }
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  let payload = {};
  try {
    if (typeof req.json === 'function') {
      payload = await req.json();
    } else if (req.body) {
      payload = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    }
  } catch (_) {
    payload = {};
  }

  const clientIp = (req.headers && (typeof req.headers.get === 'function' ? req.headers.get('x-forwarded-for') : req.headers['x-forwarded-for'])) || '';
  const result = await processActivation({
    licenseKey: payload.licenseKey,
    deviceId: payload.deviceId,
    deviceInfo: payload.deviceInfo,
    clientIp
  });

  if (res && typeof res.status === 'function') {
    Object.entries(corsHeaders).forEach(([k, v]) => res.setHeader(k, v));
    return res.status(result.status).json(result.body);
  }

  return new Response(JSON.stringify(result.body), {
    status: result.status,
    headers: {
      ...corsHeaders,
      'Content-Type': 'application/json'
    }
  });
}

// --------- Exportación para Netlify Functions v1 / AWS Lambda Classic ---------
export const handler = async (event, context) => {
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers: corsHeaders, body: '' };
  }

  let payload = {};
  try {
    payload = JSON.parse(event.body || '{}');
  } catch (_) {
    payload = {};
  }

  const clientIp = (event.headers && (event.headers['x-forwarded-for'] || event.headers['client-ip'])) || '';
  const result = await processActivation({
    licenseKey: payload.licenseKey,
    deviceId: payload.deviceId,
    deviceInfo: payload.deviceInfo,
    clientIp
  });

  return {
    statusCode: result.status,
    headers: {
      ...corsHeaders,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(result.body)
  };
};
