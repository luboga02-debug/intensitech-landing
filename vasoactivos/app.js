// ==========================================================================
// VasoActivos UCI — Web & PWA Core Engine (Versión Actualizada 2026)
// Desarrollado por: Dr. Luis Enrique Borroto Garcia, MD, MsC
// Médico Especialista en Medicina Intensiva y Profesor de la Especialidad
// ==========================================================================

// Registro del Service Worker para PWA Offline
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('SW registrado offline:', reg.scope))
      .catch(err => console.log('SW error:', err));
  });
}

// --------------------------------------------------------------------------
// 1. DICCIONARIO MULTILINGÜE COMPLETO (ES, EN, PT)
// --------------------------------------------------------------------------
const I18N = {
  es: {
    app_title: "VasoActivos UCI",
    app_subtitle: "Dr. Luis Enrique Borroto Garcia, MD, MsC",
    nav_home: "Inicio",
    nav_calc: "Calcular",
    nav_hemo: "Perfil",
    nav_shock: "Shock",
    nav_drugs: "Fármacos",
    nav_settings: "Ajustes",
    hero_title: "Medicina Intensiva & Cuidados Críticos",
    hero_subtitle: "Herramientas farmacológicas basadas en evidencia (SSC 2026 / ACC-AHA 2025 / ESICM 2024)",
    card_calc_title: "Calculadora de Infusión",
    card_calc_desc: "Dosis ↔ mL/h con titulación",
    card_hemo_title: "Perfil Hemodinámico & Perfusión",
    card_hemo_desc: "RVS, IS, CRT, ScvO2 y fenotipos",
    card_prep_title: "Preparación de Mezclas",
    card_prep_desc: "Dilución y duración de bolsa",
    card_shock_title: "Selector de Shock",
    card_shock_desc: "Algoritmos guiados con decisión",
    card_drugs_title: "Guía de Fármacos",
    card_drugs_desc: "22 fichas clínicas completas",
    card_edu_title: "Evidencia Científica",
    card_edu_desc: "Ensayos 2021-2026 y consensos",
    calc_header: "Calculadora de Infusión Continua",
    calc_tab_dose_to_rate: "Dosis → Velocidad (mL/h)",
    calc_tab_rate_to_dose: "Velocidad → Dosis",
    calc_label_drug: "Fármaco Vasoactivo:",
    calc_label_conc: "Concentración de la Solución:",
    calc_label_weight: "Peso del Paciente (kg):",
    calc_label_dose: "Dosis Deseada (mcg/kg/min):",
    calc_label_rate: "Velocidad de Infusión Actual (mL/h):",
    calc_res_rate_label: "Velocidad de Infusión Requerida:",
    calc_res_dose_label: "Dosis Actual que Recibe el Paciente:",
    calc_titration_title: "Tabla Dinámica de Titulación:",
    hemo_header: "Perfil Hemodinámico & Perfusión al Pie de Cama",
    hemo_subtitle: "Integración Macro-Microhemodinámica (SSC 2026 / ACC-AHA 2025 / ANDROMEDA-SHOCK-2 / ESICM 2024)",
    hemo_sec_macro: "📊 1. MACROHEMODINAMIA Y PRESIÓN DE PERFUSIÓN",
    hemo_lbl_sbp: "Presión Sistólica (PAS, mmHg):",
    hemo_lbl_dbp: "Presión Diastólica (PAD, mmHg):",
    hemo_lbl_hr: "Frecuencia Cardíaca (FC, lpm):",
    hemo_lbl_cvp: "Presión Venosa Central (PVC, mmHg):",
    hemo_lbl_co: "Gasto Cardíaco (GC / Débito, L/min):",
    hemo_sec_micro: "🔬 2. PERFUSIÓN TISULAR Y METABOLISMO (ANDROMEDA-SHOCK-2 / ESICM)",
    hemo_lbl_crt: "Tiempo Llenado Capilar (CRT, seg):",
    hemo_lbl_scvo2: "Saturación Venosa Central (ScvO2, %):",
    hemo_lbl_pvacogap: "Gradiente Veno-Arterial CO2 (ΔP(v-a)CO2, mmHg):",
    hemo_res_title: "Resultados Hemodinámicos Calculados:",
    hemo_lbl_phenotype: "FENOTIPO CLÍNICO DIAGNOSTICADO:",
    hemo_lbl_reco: "🎯 RECOMENDACIÓN TERAPÉUTICA FARMACOLÓGICA (GUÍAS):",
    prep_header: "Calculadora de Diluciones y Mezclas",
    prep_label_presets: "Plantillas Estándar UCI:",
    prep_label_mg: "Cantidad de Fármaco (mg o UI):",
    prep_label_vol: "Volumen Total de Mezcla (mL):",
    prep_label_dose: "Dosis Objetivo (mcg/kg/min):",
    prep_res_conc: "Concentración Final:",
    prep_res_rate: "Velocidad resultante:",
    prep_res_duration: "Duración estimada de la bolsa:",
    drugs_search_placeholder: "🔍 Buscar por nombre o indicación...",
    filter_all: "Todos (22)",
    filter_vasopressor: "Vasopresores",
    filter_inotropic: "Inotrópicos",
    filter_inodilator: "Inodiladores",
    filter_vasodilator: "Vasodilatadores",
    filter_adjuvant: "Adyuvantes",
    drug_modal_title: "Ficha Farmacológica",
    modal_head_mechanism: "MECANISMO DE ACCIÓN",
    modal_head_receptors: "PERFIL DE RECEPTORES",
    modal_head_hemodynamics: "EFECTOS HEMODINÁMICOS",
    modal_head_dosing: "DOSIFICACIÓN Y VÍA",
    modal_head_preparations: "PREPARACIONES ESTÁNDAR",
    modal_head_indications: "INDICACIONES CLÍNICAS",
    modal_head_contraindications: "CONTRAINDICACIONES",
    modal_head_adverse: "EFECTOS ADVERSOS",
    modal_head_monitoring: "MONITORIZACIÓN EN UCI",
    modal_head_special: "POBLACIONES ESPECIALES",
    modal_head_weaning: "DESESCALADA (WEANING)",
    modal_head_warning: "⚠️ ADVERTENCIA DE CAJA NEGRA",
    modal_btn_calc: "🧮 Calcular Infusión con este Fármaco",
    modal_lbl_range: "Rango:",
    modal_lbl_max: "Máx:",
    modal_lbl_route: "Vía:",
    modal_lbl_pk: "Farmacocinética: Inicio",
    modal_lbl_half_life: "Vida media:",
    cat_vasopresor: "VASOPRESOR",
    cat_inotropico: "INOTRÓPICO",
    cat_inodilador: "INODILATADOR",
    cat_vasodilatador: "VASODILATADOR",
    cat_adyuvante: "ADYUVANTE",
    shock_selector_title: "Selector de Shock Clínico",
    shock_selector_desc: "Seleccione el escenario clínico para abrir el algoritmo guiado con árbol de decisiones",
    paywall_shock_title: "6 Árboles de Decisión de Shock",
    paywall_shock_desc: "Actualiza a <strong>PRO</strong> para acceder a los algoritmos interactivos completos: Shock Séptico, Cardiogénico, Anafiláctico, Hipovolémico, Obstructivo y Mixto, con preguntas guiadas, recomendaciones basadas en guías SSC 2026 / ACC-AHA 2025 y fichas de fármacos en 1 clic.",
    paywall_shock_btn: "💎 Desbloquear 6 Escenarios",
    shock_card_septic_title: "🔴 Shock Séptico (Distributivo)",
    shock_card_septic_desc: "Guías SSC 2026: Cristaloides 30 mL/kg → Noradrenalina → Vasopresina + Hidrocortisona",
    shock_card_cardio_title: "💚 Shock Cardiogénico (IAM / Fallo de Bomba)",
    shock_card_cardio_desc: "Guías ACC/AHA 2025: ICP primaria → Noradrenalina de soporte → Dobutamina / Impella (DanGer Shock 2024)",
    shock_card_ana_title: "⚡ Shock Anafiláctico",
    shock_card_ana_desc: "Adrenalina IM inmediata (0.3-0.5 mg) → Adrenalina IV → Glucagón en betabloqueados",
    shock_card_hypo_title: "🩸 Shock Hipovolémico (Hemorrágico y No Hemorrágico)",
    shock_card_hypo_desc: "Transfusión masiva 1:1:1 → Ácido Tranexámico → Hipotensión permisiva → Noradrenalina temporal",
    shock_card_obs_title: "🚧 Shock Obstructivo (TEP Masivo / Taponamiento / Neumotórax)",
    shock_card_obs_desc: "Desobstrucción de emergencia: Fibrinólisis / Pericardiocentesis / Drenaje pleural + Noradrenalina soporte",
    shock_card_mixed_title: "🔀 Shock Mixto (Multifactorial / Distributivo + Cardiogénico)",
    shock_card_mixed_desc: "Fenotipado hemodinámico con POCUS → Terapia balanceada Noradrenalina + Inotrópico (Dobutamina/Levosimendán)",
    shock_terminal_header: "🎯 ACCIÓN Y SEGUIMIENTO:",
    edu_subtitle: "Literatura de alto impacto publicada en NEJM, JAMA, Lancet, Intensive Care Medicine y Critical Care Medicine",
    btn_yes: "SÍ",
    btn_no: "NO",
    btn_back_step: "← Paso Anterior",
    btn_restart_algo: "🔄 Reiniciar",
    btn_back_to_shocks: "← Volver a Tipos de Shock",
    btn_calc_this_drug: "🧮 Calcular Infusión con este Fármaco",
    btn_accept_disclaimer: "SOY PROFESIONAL SANITARIO — ACEPTO Y CONTINÚO",
    disclaimer_title: "⚠️ AVISO LEGAL — USO MÉDICO",
    disclaimer_p1: "Esta aplicación está diseñada EXCLUSIVAMENTE para profesionales de la salud con formación en Medicina Intensiva y áreas de pacientes críticos.",
    disclaimer_p2: "Las dosis, preparaciones y algoritmos son herramientas de apoyo basadas en guías clínicas vigentes (SSC 2026, ACC/AHA 2025, ESICM 2024) y NO sustituyen bajo ninguna circunstancia el juicio clínico del médico responsable.",
    disclaimer_p3: "El autor, Dr. Luis Enrique Borroto Garcia, MD, MsC, declina toda responsabilidad por decisiones terapéuticas individuales adoptadas a partir del uso de este software.",
    disclaimer_p4: "Al pulsar el botón inferior, usted declara ser profesional sanitario cualificado y acepta estas condiciones.",
    settings_header: "⚙️ Ajustes y Entorno Clínico",
    settings_lang_label: "Idioma de la Aplicación:",
    settings_env_label: "Entorno Asistencial:",
    settings_weight_label: "Peso por Defecto (kg):",
    settings_theme_label: "Modo de Pantalla:",
    theme_dark: "🌙 Modo Nocturno (Dark UCI)",
    theme_light: "☀️ Modo Diurno (Light)",
    about_developed_by: "Desarrollado por:",
    about_author_name: "Dr. Luis Enrique Borroto Garcia",
    about_author_title: "MD, MsC — Especialista en Medicina Intensiva y Profesor",
    about_references_summary: "Basado en Surviving Sepsis Campaign 2026/2021, ACC/AHA Cardiogenic Shock Guidelines 2025, ESICM Consensus 2024, DanGer Shock (NEJM 2024), CLOVERS (NEJM 2023), CLASSIC (NEJM 2022) y DOREMI (NEJM 2021).",
    // Apoyo VasoActivos, Donaciones y PRO
    mono_modal_title: "💛 Apoya VasoActivos UCI",
    mono_tab_donate: "💛 Donaciones",
    mono_tab_pro: "👑 Upgrade PRO",
    hub_card_upgrade_title: "Desbloquea PRO",
    hub_card_upgrade_desc: "Sin publicidad + Profiler + Árboles Shock",
    hub_card_support_title: "Apoya este proyecto",
    hub_card_support_desc: "Transferencia bancaria · Pago por referencia",
    ad_dashboard_text: "🔒 Actualiza a <strong>PRO</strong> para eliminar esta publicidad y desbloquear las funciones avanzadas del Profiler Hemodinámico y los 6 árboles de decisión de Shock.",
    ad_dashboard_cta: "👉 Quiero PRO — Más información",
    donate_header_title: "🩺 Tu apoyo mantiene esta herramienta viva",
    donate_header_desc: "Desarrollado por un médico especialista. Cualquier aportación, por pequeña que sea, ayuda a mantener actualizadas las guías y el soporte técnico.",
    donate_btn_transfer: "🏦 Transferencia Bancaria",
    donate_btn_reference: "💳 Pago por Referencia",
    donate_prefer_pro_title: "✨ ¿Prefieres PRO en vez de una donación?",
    donate_prefer_pro_desc: "Por un poco más, desbloqueas el Profiler Hemodinámico, los 6 árboles de Shock y eliminas la publicidad.",
    donate_btn_see_pro: "👑 Ver plan PRO",
    pro_header_title: "👑 VasoActivos UCI — PRO",
    pro_header_desc: "Elige la opción que mejor se adapte a ti. Compra segura con Stripe o Transferencia BAI.",
    pro_plan_lifetime_title: "⭐ PRO — PAGO ÚNICO DE POR VIDA",
    pro_plan_lifetime_sub: "Recomendado: 1 solo pago, para siempre",
    pro_plan_monthly_title: "📅 PRO — Suscripción Mensual",
    pro_plan_monthly_sub: "Prueba sin compromiso. Cancela cuando quieras.",
    pro_plan_monthly_unit: "/mes",
    pro_plan_yearly_title: "🗓️ PRO — Plan Anual (Ahorra 37%)",
    pro_plan_yearly_sub: "Equivale a 2.500 Kz/mes — Ahorra 37% frente al plan mensual",
    pro_plan_yearly_unit: "/año",
    pro_item_hemo: "✅ Profiler Hemodinámico completo + Fenotipado",
    pro_item_shock: "✅ 6 Árboles de Decisión de Shock interactivos",
    pro_item_noads: "✅ 0 publicidad en toda la app",
    pro_item_updates: "✅ Actualizaciones futuras incluidas (nuevas guías, nuevos fármacos)",
    pro_item_offline: "✅ Funciona 100% OFFLINE tras activación",
    pro_item_support: "✅ Soporte prioritario por email y WhatsApp",
    pro_item_same: "✅ Mismos beneficios que el plan de por vida",
    pro_item_rotation: "✅ Ideal si solo lo necesitas 1-3 meses por rotación UCI",
    pro_item_billed: "✅ Se factura cada 30 días",
    pro_item_same_annual: "✅ Mismos beneficios que plan de por vida",
    pro_item_renew: "🔥 Ahorra 18.000 Kz al año frente al pago mensual",
    pro_btn_stripe: "💳 Continuar con pago seguro (Stripe)",
    pro_btn_bai: "🏦 Pagar por Transferencia BAI / Multicaixa Express (Angola)",
    pro_flow_title: "📲 ¿Cómo y por qué vía recibes tu código de activación tras pagar?",
    pro_flow_steps: "<strong>1. Realiza tu pago:</strong> Por <em>Transferencia Bancaria (Banco BAI)</em> o <em>Pago por Referencia (Multicaixa Express)</em>.<br><strong>2. Envía tu comprobante con 1 clic:</strong> Pulsa el botón de WhatsApp (<strong>+244 932 708 186</strong>) o envíalo por email a <strong>luboga02@gmail.com</strong>.<br><strong>3. ¿Por qué vía te llega el código de activación?:</strong><br>&nbsp;&nbsp;• <strong>VÍA WHATSAPP DIRECTO:</strong> El Dr. Luis Borroto verifica el comprobante y te envía tu código único personal (ej: <code>PRO-ABCD-EFGH-IJKL</code>) <strong>directamente a tu chat de WhatsApp</strong> en <strong>menos de 15 minutos a 2 horas</strong> ⚡.<br>&nbsp;&nbsp;• <strong>VÍA CORREO ELECTRÓNICO:</strong> Si nos escribes por email, te llegará directamente a tu <strong>bandeja de entrada</strong>.<br><strong>4. Actívalo en esta aplicación:</strong> Copia el código recibido, pégalo en la casilla <strong>'Activar'</strong> de abajo y pulsa <em>Activar Licencia</em>. ¡Se desbloquea al instante para siempre en hasta 2 dispositivos y funciona <strong>100% OFFLINE</strong> sin internet!",
    pro_activate_label: "🎫 Pega aquí el código PRO (PRO-XXXX-XXXX-XXXX) que recibiste por WhatsApp o Email:",
    pro_activate_ph: "Ej: PRO-ABCD-EFGH-IJKL",
    pro_activate_btn: "Activar Licencia",
    pro_activate_note: "🇦🇴 <strong>¿Aún no tienes tu código de activación?</strong><br>Tras realizar la Transferencia Banco BAI o Pago por Referencia (Multicaixa Express), envía tu comprobante a:<br>👉 <strong>WhatsApp: +244 932 708 186</strong> | Email: <strong>luboga02@gmail.com</strong><br>El Dr. Luis Borroto te enviará tu código de activación directamente a tu WhatsApp o Email en <strong>menos de 15 min a 2 horas</strong> ⚡.",
    settings_upgrade_title: "👑 VasoActivos UCI — PRO",
    settings_upgrade_sub: "Pago único de por vida o suscripción mensual. Tú eliges.",
    settings_upgrade_btn: "💎 Ver planes y Upgrade a PRO",
    settings_active_title: "✅ PRO Activo — Gracias por tu apoyo",
    settings_active_desc: "Licencia de por vida activada en este dispositivo.",
    settings_active_reset_btn: "🔄 Desactivar / Usar otra licencia",
    pro_feat_noads: "✨ Sin publicidad en toda la aplicación",
    pro_feat_hemo: "🫀 Profiler Hemodinámico y Perfusión Tisular COMPLETO",
    pro_feat_shock: "🔴 6 Árboles de Decisión de Shock interactivos",
    pro_feat_updates: "🎯 Recomendaciones farmacológicas basadas en guías 2024–2026",
    pro_feat_offline: "📱 Funciona 100% OFFLINE tras la activación"
  },
  en: {
    app_title: "VasoActivos ICU",
    app_subtitle: "Dr. Luis Enrique Borroto Garcia, MD, MsC",
    nav_home: "Home",
    nav_calc: "Calculate",
    nav_hemo: "Profile",
    nav_shock: "Shock",
    nav_drugs: "Drugs",
    nav_settings: "Settings",
    hero_title: "Critical Care & Intensive Care Medicine",
    hero_subtitle: "Evidence-based pharmacological tools (SSC 2026 / ACC-AHA 2025 / ESICM 2024)",
    card_calc_title: "Infusion Calculator",
    card_calc_desc: "Dose ↔ mL/h with titration",
    card_hemo_title: "Hemodynamic & Perfusion Profiler",
    card_hemo_desc: "SVR, Shock Index, CRT, ScvO2 & phenotypes",
    card_prep_title: "Mixture Preparation",
    card_prep_desc: "Dilution and bag duration",
    card_shock_title: "Shock Selector",
    card_shock_desc: "Guided decision tree algorithms",
    card_drugs_title: "Drug Reference",
    card_drugs_desc: "22 complete clinical monographs",
    card_edu_title: "Scientific Evidence",
    card_edu_desc: "2021-2026 Trials & Guidelines",
    calc_header: "Continuous Infusion Calculator",
    calc_tab_dose_to_rate: "Dose → Rate (mL/h)",
    calc_tab_rate_to_dose: "Rate → Dose",
    calc_label_drug: "Vasoactive Agent:",
    calc_label_conc: "Solution Concentration:",
    calc_label_weight: "Patient Weight (kg):",
    calc_label_dose: "Target Dose (mcg/kg/min):",
    calc_label_rate: "Current Infusion Rate (mL/h):",
    calc_res_rate_label: "Required Infusion Rate:",
    calc_res_dose_label: "Current Patient Dose:",
    calc_titration_title: "Dynamic Titration Table:",
    hemo_header: "Bedside Hemodynamic & Perfusion Profiler",
    hemo_subtitle: "Macro-Microhemodynamic Integration (SSC 2026 / ACC-AHA 2025 / ANDROMEDA-SHOCK-2 / ESICM 2024)",
    hemo_sec_macro: "📊 1. MACROHEMODYNAMICS & PERFUSION PRESSURE",
    hemo_lbl_sbp: "Systolic Pressure (SBP, mmHg):",
    hemo_lbl_dbp: "Diastolic Pressure (DBP, mmHg):",
    hemo_lbl_hr: "Heart Rate (HR, bpm):",
    hemo_lbl_cvp: "Central Venous Pressure (CVP, mmHg):",
    hemo_lbl_co: "Cardiac Output (CO, L/min):",
    hemo_sec_micro: "🔬 2. TISSUE PERFUSION & METABOLISM (ANDROMEDA-SHOCK-2 / ESICM)",
    hemo_lbl_crt: "Capillary Refill Time (CRT, sec):",
    hemo_lbl_scvo2: "Central Venous Oxygen Sat (ScvO2, %):",
    hemo_lbl_pvacogap: "Veno-Arterial CO2 Gap (ΔP(v-a)CO2, mmHg):",
    hemo_res_title: "Calculated Hemodynamic Parameters:",
    hemo_lbl_phenotype: "DIAGNOSED CLINICAL PHENOTYPE:",
    hemo_lbl_reco: "🎯 EVIDENCE-BASED PHARMACOTHERAPY GUIDANCE:",
    prep_header: "Dilution & Mixture Calculator",
    prep_label_presets: "Standard ICU Presets:",
    prep_label_mg: "Drug Amount (mg or IU):",
    prep_label_vol: "Total Mixture Volume (mL):",
    prep_label_dose: "Target Dose (mcg/kg/min):",
    prep_res_conc: "Final Concentration:",
    prep_res_rate: "Resulting rate:",
    prep_res_duration: "Estimated bag duration:",
    drugs_search_placeholder: "🔍 Search by name or indication...",
    filter_all: "All (22)",
    filter_vasopressor: "Vasopressors",
    filter_inotropic: "Inotropes",
    filter_inodilator: "Inodilators",
    filter_vasodilator: "Vasodilators",
    filter_adjuvant: "Adjuvants",
    drug_modal_title: "Pharmacological Monograph",
    modal_head_mechanism: "MECHANISM OF ACTION",
    modal_head_receptors: "RECEPTOR PROFILE",
    modal_head_hemodynamics: "HEMODYNAMIC EFFECTS",
    modal_head_dosing: "DOSING & ROUTE",
    modal_head_preparations: "STANDARD PREPARATIONS",
    modal_head_indications: "CLINICAL INDICATIONS",
    modal_head_contraindications: "CONTRAINDICATIONS",
    modal_head_adverse: "ADVERSE EFFECTS",
    modal_head_monitoring: "ICU MONITORING",
    modal_head_special: "SPECIAL POPULATIONS",
    modal_head_weaning: "WEANING PROTOCOL",
    modal_head_warning: "⚠️ BLACK BOX WARNING",
    modal_btn_calc: "🧮 Calculate Infusion with this Drug",
    modal_lbl_range: "Range:",
    modal_lbl_max: "Max:",
    modal_lbl_route: "Route:",
    modal_lbl_pk: "Pharmacokinetics: Onset",
    modal_lbl_half_life: "Half-life:",
    cat_vasopresor: "VASOPRESSOR",
    cat_inotropico: "INOTROPE",
    cat_inodilador: "INODILATOR",
    cat_vasodilatador: "VASODILATOR",
    cat_adyuvante: "ADJUVANT",
    shock_selector_title: "Clinical Shock Selector",
    shock_selector_desc: "Select the clinical scenario to launch the guided decision tree algorithm",
    paywall_shock_title: "6 Shock Decision Trees",
    paywall_shock_desc: "Upgrade to <strong>PRO</strong> to access the complete interactive decision trees: Septic, Cardiogenic, Anaphylactic, Hypovolemic, Obstructive, and Mixed Shock, with guided steps, recommendations based on SSC 2026 / ACC-AHA 2025 guidelines, and 1-click drug monographs.",
    paywall_shock_btn: "💎 Unlock 6 Shock Scenarios",
    shock_card_septic_title: "🔴 Septic Shock (Distributive)",
    shock_card_septic_desc: "SSC 2026 Guidelines: Balanced crystalloids 30 mL/kg → Norepinephrine → Vasopressin + Hydrocortisone",
    shock_card_cardio_title: "💚 Cardiogenic Shock (AMI / Pump Failure)",
    shock_card_cardio_desc: "ACC/AHA 2025 Guidelines: Primary PCI → Norepinephrine support → Dobutamine / Impella (DanGer Shock 2024)",
    shock_card_ana_title: "⚡ Anaphylactic Shock",
    shock_card_ana_desc: "Immediate IM Epinephrine (0.3-0.5 mg) → IV Epinephrine infusion → Glucagon if on beta-blockers",
    shock_card_hypo_title: "🩸 Hypovolemic Shock (Hemorrhagic & Non-Hemorrhagic)",
    shock_card_hypo_desc: "Massive transfusion 1:1:1 → Tranexamic Acid → Permissive hypotension → Temporary Norepinephrine",
    shock_card_obs_title: "🚧 Obstructive Shock (Massive PE / Tamponade / Tension Pneumothorax)",
    shock_card_obs_desc: "Emergency relief: Systemic Fibrinolysis / Pericardiocentesis / Pleural needle thoracostomy + Norepinephrine support",
    shock_card_mixed_title: "🔀 Mixed Shock (Multifactorial / Distributive + Cardiogenic)",
    shock_card_mixed_desc: "Hemodynamic POCUS phenotyping → Balanced therapy: Norepinephrine + Inotrope (Dobutamine/Levosimendan)",
    shock_terminal_header: "🎯 ACTION & MONITORING:",
    edu_subtitle: "High-impact literature published in NEJM, JAMA, Lancet, Intensive Care Medicine, and Critical Care Medicine",
    btn_yes: "YES",
    btn_no: "NO",
    btn_back_step: "← Previous Step",
    btn_restart_algo: "🔄 Restart",
    btn_back_to_shocks: "← Back to Shock Types",
    btn_calc_this_drug: "🧮 Calculate Infusion with this Drug",
    btn_accept_disclaimer: "I AM A HEALTHCARE PROFESSIONAL — I ACCEPT AND CONTINUE",
    disclaimer_title: "⚠️ LEGAL DISCLAIMER — MEDICAL USE",
    disclaimer_p1: "This application is designed EXCLUSIVELY for healthcare professionals certified in Intensive Care and Critical Care Medicine.",
    disclaimer_p2: "Dosages, preparations, and algorithms are clinical decision support tools based on current medical guidelines (SSC 2026, ACC/AHA 2025, ESICM 2024) and DO NOT replace clinical judgment.",
    disclaimer_p3: "The author, Dr. Luis Enrique Borroto Garcia, MD, MsC, assumes no liability for individual clinical decisions made based on this software.",
    disclaimer_p4: "By clicking the button below, you declare that you are a qualified healthcare professional and agree to these terms.",
    settings_header: "⚙️ Settings & ICU Environment",
    settings_lang_label: "Application Language:",
    settings_env_label: "Clinical Environment:",
    settings_weight_label: "Default Weight (kg):",
    settings_theme_label: "Display Theme:",
    theme_dark: "🌙 Night Mode (Dark ICU)",
    theme_light: "☀️ Day Mode (Light)",
    about_developed_by: "Developed by:",
    about_author_name: "Dr. Luis Enrique Borroto Garcia",
    about_author_title: "MD, MsC — Intensivist Physician & Professor of Critical Care",
    about_references_summary: "Based on Surviving Sepsis Campaign 2026/2021, ACC/AHA Cardiogenic Shock Guidelines 2025, ESICM Consensus 2024, DanGer Shock (NEJM 2024), CLOVERS (NEJM 2023), CLASSIC (NEJM 2022), and DOREMI (NEJM 2021).",
    // Support VasoActivos, Donations & PRO
    mono_modal_title: "💛 Support VasoActivos ICU",
    mono_tab_donate: "💛 Donations",
    mono_tab_pro: "👑 Upgrade to PRO",
    hub_card_upgrade_title: "Unlock PRO",
    hub_card_upgrade_desc: "Ad-free + Hemodynamic Profiler + Shock Trees",
    hub_card_support_title: "Support this project",
    hub_card_support_desc: "Bank Transfer · Payment by Reference",
    ad_dashboard_text: "🔒 Upgrade to <strong>PRO</strong> to remove ads and unlock advanced features: Full Hemodynamic Profiler and all 6 Shock decision trees.",
    ad_dashboard_cta: "👉 Get PRO — Learn more",
    donate_header_title: "🩺 Your support keeps this tool alive",
    donate_header_desc: "Developed by a critical care specialist physician. Any contribution, however small, helps keep guidelines updated and maintain technical support.",
    donate_btn_transfer: "🏦 Bank Transfer",
    donate_btn_reference: "💳 Payment by Reference",
    donate_prefer_pro_title: "✨ Prefer PRO instead of a donation?",
    donate_prefer_pro_desc: "For a little more, unlock the Hemodynamic Profiler, all 6 Shock decision trees, and remove all ads.",
    donate_btn_see_pro: "👑 View PRO Plans",
    pro_header_title: "👑 VasoActivos ICU — PRO",
    pro_header_desc: "Choose the option that best suits you. Secure checkout with BAI Bank Transfer or Multicaixa Express.",
    pro_plan_lifetime_title: "⭐ PRO — ONE-TIME LIFETIME PAYMENT",
    pro_plan_lifetime_sub: "Recommended: pay once, yours forever",
    pro_plan_monthly_title: "📅 PRO — Monthly Subscription",
    pro_plan_monthly_sub: "Try with no strings attached. Cancel anytime.",
    pro_plan_monthly_unit: "/month",
    pro_plan_yearly_title: "🗓️ PRO — Annual Plan (Save 37%)",
    pro_plan_yearly_sub: "Equivalent to 2,500 Kz/month — Save 37% vs monthly plan",
    pro_plan_yearly_unit: "/year",
    pro_item_hemo: "✅ Full Hemodynamic Profiler + Phenotyping",
    pro_item_shock: "✅ 6 Interactive Shock Decision Trees",
    pro_item_noads: "✅ Zero ads across the entire app",
    pro_item_updates: "✅ Future updates included (new guidelines & drugs)",
    pro_item_offline: "✅ Works 100% OFFLINE after activation",
    pro_item_support: "✅ Priority email & WhatsApp support",
    pro_item_same: "✅ Same benefits as the lifetime plan",
    pro_item_rotation: "✅ Ideal for 1-3 month ICU clinical rotations",
    pro_item_billed: "✅ Billed every 30 days",
    pro_item_same_annual: "✅ Same benefits as lifetime plan",
    pro_item_renew: "🔥 Save 18,000 Kz per year compared to monthly billing",
    pro_btn_stripe: "💳 Continue with secure payment (Stripe)",
    pro_btn_bai: "🏦 Pay via BAI Bank Transfer / Multicaixa Express (Angola)",
    pro_flow_title: "📲 How and through which channel do you receive your activation code after paying?",
    pro_flow_steps: "<strong>1. Complete your payment:</strong> Via <em>Bank Transfer (Banco BAI)</em> or <em>Payment by Reference (Multicaixa Express)</em>.<br><strong>2. Send your receipt in 1 click:</strong> Tap the WhatsApp button (<strong>+244 932 708 186</strong>) or email it to <strong>luboga02@gmail.com</strong>.<br><strong>3. Which channel delivers your activation code?:</strong><br>&nbsp;&nbsp;• <strong>VIA DIRECT WHATSAPP:</strong> Dr. Luis Borroto verifies your receipt and sends your unique personal code (e.g.: <code>PRO-ABCD-EFGH-IJKL</code>) <strong>directly to your WhatsApp chat</strong> in <strong>under 15 minutes to 2 hours</strong> ⚡.<br>&nbsp;&nbsp;• <strong>VIA EMAIL:</strong> If you contacted us by email, it will arrive directly in your <strong>inbox</strong>.<br><strong>4. Activate in this app:</strong> Copy the code received, paste it in the <strong>'Activate'</strong> box below and click <em>Activate License</em>. It unlocks permanently for up to 2 devices and works <strong>100% OFFLINE</strong> without internet!",
    pro_activate_label: "🎫 Paste here the PRO key (PRO-XXXX-XXXX-XXXX) you received via WhatsApp or Email:",
    pro_activate_ph: "E.g.: PRO-ABCD-EFGH-IJKL",
    pro_activate_btn: "Activate License",
    pro_activate_note: "🇦🇴 <strong>Don't have your activation code yet?</strong><br>After completing your Banco BAI Transfer or Payment by Reference (Multicaixa Express), send your receipt to:<br>👉 <strong>WhatsApp: +244 932 708 186</strong> | Email: <strong>luboga02@gmail.com</strong><br>Dr. Luis Borroto will send your activation code directly to your WhatsApp or Email in <strong>under 15 min to 2 hours</strong> ⚡.",
    settings_upgrade_title: "👑 VasoActivos ICU — PRO",
    settings_upgrade_sub: "One-time lifetime payment or monthly subscription. Your choice.",
    settings_upgrade_btn: "💎 View Plans & Upgrade to PRO",
    settings_active_title: "✅ PRO Active — Thank you for your support",
    settings_active_desc: "Lifetime license activated on this device.",
    settings_active_reset_btn: "🔄 Deactivate / Use another license",
    pro_feat_noads: "✨ Ad-free experience throughout the app",
    pro_feat_hemo: "🫀 Complete Hemodynamic & Tissue Perfusion Profiler",
    pro_feat_shock: "🔴 6 Interactive Shock Decision Trees",
    pro_feat_updates: "🎯 Pharmacological recommendations based on 2024–2026 guidelines",
    pro_feat_offline: "📱 Works 100% OFFLINE after activation"
  },
  pt: {
    app_title: "VasoAtivos CTI",
    app_subtitle: "Dr. Luis Enrique Borroto Garcia, MD, MsC",
    nav_home: "Início",
    nav_calc: "Calcular",
    nav_hemo: "Perfil",
    nav_shock: "Choque",
    nav_drugs: "Fármacos",
    nav_settings: "Ajustes",
    hero_title: "Medicina Intensiva & Cuidados Críticos",
    hero_subtitle: "Ferramentas farmacológicas baseadas em evidências (SSC 2026 / ACC-AHA 2025 / ESICM 2024)",
    card_calc_title: "Calculadora de Infusão",
    card_calc_desc: "Dose ↔ mL/h com titulação",
    card_hemo_title: "Perfil Hemodinâmico & Perfusão",
    card_hemo_desc: "RVS, IS, CRT, ScvO2 e fenótipos",
    card_prep_title: "Preparação de Misturas",
    card_prep_desc: "Diluição e duração da bolsa",
    card_shock_title: "Seletor de Choque",
    card_shock_desc: "Algoritmos guiados com decisão",
    card_drugs_title: "Guia de Fármacos",
    card_drugs_desc: "22 fichas clínicas completas",
    card_edu_title: "Evidência Científica",
    card_edu_desc: "Ensaios 2021-2026 e diretrizes",
    calc_header: "Calculadora de Infusão Contínua",
    calc_tab_dose_to_rate: "Dose → Velocidade (mL/h)",
    calc_tab_rate_to_dose: "Velocidade → Dose",
    calc_label_drug: "Fármaco Vasoativo:",
    calc_label_conc: "Concentração da Solução:",
    calc_label_weight: "Peso do Paciente (kg):",
    calc_label_dose: "Dose Alvo (mcg/kg/min):",
    calc_label_rate: "Velocidade Atual de Infusão (mL/h):",
    calc_res_rate_label: "Velocidade de Infusão Necessária:",
    calc_res_dose_label: "Dose Atual que o Paciente Recebe:",
    calc_titration_title: "Tabela Dinâmica de Titulação:",
    hemo_header: "Perfil Hemodinâmico & Perfusão à Beira do Leito",
    hemo_subtitle: "Integração Macro-Micro-hemodinâmica (SSC 2026 / ACC-AHA 2025 / ANDROMEDA-SHOCK-2 / ESICM 2024)",
    hemo_sec_macro: "📊 1. MACRO-HEMODINÂMICA E PRESSÃO DE PERFUSÃO",
    hemo_lbl_sbp: "Pressão Sistólica (PAS, mmHg):",
    hemo_lbl_dbp: "Pressão Diastólica (PAD, mmHg):",
    hemo_lbl_hr: "Frequência Cardíaca (FC, bpm):",
    hemo_lbl_cvp: "Pressão Venosa Central (PVC, mmHg):",
    hemo_lbl_co: "Débito Cardíaco (DC, L/min):",
    hemo_sec_micro: "🔬 2. PERFUSÃO TECIDUAL E METABOLISMO (ANDROMEDA-SHOCK-2 / ESICM)",
    hemo_lbl_crt: "Tempo Enchimento Capilar (TEC, seg):",
    hemo_lbl_scvo2: "Saturação Venosa Central (ScvO2, %):",
    hemo_lbl_pvacogap: "Gradiente Veno-Arterial CO2 (ΔP(v-a)CO2, mmHg):",
    hemo_res_title: "Resultados Hemodinâmicos Calculados:",
    hemo_lbl_phenotype: "FENÓTIPO CLÍNICO DIAGNOSTICADO:",
    hemo_lbl_reco: "🎯 RECOMENDAÇÃO TERAPÊUTICA FARMACOLÓGICA (DIRETRIZES):",
    prep_header: "Calculadora de Diluições e Misturas",
    prep_label_presets: "Modelos Padrão UTI:",
    prep_label_mg: "Quantidade de Fármaco (mg ou UI):",
    prep_label_vol: "Volume Total da Mistura (mL):",
    prep_label_dose: "Dose Alvo (mcg/kg/min):",
    prep_res_conc: "Concentração Final:",
    prep_res_rate: "Velocidade resultante:",
    prep_res_duration: "Duração estimada da bolsa:",
    drugs_search_placeholder: "🔍 Buscar por nome ou indicação...",
    filter_all: "Todos (22)",
    filter_vasopressor: "Vasopressores",
    filter_inotropic: "Inotrópicos",
    filter_inodilator: "Inodilatadores",
    filter_vasodilator: "Vasodilatadores",
    filter_adjuvant: "Adjuvantes",
    drug_modal_title: "Ficha Farmacológica",
    modal_head_mechanism: "MECANISMO DE AÇÃO",
    modal_head_receptors: "PERFIL DE RECEPTORES",
    modal_head_hemodynamics: "EFEITOS HEMODINÂMICOS",
    modal_head_dosing: "DOSAGEM E VIA",
    modal_head_preparations: "PREPARAÇÕES PADRÃO",
    modal_head_indications: "INDICAÇÕES CLÍNICAS",
    modal_head_contraindications: "CONTRAINDICAÇÕES",
    modal_head_adverse: "EFEITOS ADVERSOS",
    modal_head_monitoring: "MONITORIZAÇÃO NA UTI",
    modal_head_special: "POPULAÇÕES ESPECIAIS",
    modal_head_weaning: "DESMAME (WEANING)",
    modal_head_warning: "⚠️ ADVERTÊNCIA DE CAIXA PRETA",
    modal_btn_calc: "🧮 Calcular Infusão com este Fármaco",
    modal_lbl_range: "Faixa:",
    modal_lbl_max: "Máx:",
    modal_lbl_route: "Via:",
    modal_lbl_pk: "Farmacocinética: Início",
    modal_lbl_half_life: "Meia-vida:",
    cat_vasopresor: "VASOPRESSOR",
    cat_inotropico: "INOTRÓPICO",
    cat_inodilador: "INODILATADOR",
    cat_vasodilatador: "VASODILATADOR",
    cat_adyuvante: "ADJUVANTE",
    shock_selector_title: "Seletor de Choque Clínico",
    shock_selector_desc: "Selecione o cenário clínico para abrir o algoritmo guiado com árvore de decisões",
    paywall_shock_title: "6 Árvores de Decisão de Choque",
    paywall_shock_desc: "Atualize para <strong>PRO</strong> para aceder aos algoritmos interativos completos: Choque Séptico, Cardiogênico, Anafilático, Hipovolêmico, Obstrutivo e Misto, com perguntas guiadas, recomendações baseadas nas diretrizes SSC 2026 / ACC-AHA 2025 e fichas de fármacos em 1 clique.",
    paywall_shock_btn: "💎 Desbloquear 6 Cenários",
    shock_card_septic_title: "🔴 Choque Séptico (Distributivo)",
    shock_card_septic_desc: "Diretrizes SSC 2026: Cristaloides 30 mL/kg → Noradrenalina → Vasopressina + Hidrocortisona",
    shock_card_cardio_title: "💚 Choque Cardiogênico (IAM / Falência de Bomba)",
    shock_card_cardio_desc: "Diretrizes ACC/AHA 2025: ICP primária → Noradrenalina de suporte → Dobutamina / Impella (DanGer Shock 2024)",
    shock_card_ana_title: "⚡ Choque Anafilático",
    shock_card_ana_desc: "Adrenalina IM imediata (0.3-0.5 mg) → Adrenalina IV contínua → Glucagon em betabloqueados",
    shock_card_hypo_title: "🩸 Choque Hipovolêmico (Hemorrágico e Não Hemorrágico)",
    shock_card_hypo_desc: "Transfusão maciça 1:1:1 → Ácido Tranexâmico → Hipotensão permissiva → Noradrenalina temporária",
    shock_card_obs_title: "🚧 Choque Obstrutivo (TEP Maciço / Tamponamento / Pneumotórax)",
    shock_card_obs_desc: "Desobstrução de emergência: Fibrinólise / Pericardiocentese / Drenagem torácica + Noradrenalina suporte",
    shock_card_mixed_title: "🔀 Choque Misto (Multifatorial / Distributivo + Cardiogênico)",
    shock_card_mixed_desc: "Fenotipagem hemodinâmica com POCUS → Terapia balanceada: Noradrenalina + Inotrópico (Dobutamina/Levosimendan)",
    shock_terminal_header: "🎯 AÇÃO E SEGUIMENTO:",
    edu_subtitle: "Literatura de alto impacto publicada no NEJM, JAMA, Lancet, Intensive Care Medicine e Critical Care Medicine",
    btn_yes: "SIM",
    btn_no: "NÃO",
    btn_back_step: "← Passo Anterior",
    btn_restart_algo: "🔄 Reiniciar",
    btn_back_to_shocks: "← Voltar aos Tipos de Choque",
    btn_calc_this_drug: "🧮 Calcular Infusão com este Fármaco",
    btn_accept_disclaimer: "SOU PROFISSIONAL DE SAÚDE — ACEITO E CONTINUO",
    disclaimer_title: "⚠️ AVISO LEGAL — USO MÉDICO",
    disclaimer_p1: "Esta aplicação é projetada EXCLUSIVAMENTE para profissionais de saúde com treinamento em Medicina Intensiva e cuidados críticos.",
    disclaimer_p2: "As doses, preparações e algoritmos são ferramentas de apoio baseadas em diretrizes médicas vigentes (SSC 2026, ACC/AHA 2025, ESICM 2024) e NÃO substituem o julgamento clínico do médico.",
    disclaimer_p3: "O autor, Dr. Luis Enrique Borroto Garcia, MD, MsC, declina qualquer responsabilidade por decisões clínicas individuais tomadas a partir deste software.",
    disclaimer_p4: "Ao clicar no botão abaixo, você declara ser profissional de saúde qualificado e concorda com estas condições.",
    settings_header: "⚙️ Configurações & Ambiente UTI",
    settings_lang_label: "Idioma da Aplicação:",
    settings_env_label: "Ambiente Assistencial:",
    settings_weight_label: "Peso Padrão (kg):",
    settings_theme_label: "Modo de Exibição:",
    theme_dark: "🌙 Modo Noturno (Dark UTI)",
    theme_light: "☀️ Modo Diurno (Light)",
    about_developed_by: "Desenvolvido por:",
    about_author_name: "Dr. Luis Enrique Borroto Garcia",
    about_author_title: "MD, MsC — Médico Intensivista e Professor de Medicina Intensiva",
    about_references_summary: "Baseado em Surviving Sepsis Campaign 2026/2021, ACC/AHA Cardiogenic Shock Guidelines 2025, ESICM Consensus 2024, DanGer Shock (NEJM 2024), CLOVERS (NEJM 2023), CLASSIC (NEJM 2022) e DOREMI (NEJM 2021).",
    // Apoio VasoAtivos, Doações e PRO
    mono_modal_title: "💛 Apoie o VasoAtivos CTI",
    mono_tab_donate: "💛 Doações",
    mono_tab_pro: "👑 Upgrade PRO",
    hub_card_upgrade_title: "Desbloquear PRO",
    hub_card_upgrade_desc: "Sem anúncios + Profiler + Árvores de Choque",
    hub_card_support_desc: "Transferência bancária · Pagamento por referência",
    ad_dashboard_text: "🔒 Atualize para <strong>PRO</strong> para remover anúncios e desbloquear recursos avançados: Profiler Hemodinâmico e as 6 árvores de decisão de Choque.",
    ad_dashboard_cta: "👉 Quero PRO — Mais informações",
    donate_header_title: "🩺 Seu apoio mantém esta ferramenta ativa",
    donate_header_desc: "Desenvolvido por um médico intensivista especialista. Qualquer contribuição, por menor que seja, ajuda a manter as diretrizes atualizadas e o suporte técnico.",
    donate_btn_transfer: "🏦 Transferência Bancária",
    donate_btn_reference: "💳 Pagamento por Referência",
    donate_prefer_pro_title: "✨ Prefere o PRO em vez de uma doação?",
    donate_prefer_pro_desc: "Por um pouco mais, desbloqueie o Profiler Hemodinâmico, as 6 árvores de Choque e remova os anúncios.",
    donate_btn_see_pro: "👑 Ver planos PRO",
    pro_header_title: "👑 VasoAtivos CTI — PRO",
    pro_header_desc: "Escolha a melhor opção para você. Pagamento seguro com Transferência BAI ou Multicaixa Express.",
    pro_plan_lifetime_title: "⭐ PRO — PAGAMENTO ÚNICO VITALÍCIO",
    pro_plan_lifetime_sub: "Recomendado: 1 pagamento, para sempre",
    pro_plan_monthly_title: "📅 PRO — Assinatura Mensal",
    pro_plan_monthly_sub: "Teste sem compromisso. Cancele quando quiser.",
    pro_plan_monthly_unit: "/mês",
    pro_plan_yearly_title: "🗓️ PRO — Plano Anual (Poupe 37%)",
    pro_plan_yearly_sub: "Equivale a 2.500 Kz/mês — Poupe 37% em relação ao plano mensal",
    pro_plan_yearly_unit: "/ano",
    pro_item_hemo: "✅ Profiler Hemodinâmico completo + Fenotipagem",
    pro_item_shock: "✅ 6 Árvores de Decisão de Choque interativas",
    pro_item_noads: "✅ Zero anúncios em todo o aplicativo",
    pro_item_updates: "✅ Atualizações futuras inclusas (novas diretrizes e fármacos)",
    pro_item_offline: "✅ Funciona 100% OFFLINE após ativação",
    pro_item_support: "✅ Suporte prioritário por email e WhatsApp",
    pro_item_same: "✅ Mesmos benefícios do plano vitalício",
    pro_item_rotation: "✅ Ideal para 1-3 meses durante o estágio/rotação em CTI",
    pro_item_billed: "✅ Faturado a cada 30 dias",
    pro_item_same_annual: "✅ Mesmos benefícios do plano vitalício",
    pro_item_renew: "🔥 Poupe 18.000 Kz ao ano em relação ao plano mensal",
    pro_btn_stripe: "💳 Continuar com pagamento seguro (Stripe)",
    pro_btn_bai: "🏦 Pagar por Transferência BAI / Multicaixa Express (Angola)",
    pro_flow_title: "📲 Como e por que via recebe o seu código de ativação após pagar?",
    pro_flow_steps: "<strong>1. Efetue o seu pagamento:</strong> Por <em>Transferência Bancária (Banco BAI)</em> ou <em>Pagamento por Referência (Multicaixa Express)</em>.<br><strong>2. Envie o seu comprovativo com 1 clique:</strong> Toque no botão do WhatsApp (<strong>+244 932 708 186</strong>) ou envie por email para <strong>luboga02@gmail.com</strong>.<br><strong>3. Por qual via recebe o código de ativação?:</strong><br>&nbsp;&nbsp;• <strong>VIA WHATSAPP DIRETO:</strong> O Dr. Luis Borroto valida o seu comprovativo e envia o seu código pessoal único (ex: <code>PRO-ABCD-EFGH-IJKL</code>) <strong>diretamente para a sua conversa no WhatsApp</strong> em <strong>menos de 15 minutos a 2 horas</strong> ⚡.<br>&nbsp;&nbsp;• <strong>VIA CORREIO ELETRÓNICO:</strong> Se nos contactar por email, o código chega diretamente à sua <strong>caixa de entrada</strong>.<br><strong>4. Ative nesta aplicação:</strong> Copie o código recebido, cole-o no campo <strong>'Ativar'</strong> abaixo e toque em <em>Ativar Licença</em>. Fica desbloqueado para sempre em até 2 dispositivos e funciona <strong>100% OFFLINE</strong> sem necessidade de internet!",
    pro_activate_label: "🎫 Cole aqui o código PRO (PRO-XXXX-XXXX-XXXX) que recebeu por WhatsApp ou Email:",
    pro_activate_ph: "Ex: PRO-ABCD-EFGH-IJKL",
    pro_activate_btn: "Ativar Licença",
    pro_activate_note: "🇦🇴 <strong>Ainda não tem o seu código de ativação?</strong><br>Após efetuar a Transferência Banco BAI ou Pagamento por Referência (Multicaixa Express), envie o seu comprovativo para:<br>👉 <strong>WhatsApp: +244 932 708 186</strong> | Email: <strong>luboga02@gmail.com</strong><br>O Dr. Luis Borroto enviará o seu código de ativação diretamente para o seu WhatsApp ou Email em <strong>menos de 15 min a 2 horas</strong> ⚡.",
    settings_upgrade_title: "👑 VasoAtivos CTI — PRO",
    settings_upgrade_sub: "Pagamento único vitalício ou assinatura mensal. Você escolhe.",
    settings_upgrade_btn: "💎 Ver Planos e Upgrade para PRO",
    settings_active_title: "✅ PRO Ativo — Obrigado pelo seu apoio",
    settings_active_desc: "Licença vitalícia ativada neste dispositivo.",
    settings_active_reset_btn: "🔄 Desativar / Usar outra licença",
    pro_feat_noads: "✨ Sem anúncios em todo o aplicativo",
    pro_feat_hemo: "🫀 Profiler Hemodinâmico e Perfusão Tecidual COMPLETO",
    pro_feat_shock: "🔴 6 Árvores de Decisão de Choque interativas",
    pro_feat_updates: "🎯 Recomendações farmacológicas baseadas nas diretrizes 2024–2026",
    pro_feat_offline: "📱 Funciona 100% OFFLINE após a ativação"
  }
};

let currentLang = localStorage.getItem('app_lang') || 'es';
let currentTheme = localStorage.getItem('app_theme') || 'dark';

// --------------------------------------------------------------------------
// 1.1 DICCIONARIO TRADUCIDO DE LOS 22 FÁRMACOS (EN & PT)
// --------------------------------------------------------------------------
const DRUGS_I18N = {
  en: {
    norepinephrine: {
      mechanism: "Potent vascular α1 and α2 agonist with moderate myocardial β1 inotropic effect. Increases systemic vascular resistance and mean arterial pressure with minimal chronotropy.",
      indications: ["Septic Shock (1st-line choice - SSC 2026)", "Neurogenic Shock (1st-line after fluid resuscitation)", "Cardiogenic Shock with severe hypotension (bridge to inotrope)", "Refractory Anaphylactic Shock (2nd-line after epinephrine)"],
      contraindications: ["RELATIVE: Uncorrected severe hypovolemia", "RELATIVE: Peripheral extravasation (antidote: phentolamine)"],
      adverseEffects: ["Reflex bradycardia", "Distal/peripheral limb ischemia", "Tissue necrosis from extravasation", "Hypertensive crisis"],
      monitoring: ["Invasive arterial line MAP monitoring", "Serial lactate every 2-4h", "Hourly urine output (> 0.5 mL/kg/h)"],
      specialPops: "Pregnancy: CAUTION (uterine vasoconstriction). Renal/Hepatic: no dose adjustment required.",
      weaning: "Taper by 0.01-0.02 mcg/kg/min every 30-60 min once hemodynamically stable.",
      route: "Central Venous Catheter preferred (safe temporary peripheral line)",
      preparations: ["4 mg in 250 mL 0.9% NS → 16 mcg/mL (Standard)", "8 mg in 250 mL 0.9% NS → 32 mcg/mL (Concentrated)", "16 mg in 250 mL 0.9% NS → 64 mcg/mL (High concentration - CVC)"],
      line: "1st Line",
      warningBox: null
    },
    epinephrine: {
      mechanism: "Potent non-selective adrenergic agonist on α1, α2, β1, and β2 receptors. At lower doses, β inotropic/chronotropic effects predominate; at higher doses, α vasoconstriction dominates.",
      indications: ["Anaphylactic Shock (mandatory 1st-line IM immediately)", "Cardiopulmonary Arrest (1st-line ACLS)", "Refractory Septic Shock (3rd-line when NE + vasopressin are insufficient)", "Refractory Cardiogenic Shock with extreme low cardiac output"],
      contraindications: ["RELATIVE: Pre-existing severe ventricular tachyarrhythmias", "RELATIVE: Acute unvascularized coronary ischemia"],
      adverseEffects: ["Severe sinus tachycardia", "Ventricular arrhythmias", "Metabolic hyperlactatemia", "Hyperglycemia and hypokalemia"],
      monitoring: ["Continuous ECG with arrhythmia detection", "Invasive arterial line", "Serial blood glucose and potassium"],
      specialPops: "Pregnancy: indicated in anaphylaxis or cardiac arrest (maternal-fetal resuscitation).",
      weaning: "Taper slowly by 0.01-0.05 mcg/kg/min assessing heart rate and cardiac output.",
      route: "Central Line / IM for anaphylaxis / Peripheral in cardiac arrest",
      preparations: ["4 mg in 250 mL 0.9% NS → 16 mcg/mL (Continuous infusion)", "1 mg / 10 mL (1:10,000) IV push in arrest", "0.3 - 0.5 mg IM (1:1,000) in anaphylaxis"],
      line: "1st Line (Anaphylaxis/ACLS) | 3rd Line (Septic)",
      warningBox: "Epinephrine causes aerobic hyperlactatemia via β2-mediated muscle glycogenolysis, independent of tissue hypoperfusion. Do not use serum lactate clearance alone to guide titration."
    },
    dopamine: {
      mechanism: "Dose-dependent agonist: 1-3 mcg/kg/min (renal dopaminergic), 3-10 mcg/kg/min (β1 inotrope), 10-20 mcg/kg/min (α1 vasoconstrictor).",
      indications: ["Symptomatic bradycardia refractory to atropine (ACLS)", "Hypotension associated with sinus bradycardia and low arrhythmic risk"],
      contraindications: ["ABSOLUTE: Rapid ventricular or supraventricular tachyarrhythmias", "ABSOLUTE: Pheochromocytoma", "RELATIVE: Septic shock 1st line (higher mortality than norepinephrine)"],
      adverseEffects: ["Atrial fibrillation", "Ventricular tachycardia", "Myocardial ischemia", "Nausea and vomiting"],
      monitoring: ["Continuous ECG arrhythmia monitoring", "Continuous MAP"],
      specialPops: "Renal dose dopamine is debunked. Do not use for prevention or treatment of acute kidney injury.",
      weaning: "Gradual reduction by 2 to 5 mcg/kg/min every 30-60 min.",
      route: "Central Venous Catheter mandatory",
      preparations: ["400 mg in 250 mL 5% Dextrose → 1600 mcg/mL (Standard)", "800 mg in 250 mL 5% Dextrose → 3200 mcg/mL (Concentrated)"],
      line: "3rd Line / Restricted",
      warningBox: "SOAP-II TRIAL (NEJM 2010): Doubles arrhythmic events and demonstrated higher 28-day mortality in cardiogenic shock compared to norepinephrine. 'Renal-dose' dopamine is scientifically refuted."
    },
    dobutamine: {
      mechanism: "Selective myocardial β1 receptor agonist increasing inotropy and stroke volume. Mild β2 and α1 effect with net mild-to-moderate peripheral vasodilation.",
      indications: ["Cardiogenic Shock with low output (1st-line inotrope)", "Septic myocardial dysfunction / Hypocontractility with ScvO2 < 70%", "Acute decompensated heart failure stage C/D", "Low cardiac output post cardiac surgery (post-CPB)"],
      contraindications: ["ABSOLUTE: Hypertrophic obstructive cardiomyopathy (HOCM)", "ABSOLUTE: Severe symptomatic aortic stenosis without mechanical support", "RELATIVE: Severe tachycardia (HR > 120 bpm)"],
      adverseEffects: ["Tachycardia", "Ventricular ectopy", "Transient hypotension from vasodilation", "Increased myocardial oxygen consumption"],
      monitoring: ["Heart rate", "Continuous MAP", "Bedside echocardiography", "ScvO2"],
      specialPops: "Attenuated response in patients chronically treated with beta-blockers.",
      weaning: "Reduce by 2.5 mcg/kg/min every 2-4 hours monitoring peripheral perfusion markers.",
      route: "Central Venous Catheter",
      preparations: ["250 mg in 250 mL 0.9% NS or 5% Dextrose → 1000 mcg/mL (Standard)", "500 mg in 250 mL 0.9% NS or 5% Dextrose → 2000 mcg/mL (Concentrated)"],
      line: "1st Line Inotrope",
      warningBox: null
    },
    vasopressin: {
      mechanism: "Vascular V1a receptor agonist coupled to Gq protein/phospholipase C, inducing direct vasoconstriction independent of adrenergic receptors and arterial pH.",
      indications: ["Septic Shock as 2nd-line added to Norepinephrine (SSC 2026)", "Vasoplegic shock post cardiopulmonary bypass", "Vasodilatory hypotension refractory to catecholamines"],
      contraindications: ["RELATIVE: Severe unvascularized coronary artery disease", "RELATIVE: Severe peripheral vascular disease"],
      adverseEffects: ["Digital or limb ischemia", "Mesenteric ischemia", "Hyponatremia via V2 antidiuretic effect", "Bradycardia"],
      monitoring: ["Distal limb perfusion", "Serum sodium every 12-24h", "Signs of abdominal pain or bowel ischemia"],
      specialPops: "Safe in renal failure; no dosage adjustment required.",
      weaning: "Discontinue first when Norepinephrine < 0.15 mcg/kg/min. Stop directly without tapering.",
      route: "Central Venous Catheter mandatory",
      preparations: ["20 IU in 100 mL 0.9% NS → 0.2 IU/mL (Standard rate: 9 mL/h = 0.03 IU/min)", "40 IU in 100 mL 0.9% NS → 0.4 IU/mL (Fluid restriction)"],
      line: "2nd Line Vasopressor",
      warningBox: null
    },
    terlipressin: {
      mechanism: "Synthetic vasopressin analogue prodrug with higher selectivity for splanchnic V1 receptors. Splanchnic vasoconstriction and portal pressure reduction.",
      indications: ["Hepatorenal Syndrome Type 1 (1st-line)", "Acute variceal gastrointestinal hemorrhage (1st-line)", "Septic shock alternative to vasopressin (ESICM 2024)"],
      contraindications: ["ABSOLUTE: Pregnancy (causes uterine contractions)", "ABSOLUTE: Severe ischemic heart disease", "ABSOLUTE: Advanced peripheral vascular disease"],
      adverseEffects: ["Mesenteric ischemia", "Myocardial ischemia", "Severe hyponatremia", "Abdominal colic"],
      monitoring: ["Continuous ECG", "Serum sodium", "Abdominal examination"],
      specialPops: "CONTRAINDICATED in pregnancy.",
      weaning: "Wean bolus dose or infusion progressively over 48h.",
      route: "Central Venous Catheter / Large-bore peripheral line",
      preparations: ["1 mg / 5 mL ampule, direct slow IV push", "2 mg in 100 mL 0.9% NS for continuous infusion"],
      line: "2nd Line Vasopressor / 1st Line HRS",
      warningBox: null
    },
    angiotensin2: {
      mechanism: "Direct synthetic human Angiotensin II acting on vascular AT1 receptors (Gq coupled), stimulating intracellular calcium release, vasoconstriction, and aldosterone synthesis.",
      indications: ["Vasodilatory shock refractory to high-dose catecholamines (ATHOS-3 Trial)", "Septic shock with high acute physiology score"],
      contraindications: ["ABSOLUTE: Active thromboembolic disease without full anticoagulation", "ABSOLUTE: Pregnancy"],
      adverseEffects: ["Venous/arterial thrombosis", "Thrombocytopenia", "Peripheral ischemia", "Acidosis"],
      monitoring: ["Thromboembolism screening", "Platelet count", "Limb perfusion"],
      specialPops: "CONTRAINDICATED in pregnancy. Requires mandatory venous thromboembolism prophylaxis.",
      weaning: "Titrate down by 5-15 ng/kg/min every 5-15 min.",
      route: "Central Venous Catheter mandatory",
      preparations: ["2.5 mg / 1 mL vial diluted in 500 mL 0.9% NS → 5000 ng/mL (5 mcg/mL)"],
      line: "3rd Line / Rescue",
      warningBox: "ATHOS-3 TRIAL (NEJM 2017): Increased incidence of deep vein thrombosis and pulmonary embolism. Mandatory DVT chemoprophylaxis with LMWH or unfractionated heparin unless contraindicated."
    },
    phenylephrine: {
      mechanism: "Pure selective α1 adrenergic receptor agonist. Produces systemic vasoconstriction with increased SVR and MAP without direct β inotropic or chronotropic effects.",
      indications: ["Hypotension with severe supraventricular tachycardia", "Hypotension in Hypertrophic Obstructive Cardiomyopathy (HOCM)", "Spinal anesthesia-induced vasodilation"],
      contraindications: ["ABSOLUTE: Pure cardiogenic shock / severe LV failure (increases afterload)", "RELATIVE: Severe preexisting bradycardia"],
      adverseEffects: ["Marked reflex bradycardia", "Severe reduction in cardiac output", "Digital ischemia"],
      monitoring: ["Heart rate", "Cardiac output / stroke volume", "Continuous MAP"],
      specialPops: "Caution in coronary artery disease due to increased myocardial afterload.",
      weaning: "Gradual reduction as vascular tone recovers.",
      route: "Central Line preferred (peripheral push for anesthesia)",
      preparations: ["10 mg in 250 mL 0.9% NS → 40 mcg/mL", "50 mg in 250 mL 0.9% NS → 200 mcg/mL"],
      line: "Specific Indication",
      warningBox: null
    },
    isoproterenol: {
      mechanism: "Potent non-selective β1 and β2 adrenergic agonist. Increases heart rate, AV nodal conduction, and inotropy with marked peripheral and pulmonary vasodilation.",
      indications: ["Severe symptomatic bradycardia / complete AV block bridge to pacemaker", "Torsades de pointes with prolonged QTc", "Right ventricular failure with pulmonary hypertension"],
      contraindications: ["ABSOLUTE: Tachyarrhythmias", "ABSOLUTE: Acute myocardial infarction / acute coronary syndrome", "ABSOLUTE: Digoxin toxicity"],
      adverseEffects: ["Severe tachycardia", "Ventricular fibrillation", "Hypotension from β2 vasodilation", "Myocardial ischemia"],
      monitoring: ["Continuous ECG rhythm strip", "Continuous MAP"],
      specialPops: "Avoid in patients with coronary ischemia.",
      weaning: "Wean once transvenous pacing is established.",
      route: "Central Venous Catheter",
      preparations: ["1 mg in 250 mL 5% Dextrose → 4 mcg/mL"],
      line: "3rd Line / Electrophysiology bridge",
      warningBox: null
    },
    milrinone: {
      mechanism: "Phosphodiesterase-3 (PDE-3) inhibitor. Increases intracellular cAMP in myocardium (inotrope) and vascular smooth muscle (inodilator). Reduces preload and afterload.",
      indications: ["Cardiogenic shock with high SVR and elevated PCWP", "Acute decompensated heart failure in beta-blocked patients", "Severe pulmonary hypertension and right ventricular failure", "Post-cardiopulmonary bypass low cardiac output"],
      contraindications: ["ABSOLUTE: Severe unresuscitated hypotension (MAP < 50 mmHg)", "ABSOLUTE: Severe obstructive valvular disease", "ABSOLUTE: HOCM"],
      adverseEffects: ["Severe systemic hypotension", "Ventricular tachycardia", "Atrial fibrillation", "Headache"],
      monitoring: ["Continuous MAP", "ECG rhythm", "Serum creatinine and electrolytes"],
      specialPops: "Renal adjustment: 80% eliminated by kidneys. Reduce dose by 50-75% if CrCl < 30 mL/min.",
      weaning: "Prolonged elimination half-life (up to 4-6h in renal failure). Taper very slowly.",
      route: "Central Venous Catheter mandatory",
      preparations: ["20 mg in 100 mL 0.9% NS → 200 mcg/mL", "10 mg in 100 mL 0.9% NS → 100 mcg/mL"],
      line: "2nd Line Inodilator",
      warningBox: "AVOID loading bolus in hypotensive ICU patients to prevent sudden vascular collapse. Milrinone accumulates in renal failure."
    },
    enoximone: {
      mechanism: "Selective PDE-3 inhibitor similar to milrinone with positive inotropic and systemic/pulmonary vasodilator actions.",
      indications: ["Refractory low cardiac output post-cardiac surgery", "Severe acute heart failure unresponsive to catecholamines"],
      contraindications: ["Severe hypotension", "Severe obstructive aortic or subaortic stenosis"],
      adverseEffects: ["Hypotension", "Arrhythmias", "Headache", "Local phlebitis"],
      monitoring: ["Continuous MAP", "Cardiac rhythm", "Renal function"],
      specialPops: "Accumulates in severe renal impairment.",
      weaning: "Slow weaning over 24-48 hours.",
      route: "Central Venous Catheter",
      preparations: ["100 mg in 100 mL 0.9% NS → 1 mg/mL"],
      line: "3rd Line Inodilator",
      warningBox: null
    },
    levosimendan: {
      mechanism: "Calcium sensitizer: binds to cardiac troponin C in a calcium-dependent manner, increasing contractility without increasing intracellular calcium or oxygen demand. Opens ATP-sensitive K+ channels (vasodilation).",
      indications: ["Acute decompensated heart failure with preserved blood pressure", "Cardiogenic shock with beta-blocker therapy", "Right ventricular failure with pulmonary hypertension", "Weaning from cardiopulmonary bypass / ECMO"],
      contraindications: ["ABSOLUTE: Severe hypotension (MAP < 50 mmHg or SBP < 85 mmHg)", "ABSOLUTE: Severe renal impairment (CrCl < 30 mL/min)", "ABSOLUTE: Severe hepatic failure"],
      adverseEffects: ["Hypotension", "Atrial fibrillation", "Ventricular ectopy", "Hypokalemia", "Headache"],
      monitoring: ["Continuous blood pressure", "Serum potassium", "Continuous ECG"],
      specialPops: "Administer only as a 24-hour continuous infusion. Avoid loading bolus.",
      weaning: "Active metabolite OR-1896 has an elimination half-life of 70-80 hours; hemodynamic effects persist for 7-9 days after 24h infusion.",
      route: "Central Venous Catheter preferred",
      preparations: ["12.5 mg in 250 mL 5% Dextrose → 50 mcg/mL", "12.5 mg in 500 mL 5% Dextrose → 25 mcg/mL"],
      line: "2nd Line Inodilator",
      warningBox: "Active metabolite OR-1896 has a 70-80h half-life. Hemodynamic inotropic and vasodilator effects persist for 7 to 9 days after stopping the 24-hour infusion."
    },
    sodium_nitroprusside: {
      mechanism: "Potent direct non-enzymatic nitric oxide (NO) donor causing balanced arteriolar and venous smooth muscle relaxation, profoundly decreasing preload and afterload.",
      indications: ["Hypertensive emergencies with target organ damage", "Acute pulmonary edema with severe hypertension", "Aortic dissection (combined with beta-blockers)", "Acute mitral regurgitation afterload reduction"],
      contraindications: ["ABSOLUTE: Preexisting hypotension", "ABSOLUTE: Increased intracranial pressure (ICP)", "ABSOLUTE: Severe renal or hepatic failure (cyanide/thiocyanate toxicity)"],
      adverseEffects: ["Severe hypotension", "Cyanide and thiocyanate toxicity", "Coronary steal syndrome", "Rebound hypertension upon abrupt cessation"],
      monitoring: ["Invasive arterial line mandatory", "Serial blood gas, lactate, and methemoglobin", "Protect infusion from light"],
      specialPops: "CONTRAINDICATED in pregnancy (fetal cyanide toxicity).",
      weaning: "Taper slowly by 0.25-0.5 mcg/kg/min every 15-30 min to prevent rebound hypertension.",
      route: "Central Venous Catheter mandatory",
      preparations: ["50 mg in 250 mL 5% Dextrose → 200 mcg/mL (Opaque light-protective cover required)"],
      line: "1st Line Hypertensive Emergency",
      warningBox: "BLACK BOX WARNING: Cyanide toxicity risk with infusions >2 mcg/kg/min or lasting >48-72h, especially in renal/hepatic dysfunction. Monitor unexplained lactic acidosis. Antidote: Hydroxocobalamin 5g IV."
    },
    nitroglycerin: {
      mechanism: "Organic nitrate converted to nitric oxide in vascular smooth muscle. At low doses (<100 mcg/min) produces venous dilation (reduces preload/PCWP); at higher doses causes arterial and coronary dilation.",
      indications: ["Acute coronary syndrome with ongoing ischemia", "Acute cardiogenic pulmonary edema with hypertension", "Perioperative hypertension in cardiac surgery"],
      contraindications: ["ABSOLUTE: Concurrent phosphodiesterase-5 inhibitors (sildenafil/vardenafil within 24h, tadalafil within 48h)", "ABSOLUTE: Right ventricular infarction with hypotension", "ABSOLUTE: Cardiac tamponade or restrictive cardiomyopathy"],
      adverseEffects: ["Throbbing headache", "Reflex tachycardia", "Hypotension", "Pharmacological tolerance after 24-48h"],
      monitoring: ["Continuous arterial blood pressure", "Relief of angina", "Resolution of pulmonary congestion"],
      specialPops: "Safe in renal failure; no dosage adjustment required.",
      weaning: "Taper by 5-10 mcg/min every 30-60 min.",
      route: "Central Line / Dedicated non-PVC infusion tubing",
      preparations: ["50 mg in 250 mL 5% Dextrose or 0.9% NS → 200 mcg/mL (Non-PVC glass or polyolefin container)"],
      line: "1st Line Coronary Ischemia / Acute Pulmonary Edema",
      warningBox: "CONTRAINDICATED with PDE-5 inhibitors (sildenafil, tadalafil) within 24-48h: can cause fatal refractory vasoplegic shock."
    },
    clevidipine: {
      mechanism: "Third-generation, ultrashort-acting dihydropyridine calcium channel blocker. Selectively inhibits L-type calcium channels in arterial smooth muscle, decreasing SVR with no effect on cardiac filling pressures.",
      indications: ["Acute perioperative hypertension in cardiac/vascular surgery", "Severe hypertensive emergency with acute target organ damage"],
      contraindications: ["ABSOLUTE: Known severe allergy to soy, soybean products, or eggs (lipid emulsion)", "ABSOLUTE: Severe aortic stenosis", "ABSOLUTE: Defective lipid metabolism"],
      adverseEffects: ["Hypotension", "Reflex tachycardia", "Headache", "Nausea", "Hypertriglyceridemia with prolonged use"],
      monitoring: ["Continuous invasive arterial line", "Serum triglycerides if infused >24h"],
      specialPops: "Metabolized by blood and tissue esterases; independent of renal or hepatic function.",
      weaning: "Discontinue directly; effect dissipates within 5-15 minutes.",
      route: "Central Line or Peripheral IV (strictly dedicated line)",
      preparations: ["Ready-to-use lipid emulsion 0.5 mg/mL (vials of 50 mL or 100 mL)"],
      line: "1st Line Perioperative Hypertensive Crisis",
      warningBox: "Contains lipid emulsion (0.2 g fat/mL; 2 kcal/mL). Strict aseptic handling; discard opened bottle after 12 hours."
    },
    nicardipine: {
      mechanism: "Second-generation dihydropyridine calcium channel blocker with high vascular selectivity for systemic and cerebral arterial beds.",
      indications: ["Acute ischemic stroke with BP > 185/110 prior to thrombolysis", "Aneurysmal subarachnoid hemorrhage / intracerebral hemorrhage", "Severe hypertensive emergency"],
      contraindications: ["ABSOLUTE: Advanced aortic stenosis", "RELATIVE: Acute decompensated heart failure with reduced ejection fraction"],
      adverseEffects: ["Reflex tachycardia", "Peripheral vein phlebitis", "Headache", "Facial flushing"],
      monitoring: ["Continuous blood pressure", "Frequent neurological checks", "IV infusion site inspection"],
      specialPops: "Titrate carefully in hepatic or renal impairment due to prolonged half-life.",
      weaning: "Reduce infusion by 2.5 mg/h every 1-2 hours while transitioning to oral antihypertensives.",
      route: "Central Venous Catheter preferred (change peripheral site every 12h to prevent thrombophlebitis)",
      preparations: ["25 mg in 250 mL 0.9% NS → 0.1 mg/mL (100 mcg/mL)"],
      line: "1st Line Neuro-Hypertensive Emergency",
      warningBox: null
    },
    hydralazine_iv: {
      mechanism: "Direct arteriolar smooth muscle vasodilator through alteration of intracellular calcium fluxes, decreasing SVR with significant reflex sympathetic activation.",
      indications: ["Severe hypertension in pregnancy (preeclampsia / eclampsia - 1st-line)", "Acute hypertensive urgency when other agents unavailable"],
      contraindications: ["ABSOLUTE: Aortic dissection (increases shear stress)", "ABSOLUTE: Coronary artery disease / acute MI", "RELATIVE: Severe tachycardia"],
      adverseEffects: ["Reflex tachycardia", "Severe headache", "Flushing", "Unpredictable delayed hypotension"],
      monitoring: ["Blood pressure every 5-10 min", "Fetal heart rate monitoring in pregnancy"],
      specialPops: "DRUG OF CHOICE in severe gestational hypertension and preeclampsia.",
      weaning: "Intermittent bolus dosing; transition to oral labetalol/nifedipine.",
      route: "Slow IV push over 2-3 minutes",
      preparations: ["20 mg / 1 mL ampule diluted in 9 mL 0.9% NS (2 mg/mL); administer 5-10 mg slow IV"],
      line: "1st Line Preeclampsia / Eclampsia",
      warningBox: null
    },
    phentolamine: {
      mechanism: "Competitive, non-selective α1 and α2 adrenergic receptor antagonist producing marked peripheral vasodilation.",
      indications: ["Hypertensive crises during pheochromocytoma surgery or paroxysms", "Antidote for peripheral extravasation of norepinephrine or dopamine", "Clonidine withdrawal hypertensive crisis"],
      contraindications: ["ABSOLUTE: Preexisting hypotension", "ABSOLUTE: Coronary artery disease (triggers severe tachycardia and angina)"],
      adverseEffects: ["Severe hypotension", "Profound reflex tachycardia", "Cardiac arrhythmias", "Nausea and abdominal pain"],
      monitoring: ["Continuous arterial blood pressure", "Continuous ECG rhythm"],
      specialPops: "Extravasation antidote: 5-10 mg in 10-15 mL NS injected subdermally into ischemic area within 12h.",
      weaning: "Discontinue as catecholamine surge resolves.",
      route: "IV bolus / Subcutaneous local infiltration for extravasation",
      preparations: ["5 mg in 10 mL 0.9% NS for slow IV push; local infiltration for extravasation"],
      line: "1st Line Pheochromocytoma / Extravasation Antidote",
      warningBox: null
    },
    fenoldopam: {
      mechanism: "Selective dopamine D1 receptor agonist. Induces systemic vasodilation, especially in renal, mesenteric, and coronary vascular beds, with diuresis and natriuresis.",
      indications: ["Severe hypertensive emergencies with acute renal dysfunction", "Perioperative blood pressure management in renal-risk patients"],
      contraindications: ["RELATIVE: Glaucoma or ocular hypertension (increases intraocular pressure)", "ABSOLUTE: Preexisting hypotension"],
      adverseEffects: ["Reflex tachycardia", "Headache", "Hypokalemia", "Flushing", "Increased intraocular pressure"],
      monitoring: ["Continuous blood pressure", "Serum potassium", "Urine output and creatinine"],
      specialPops: "Safe in renal impairment; does not require dose reduction.",
      weaning: "Taper by 0.05-0.1 mcg/kg/min every 15-30 min.",
      route: "Central Venous Catheter preferred",
      preparations: ["10 mg in 250 mL 0.9% NS or 5% Dextrose → 40 mcg/mL"],
      line: "2nd Line Hypertensive Emergency with Renal Injury",
      warningBox: null
    },
    hydrocortisone: {
      mechanism: "Glucocorticoid with mineralocorticoid activity. Restores vascular sensitivity to catecholamines, downregulates iNOS, inhibits inflammatory cytokines, and corrects relative adrenal insufficiency.",
      indications: ["Refractory Septic Shock requiring Norepinephrine >= 0.25 mcg/kg/min + Vasopressin (SSC 2026)", "Acute adrenal crisis / primary adrenal insufficiency"],
      contraindications: ["RELATIVE: Uncontrolled systemic fungal infection", "RELATIVE: Severe acute hyperglycemia"],
      adverseEffects: ["Hyperglycemia", "Hypernatremia and hypokalemia", "Secondary infection risk", "Myopathy with prolonged use"],
      monitoring: ["Serial blood glucose every 2-4h", "Serum electrolytes", "Signs of secondary infection"],
      specialPops: "No dosage adjustment needed for renal or hepatic dysfunction.",
      weaning: "Taper progressively over several days once vasopressors are successfully withdrawn; do not stop abruptly.",
      route: "Continuous IV infusion (preferred) or IV push every 6h",
      preparations: ["200 mg in 500 mL 0.9% NS for 24h continuous infusion (or 50 mg IV push q6h)"],
      line: "2nd Line Adjuvant in Septic Shock",
      warningBox: null
    },
    methylene_blue: {
      mechanism: "Potent inhibitor of inducible nitric oxide synthase (iNOS) and soluble guanylyl cyclase (sGC), blocking the nitric oxide-cGMP vasodilation cascade and restoring systemic vascular tone.",
      indications: ["Refractory vasoplegic shock post cardiopulmonary bypass", "Ultra-refractory septic shock resistant to dual/triple vasopressors", "Acquired methemoglobinemia (1-2 mg/kg)"],
      contraindications: ["ABSOLUTE: Glucose-6-phosphate dehydrogenase (G6PD) deficiency (causes severe hemolysis)", "ABSOLUTE: Concurrent use of SSRIs, SNRIs, MAOIs (causes fatal serotonin syndrome)", "ABSOLUTE: Severe renal failure"],
      adverseEffects: ["Greenish-blue discoloration of urine and skin", "Falsely low pulse oximetry (SpO2) readings", "Transient coronary and pulmonary vasoconstriction", "Serotonin syndrome"],
      monitoring: ["Arterial blood gas co-oximetry (pulse oximeter is invalid)", "Methemoglobin levels", "Neurological monitoring for serotonin toxicity"],
      specialPops: "CONTRAINDICATED in G6PD deficiency and with serotonergic medications.",
      weaning: "Administered as a single bolus over 30-60 min; optional infusion for 12-24h only.",
      route: "Central Venous Catheter mandatory",
      preparations: ["10 mg/mL (1% solution) ampules; 1-2 mg/kg in 100 mL 5% Dextrose over 30-60 min; maintenance 0.25-1 mg/kg/h"],
      line: "3rd Line / Rescue in Refractory Vasoplegia",
      warningBox: "CRITICAL WARNING: Interferes with pulse oximetry, causing falsely low SpO2 down to 65-85%. Use arterial co-oximetry. DO NOT combine with SSRIs, SNRIs, or tramadol due to lethal serotonin syndrome."
    },
    hydroxocobalamin: {
      mechanism: "Direct nitric oxide (NO) scavenger and hydrogen sulfide (H2S) scavenger with sGC inhibition. Restores vascular tone in extreme vasoplegia. Powerful antidote for cyanide poisoning.",
      indications: ["Acute cyanide poisoning from smoke inhalation in fires (1st-line)", "Extreme refractory vasoplegic shock post cardiac surgery or in sepsis (rescue)"],
      contraindications: ["RELATIVE: Known hypersensitivity to cobalamin (none in emergency)"],
      adverseEffects: ["Deep reddish-purple discoloration of skin, mucous membranes, and urine (lasts 48-72h)", "Interference with laboratory tests (creatinine, bilirubin, AST, lactate, urine analysis)", "Transient hypertension", "Extracorporeal circuit shutdown"],
      monitoring: ["Draw all blood and urine laboratory samples BEFORE administration", "Hemodynamic monitoring", "Dialysis machine filters for color interference"],
      specialPops: "Safe in pregnancy during life-threatening cyanide poisoning or vasoplegia.",
      weaning: "Administered as single 5g IV infusion over 15 min; second 5g dose may be repeated if needed.",
      route: "Dedicated Central Venous line (incompatible with most other drugs)",
      preparations: ["Cyanokit 5 g lyophilized powder reconstituted in 200 mL 0.9% NS infused over 15 min"],
      line: "1st Line Cyanide / 3rd Line Rescue Vasoplegia",
      warningBox: "CRITICAL WARNING: Dark red chromaturia and chromodermia severely interfere with optical lab analyzers (falsely alters bilirubin, creatinine, and arterial co-oximetry) for 48h. Draw baseline labs BEFORE infusing."
    }
  },
  pt: {
    norepinephrine: {
      mechanism: "Potente agonista vascular α1 e α2 com efeito inotrópico miocárdico β1 moderado. Aumenta a resistência vascular sistêmica e a pressão arterial média com cronotropismo mínimo.",
      indications: ["Choque Séptico (1ª linha de escolha - SSC 2026)", "Choque Neurogênico (1ª linha após expansão volêmica)", "Choque Cardiogênico com hipotensão profunda (ponte para inotrópico)", "Choque Anafilático refratário (2ª linha após adrenalina)"],
      contraindications: ["RELATIVA: Hipovolemia grave não corrigida", "RELATIVA: Extravasamento periférico (antídoto: fentolamina)"],
      adverseEffects: ["Bradicardia reflexa", "Isquemia distal/periférica", "Necrose tecidual por extravasamento", "Crise hipertensiva"],
      monitoring: ["Monitorização invasiva da PAM por linha arterial", "Lactato seriado a cada 2-4h", "Débito urinário horário (> 0.5 mL/kg/h)"],
      specialPops: "Gravidez: PRECAUÇÃO (vasoconstrição uterina). Renal/Hepático: sem necessidade de ajuste.",
      weaning: "Desmame gradual de 0.01-0.02 mcg/kg/min a cada 30-60 min após estabilização hemodinâmica.",
      route: "Cateter Venoso Central preferencial (acesso periférico temporário seguro)",
      preparations: ["4 mg em 250 mL SF 0.9% → 16 mcg/mL (Padrão)", "8 mg em 250 mL SF 0.9% → 32 mcg/mL (Concentrada)", "16 mg em 250 mL SF 0.9% → 64 mcg/mL (Alta concentração - CVC)"],
      line: "1ª Linha",
      warningBox: null
    },
    epinephrine: {
      mechanism: "Potente agonista adrenérgico não seletivo sobre receptores α1, α2, β1 e β2. Em doses baixas predomina o efeito inotrópico/cronotrópico β; em doses altas predomina a vasoconstrição α.",
      indications: ["Choque Anafilático (1ª linha obrigatória e imediata IM)", "Parada Cardiorrespiratória (1ª linha ACLS)", "Choque Séptico refratário (3ª linha quando NE + vasopressina são insuficientes)", "Choque Cardiogênico refratário com baixo débito extremo"],
      contraindications: ["RELATIVA: Taquiarritmias ventriculares graves preexistentes", "RELATIVA: Isquemia coronariana aguda não revascularizada"],
      adverseEffects: ["Taquicardia sinusal severa", "Arritmias ventriculares", "Hiperlactatemia metabólica", "Hiperglicemia e hipocalemia"],
      monitoring: ["ECG contínuo com monitor de arritmias", "PAM invasiva", "Glicemia e potássio seriados"],
      specialPops: "Gravidez: indicado na anafilaxia ou PCR (salvamento materno-fetal).",
      weaning: "Desmame lento de 0.01-0.05 mcg/kg/min avaliando FC e débito cardíaco.",
      route: "Acesso Central / IM na anafilaxia / Periférico na PCR",
      preparations: ["4 mg em 250 mL SF 0.9% → 16 mcg/mL (Infusão contínua)", "1 mg / 10 mL (1:10.000) bolus IV na PCR", "0.3 - 0.5 mg IM direto (1:1.000) na anafilaxia"],
      line: "1ª Linha (Anafilaxia/ACLS) | 3ª Linha (Séptico)",
      warningBox: "A epinefrina eleva o lactato sérico por mecanismo metabólico β2 (glicogenólise muscular), independentemente da perfusão tecidual. Não utilize o clearance de lactato isoladamente para guiar o desmame."
    },
    dopamine: {
      mechanism: "Agonista dose-dependente: 1-3 mcg/kg/min (dopaminérgico renal), 3-10 mcg/kg/min (inotrópico β1), 10-20 mcg/kg/min (vasoconstritor α1).",
      indications: ["Bradicardia sintomática refratária à atropina (ACLS)", "Hipotensão associada a bradicardia sinusal e baixo risco arrítmico"],
      contraindications: ["ABSOLUTA: Taquiarritmias ventriculares ou supraventriculares rápidas", "ABSOLUTA: Feocromocitoma", "RELATIVA: Choque séptico de 1ª linha (maior mortalidade que norepinefrina)"],
      adverseEffects: ["Fibrilação atrial", "Taquicardia ventricular", "Isquemia miocárdica", "Náuseas e vômitos"],
      monitoring: ["Monitorização contínua de ECG", "PAM invasiva"],
      specialPops: "Dose renal cientificamente refutada. Não utilizar para proteção nem tratamento da insuficiência renal aguda.",
      weaning: "Redução gradual de 2 a 5 mcg/kg/min a cada 30-60 min.",
      route: "Cateter Venoso Central obrigatório",
      preparations: ["400 mg em 250 mL SG 5% → 1600 mcg/mL (Padrão)", "800 mg em 250 mL SG 5% → 3200 mcg/mL (Concentrada)"],
      line: "3ª Linha / Restrita",
      warningBox: "ESTUDO SOAP-II (NEJM 2010): Duplica arritmias e demonstrou maior mortalidade em 28 dias no choque cardiogênico quando comparada à noradrenalina. 'Dose renal' de dopamina está refutada."
    },
    dobutamine: {
      mechanism: "Agonista seletivo dos receptores β1 miocárdicos com aumento do inotropismo e volume sistólico. Efeito β2 e α1 discreto resultando em vasodilatação sistêmica líquida leve a moderada.",
      indications: ["Choque Cardiogênico com baixo débito (1ª linha inotrópico)", "Disfunção miocárdica séptica / Hipocontratilidade com ScvO2 < 70%", "Insuficiência cardíaca aguda descompensada perfil C/D", "Baixo débito cardíaco pós-cirurgia cardíaca (pós-CEC)"],
      contraindications: ["ABSOLUTA: Cardiomiopatia hipertrófica obstrutiva (CMHO)", "ABSOLUTA: Estenose aórtica severa sintomática sem suporte mecânico", "RELATIVA: Taquicardia severa (FC > 120 bpm)"],
      adverseEffects: ["Taquicardia", "Ectopias ventriculares", "Hipotensão transitória por vasodilatação", "Aumento do consumo miocárdico de O2"],
      monitoring: ["Frequência cardíaca", "PAM contínua", "Ecocardiograma à beira do leito", "ScvO2"],
      specialPops: "Resposta atenuada em pacientes sob uso crônico de betabloqueadores.",
      weaning: "Reduzir 2.5 mcg/kg/min a cada 2-4 horas monitorando perfusão tecidual.",
      route: "Cateter Venoso Central",
      preparations: ["250 mg em 250 mL SF 0.9% ou SG 5% → 1000 mcg/mL (Padrão)", "500 mg em 250 mL SF 0.9% ou SG 5% → 2000 mcg/mL (Concentrada)"],
      line: "1ª Linha Inotrópico",
      warningBox: null
    },
    vasopressin: {
      mechanism: "Agonista dos receptores V1a vasculares acoplados à proteína Gq/fosfolipase C, promovendo vasoconstrição direta independente dos receptores adrenérgicos e do pH sanguíneo.",
      indications: ["Choque Séptico como 2ª linha adicionado à Norepinefrina (SSC 2026)", "Choque Vasoplégico pós-circulação extracorpórea", "Hipotensão vasodilatadora refratária a catecolaminas"],
      contraindications: ["RELATIVA: Doença arterial coronariana grave não revascularizada", "RELATIVA: Doença vascular periférica avançada"],
      adverseEffects: ["Isquemia digital ou de extremidades", "Isquemia mesentérica", "Hiponatremia por efeito V2", "Bradicardia"],
      monitoring: ["Perfusão periférica distal", "Sódio sérico a cada 12-24h", "Sinais de dor abdominal ou isquemia mesentérica"],
      specialPops: "Segura na insuficiência renal; não necessita de ajuste posológico.",
      weaning: "Descontinuar como segundo vasopressor quando Norepinefrina < 0.15 mcg/kg/min. Suspender diretamente sem desmame escalonado.",
      route: "Cateter Venoso Central obrigatório",
      preparations: ["20 UI em 100 mL SF 0.9% → 0.2 UI/mL (Vazão padrão: 9 mL/h = 0.03 UI/min)", "40 UI em 100 mL SF 0.9% → 0.4 UI/mL (Restrição hídrica)"],
      line: "2ª Linha Vasopressor",
      warningBox: null
    },
    terlipressin: {
      mechanism: "Pró-fármaco análogo sintético da vasopressina com alta seletividade para receptores V1 esplâncnicos. Vasoconstrição esplâncnica e redução da pressão portal.",
      indications: ["Síndrome Hepatorrenal Tipo 1 (1ª linha)", "Hemorragia digestiva alta varicosa (1ª linha)", "Choque séptico como alternativa à vasopressina (ESICM 2024)"],
      contraindications: ["ABSOLUTA: Gravidez (provoca contrações uterinas)", "ABSOLUTA: Doença coronariana grave", "ABSOLUTA: Arteriopatia periférica avançada"],
      adverseEffects: ["Isquemia mesentérica", "Isquemia miocárdica", "Hiponatremia grave", "Cólicas abdominais"],
      monitoring: ["ECG contínuo", "Sódio plasmático", "Exame do abdome"],
      specialPops: "CONTRAINDICADA na gravidez.",
      weaning: "Espaçar os bolus ou reduzir a taxa de infusão gradualmente.",
      route: "Cateter Venoso Central / Acesso periférico calibroso",
      preparations: ["1 mg / 5 mL ampola para bolus IV lento", "2 mg em 100 mL SF 0.9% para infusão contínua"],
      line: "2ª Linha Vasopressor / 1ª Linha SHR",
      warningBox: null
    },
    angiotensin2: {
      mechanism: "Angiotensina II sintética humana direta que atua sobre os receptores vasculares AT1 acoplados à proteína Gq, estimulando liberação de cálcio intracelular, vasoconstrição e síntese de aldosterona.",
      indications: ["Choque vasodilatador refratário a altas doses de catecolaminas (Estudo ATHOS-3)", "Choque séptico refratário"],
      contraindications: ["ABSOLUTA: Doença tromboembólica ativa sem anticoagulação plena", "ABSOLUTA: Gravidez"],
      adverseEffects: ["Trombose venosa/arterial", "Trombocitopenia", "Isquemia periférica", "Acidose"],
      monitoring: ["Rastreio de tromboembolismo", "Contagem de plaquetas", "Perfusão distal"],
      specialPops: "CONTRAINDICADA na gravidez. Exige profilaxia química obrigatória para TEV com heparina.",
      weaning: "Reduzir 5-15 ng/kg/min a cada 5-15 minutos.",
      route: "Cateter Venoso Central obrigatório",
      preparations: ["2.5 mg / 1 mL ampola diluída em 500 mL SF 0.9% → 5000 ng/mL (5 mcg/mL)"],
      line: "3ª Linha / Resgate",
      warningBox: "ESTUDO ATHOS-3 (NEJM 2017): Maior incidência de trombose venosa profunda e embolia pulmonar. Profilaxia antitrombótica com HBPM ou heparina não fracionada é mandatória."
    },
    phenylephrine: {
      mechanism: "Agonista adrenérgico α1 puro e seletivo. Provoca vasoconstrição arteriolar sistêmica aumentando RVS e PAM sem efeito inotrópico ou cronotrópico direto.",
      indications: ["Hipotensão com taquiarritmia supraventricular grave", "Hipotensão na Cardiomiopatia Hipertrófica Obstrutiva (CMHO)", "Vasodilatação induzida por anestesia neuroaxial"],
      contraindications: ["ABSOLUTA: Choque cardiogênico puro / IC esquerda grave (eleva a pós-carga)", "RELATIVA: Bradicardia prévia acentuada"],
      adverseEffects: ["Bradicardia reflexa acentuada", "Queda importante do débito cardíaco", "Isquemia digital"],
      monitoring: ["Frequência cardíaca", "Débito cardíaco", "PAM contínua"],
      specialPops: "Cautela extrema na coronariopatia pelo aumento da pós-carga miocárdica.",
      weaning: "Redução gradual conforme recuperação do tônus vasomotor.",
      route: "Acesso Central preferencial (bolus periférico em anestesia)",
      preparations: ["10 mg em 250 mL SF 0.9% → 40 mcg/mL", "50 mg em 250 mL SF 0.9% → 200 mcg/mL"],
      line: "Indicação Específica",
      warningBox: null
    },
    isoproterenol: {
      mechanism: "Potente agonista adrenérgico β1 e β2 não seletivo. Aumenta a frequência cardíaca, velocidade de condução AV e inotropismo, com intensa vasodilatação periférica e pulmonar.",
      indications: ["Bradicardia sintomática grave / Bloqueio AV total como ponte para marcapasso", "Torsades de pointes com QTc prolongado", "Fallo do ventrículo direito com hipertensão pulmonar"],
      contraindications: ["ABSOLUTA: Taquiarritmias", "ABSOLUTA: Infarto agudo do miocárdio / SCA", "ABSOLUTA: Intoxicação digitálica"],
      adverseEffects: ["Taquicardia severa", "Fibrilação ventricular", "Hipotensão por vasodilatação β2", "Isquemia miocárdica"],
      monitoring: ["ECG contínuo", "PAM contínua"],
      specialPops: "Evitar em pacientes com cardiopatia isquêmica.",
      weaning: "Suspender assim que o marcapasso transvenoso estiver posicionado.",
      route: "Cateter Venoso Central",
      preparations: ["1 mg em 250 mL SG 5% → 4 mcg/mL"],
      line: "3ª Linha / Ponte Eletrofisiológica",
      warningBox: null
    },
    milrinone: {
      mechanism: "Inibidor da fosfodiesterase-3 (PDE-3). Aumenta o AMPc intracelular no miocárdio (inótropo) e no músculo liso vascular (inodilatador). Reduz pré e pós-carga.",
      indications: ["Choque cardiogênico com alta RVS e PCP elevada", "Insuficiência cardíaca descompensada em pacientes betabloqueados", "Hipertensão pulmonar grave e disfunção ventricular direita", "Baixo débito cardíaco pós-CEC"],
      contraindications: ["ABSOLUTA: Hipotensão grave não ressuscitada (PAM < 50 mmHg)", "ABSOLUTA: Estenose valvular aórtica severa", "ABSOLUTA: CMHO"],
      adverseEffects: ["Hipotensão arterial sistêmica severa", "Taquicardia ventricular", "Fibrilação atrial", "Cefaleia"],
      monitoring: ["PAM invasiva contínua", "Ritmo cardíaco", "Creatinina e eletrólitos séricos"],
      specialPops: "Ajuste renal: eliminação 80% renal. Reduzir dose em 50-75% se ClCr < 30 mL/min.",
      weaning: "Meia-vida de eliminação prolongada na IR (até 4-6h). Desmame muito gradual.",
      route: "Cateter Venoso Central obrigatório",
      preparations: ["20 mg em 100 mL SF 0.9% → 200 mcg/mL", "10 mg em 100 mL SF 0.9% → 100 mcg/mL"],
      line: "2ª Linha Inodilatador",
      warningBox: "EVITAR bolus de ataque em pacientes hipotensos na UTI para prevenir colapso hemodinâmico. A milrinona acumula na insuficiência renal."
    },
    enoximone: {
      mechanism: "Inibidor seletivo da PDE-3 similar à milrinona, com efeito inotrópico positivo e vasodilatador arterial pulmonar e sistêmico.",
      indications: ["Baixo débito pós-cirurgia cardíaca refratário", "Insuficiência cardíaca aguda grave refratária a catecolaminas"],
      contraindications: ["Hipotensão grave", "Estenose subaórtica ou aórtica severa"],
      adverseEffects: ["Hipotensão", "Arritmias", "Cefaleia", "Flebite local"],
      monitoring: ["PAM contínua", "Ritmo cardíaco", "Função renal"],
      specialPops: "Acúmulo importante em disfunção renal grave.",
      weaning: "Desmame gradual ao longo de 24-48 horas.",
      route: "Cateter Venoso Central",
      preparations: ["100 mg em 100 mL SF 0.9% → 1 mg/mL"],
      line: "3ª Linha Inodilatador",
      warningBox: null
    },
    levosimendan: {
      mechanism: "Sensibilizador de cálcio: liga-se à troponina C cardíaca de modo cálcio-dependente, aumentando a contratilidade sem elevar o cálcio intracelular nem o consumo de O2 miocárdico. Abre canais de K+ ATP-dependentes (vasodilatação).",
      indications: ["Insuficiência cardíaca aguda descompensada com pressão arterial mantida", "Choque cardiogênico sob uso crônico de betabloqueadores", "Disfunção do ventrículo direito com hipertensão pulmonar", "Desmame de circulação extracorpórea / ECMO"],
      contraindications: ["ABSOLUTA: Hipotensão grave (PAM < 50 mmHg ou PAS < 85 mmHg)", "ABSOLUTA: Insuficiência renal grave (ClCr < 30 mL/min)", "ABSOLUTA: Insuficiência hepática grave"],
      adverseEffects: ["Hipotensão", "Fibrilação atrial", "Extrassístoles ventriculares", "Hipocalemia", "Cefaleia"],
      monitoring: ["Pressão arterial contínua", "Potássio sérico", "ECG contínuo"],
      specialPops: "Administrar exclusivamente como infusão de 24 horas. Evitar bolus de ataque.",
      weaning: "O metabólito ativo OR-1896 tem meia-vida de 70-80 horas; os efeitos hemodinâmicos persistem por 7 a 9 dias após o término da infusão.",
      route: "Cateter Venoso Central preferencial",
      preparations: ["12.5 mg em 250 mL SG 5% → 50 mcg/mL", "12.5 mg em 500 mL SG 5% → 25 mcg/mL"],
      line: "2ª Linha Inodilatador",
      warningBox: "O metabólito ativo OR-1896 tem meia-vida de 70-80h. Os efeitos inotrópicos e vasodilatadores persistem por 7 a 9 dias após o término da infusão de 24 horas."
    },
    sodium_nitroprusside: {
      mechanism: "Potente doador direto não enzimático de óxido nítrico (NO), provocando relaxamento vascular arteriolar e venoso balanceado com redução intensa da pré e pós-carga.",
      indications: ["Emergências hipertensivas com lesão de órgão-alvo", "Edema agudo de pulmão com hipertensão grave", "Dissecção aórtica aguda (combinado com betabloqueador)", "Redução de pós-carga na insuficiência mitral aguda"],
      contraindications: ["ABSOLUTA: Hipotensão preexistente", "ABSOLUTA: Hipertensão intracraniana (HIC)", "ABSOLUTA: Insuficiência renal ou hepática grave (toxicidade por cianeto/tiocianato)"],
      adverseEffects: ["Hipotensão severa", "Intoxicação por cianeto e tiocianato", "Fenômeno de roubo coronariano", "Hipertensão de rebote na suspensão abrupta"],
      monitoring: ["Linha arterial invasiva obrigatória", "Gasometria com lactato e metemoglobina", "Proteger frasco e equipo da luz"],
      specialPops: "CONTRAINDICADO na gravidez (toxicidade fetal por cianeto).",
      weaning: "Desmame gradual de 0.25-0.5 mcg/kg/min a cada 15-30 min para prevenir hipertensão de rebote.",
      route: "Cateter Venoso Central obrigatório",
      preparations: ["50 mg em 250 mL SG 5% → 200 mcg/mL (Capa fotoprotetora opaca obrigatória)"],
      line: "1ª Linha Emergência Hipertensiva",
      warningBox: "ADVERTÊNCIA: Risco de intoxicação por cianeto com infusões >2 mcg/kg/min ou uso >48-72h, especialmente em disfunção renal/hepática. Monitore acidose lática inexplicada. Antídoto: Hidroxocobalamina 5g IV."
    },
    nitroglycerin: {
      mechanism: "Nitrato orgânico convertido em óxido nítrico no músculo liso vascular. Em baixas doses (<100 mcg/min) predomina venodilatação (reduz pré-carga/PCP); em doses altas provoca vasodilatação arterial e coronariana.",
      indications: ["Síndrome coronariana aguda com isquemia refratária", "Edema agudo de pulmão cardiogênico com hipertensão", "Hipertensão perioperatória em cirurgia cardíaca"],
      contraindications: ["ABSOLUTA: Uso concomitante de inibidores da PDE-5 (sildenafil nas últimas 24h, tadalafil nas últimas 48h)", "ABSOLUTA: Infarto de ventrículo direito com hipotensão", "ABSOLUTA: Tamponamento cardíaco ou miocardiopatia restritiva"],
      adverseEffects: ["Cefaleia pulsátil", "Taquicardia reflexa", "Hipotensão", "Tolerância farmacológica após 24-48h"],
      monitoring: ["Pressão arterial contínua", "Alívio da dor anginosa", "Melhora da congestão pulmonar"],
      specialPops: "Segura na insuficiência renal; não necessita de ajuste de dose.",
      weaning: "Redução de 5-10 mcg/min a cada 30-60 min.",
      route: "Acesso Central / Equipo especial não-PVC de polietileno",
      preparations: ["50 mg em 250 mL SG 5% ou SF 0.9% → 200 mcg/mL (Frasco de vidro ou poliolefina não-PVC)"],
      line: "1ª Linha Isquemia Coronariana / EAP",
      warningBox: "CONTRAINDICAÇÃO ABSOLUTA com inibidores da PDE-5 (sildenafil, tadalafil) nas últimas 24-48h: risco de choque vasoplégico refratário e óbito."
    },
    clevidipine: {
      mechanism: "Bloqueador dos canais de cálcio di-hidropiridínico de 3ª geração de ação ultracurta. Inibe seletivamente os canais de cálcio tipo L no músculo liso arterial, reduzindo a RVS sem alterar as pressões de enchimento.",
      indications: ["Hipertensão perioperatória aguda em cirurgia cardíaca e vascular", "Emergência hipertensiva com lesão de órgão-alvo"],
      contraindications: ["ABSOLUTA: Alergia grave conhecida à soja ou ovos (emulsão lipídica)", "ABSOLUTA: Estenose aórtica severa", "ABSOLUTA: Distúrbio grave do metabolismo lipídico"],
      adverseEffects: ["Hipotensão", "Taquicardia reflexa", "Cefaleia", "Náuseas", "Hipertrigliceridemia em uso prolongado"],
      monitoring: ["Linha arterial invasiva contínua", "Triglicerídeos séricos se infusão >24h"],
      specialPops: "Metabolizado por esterases sanguíneas e teciduais; independente das funções renal e hepática.",
      weaning: "Suspensão direta; o efeito cessa completamente em 5-15 minutos.",
      route: "Acesso Central ou Periférico (via estritamente exclusiva)",
      preparations: ["Emulsão lipídica pronta para uso 0.5 mg/mL (frascos de 50 mL ou 100 mL)"],
      line: "1ª Linha Crise Hipertensiva Perioperatória",
      warningBox: "Contém emulsão lipídica (0.2 g gordura/mL; 2 kcal/mL). Manuseio asséptico rigoroso; descartar frasco aberto após 12 horas."
    },
    nicardipine: {
      mechanism: "Bloqueador dos canais de cálcio di-hidropiridínico de 2ª geração com alta seletividade vascular para leitos arteriais sistêmicos e cerebrais.",
      indications: ["AVC isquêmico agudo com PA > 185/110 antes de trombólise", "Hemorragia subaracnóidea aneurismática / AVC hemorrágico", "Emergência hipertensiva geral"],
      contraindications: ["ABSOLUTA: Estenose aórtica avançada", "RELATIVA: Insuficiência cardíaca descompensada com fração de ejeção reduzida"],
      adverseEffects: ["Taquicardia reflexa", "Flebite em veia periférica", "Cefaleia", "Rubor facial"],
      monitoring: ["Pressão arterial contínua", "Avaliação neurológica seriada", "Inspeção do sítio venoso periférico"],
      specialPops: "Titular com cautela na disfunção hepática por prolongamento da meia-vida.",
      weaning: "Reduzir 2.5 mg/h a cada 1-2 horas durante a transição para anti-hipertensivos orais.",
      route: "Cateter Venoso Central preferencial (trocar sítio periférico a cada 12h para evitar tromboflebite)",
      preparations: ["25 mg em 250 mL SF 0.9% → 0.1 mg/mL (100 mcg/mL)"],
      line: "1ª Linha Emergência Neuro-Hipertensiva",
      warningBox: null
    },
    hydralazine_iv: {
      mechanism: "Vasodilatador arteriolar direto por alteração dos fluxos de cálcio intracelular na musculatura lisa, diminuindo a RVS com ativação simpática reflexa.",
      indications: ["Hipertensão grave na gestação (pré-eclâmpsia / eclâmpsia - 1ª linha)", "Urgência hipertensiva na indisponibilidade de outras opções"],
      contraindications: ["ABSOLUTA: Dissecção aórtica (aumenta o estresse de cisalhamento)", "ABSOLUTA: Doença arterial coronariana / IAM", "RELATIVA: Taquicardia severa"],
      adverseEffects: ["Taquicardia reflexa", "Cefaleia intensa", "Rubor", "Hipotensão tardia imprevisível"],
      monitoring: ["Pressão arterial a cada 5-10 min", "Monitorização dos batimentos cardíacos fetais"],
      specialPops: "FÁRMACO DE ESCOLHA na hipertensão grave gestacional e pré-eclâmpsia.",
      weaning: "Administração em bolus intermitente; transição para labetalol ou nifedipino oral.",
      route: "Injeção IV lenta em 2-3 minutos",
      preparations: ["20 mg / 1 mL ampola diluída em 9 mL SF 0.9% (2 mg/mL); aplicar 5-10 mg IV lento"],
      line: "1ª Linha Pré-eclâmpsia / Eclâmpsia",
      warningBox: null
    },
    phentolamine: {
      mechanism: "Antagonista competitivo não seletivo dos receptores adrenérgicos α1 e α2, provocando vasodilatação periférica intensa.",
      indications: ["Crise hipertensiva no intraoperatório de feocromocitoma", "Antídoto para extravasamento periférico de noradrenalina ou dopamina", "Crise hipertensiva por retirada de clonidina"],
      contraindications: ["ABSOLUTA: Hipotensão prévia", "ABSOLUTA: Doença arterial coronariana (induz taquicardia grave e angina)"],
      adverseEffects: ["Hipotensão severa", "Taquicardia reflexa intensa", "Arritmias cardíacas", "Náuseas e dor abdominal"],
      monitoring: ["Pressão arterial por linha arterial", "ECG contínuo"],
      specialPops: "Antídoto de extravasamento: 5-10 mg em 10-15 mL de SF infiltrados por via subcutânea na área isquêmica em até 12h.",
      weaning: "Suspender conforme cessação da tempestade adrenérgica.",
      route: "Bolus IV lento / Infiltração subcutânea no extravasamento",
      preparations: ["5 mg em 10 mL SF 0.9% para bolus IV; infiltração local no extravasamento"],
      line: "1ª Linha Feocromocitoma / Antídoto Extravasamento",
      warningBox: null
    },
    fenoldopam: {
      mechanism: "Agonista seletivo dos receptores dopaminérgicos D1. Causa vasodilatação sistêmica, renal, mesentérica e coronariana, promovendo diurese e natriurese.",
      indications: ["Emergência hipertensiva com insuficiência renal aguda", "Controle pressórico perioperatório em pacientes com risco de lesão renal"],
      contraindications: ["RELATIVA: Glaucoma ou hipertensão ocular (aumenta a pressão intraocular)", "ABSOLUTA: Hipotensão arterial"],
      adverseEffects: ["Taquicardia reflexa", "Cefaleia", "Hipocalemia", "Rubor", "Aumento da pressão intraocular"],
      monitoring: ["Pressão arterial contínua", "Potássio sérico", "Débito urinário e creatinina"],
      specialPops: "Seguro na disfunção renal; não necessita de redução posológica.",
      weaning: "Redução de 0.05-0.1 mcg/kg/min a cada 15-30 min.",
      route: "Cateter Venoso Central preferencial",
      preparations: ["10 mg em 250 mL SF 0.9% ou SG 5% → 40 mcg/mL"],
      line: "2ª Linha Emergência Hipertensiva com Lesão Renal",
      warningBox: null
    },
    hydrocortisone: {
      mechanism: "Glicocorticoide com atividade mineralocorticoide. Restaura a sensibilidade vascular às catecolaminas, inibe a síntese de iNOS e citocinas inflamatórias e corrige a insuficiência adrenal relativa.",
      indications: ["Choque Séptico refratário com necessidade de Norepinefrina >= 0.25 mcg/kg/min + Vasopressina (SSC 2026)", "Crise adrenal aguda / insuficiência adrenal primária"],
      contraindications: ["RELATIVA: Infecção fúngica sistêmica não controlada", "RELATIVA: Hiperglicemia aguda grave"],
      adverseEffects: ["Hiperglicemia", "Hipernatremia e hipocalemia", "Risco de infecção secundária", "Miopatia em uso prolongado"],
      monitoring: ["Glicemia capilar a cada 2-4h", "Eletrólitos séricos", "Vigilância de infecções secundárias"],
      specialPops: "Sem necessidade de ajuste para insuficiência renal ou hepática.",
      weaning: "Desmame gradual ao longo de vários dias após a retirada completa dos vasopresores; não suspender abruptamente.",
      route: "Infusão contínua em 24h (preferencial) ou bolus IV a cada 6h",
      preparations: ["200 mg em 500 mL SF 0.9% em infusão contínua 24h (ou 50 mg IV a cada 6h)"],
      line: "2ª Linha Adjuvante no Choque Séptico",
      warningBox: null
    },
    methylene_blue: {
      mechanism: "Inibidor potente da óxido nítrico sintase induzível (iNOS) e da guanilato ciclase solúvel (sGC), bloqueando a cascata vasodilatadora NO-GMPc e restaurando o tônus vascular sistêmico.",
      indications: ["Choque vasoplégico refratário pós-circulação extracorpórea", "Choque séptico ultra-refratário resistente a múltiplos vasopresores", "Metemoglobinemia adquirida (1-2 mg/kg)"],
      contraindications: ["ABSOLUTA: Deficiência de glicose-6-fosfato desidrogenase (G6PD - hemólise maciça)", "ABSOLUTA: Uso concomitante de ISRS, venlafaxina, IMAO (síndrome serotoninérgica fatal)", "ABSOLUTA: Insuficiência renal grave"],
      adverseEffects: ["Coloração azul-esverdeada da pele e urina", "Leituras falsamente baixas na oximetria de pulso (SpO2)", "Vasoconstrição coronariana transitória", "Síndrome serotoninérgica"],
      monitoring: ["Co-oximetria em gasometria arterial (oxímetro de pulso perde a validade)", "Metemoglobina", "Vigilância neurológica de toxicidade serotoninérgica"],
      specialPops: "CONTRAINDICADO na deficiência de G6PD e em uso de psicofármacos serotoninérgicos.",
      weaning: "Administrado em bolus único em 30-60 min; manutenção opcional em infusão por 12-24h.",
      route: "Cateter Venoso Central obrigatório",
      preparations: ["Ampolas de 10 mg/mL (solução a 1%); 1-2 mg/kg em 100 mL SG 5% em 30-60 min; manutenção 0.25-1 mg/kg/h"],
      line: "3ª Linha / Resgate na Vasoplegia Refratária",
      warningBox: "ADVERTÊNCIA CRÍTICA: Interfere na oximetria de pulso gerando leituras falsas de SpO2 de até 65-85%. Use co-oximetria arterial. NUNCA associe com ISRS, venlafaxina ou tramadol devido ao risco de síndrome serotoninérgica fatal."
    },
    hydroxocobalamin: {
      mechanism: "Sequestrador direto de óxido nítrico (NO) e sulfeto de hidrogênio (H2S) com inibição da sGC. Restaura o tônus vascular na vasoplegia extrema. Potente antídoto para intoxicação por cianeto.",
      indications: ["Intoxicação aguda por cianeto em inalação de fumaça de incêndio (1ª linha)", "Choque vasoplégico extremo refratário pós-cirurgia cardíaca ou sepse (resgate)"],
      contraindications: ["RELATIVA: Hipersensibilidade conhecida à cobalamina (nenhuma na emergência)"],
      adverseEffects: ["Coloração vermelho-escura intensa da pele, mucosas e urina (dura 48-72h)", "Interferência em exames laboratoriais ópticos (creatinina, bilirrubina, AST, lactato)", "Hipertensão transitória", "Parada de circuitos de hemodiálise por sensor de sangue falso-positivo"],
      monitoring: ["Coletar todos os exames laboratoriais ANTES da infusão", "Monitorização hemodinâmica contínua", "Ajustar sensores de hemodiálise"],
      specialPops: "Segura na gestação durante intoxicação por cianeto ou choque ameaçador à vida.",
      weaning: "Administrada como infusão de 5g em 15 min; uma segunda dose de 5g pode ser repetida se necessário.",
      route: "Via Central exclusiva (incompatível com a maioria dos demais fármacos)",
      preparations: ["Cyanokit 5 g liofilizado reconstituído em 200 mL SF 0.9% infundido em 15 minutos"],
      line: "1ª Linha Cianeto / 3ª Linha Resgate Vasoplegia",
      warningBox: "ADVERTÊNCIA CRÍTICA: A cromodermia e cromatúria avermelhadas intensas interferem em analisadores laboratoriais ópticos (altera bilirrubina, creatinina e co-oximetria) por 48h. Colete exames basais ANTES de infundir."
    }
  }
};

// --------------------------------------------------------------------------
// 2. BASE DE DATOS DE LOS 22 FÁRMACOS VASOACTIVOS
// --------------------------------------------------------------------------
const DRUGS_DATA = [
  {
    id: "norepinephrine",
    name: "Noradrenalina (Norepinefrina)",
    nameEn: "Norepinephrine",
    namePt: "Norepinefrina",
    category: "VASOPRESOR",
    subcategory: "CATECOLAMINA",
    mechanism: "Potente agonista α1 y α2 vascular con efecto inotrópico β1 moderado. Incrementa la resistencia vascular sistémica y la presión arterial media con mínimo cronotropismo.",
    receptors: { a1: 3, a2: 1, b1: 2, b2: 0, dopa: 0, v1: 0, v2: 0, at1: 0, pde: 0 },
    hemodynamics: { map: "↑↑", co: "↑", svr: "↑↑", hr: "↓/→", pcwp: "→", svo2: "→" },
    dosage: { initialMin: 0.01, initialMax: 0.1, rangeMax: 1.0, unit: "mcg/kg/min", weightBased: true, notes: "Titular cada 2-5 min según PAM objetivo (>= 65 mmHg)." },
    pk: { onset: 1, halfLife: 2.5, route: "Vía Central preferente (periférica transitoria segura)" },
    line: "1ª Línea",
    evidence: "Nivel A (SSC 2026)",
    nedFactor: 1.0,
    preparations: [
      "4 mg en 250 mL SF 0.9% → 16 mcg/mL (Estándar)",
      "8 mg en 250 mL SF 0.9% → 32 mcg/mL (Concentrada)",
      "16 mg en 250 mL SF 0.9% → 64 mcg/mL (Alta concentración - CVC)"
    ],
    indications: [
      "Shock Séptico (1ª línea de elección - SSC 2026)",
      "Shock Neurogénico (1ª línea tras fluidos)",
      "Shock Cardiogénico con hipotensión profunda (puente a inotrópico)",
      "Shock Anafiláctico refractario (2ª línea tras adrenalina)"
    ],
    contraindications: [
      "RELATIVA: Hipovolemia no corregida previa (riesgo de isquemia tisular grave)",
      "RELATIVA: Extravasación periférica (antídoto: fentolamina)"
    ],
    adverseEffects: ["Bradicardia refleja", "Isquemia distal/periférica", "Necrosis cutánea por extravasación", "Hipertensión reactiva"],
    monitoring: ["PAM continua por línea arterial invasiva", "Lactato cada 2-4h", "Diuresis horaria (> 0.5 mL/kg/h)"],
    specialPops: "Embarazo: PRECAUCION (vasoconstricción uterina). Renal/Hepático: sin ajuste requerido.",
    weaning: "Reducir gradualmente 0.01-0.02 mcg/kg/min cada 30-60 min una vez PAM estable y perfusión conservada.",
    warningBox: null
  },
  {
    id: "epinephrine",
    name: "Adrenalina (Epinefrina)",
    nameEn: "Epinephrine",
    namePt: "Adrenalina (Epinefrina)",
    category: "VASOPRESOR",
    subcategory: "CATECOLAMINA",
    mechanism: "Agonista adrenérgico no selectivo potente sobre receptores α1, α2, β1 y β2. A dosis bajas predomina efecto inotrópico y cronotrópico β; a dosis altas predomina vasoconstricción α.",
    receptors: { a1: 3, a2: 1, b1: 3, b2: 3, dopa: 0, v1: 0, v2: 0, at1: 0, pde: 0 },
    hemodynamics: { map: "↑↑", co: "↑↑", svr: "↑↑", hr: "↑↑", pcwp: "↑", svo2: "↑" },
    dosage: { initialMin: 0.01, initialMax: 0.3, rangeMax: 1.0, unit: "mcg/kg/min", weightBased: true, notes: "Anafilaxia: 0.3-0.5 mg IM cara anterolateral muslo. PCR: 1 mg IV cada 3-5 min." },
    pk: { onset: 1, halfLife: 2.5, route: "Vía Central / IM en anafilaxia / Periférica en PCR" },
    line: "1ª Línea (Anafilaxia/PCR) | 3ª Línea (Séptico)",
    evidence: "Nivel A (ACLS 2023 / SSC 2026)",
    nedFactor: 1.0,
    preparations: [
      "4 mg en 250 mL SF 0.9% → 16 mcg/mL (Infusión continua)",
      "1 mg / 10 mL (1:10.000) bolo en PCR / reanimación",
      "0.3 - 0.5 mg IM directo (1:1.000) en anafilaxia"
    ],
    indications: [
      "Shock Anafiláctico (1ª línea obligada e inmediata IM)",
      "Parada Cardiorrespiratoria (1ª línea ACLS)",
      "Shock Séptico refractario (3ª línea cuando NE + Vasopresina son insuficientes)",
      "Shock Cardiogénico refractario con bajo gasto extremo"
    ],
    contraindications: [
      "RELATIVA: Taquiarritmias ventriculares graves preexistentes",
      "RELATIVA: Cardiopatía isquémica aguda no revascularizada"
    ],
    adverseEffects: ["Taquicardia sinusal severa", "Arritmias ventriculares", "Hiperlactatemia metabólica", "Hiperglucemia e hipopotasemia"],
    monitoring: ["ECG continuo con alarma de arritmias", "PAM invasiva", "Glucemia y potasio seriados"],
    specialPops: "Embarazo: uso indicado en anafilaxia o PCR (salvamento materno-fetal).",
    weaning: "Reducir lentamente 0.01-0.05 mcg/kg/min evaluando frecuencia cardíaca y gasto.",
    warningBox: "La epinefrina eleva el lactato sérico por mecanismo metabólico β2 (glucogenólisis muscular), independientemente de la perfusión tisular. No usar el lactato como único criterio de respuesta al administrar epinefrina."
  },
  {
    id: "dopamine",
    name: "Dopamina",
    nameEn: "Dopamine",
    namePt: "Dopamina",
    category: "VASOPRESOR",
    subcategory: "CATECOLAMINA",
    mechanism: "Efecto dosis-dependiente: 1-3 mcg/kg/min (dopaminérgico renal), 3-10 mcg/kg/min (inotrópico β1), 10-20 mcg/kg/min (vasoconstrictor α1).",
    receptors: { a1: 2, a2: 0, b1: 2, b2: 0, dopa: 3, v1: 0, v2: 0, at1: 0, pde: 0 },
    hemodynamics: { map: "↑", co: "↑↑", svr: "↑", hr: "↑↑", pcwp: "↑", svo2: "→" },
    dosage: { initialMin: 2.0, initialMax: 10.0, rangeMax: 20.0, unit: "mcg/kg/min", weightBased: true, notes: "No recomendada como primera línea por alto riesgo arritmogénico." },
    pk: { onset: 2, halfLife: 9, route: "Vía Venosa Central obligatoria" },
    line: "3ª Línea / Restringida",
    evidence: "Nivel B (SSC 2026 - recomendación fuerte en contra de uso rutinario)",
    nedFactor: 0.01,
    preparations: [
      "400 mg en 250 mL SG 5% → 1600 mcg/mL (Estándar)",
      "800 mg en 250 mL SG 5% → 3200 mcg/mL (Concentrada)"
    ],
    indications: [
      "Bradicardia sintomática refractaria a atropina (ACLS)",
      "Hipotensión asociada a bradicardia sinusal y bajo riesgo arrítmico"
    ],
    contraindications: [
      "ABSOLUTA: Taquiarritmias ventriculares o supraventriculares rápidas",
      "ABSOLUTA: Feocromocitoma",
      "RELATIVA: Shock séptico como primera línea (mayor mortalidad que noradrenalina)"
    ],
    adverseEffects: ["Fibrilación auricular", "Taquicardia ventricular", "Isquemia miocárdica", "Náuseas y vómitos"],
    monitoring: ["ECG continuo con monitor de arritmias", "PAM continua"],
    specialPops: "Dosis renal refutada. No usar para prevención ni tratamiento del fracaso renal agudo.",
    weaning: "Reducción progresiva de 2 a 5 mcg/kg/min cada 30-60 min.",
    warningBox: "ESTUDIO DOPAMINE (NEJM 2010): Duplica el riesgo de eventos arrítmicos y demostró mayor mortalidad a 28 días en shock cardiogénico frente a noradrenalina. La 'dosis renal' de dopamina está científicamente refutada."
  },
  {
    id: "dobutamine",
    name: "Dobutamina",
    nameEn: "Dobutamine",
    namePt: "Dobutamina",
    category: "INOTROPICO",
    subcategory: "CATECOLAMINA",
    mechanism: "Agonista selectivo de receptores β1 miocárdicos con incremento del inotropismo y volumen latido. Efecto β2 y α1 débil con vasodilatación neta leve a moderada.",
    receptors: { a1: 1, a2: 0, b1: 3, b2: 2, dopa: 0, v1: 0, v2: 0, at1: 0, pde: 0 },
    hemodynamics: { map: "→/↓", co: "↑↑", svr: "↓", hr: "↑", pcwp: "↓", svo2: "↑" },
    dosage: { initialMin: 2.5, initialMax: 10.0, rangeMax: 20.0, unit: "mcg/kg/min", weightBased: true, notes: "Iniciar a 2.5 mcg/kg/min. Titular en pasos de 2.5 mcg cada 15-30 min." },
    pk: { onset: 2, halfLife: 2.5, route: "Vía Venosa Central" },
    line: "1ª Línea Inotrópico",
    evidence: "Nivel B (ACC/AHA 2025 / SSC 2026)",
    nedFactor: 0.0,
    preparations: [
      "250 mg en 250 mL SF 0.9% o SG 5% → 1000 mcg/mL (Estándar)",
      "500 mg en 250 mL SF 0.9% o SG 5% → 2000 mcg/mL (Concentrada)"
    ],
    indications: [
      "Shock Cardiogénico con bajo gasto (1ª línea inotrópico)",
      "Disfunción miocárdica séptica / Hipocontractilidad con ScvO2 < 70%",
      "Insuficiencia cardíaca aguda descompensada estadio C/D",
      "Bajo gasto tras cirugía cardíaca (post-CEC)"
    ],
    contraindications: [
      "ABSOLUTA: Miocardiopatía hipertrófica obstructiva (HOCM / MHO)",
      "ABSOLUTA: Estenosis aórtica severa sintomática sin soporte mecánico",
      "RELATIVA: Taquicardia severa (FC > 120 lpm)"
    ],
    adverseEffects: ["Taquicardia", "Ectopias ventriculares", "Hipotensión transitoria por vasodilatación", "Incremento de consumo miocárdico de O2"],
    monitoring: ["Frecuencia cardíaca", "PAM continua", "Ecocardiografía a pie de cama", "ScvO2"],
    specialPops: "Disminución de respuesta en pacientes crónicamente tratados con betabloqueantes.",
    weaning: "Reducir 2.5 mcg/kg/min cada 2-4 horas evaluando parámetros de perfusión periférica.",
    warningBox: null
  },
  {
    id: "vasopressin",
    name: "Vasopresina (AVP)",
    nameEn: "Vasopressin",
    namePt: "Vasopressina",
    category: "VASOPRESOR",
    subcategory: "NO_CATECOLAMINA",
    mechanism: "Agonista de receptores V1a vasculares acoplados a proteína Gq/fosfolipasa C, provocando vasoconstricción directa independiente de los receptores adrenérgicos y del pH.",
    receptors: { a1: 0, a2: 0, b1: 0, b2: 0, dopa: 0, v1: 3, v2: 2, at1: 0, pde: 0 },
    hemodynamics: { map: "↑↑", co: "→/↓", svr: "↑↑", hr: "↓", pcwp: "→/↑", svo2: "→" },
    dosage: { initialMin: 0.03, initialMax: 0.03, rangeMax: 0.04, unit: "UI/min", weightBased: false, notes: "DOSIS FIJA de 0.03 UI/min (= 9 mL/h en dilución estándar). No titular hacia arriba para evitar isquemia mesentérica." },
    pk: { onset: 5, halfLife: 15, route: "Vía Venosa Central obligatoria" },
    line: "2ª Línea Vasopresor",
    evidence: "Nivel A (SSC 2026 - cuando NE >= 0.25 mcg/kg/min)",
    nedFactor: 2.5,
    preparations: [
      "20 UI en 100 mL SF 0.9% → 0.2 UI/mL (Velocidad estándar: 9 mL/h = 0.03 UI/min)",
      "40 UI en 100 mL SF 0.9% → 0.4 UI/mL (Restricción hídrica)"
    ],
    indications: [
      "Shock Séptico como 2ª línea añadido a Noradrenalina (SSC 2026)",
      "Shock Vasopléjico post-circulación extracorpórea",
      "Hipotensión vasodilatadora refractaria a catecolaminas"
    ],
    contraindications: [
      "RELATIVA: Cardiopatía isquémica severa no revascularizada",
      "RELATIVA: Insuficiencia vascular periférica severa"
    ],
    adverseEffects: ["Isquemia digital o periférica", "Isquemia mesentérica", "Hiponatremia por efecto V2", "Bradicardia"],
    monitoring: ["Perfusión periférica distal", "Sodio plasmático cada 12-24h", "Signos de dolor abdominal o isquemia esplácnica"],
    specialPops: "Segura en insuficiencia renal; no requiere ajuste de dosis.",
    weaning: "Retirar como segundo vasopresor cuando Noradrenalina < 0.15 mcg/kg/min. Suspender directamente sin escalonar.",
    warningBox: null
  },
  {
    id: "terlipressin",
    name: "Terlipresina",
    nameEn: "Terlipressin",
    namePt: "Terlipressina",
    category: "VASOPRESOR",
    subcategory: "NO_CATECOLAMINA",
    mechanism: "Profármaco sintético análogo de vasopresina con mayor selectividad sobre receptores V1 esplácnicos. Vasoconstricción del lecho esplácnico y reducción de la presión portal.",
    receptors: { a1: 0, a2: 0, b1: 0, b2: 0, dopa: 0, v1: 3, v2: 1, at1: 0, pde: 0 },
    hemodynamics: { map: "↑↑", co: "↓", svr: "↑↑", hr: "↓", pcwp: "↑", svo2: "→" },
    dosage: { initialMin: 0.5, initialMax: 2.0, rangeMax: 4.0, unit: "mg/bolo", weightBased: false, notes: "Bolo IV 1-2 mg cada 4-6h o infusión continua 2-4 mg/día." },
    pk: { onset: 15, halfLife: 120, route: "Vía Central / Periférica de grueso calibre" },
    line: "1ª Línea (SHR / Varices) | 2ª Línea (Shock)",
    evidence: "Nivel A (Guías Cirrosis / ESICM 2024)",
    nedFactor: 0.833,
    preparations: [
      "1 mg en ampolla IV para inyección en bolo cada 4-6h",
      "4 mg en 100 mL SF 0.9% en infusión continua a 2-4 mg/24h"
    ],
    indications: [
      "Síndrome Hepatorrenal tipo 1 (asociado a albúmina IV)",
      "Hemorragia digestiva alta por várices esofágicas",
      "Alternativa a vasopresina en shock séptico en cirróticos"
    ],
    contraindications: [
      "ABSOLUTA: Embarazo (actividad oxitócica y vasoconstrictora)",
      "ABSOLUTA: Arteriopatía periférica grave o isquemia coronaria aguda",
      "RELATIVA: Sobrecarga hídrica / edema agudo de pulmón"
    ],
    adverseEffects: ["Dolor cólico abdominal", "Diarrea motora", "Isquemia digital", "Hiponatremia"],
    monitoring: ["Gases arteriales (vigilar oxigenación)", "Sodio sérico", "Perfusión acra"],
    specialPops: "Contraindicación absoluta durante todo el embarazo.",
    weaning: "Espaciar bolos de 4 a 6 horas y luego a cada 8-12 horas hasta suspensión.",
    warningBox: null
  },
  {
    id: "angiotensin2",
    name: "Angiotensina II (Giapreza™)",
    nameEn: "Angiotensin II",
    namePt: "Angiotensina II",
    category: "VASOPRESOR",
    subcategory: "NO_CATECOLAMINA",
    mechanism: "Hormona peptídica agonista de receptores AT1 acoplados a proteína Gq. Vasoconstricción arteriolar sistémica directa y estimulación de la secreción de aldosterona.",
    receptors: { a1: 0, a2: 0, b1: 0, b2: 0, dopa: 0, v1: 0, v2: 0, at1: 3, pde: 0 },
    hemodynamics: { map: "↑↑", co: "→", svr: "↑↑", hr: "→", pcwp: "→", svo2: "→" },
    dosage: { initialMin: 20.0, initialMax: 80.0, rangeMax: 200.0, unit: "ng/kg/min", weightBased: true, notes: "Iniciar a 20 ng/kg/min. Titular cada 5 min. Dosis máxima 200 ng/kg/min durante primeras 3 horas." },
    pk: { onset: 1, halfLife: 1, route: "Vía Venosa Central obligatoria" },
    line: "3ª Línea (Rescate Vasopléjico)",
    evidence: "Nivel B (ATHOS-3, NEJM 2017 / FDA)",
    nedFactor: 0.1,
    preparations: [
      "2.5 mg (1 vial) en 250 mL o 500 mL SF 0.9% (Concentración: 5000 o 10000 ng/mL)"
    ],
    indications: [
      "Shock Vasodilatador refractario a catecolaminas y vasopresina (ATHOS-3)",
      "Shock Séptico con déficit del sistema renina-angiotensina"
    ],
    contraindications: [
      "ABSOLUTA: Trombosis arterial o venosa activa no tratada",
      "ABSOLUTA: Embarazo"
    ],
    adverseEffects: ["Trombosis venosa profunda y TEP", "Trombocitopenia", "Isquemia periférica", "Hiperglucemia"],
    monitoring: ["Tromboprofilaxis obligatoria con heparina", "Vigilancia de trombosis arterial/venosa"],
    specialPops: "Contraindicada en el embarazo (fetotóxico demostrado).",
    weaning: "Reducir en pasos de 5-15 ng/kg/min cada 15-30 min.",
    warningBox: "Mayor incidencia de eventos tromboembólicos arteriales y venosos demostrado en el ensayo clínico ATHOS-3. Se debe administrar tromboprofilaxis concomitante obligatoria."
  },
  {
    id: "phenylephrine",
    name: "Fenilefrina",
    nameEn: "Phenylephrine",
    namePt: "Fenilefrina",
    category: "VASOPRESOR",
    subcategory: "CATECOLAMINA",
    mechanism: "Agonista selectivo α1 postsináptico puro. Produce vasoconstricción arterial directa con aumento de RVS sin estimulación β miocárdica.",
    receptors: { a1: 3, a2: 0, b1: 0, b2: 0, dopa: 0, v1: 0, v2: 0, at1: 0, pde: 0 },
    hemodynamics: { map: "↑↑", co: "↓", svr: "↑↑", hr: "↓↓", pcwp: "↑", svo2: "↓" },
    dosage: { initialMin: 0.5, initialMax: 2.0, rangeMax: 5.0, unit: "mcg/kg/min", weightBased: true, notes: "Bolo IV lento: 50-100 mcg. Infusión: 0.5-5 mcg/kg/min." },
    pk: { onset: 1, halfLife: 5, route: "Vía Central / Periférica de emergencia" },
    line: "3ª Línea / Escenarios Específicos",
    evidence: "Nivel C (SSC 2026)",
    nedFactor: 0.1,
    preparations: [
      "50 mg en 250 mL SF 0.9% → 200 mcg/mL (Infusión continua)",
      "10 mg en 100 mL SF → 100 mcg/mL (Dilución para bolos en quirófano)"
    ],
    indications: [
      "Hipotensión severa asociada a taquiarritmias rápidas",
      "Miocardiopatía hipertrófica obstructiva (HOCM) con shock",
      "Crisis hipoxémica de Tetralogía de Fallot",
      "Hipotensión post-anestesia neuroaxial / raquídea"
    ],
    contraindications: [
      "ABSOLUTA: Shock Cardiogénico con fallo de bomba primario (aumenta postcarga)",
      "RELATIVA: Bradicardia severa preexistente"
    ],
    adverseEffects: ["Bradicardia sinusal refleja intensa", "Reducción significativa del gasto cardíaco", "Isquemia periférica"],
    monitoring: ["Gasto cardíaco por Doppler o ecocardiografía", "Frecuencia cardíaca"],
    specialPops: "Preferido sobre efedrina en anestesia obstétrica para cesárea.",
    weaning: "Disminuir progresivamente evaluando FC y PAM.",
    warningBox: null
  },
  {
    id: "isoproterenol",
    name: "Isoproterenol (Isoprenalina)",
    nameEn: "Isoproterenol",
    namePt: "Isoproterenol",
    category: "INOTROPICO",
    subcategory: "CATECOLAMINA",
    mechanism: "Agonista β1 y β2 adrenérgico potente puro sin acción sobre receptores α. Aumenta drásticamente la frecuencia cardíaca, contractilidad y reduce las RVS.",
    receptors: { a1: 0, a2: 0, b1: 3, b2: 3, dopa: 0, v1: 0, v2: 0, at1: 0, pde: 0 },
    hemodynamics: { map: "↓/→", co: "↑↑", svr: "↓↓", hr: "↑↑↑", pcwp: "↓", svo2: "↑" },
    dosage: { initialMin: 0.5, initialMax: 2.0, rangeMax: 10.0, unit: "mcg/min", weightBased: false, notes: "Dosis fija en mcg/min: iniciar a 0.5-2 mcg/min y titular según respuesta cronotrópica." },
    pk: { onset: 1, halfLife: 2, route: "Vía Venosa Central" },
    line: "3ª Línea (Bradicardias extremas)",
    evidence: "Nivel C (ACLS 2023)",
    nedFactor: 0.0,
    preparations: [
      "1 mg en 250 mL SG 5% → 4 mcg/mL (Velocidad: 0.5 mcg/min = 7.5 mL/h)"
    ],
    indications: [
      "Bradicardia sinusal extrema o bloqueo AV completo como puente a marcapasos",
      "Torsades de pointes asociado a intervalo QTc prolongado",
      "Intoxicación severa por betabloqueantes"
    ],
    contraindications: [
      "ABSOLUTA: Infarto Agudo de Miocardio (aumenta masivamente consumo de O2)",
      "ABSOLUTA: Taquiarritmias ventriculares"
    ],
    adverseEffects: ["Taquiarritmias severas (TV/FV)", "Isquemia miocárdica", "Hipotensión por vasodilatación β2"],
    monitoring: ["Monitor ECG continuo", "Marcadores de isquemia miocárdica"],
    specialPops: "Usar con extrema cautela en pacientes de edad avanzada o cardiopatía isquémica.",
    weaning: "Retirar tras colocación de marcapasos temporal o transvenoso definitivo.",
    warningBox: null
  },
  {
    id: "milrinone",
    name: "Milrinona",
    nameEn: "Milrinone",
    namePt: "Milrinona",
    category: "INODILADOR",
    subcategory: "INHIBIDOR_PDE",
    mechanism: "Inhibidor selectivo de la fosfodiesterasa-3 (PDE-3) miocárdica y vascular. Aumenta AMPc intracelular con incremento del inotropismo, lusitropismo y vasodilatación sistémica y pulmonar.",
    receptors: { a1: 0, a2: 0, b1: 0, b2: 0, dopa: 0, v1: 0, v2: 0, at1: 0, pde: 3 },
    hemodynamics: { map: "↓", co: "↑↑", svr: "↓↓", hr: "↑", pcwp: "↓↓", svo2: "↑" },
    dosage: { initialMin: 0.125, initialMax: 0.5, rangeMax: 0.75, unit: "mcg/kg/min", weightBased: true, notes: "EVITAR bolo de carga en UCI para prevenir hipotensión severa. Iniciar infusión continua a 0.25-0.375 mcg/kg/min." },
    pk: { onset: 10, halfLife: 150, route: "Vía Venosa Central" },
    line: "2ª Línea Inodilatador",
    evidence: "Nivel B (ACC/AHA 2025)",
    nedFactor: 0.0,
    preparations: [
      "20 mg en 100 mL SF 0.9% → 200 mcg/mL",
      "40 mg en 200 mL SF 0.9% → 200 mcg/mL"
    ],
    indications: [
      "Shock Cardiogénico con resistencias vasculares elevadas ('frío y húmedo')",
      "Fallo Ventricular Derecho agudo con hipertensión pulmonar",
      "Paciente tratado crónicamente con betabloqueantes con shock cardiogénico",
      "Post-cirugía cardíaca con disfunción biventricular"
    ],
    contraindications: [
      "RELATIVA: Hipotensión arterial severa no soportada con vasopresor",
      "ABSOLUTA: Miocardiopatía hipertrófica obstructiva (HOCM)",
      "RELATIVA: Aclaramiento de creatinina < 30 mL/min sin ajuste"
    ],
    adverseEffects: ["Hipotensión arterial profunda", "Arritmias ventriculares y auriculares", "Trombocitopenia"],
    monitoring: ["Función renal (creatinina/ClCr)", "Plaquetas", "PAM continua"],
    specialPops: "Ajuste renal: si ClCr < 30 mL/min, reducir dosis 50%. En hemodiálisis: 0.1-0.2 mcg/kg/min.",
    weaning: "Desescalar muy lentamente (0.05-0.1 mcg/kg/min) debido a su prolongada vida media (2.5 - 3 horas).",
    warningBox: null
  },
  {
    id: "enoximone",
    name: "Enoximona",
    nameEn: "Enoximone",
    namePt: "Enoximona",
    category: "INODILADOR",
    subcategory: "INHIBIDOR_PDE",
    mechanism: "Inhibidor de la fosfodiesterasa-3 con efecto inotrópico positivo y vasodilatador similar a milrinona pero con menor propensión arrítmica.",
    receptors: { a1: 0, a2: 0, b1: 0, b2: 0, dopa: 0, v1: 0, v2: 0, at1: 0, pde: 3 },
    hemodynamics: { map: "↓", co: "↑↑", svr: "↓↓", hr: "↑", pcwp: "↓↓", svo2: "↑" },
    dosage: { initialMin: 5.0, initialMax: 10.0, rangeMax: 20.0, unit: "mcg/kg/min", weightBased: true, notes: "Bolo opcional 0.5-1 mg/kg en 15 min. Infusión 5-20 mcg/kg/min." },
    pk: { onset: 15, halfLife: 300, route: "Vía Venosa Central" },
    line: "3ª Línea Inodilatador",
    evidence: "Nivel C (ESC 2021)",
    nedFactor: 0.0,
    preparations: [
      "100 mg en 100 mL SF 0.9% → 1000 mcg/mL"
    ],
    indications: [
      "Insuficiencia cardíaca refractaria con bajo gasto",
      "Destete difícil de CEC en cirugía cardiovascular"
    ],
    contraindications: ["Hipotensión severa no tratada", "Estenosis aórtica severa"],
    adverseEffects: ["Hipotensión", "Cefalea", "Flebitis si vía periférica"],
    monitoring: ["PAM", "Frecuencia cardíaca", "Diuresis"],
    specialPops: "Ajustar dosis en fallo renal moderado a severo.",
    weaning: "Reducir gradualmente 2.5-5 mcg/kg/min cada 4-6 horas.",
    warningBox: null
  },
  {
    id: "levosimendan",
    name: "Levosimendán",
    nameEn: "Levosimendan",
    namePt: "Levosimendano",
    category: "INODILADOR",
    subcategory: "SENSIBILIZADOR_CALCIO",
    mechanism: "Sensibilizador de calcio: se une a la troponina C en sístole aumentando la fuerza contráctil SIN aumentar el consumo miocárdico de oxígeno. Apertura de canales K-ATP mitocondriales y vasculares.",
    receptors: { a1: 0, a2: 0, b1: 0, b2: 0, dopa: 0, v1: 0, v2: 0, at1: 0, pde: 2 },
    hemodynamics: { map: "↓/→", co: "↑↑", svr: "↓↓", hr: "↑/→", pcwp: "↓↓", svo2: "↑" },
    dosage: { initialMin: 0.05, initialMax: 0.1, rangeMax: 0.2, unit: "mcg/kg/min", weightBased: true, notes: "Infusión continua durante exactamente 24 horas. NO administrar bolo de carga si PAM < 100 mmHg." },
    pk: { onset: 10, halfLife: 60, route: "Vía Central / Periférica segura" },
    line: "2ª Línea Inodilatador",
    evidence: "Nivel B (ESICM 2024 / ESC 2021)",
    nedFactor: 0.0,
    preparations: [
      "12.5 mg en 250 mL SG 5% → 50 mcg/mL (Uso exclusivo con Suero Glucosado)",
      "12.5 mg en 500 mL SG 5% → 25 mcg/mL (Para infusión periférica)"
    ],
    indications: [
      "Insuficiencia cardíaca aguda descompensada con bajo gasto",
      "Shock Cardiogénico en pacientes betabloqueados crónicos",
      "Fallo ventricular derecho con hipertensión pulmonar",
      "Síndrome de bajo gasto post-CEC en cirugía cardíaca"
    ],
    contraindications: [
      "ABSOLUTA: Hipotensión arterial severa (PAM < 50 mmHg)",
      "ABSOLUTA: Insuficiencia renal grave (ClCr < 30 mL/min) o hepática grave",
      "ABSOLUTA: Obstrucción mecánica del llenado/vaciado ventricular"
    ],
    adverseEffects: ["Hipotensión", "Fibrilación auricular de novo", "Hipopotasemia", "Cefalea"],
    monitoring: ["Potasio sérico antes y durante la infusión", "PAM continua", "ECG continuo"],
    specialPops: "Contraindicado en insuficiencia renal y hepática graves.",
    weaning: "No requiere desescalada: al terminar las 24h se detiene; el metabolito activo OR-1896 mantiene el efecto 7 a 9 días.",
    warningBox: "El metabolito activo OR-1896 posee una vida media de 70 a 80 horas. El efecto hemodinámico y la vasodilatación persisten durante 7 a 9 días tras suspender la infusión de 24 horas."
  },
  {
    id: "sodium_nitroprusside",
    name: "Nitroprusiato de Sodio",
    nameEn: "Sodium Nitroprusside",
    namePt: "Nitroprussiato de Sódio",
    category: "VASODILATADOR",
    subcategory: "DONANTE_NO",
    mechanism: "Potente donante directo de óxido nítrico. Produce vasodilatación arteriolar y venosa balanceada e inmediata, con reducción drástica de la postcarga y precarga.",
    receptors: { a1: 0, a2: 0, b1: 0, b2: 0, dopa: 0, v1: 0, v2: 0, at1: 0, pde: 0 },
    hemodynamics: { map: "↓↓", co: "↑/→", svr: "↓↓", hr: "↑", pcwp: "↓↓", svo2: "→" },
    dosage: { initialMin: 0.25, initialMax: 2.0, rangeMax: 10.0, unit: "mcg/kg/min", weightBased: true, notes: "Iniciar a 0.25-0.5 mcg/kg/min. Titular cada 2-5 min con línea arterial invasiva obligatoria." },
    pk: { onset: 1, halfLife: 2, route: "Vía Venosa Central obligatoria" },
    line: "1ª Línea (Emergencia Hipertensiva)",
    evidence: "Nivel B (ESC HTA 2023)",
    nedFactor: 0.0,
    preparations: [
      "50 mg en 250 mL SG 5% → 200 mcg/mL (PROTEGER DE LA LUZ con cubierta opaca)"
    ],
    indications: [
      "Emergencia hipertensiva con daño de órgano diana (edema pulmonar, disección aórtica)",
      "Insuficiencia cardíaca aguda con postcarga extremadamente elevada",
      "Eclampsia severa refractaria"
    ],
    contraindications: [
      "ABSOLUTA: Hipotensión arterial",
      "ABSOLUTA: Hipertensión intracraneal (aumenta PIC por vasodilatación cerebral)",
      "RELATIVA: Insuficiencia renal o hepática avanzada (acúmulo de tiocianato/cianuro)"
    ],
    adverseEffects: ["Intoxicación por cianuro/tiocianato", "Acidosis láctica severa", "Robo coronario", "Hipotensión brusca"],
    monitoring: ["Lactato sérico seriado", "Gases arteriales (gap aniónico)", "Línea arterial invasiva continua"],
    specialPops: "Contraindicado en insuficiencia renal grave prolongada (> 48h). Antídoto: Hidroxocobalamina 5g.",
    weaning: "Reducir dosis gradualmente para prevenir hipertensión de rebote.",
    warningBox: "Riesgo de intoxicación mortal por cianuro con dosis > 10 mcg/kg/min o infusiones > 72 horas. Monitorizar acidosis metabólica inexplicable y lactato. Antídoto específico: Hidroxocobalamina 5 g IV."
  },
  {
    id: "nitroglycerin",
    name: "Nitroglicerina (TNT)",
    nameEn: "Nitroglycerin",
    namePt: "Nitroglicerina",
    category: "VASODILATADOR",
    subcategory: "DONANTE_NO",
    mechanism: "Venodilatador predominante que estimula la formación de GMPc. A dosis bajas (< 50 mcg/min) reduce la precarga; a dosis altas (> 100 mcg/min) produce dilatación arteriolar y coronaria.",
    receptors: { a1: 0, a2: 0, b1: 0, b2: 0, dopa: 0, v1: 0, v2: 0, at1: 0, pde: 0 },
    hemodynamics: { map: "↓", co: "→/↑", svr: "↓", hr: "↑/→", pcwp: "↓↓", svo2: "→" },
    dosage: { initialMin: 5.0, initialMax: 50.0, rangeMax: 400.0, unit: "mcg/min", weightBased: false, notes: "Dosis fija en mcg/min. Iniciar a 5-10 mcg/min y titular cada 3-5 min." },
    pk: { onset: 1, halfLife: 3, route: "Vía Central / Periférica (tubuladura sin PVC)" },
    line: "1ª Línea (Isquemia / EAP)",
    evidence: "Nivel A (ESC SCA 2023 / ACC-AHA)",
    nedFactor: 0.0,
    preparations: [
      "50 mg en 250 mL SG 5% o SF 0.9% → 200 mcg/mL (Usar equipos de infusión de polietileno)"
    ],
    indications: [
      "Síndrome coronario agudo / Angina inestable con isquemia persistente",
      "Edema Agudo de Pulmón cardiogénico hipertenso",
      "Crisis hipertensiva perioperatoria"
    ],
    contraindications: [
      "ABSOLUTA: Uso de inhibidores de PDE-5 (sildenafilo en 24h, tadalafilo en 48h)",
      "ABSOLUTA: Infarto de ventrículo derecho o miocardiopatía restrictiva",
      "ABSOLUTA: Presión arterial sistólica < 90 mmHg"
    ],
    adverseEffects: ["Cefalea pulsátil intensa", "Hipotensión brusca con bradicardia paradójica", "Taquifilaxia (tolerancia en 24-48h)"],
    monitoring: ["Presión arterial no invasiva / invasiva", "Alivio del dolor precordial"],
    specialPops: "Tolerancia farmacológica: requiere períodos ventana libres de nitratos.",
    weaning: "Retirar progresivamente para evitar angina o hipertensión de rebote.",
    warningBox: "CONTRAINDICACIÓN ABSOLUTA CON INHIBIDORES DE LA PDE-5 (Sildenafilo, Tadalafilo, Vardenafilo): provoca vasodilatación sinérgica irreversible y colapso cardiovascular mortal."
  },
  {
    id: "clevidipine",
    name: "Clevidipino",
    nameEn: "Clevidipine",
    namePt: "Clevidipino",
    category: "VASODILATADOR",
    subcategory: "BCC_DIHIDROPIRIDINA",
    mechanism: "Bloqueador de canales de calcio de 3ª generación selectivo arteriolar. Metabolizado por esterasas sanguíneas con vida media de 1 minuto, permitiendo titulación ultraprecisa.",
    receptors: { a1: 0, a2: 0, b1: 0, b2: 0, dopa: 0, v1: 0, v2: 0, at1: 0, pde: 0 },
    hemodynamics: { map: "↓↓", co: "→/↑", svr: "↓↓", hr: "↑/→", pcwp: "→", svo2: "→" },
    dosage: { initialMin: 1.0, initialMax: 2.0, rangeMax: 32.0, unit: "mg/h", weightBased: false, notes: "Iniciar a 1-2 mg/h. Doblar la dosis cada 90 segundos hasta alcanzar PAM objetivo." },
    pk: { onset: 2, halfLife: 1, route: "Vía Central o Periférica" },
    line: "1ª Línea (Perioperatorio Cardíaco)",
    evidence: "Nivel A (AHA / ESC HTA 2023)",
    nedFactor: 0.0,
    preparations: [
      "Emulsión lipídica lista para uso: 0.5 mg/mL (viales de 50 mL y 100 mL)"
    ],
    indications: [
      "Emergencias hipertensivas perioperatorias en cirugía cardíaca y vascular",
      "Control estricto de PAM post-revascularización coronaria o disección aórtica"
    ],
    contraindications: [
      "ABSOLUTA: Alergia a la soja, productos de soja o huevo (emulsión lipídica)",
      "ABSOLUTA: Trastornos severos del metabolismo lipídico"
    ],
    adverseEffects: ["Hipotensión", "Taquicardia refleja", "Sobrecarga lipídica en infusiones prolongadas"],
    monitoring: ["PAM en tiempo real", "Triglicéridos séricos si infusión > 24h"],
    specialPops: "No se acumula en insuficiencia renal ni hepática (metabolismo plasmático).",
    weaning: "Suspensión rápida sin rebote gracias a su ultracorta vida media.",
    warningBox: null
  },
  {
    id: "nicardipine",
    name: "Nicardipino",
    nameEn: "Nicardipine",
    namePt: "Nicardipino",
    category: "VASODILATADOR",
    subcategory: "BCC_DIHIDROPIRIDINA",
    mechanism: "Bloqueador de canales de calcio dihidropiridínico con potente selectividad por la vasculatura cerebral y coronaria sin depresión miocárdica.",
    receptors: { a1: 0, a2: 0, b1: 0, b2: 0, dopa: 0, v1: 0, v2: 0, at1: 0, pde: 0 },
    hemodynamics: { map: "↓↓", co: "→/↑", svr: "↓↓", hr: "↑/→", pcwp: "→", svo2: "→" },
    dosage: { initialMin: 5.0, initialMax: 10.0, rangeMax: 15.0, unit: "mg/h", weightBased: false, notes: "Iniciar a 5 mg/h. Aumentar 2.5 mg/h cada 5-15 min hasta objetivo. Mantenimiento: 3 mg/h." },
    pk: { onset: 5, halfLife: 120, route: "Vía Central preferente (flebitis periférica)" },
    line: "1ª Línea (Emergencia Neurológica)",
    evidence: "Nivel A (AHA/ASA Stroke 2021)",
    nedFactor: 0.0,
    preparations: [
      "25 mg en 250 mL SF 0.9% → 0.1 mg/mL",
      "Ampoletas de 25 mg / 10 mL para dilución"
    ],
    indications: [
      "Emergencia hipertensiva neurológica: ACV hemorrágico, HSA, ACV isquémico tributario de lisis",
      "Emergencia hipertensiva general"
    ],
    contraindications: [
      "ABSOLUTA: Estenosis aórtica severa",
      "RELATIVA: Insuficiencia cardíaca avanzada descompensada"
    ],
    adverseEffects: ["Cefalea", "Flebitis en infusión periférica", "Rubor facial", "Taquicardia refleja"],
    monitoring: ["PAM estricta con límites neurológicos (ej. < 140 mmHg en hemorragia intracraneal)"],
    specialPops: "Cambiar sitio de infusión periférica cada 12h para prevenir flebitis.",
    weaning: "Reducir progresivamente a 3 mg/h antes de iniciar antihipertensivos orales.",
    warningBox: null
  },
  {
    id: "hydralazine_iv",
    name: "Hidralazina IV",
    nameEn: "Hydralazine IV",
    namePt: "Hidralazina IV",
    category: "VASODILATADOR",
    subcategory: "VASODILATADOR_ARTERIOLAR",
    mechanism: "Vasodilatador arteriolar periférico directo que disminuye la resistencia vascular sistémica mediante apertura de canales de K+ e hiperpolarización del músculo liso.",
    receptors: { a1: 0, a2: 0, b1: 0, b2: 0, dopa: 0, v1: 0, v2: 0, at1: 0, pde: 0 },
    hemodynamics: { map: "↓↓", co: "↑", svr: "↓↓", hr: "↑↑", pcwp: "→", svo2: "→" },
    dosage: { initialMin: 5.0, initialMax: 10.0, rangeMax: 20.0, unit: "mg/bolo", weightBased: false, notes: "Bolo IV lento (5-10 mg en 2 min). Repetir a los 20-30 min si PAM no responde." },
    pk: { onset: 15, halfLife: 180, route: "Vía Intravenosa lenta" },
    line: "1ª Línea (Preeclampsia / Eclampsia)",
    evidence: "Nivel A (ESC Embarazo 2022 / ACOG)",
    nedFactor: 0.0,
    preparations: [
      "20 mg en ampolla. Disolver en 10 mL SF 0.9% → 2 mg/mL para bolo lento"
    ],
    indications: [
      "Emergencia hipertensiva en el embarazo (Preeclampsia grave y Eclampsia)",
      "Hipertensión severa refractaria postparto"
    ],
    contraindications: [
      "ABSOLUTA: Disección aórtica aguda (taquicardia refleja y aumento de dP/dt shear stress)",
      "ABSOLUTA: Cardiopatía isquémica aguda"
    ],
    adverseEffects: ["Taquicardia refleja importante", "Cefalea intensa", "Palpitaciones", "Náuseas"],
    monitoring: ["Frecuencia cardíaca materna y monitorización fetal continua"],
    specialPops: "Fármaco con amplia evidencia de seguridad materno-fetal en obstetricia crítica.",
    weaning: "Transición a antihipertensivos orales (Labetalol, Nifedipino).",
    warningBox: null
  },
  {
    id: "phentolamine",
    name: "Fentolamina",
    nameEn: "Phentolamine",
    namePt: "Fentolamina",
    category: "VASODILATADOR",
    subcategory: "BLOQUEADOR_ALFA",
    mechanism: "Antagonista competitivo no selectivo de receptores adrenérgicos α1 y α2. Bloquea la vasoconstricción inducida por catecolaminas circulantes.",
    receptors: { a1: 3, a2: 3, b1: 0, b2: 0, dopa: 0, v1: 0, v2: 0, at1: 0, pde: 0 },
    hemodynamics: { map: "↓↓", co: "↑", svr: "↓↓", hr: "↑↑", pcwp: "↓", svo2: "→" },
    dosage: { initialMin: 1.0, initialMax: 5.0, rangeMax: 15.0, unit: "mg/bolo", weightBased: false, notes: "Crisis feocromocitoma: 2.5-5 mg IV bolo. Extravasación: 5-10 mg en 10 mL SF infiltrado localmente." },
    pk: { onset: 2, halfLife: 20, route: "Vía IV o Infiltración Subcutánea local" },
    line: "1ª Línea (Feocromocitoma / Extravasación)",
    evidence: "Nivel B (ESC 2022)",
    nedFactor: 0.0,
    preparations: [
      "10 mg en ampolla. Disolver en 10 mL SF 0.9% para bolo o infiltración dérmica"
    ],
    indications: [
      "Crisis hipertensiva por Feocromocitoma o exceso de catecolaminas",
      "Antídoto de rescate tisular por extravasación de Noradrenalina o Dopamina",
      "Crisis hipertensiva por interacción de IMAO con tiramina"
    ],
    contraindications: ["Hipotensión arterial", "Infarto de miocardio reciente"],
    adverseEffects: ["Hipotensión ortostática profunda", "Taquicardia severa y arritmias"],
    monitoring: ["Línea arterial en crisis de feocromocitoma", "Inspección de tejido extravasado"],
    specialPops: "Tratamiento de emergencia ante necrosis tisular por extravasación en las primeras 12h.",
    weaning: "Paso a alfabloqueante oral (Fenoxibenzamina / Doxazosina).",
    warningBox: null
  },
  {
    id: "fenoldopam",
    name: "Fenoldopam",
    nameEn: "Fenoldopam",
    namePt: "Fenoldopam",
    category: "VASODILATADOR",
    subcategory: "AGONISTA_D1",
    mechanism: "Agonista selectivo de receptores dopaminérgicos D1 postsinápticos. Induce vasodilatación arteriolar sistémica y vasodilatación selectiva renal con aumento del filtrado y natriuresis.",
    receptors: { a1: 0, a2: 0, b1: 0, b2: 0, dopa: 3, v1: 0, v2: 0, at1: 0, pde: 0 },
    hemodynamics: { map: "↓↓", co: "→/↑", svr: "↓↓", hr: "↑/→", pcwp: "↓", svo2: "→" },
    dosage: { initialMin: 0.01, initialMax: 0.3, rangeMax: 1.6, unit: "mcg/kg/min", weightBased: true, notes: "Iniciar a 0.05-0.1 mcg/kg/min. Titular cada 15-20 min." },
    pk: { onset: 5, halfLife: 5, route: "Vía Venosa Central" },
    line: "2ª Línea (Emergencia con Disfunción Renal)",
    evidence: "Nivel B (AHA HTA 2022)",
    nedFactor: 0.0,
    preparations: [
      "10 mg en 250 mL SF 0.9% → 40 mcg/mL"
    ],
    indications: [
      "Emergencia hipertensiva severa con daño renal agudo asociado",
      "Control de presión en pacientes críticos con riesgo de nefrotoxicidad"
    ],
    contraindications: ["ABSOLUTA: Glaucoma de ángulo cerrado (aumenta presión intraocular)", "Hipotensión"],
    adverseEffects: ["Hipotensión", "Aumento de presión intraocular", "Hipopotasemia", "Cefalea"],
    monitoring: ["Diuresis horaria", "Presión intraocular si antecedente oftalmológico"],
    specialPops: "Excelente perfil en pacientes con insuficiencia renal establecida.",
    weaning: "Retirar progresivamente tras normalización de PAM.",
    warningBox: null
  },
  {
    id: "hydrocortisone",
    name: "Hidrocortisona",
    nameEn: "Hydrocortisone",
    namePt: "Hidrocortisona",
    category: "ADYUVANTE",
    subcategory: "CORTICOIDE",
    mechanism: "Glucocorticoide que revierte la insuficiencia suprarrenal relativa en sepsis e incrementa la transcripción y expresión de receptores adrenérgicos vasculares.",
    receptors: { a1: 0, a2: 0, b1: 0, b2: 0, dopa: 0, v1: 0, v2: 0, at1: 0, pde: 0 },
    hemodynamics: { map: "↑", co: "→", svr: "↑", hr: "→", pcwp: "→", svo2: "→" },
    dosage: { initialMin: 200.0, initialMax: 200.0, rangeMax: 300.0, unit: "mg/día", weightBased: false, notes: "200 mg/día en infusión continua o bolos de 50 mg IV cada 6 horas." },
    pk: { onset: 60, halfLife: 90, route: "Vía Intravenosa" },
    line: "2ª Línea Adyuvante (Séptico)",
    evidence: "Nivel A (SSC 2026 / APROCCHSS, NEJM 2018)",
    nedFactor: 0.0,
    preparations: [
      "200 mg en 500 mL SF 0.9% para infusión de 24 horas",
      "100 mg reconstituido en 2 mL para bolos de 50 mg c/6h"
    ],
    indications: [
      "Shock Séptico refractario con requerimiento de Noradrenalina >= 0.25 mcg/kg/min",
      "Insuficiencia suprarrenal aguda en paciente crítico",
      "Crisis addisoniana en contexto de estrés fisiológico"
    ],
    contraindications: ["Infección fúngica sistémica no tratada (relativa en urgencia extrema)"],
    adverseEffects: ["Hiperglucemia (requiere protocolo de insulina)", "Hipernatremia", "Inmunosupresión tardía"],
    monitoring: ["Glucemia capilar cada 2-4 horas", "Electrólitos séricos"],
    specialPops: "Reduce tiempo de desconexión de vasopresores y estancia en UCI.",
    weaning: "Retirar progresivamente una vez suspendidos los vasopresores. No suspender abruptamente.",
    warningBox: null
  },
  {
    id: "methylene_blue",
    name: "Azul de Metileno",
    nameEn: "Methylene Blue",
    namePt: "Azul de Metileno",
    category: "ADYUVANTE",
    subcategory: "INHIBIDOR_NOS",
    mechanism: "Inhibidor directo de la óxido nítrico sintasa inducible (iNOS) y de la guanilato ciclasa soluble (sGC). Bloquea la vía NO-GMPc revirtiendo la vasoplegia refractaria.",
    receptors: { a1: 0, a2: 0, b1: 0, b2: 0, dopa: 0, v1: 0, v2: 0, at1: 0, pde: 0 },
    hemodynamics: { map: "↑↑", co: "→", svr: "↑↑", hr: "→", pcwp: "→", svo2: "→" },
    dosage: { initialMin: 1.0, initialMax: 2.0, rangeMax: 3.0, unit: "mg/kg", weightBased: true, notes: "Bolo IV lento de 1-2 mg/kg en 30-60 min. Se puede continuar con infusión de 0.25-1 mg/kg/h." },
    pk: { onset: 20, halfLife: 360, route: "Vía Venosa Central" },
    line: "3ª Línea (Rescate en Vasoplegia)",
    evidence: "Nivel C (Consenso Expertos / ESICM)",
    nedFactor: 0.0,
    preparations: [
      "Ampollas al 1% (10 mg/mL). Dosis calculada diluida en 100 mL SG 5% o SF 0.9%"
    ],
    indications: [
      "Síndrome Vasopléjico post-cirugía cardíaca con CEC",
      "Shock Séptico refractario extremo a triple soporte vasopresor",
      "Shock anafiláctico resistente a adrenalina"
    ],
    contraindications: [
      "ABSOLUTA: Deficiencia congénita de Glucosa-6-Fosfato Deshidrogenasa (G6PD) → hemólisis masiva",
      "ABSOLUTA: Uso concomitante de fármacos serotoninérgicos (ISRS, IRSN, IMAO) → Síndrome Serotoninérgico",
      "RELATIVA: Insuficiencia renal severa"
    ],
    adverseEffects: ["Coloración azulada de piel y orina", "Interferencia con pulsioximetría (SpO2)", "Vasoconstricción pulmonar excesiva"],
    monitoring: ["CO-OXIMETRÍA ARTERIAL (la pulsioximetría de pulso arroja valores falsos de hipoxemia)"],
    specialPops: "Descartar antecedentes de déficit de favismo/G6PD antes de administrar.",
    weaning: "Retirar infusión tras estabilización hemodinámica (máximo 24 horas).",
    warningBox: "Interfiere intensamente con los pulsioxímetros de cabecera generando lecturas falsas de hipoxemia severa (caída de SpO2 al 85% por absorción óptica a 660 nm). Usar co-oximetría arterial. PROHIBIDO en pacientes bajo tratamiento con antidepresivos ISRS/IMAO por riesgo de Síndrome Serotoninérgico fatal."
  },
  {
    id: "hydroxocobalamin",
    name: "Hidroxocobalamina (Vitamina B12)",
    nameEn: "Hydroxocobalamin",
    namePt: "Hidroxocobalamina",
    category: "ADYUVANTE",
    subcategory: "SECUESTRADOR_NO",
    mechanism: "Secuestrador directo del óxido nítrico endotelial formando nitrosilcobalamina e inhibidor de la guanilato ciclasa. Actúa además como quelante potente de iones cianuro.",
    receptors: { a1: 0, a2: 0, b1: 0, b2: 0, dopa: 0, v1: 0, v2: 0, at1: 0, pde: 0 },
    hemodynamics: { map: "↑↑", co: "→", svr: "↑↑", hr: "→", pcwp: "→", svo2: "→" },
    dosage: { initialMin: 5.0, initialMax: 5.0, rangeMax: 15.0, unit: "g/bolo", weightBased: false, notes: "5 g IV en infusión de 15 minutos. Puede repetirse una 2ª dosis si la vasoplegia persiste." },
    pk: { onset: 10, halfLife: 1800, route: "Vía Intravenosa" },
    line: "3ª Línea (Rescate en Vasoplegia / Cianuro)",
    evidence: "Nivel C (Vasoplegia) / Nivel A (Intoxicación Cianuro)",
    nedFactor: 0.0,
    preparations: [
      "Kit Cyanokit (5 g en polvo liofilizado reconstituido en 200 mL SF 0.9%)"
    ],
    indications: [
      "Vasoplegia refractaria post-CEC (alternativa a azul de metileno si toma ISRS)",
      "Intoxicación aguda por cianuro (humo de incendios industriales)",
      "Intoxicación por nitroprusiato de sodio en UCI"
    ],
    contraindications: ["Sin contraindicaciones absolutas en el contexto de paro o vasoplegia refractaria"],
    adverseEffects: ["Coloración rojo vino intensa de piel, mucosas y orina (duración 48h)", "Hipertensión transitoria", "Reacción alérgica"],
    monitoring: ["Advertir al laboratorio: altera espectrofotometría de creatinina, bilirrubina y lactato"],
    specialPops: "Extraer muestras analíticas de sangre y orina ANTES de iniciar la infusión.",
    weaning: "Dosis única o repetida; no requiere infusión continua.",
    warningBox: "Provoca cromaturia y coloración rojo-púrpura intensa de fluidos biológicos. Interfiere masivamente con los analizadores de laboratorio hospitalario durante 24 a 48 horas (falsas elevaciones o disminuciones de lactato, creatinina, bilirrubina, AST y carboxihemoglobina)."
  }
];

// --------------------------------------------------------------------------
// 3. PROTOCOLOS DE SHOCK (6 ESCENARIOS COMPLETOS CON ÁRBOLES DE DECISIÓN)
// --------------------------------------------------------------------------
const SHOCK_PROTOCOLS = {
  septic: {
    title: "Shock Séptico (Distributivo - SSC 2026)",
    title_en: "Septic Shock (Distributive - SSC 2026)",
    title_pt: "Choque Séptico (Distributivo - SSC 2026)",
    initialStep: "septic_1",
    steps: {
      septic_1: {
        title: "Paso 1: Diagnóstico y Carga Volémica Inicial",
        title_en: "Step 1: Diagnosis & Initial Fluid Resuscitation",
        title_pt: "Passo 1: Diagnóstico e Ressuscitação Volémica Inicial",
        desc: "Infección confirmada o sospechada + PAM < 65 mmHg o Lactato > 2.0 mmol/L. Administrar cristaloides balanceados 30 mL/kg en las primeras 3 horas. Evaluar respuesta con parámetros dinámicos (VPP, PLR, Ecocardiografía).",
        desc_en: "Confirmed or suspected infection + MAP < 65 mmHg or Lactate > 2.0 mmol/L. Administer balanced crystalloids 30 mL/kg in the first 3 hours. Assess fluid responsiveness with dynamic measures (PPV, PLR, Echocardiography).",
        desc_pt: "Infeção confirmada ou suspeita + PAM < 65 mmHg ou Lactato > 2.0 mmol/L. Administrar 30 mL/kg de cristaloides balanceados nas primeiras 3 horas. Avaliar resposta com parâmetros dinâmicos (VPP, PLR, Ecocardiografia).",
        targetMap: "65 – 75 mmHg",
        drugs: [],
        question: "¿Persiste PAM < 65 mmHg tras reanimación inicial con fluidos?",
        question_en: "Does MAP remain < 65 mmHg despite initial fluid resuscitation?",
        question_pt: "Persiste PAM < 65 mmHg após ressuscitação inicial com fluidos?",
        yes: "septic_2",
        no: "septic_stable"
      },
      septic_2: {
        title: "Paso 2: Noradrenalina de 1ª Línea",
        title_en: "Step 2: 1st-Line Norepinephrine",
        title_pt: "Passo 2: Noradrenalina de 1ª Linha",
        desc: "Iniciar Noradrenalina precozmente (incluso por vía periférica segura temporal). Titular dosis de 0.01 a 0.25 mcg/kg/min para sostener PAM >= 65 mmHg.",
        desc_en: "Initiate Norepinephrine early (safe peripheral venous access permitted temporarily). Titrate dose from 0.01 to 0.25 mcg/kg/min to maintain MAP >= 65 mmHg.",
        desc_pt: "Iniciar Noradrenalina precocemente (via periférica segura permitida temporariamente). Titular dose de 0.01 a 0.25 mcg/kg/min para manter PAM >= 65 mmHg.",
        targetMap: "65 – 75 mmHg",
        drugs: ["norepinephrine"],
        question: "¿Requerimiento de Noradrenalina escala a >= 0.25 mcg/kg/min?",
        question_en: "Does Norepinephrine requirement escalate to >= 0.25 mcg/kg/min?",
        question_pt: "A dose de Noradrenalina escala para >= 0.25 mcg/kg/min?",
        yes: "septic_3",
        no: "septic_stable"
      },
      septic_3: {
        title: "Paso 3: Vasopresina 0.03 UI/min + Hidrocortisona",
        title_en: "Step 3: Fixed-Dose Vasopressin 0.03 IU/min + Hydrocortisone",
        title_pt: "Passo 3: Vasopressina 0.03 UI/min + Hidrocortisona",
        desc: "Añadir Vasopresina a dosis FIJA de 0.03 UI/min (no titular) como ahorrador de catecolaminas. Iniciar Hidrocortisona 200 mg/día (infusión continua o 50 mg cada 6h).",
        desc_en: "Add Vasopressin at a FIXED dose of 0.03 IU/min (do not titrate) as catecholamine-sparing agent. Initiate Hydrocortisone 200 mg/day (continuous infusion or 50 mg IV q6h).",
        desc_pt: "Adicionar Vasopressina em dose FIXA de 0.03 UI/min (não titular) como poupadora de catecolaminas. Iniciar Hidrocortisona 200 mg/dia (infusão contínua ou 50 mg a cada 6h).",
        targetMap: "65 – 75 mmHg",
        drugs: ["vasopressin", "hydrocortisone"],
        question: "¿Persiste shock refractario o Dosis Equivalente NED > 0.5 mcg/kg/min?",
        question_en: "Does refractory shock persist or Norepinephrine Equivalent Dose (NED) > 0.5 mcg/kg/min?",
        question_pt: "Persiste choque refratário ou Dose Equivalente de Norepinefrina (NED) > 0.5 mcg/kg/min?",
        yes: "septic_4",
        no: "septic_stable"
      },
      septic_4: {
        title: "Paso 4: Adrenalina / Angiotensina II + Dobutamina",
        title_en: "Step 4: Epinephrine / Angiotensin II + Dobutamine",
        title_pt: "Passo 4: Adrenalina / Angiotensina II + Dobutamina",
        desc: "Evaluar función ventricular con ecocardiografía. Si existe disfunción sistólica o bajo gasto (ScvO2 < 70%), añadir Dobutamina (2.5-10 mcg/kg/min). Si predomina vasoplegia extrema, añadir Adrenalina o Angiotensina II.",
        desc_en: "Assess ventricular function with bedside echocardiography. If myocardial systolic dysfunction or low cardiac output (ScvO2 < 70%), add Dobutamine (2.5-10 mcg/kg/min). If extreme vasoplegia predominates, add Epinephrine or Angiotensin II.",
        desc_pt: "Avaliar função ventricular com ecocardiografia. Se houver disfunção sistólica ou baixo débito (ScvO2 < 70%), adicionar Dobutamina (2.5-10 mcg/kg/min). Se predominar vasoplegia extrema, adicionar Adrenalina ou Angiotensina II.",
        targetMap: "65 – 75 mmHg",
        drugs: ["epinephrine", "dobutamine", "angiotensin2"],
        question: "¿Shock vasopléjico ultra-refractario?",
        question_en: "Ultra-refractory vasoplegic shock?",
        question_pt: "Choque vasoplégico ultra-refratário?",
        yes: "septic_5",
        no: "septic_stable"
      },
      septic_5: {
        title: "Paso 5: Terapia de Rescate en Vasoplegia",
        title_en: "Step 5: Vasoplegia Rescue Therapies",
        title_pt: "Passo 5: Terapia de Resgate na Vasoplegia",
        desc: "Activar protocolo de rescate: Azul de Metileno (1-2 mg/kg IV en 30 min) o Hidroxocobalamina 5 g IV en 15 min. Considerar inicio de hemoadsorción de citoquinas o ECMO venoarterial si etiología reversible.",
        desc_en: "Activate rescue protocol: Methylene Blue (1-2 mg/kg IV over 30 min) or Hydroxocobalamin 5 g IV over 15 min. Consider cytokine hemoadsorption or VA-ECMO if reversible etiology.",
        desc_pt: "Ativar protocolo de resgate: Azul de Metileno (1-2 mg/kg IV em 30 min) ou Hidroxocobalamina 5 g IV em 15 min. Avaliar hemoadsorção de citocinas ou VA-ECMO se etiologia reversível.",
        targetMap: "65 – 75 mmHg",
        drugs: ["methylene_blue", "hydroxocobalamin"],
        question: null,
        terminal: "Mantener monitorización estrecha de perfusión tisular, aclaramiento de lactato y co-oximetría arterial.",
        terminal_en: "Maintain continuous monitoring of tissue perfusion, lactate clearance, and arterial co-oximetry.",
        terminal_pt: "Manter monitorização contínua da perfusão tecidual, clareamento de lactato e co-oximetria arterial."
      },
      septic_stable: {
        title: "Estabilización y Desescalada Gradual (Weaning)",
        title_en: "Stabilization & Gradual Weaning",
        title_pt: "Estabilização e Desmame Gradual (Weaning)",
        desc: "PAM >= 65 mmHg sostenida con lactato en descenso y diuresis > 0.5 mL/kg/h. Retirar vasopresores secundarios manteniendo noradrenalina; reducir noradrenalina 0.01-0.02 mcg/kg/min cada 30-60 min.",
        desc_en: "Sustained MAP >= 65 mmHg with falling lactate and urine output > 0.5 mL/kg/h. Discontinue secondary vasopressors while maintaining norepinephrine; taper norepinephrine by 0.01-0.02 mcg/kg/min every 30-60 min.",
        desc_pt: "PAM >= 65 mmHg sustentada com lactato em queda e diurese > 0.5 mL/kg/h. Retirar vasopressores secundários mantendo noradrenalina; desmamar noradrenalina 0.01-0.02 mcg/kg/min a cada 30-60 min.",
        targetMap: "65 – 75 mmHg",
        drugs: ["norepinephrine"],
        question: null,
        terminal: "Objetivo hemodinámico alcanzado. Continuar vigilancia estrecha de perfusión periférica.",
        terminal_en: "Hemodynamic goal achieved. Continue vigilant monitoring of peripheral tissue perfusion.",
        terminal_pt: "Alvo hemodinâmico atingido. Continuar vigilância rigorosa da perfusão periférica."
      }
    }
  },
  cardiogenic_ami: {
    title: "Shock Cardiogénico (IAM / Fallo de Bomba - ACC/AHA 2025)",
    title_en: "Cardiogenic Shock (AMI / Pump Failure - ACC/AHA 2025)",
    title_pt: "Choque Cardiogênico (IAM / Falência de Bomba - ACC/AHA 2025)",
    initialStep: "cardio_1",
    steps: {
      cardio_1: {
        title: "Paso 1: Revascularización Emergente y Soporte Inicial",
        title_en: "Step 1: Emergent Revascularization & Initial Support",
        title_pt: "Passo 1: Revascularização Emergente e Suporte Inicial",
        desc: "Activar código infarto: Angioplastia primaria inmediata. Clasificar estadio SCAI (A-E). Si PAM < 65 mmHg, iniciar Noradrenalina para garantizar perfusión coronaria a la dosis mínima eficaz.",
        desc_en: "Activate STEMI code: immediate primary PCI. Classify SCAI stage (A-E). If MAP < 65 mmHg, initiate Norepinephrine to secure coronary perfusion pressure at lowest effective dose.",
        desc_pt: "Ativar código enfarte: ICP primária imediata. Classificar estádio SCAI (A-E). Se PAM < 65 mmHg, iniciar Noradrenalina para garantir perfusão coronária na menor dose eficaz.",
        targetMap: "65 – 75 mmHg",
        drugs: ["norepinephrine"],
        question: "¿Persiste bajo gasto cardíaco (IC < 2.2 L/min/m2 o ScvO2 < 60%) con PAM > 65 mmHg?",
        question_en: "Does low cardiac output persist (CI < 2.2 L/min/m2 or ScvO2 < 60%) with MAP > 65 mmHg?",
        question_pt: "Persiste baixo débito cardíaco (IC < 2.2 L/min/m2 ou ScvO2 < 60%) com PAM > 65 mmHg?",
        yes: "cardio_2",
        no: "cardio_stable"
      },
      cardio_2: {
        title: "Paso 2: Inotrópico de Elección (Dobutamina / Levosimendán)",
        title_en: "Step 2: Inotrope of Choice (Dobutamine / Levosimendan)",
        title_pt: "Passo 2: Inotrópico de Escolha (Dobutamina / Levosimendan)",
        desc: "Añadir Dobutamina 2.5-10 mcg/kg/min. Si el paciente recibe betabloqueantes o presenta isquemia recurrente, utilizar Levosimendán (0.05-0.1 mcg/kg/min durante 24h sin bolo inicial).",
        desc_en: "Add Dobutamine 2.5-10 mcg/kg/min. If patient is on chronic beta-blockers or has recurrent ischemia, consider Levosimendan (0.05-0.1 mcg/kg/min over 24h without loading bolus).",
        desc_pt: "Adicionar Dobutamina 2.5-10 mcg/kg/min. Se o doente estiver sob betabloqueadores ou apresentar isquemia recorrente, considerar Levosimendan (0.05-0.1 mcg/kg/min em 24h sem bólus inicial).",
        targetMap: "65 – 75 mmHg",
        drugs: ["dobutamine", "levosimendan"],
        question: "¿Shock cardiogénico refractario estadio SCAI D o E (DanGer Shock Trial 2024)?",
        question_en: "Refractory cardiogenic shock in SCAI stage D or E (DanGer Shock Trial 2024)?",
        question_pt: "Choque cardiogênico refratário em estádio SCAI D ou E (DanGer Shock Trial 2024)?",
        yes: "cardio_3",
        no: "cardio_stable"
      },
      cardio_3: {
        title: "Paso 3: Soporte Circulatorio Mecánico (MCS)",
        title_en: "Step 3: Mechanical Circulatory Support (MCS)",
        title_pt: "Passo 3: Suporte Circulatório Mecânico (MCS)",
        desc: "Consultar con Shock Team: indicación de asistencia ventricular mecánica con bomba microaxial (Impella CP - DanGer Shock Trial 2024 demostró reducción de mortalidad), BCIA o VA-ECMO. Reducir catecolaminas para disminuir consumo de O2.",
        desc_en: "Consult Shock Team: evaluate microaxial transvalvular pump (Impella CP - DanGer Shock Trial 2024 demonstrated mortality reduction), IABP or VA-ECMO. Wean inotropes/vasopressors to reduce myocardial oxygen demand.",
        desc_pt: "Consultar Shock Team: avaliar bomba microaxial (Impella CP - DanGer Shock Trial 2024 comprovou redução de mortalidade), BIAC ou VA-ECMO. Desmamar catecolaminas para diminuir o consumo miocárdico de oxigénio.",
        targetMap: "65 – 75 mmHg",
        drugs: ["norepinephrine", "dobutamine"],
        question: null,
        terminal: "Manejo especializado en Unidad Coronaria / CICU con monitorización mediante catéter de arteria pulmonar.",
        terminal_en: "Specialized CICU management with pulmonary artery catheter hemodynamic monitoring.",
        terminal_pt: "Gestão especializada em Unidade Coronária/CTI com monitorização por cateter de artéria pulmonar."
      },
      cardio_stable: {
        title: "Estabilización Hemodinámica",
        title_en: "Hemodynamic Stabilization",
        title_pt: "Estabilização Hemodinâmica",
        desc: "Perfusión tisular restaurada. Desescalar inotrópicos y vasopresores progresivamente evaluando llenado capilar y aclaramiento de lactato.",
        desc_en: "Tissue perfusion restored. Progressively taper inotropes and vasopressors guided by CRT and lactate clearance.",
        desc_pt: "Perfusão tecidual restaurada. Desmamar inotrópicos e vasopressores progressivamente avaliando TEC e clareamento de lactato.",
        targetMap: "65 – 75 mmHg",
        drugs: [],
        question: null,
        terminal: "Iniciar precozmente tratamiento de insuficiencia cardíaca según tolerancia hemodinámica.",
        terminal_en: "Initiate guideline-directed medical therapy for heart failure early as hemodynamics allow.",
        terminal_pt: "Iniciar precocemente terapêutica médica otimizada para insuficiência cardíaca conforme tolerância."
      }
    }
  },
  anaphylactic: {
    title: "Shock Anafiláctico",
    title_en: "Anaphylactic Shock",
    title_pt: "Choque Anafilático",
    initialStep: "ana_1",
    steps: {
      ana_1: {
        title: "Paso 1: Adrenalina IM Inmediata (1ª Línea)",
        title_en: "Step 1: Immediate IM Epinephrine (1st Line)",
        title_pt: "Passo 1: Adrenalina IM Imediata (1ª Linha)",
        desc: "Detener alérgeno. Administrar Adrenalina 0.3-0.5 mg IM en cara anterolateral del muslo (niños: 0.01 mg/kg). Decúbito supino con piernas elevadas. O2 alto flujo y cristaloides rápidos (1-2 L).",
        desc_en: "Stop trigger allergen. Administer Epinephrine 0.3-0.5 mg IM into anterolateral thigh (pediatric: 0.01 mg/kg). Supine position with legs elevated. High-flow O2 and rapid IV crystalloids (1-2 L).",
        desc_pt: "Interromper alergénio. Administrar Adrenalina 0.3-0.5 mg IM na face anterolateral da coxa (crianças: 0.01 mg/kg). Decúbito dorsal com pernas elevadas. O2 de alto fluxo e cristaloides rápidos (1-2 L).",
        targetMap: "65 – 85 mmHg",
        drugs: ["epinephrine"],
        question: "¿Respuesta insuficiente a los 5 minutos de la primera inyección IM?",
        question_en: "Insufficient response after 5 minutes of first IM injection?",
        question_pt: "Resposta insuficiente após 5 minutos da primeira injeção IM?",
        yes: "ana_2",
        no: "ana_stable"
      },
      ana_2: {
        title: "Paso 2: Repetir IM e Iniciar Infusión IV Continua",
        title_en: "Step 2: Repeat IM & Start Continuous IV Infusion",
        title_pt: "Passo 2: Repetir IM e Iniciar Infusão IV Contínua",
        desc: "Repetir Adrenalina 0.3-0.5 mg IM. Iniciar infusión IV continua de Adrenalina 0.01-0.1 mcg/kg/min (o bolo lento diluido 20-50 mcg).",
        desc_en: "Repeat Epinephrine 0.3-0.5 mg IM. Initiate continuous IV infusion of Epinephrine 0.01-0.1 mcg/kg/min (or dilute IV bolus 20-50 mcg slowly).",
        desc_pt: "Repetir Adrenalina 0.3-0.5 mg IM. Iniciar infusão IV contínua de Adrenalina 0.01-0.1 mcg/kg/min (ou bólus lento diluído 20-50 mcg).",
        targetMap: "65 – 85 mmHg",
        drugs: ["epinephrine"],
        question: "¿Shock refractario o paciente tratado crónicamente con betabloqueantes?",
        question_en: "Refractory shock or patient on chronic beta-blockers?",
        question_pt: "Choque refratário ou doente em uso crónico de betabloqueadores?",
        yes: "ana_3",
        no: "ana_stable"
      },
      ana_3: {
        title: "Paso 3: Glucagón IV y 2º Vasopresor",
        title_en: "Step 3: IV Glucagon & 2nd Vasopressor",
        title_pt: "Passo 3: Glucagon IV e 2º Vasopressor",
        desc: "Administrar Glucagón 1-5 mg IV bolo lento + infusión 1-5 mg/h (bypass receptor beta). Asociar Noradrenalina o Vasopresina. Corticoides y antihistamínicos como adyuvantes.",
        desc_en: "Administer Glucagon 1-5 mg IV slow bolus + 1-5 mg/h infusion (bypasses beta receptors). Add Norepinephrine or Vasopressin. Corticosteroids and antihistamines as adjuvants.",
        desc_pt: "Administrar Glucagon 1-5 mg IV em bólus lento + infusão 1-5 mg/h (ignora recetores beta). Associar Noradrenalina ou Vasopressina. Corticoides e anti-histamínicos como adjuvantes.",
        targetMap: "65 – 85 mmHg",
        drugs: ["epinephrine", "norepinephrine", "hydrocortisone"],
        question: null,
        terminal: "Mantener en UCI mínimo 12-24 horas para vigilancia de fase bifásica tardía.",
        terminal_en: "Admit to ICU for minimum 12-24 hours to monitor for biphasic anaphylactic reaction.",
        terminal_pt: "Manter em UTI/CTI no mínimo 12-24 horas para vigilância de reação anafilática bifásica tardia."
      },
      ana_stable: {
        title: "Resolución de la Anafilaxia",
        title_en: "Anaphylaxis Resolution",
        title_pt: "Resolução da Anafilaxia",
        desc: "Vía aérea permeable y parámetros hemodinámicos normalizados.",
        desc_en: "Airway secured and hemodynamic parameters normalized.",
        desc_pt: "Via aérea pérvea e parâmetros hemodinâmicos normalizados.",
        targetMap: "65 – 85 mmHg",
        drugs: [],
        question: null,
        terminal: "Prescribir autoinyector de adrenalina al alta y derivar a consulta de Alergología.",
        terminal_en: "Prescribe epinephrine autoinjector at discharge and refer to Allergy specialist.",
        terminal_pt: "Prescrever autoinjetor de adrenalina na alta e encaminhar para consulta de Imunoalergologia."
      }
    }
  },
  hypovolemic: {
    title: "Shock Hipovolémico (Hemorrágico y No Hemorrágico)",
    title_en: "Hypovolemic Shock (Hemorrhagic & Non-Hemorrhagic)",
    title_pt: "Choque Hipovolêmico (Hemorrágico e Não Hemorrágico)",
    initialStep: "hypo_1",
    steps: {
      hypo_1: {
        title: "Paso 1: Identificación Etiológica y Control de Daños",
        title_en: "Step 1: Etiologic Identification & Damage Control",
        title_pt: "Passo 1: Identificação Etiológica e Controlo de Danos",
        desc: "Evaluar etiología: Hemorragia masiva (trauma, gastrointestinal, quirúrgica) vs Pérdida no hemorrágica (deshidratación grave, tercer espacio). Si hemorrágico: activar protocolo de transfusión masiva (ratio 1:1:1 de Concentrado de Hematíes, Plasma Fresco y Plaquetas). Ácido Tranexámico 1 g bolo IV en < 3 horas (ensayo CRASH-2). Aplicar hipotensión permisiva (PAM 55-65 mmHg) hasta control quirúrgico de la hemostasia.",
        desc_en: "Assess etiology: Massive hemorrhage (trauma, GI, surgical) vs Non-hemorrhagic volume loss (severe dehydration, 3rd spacing). If hemorrhagic: activate massive transfusion protocol (1:1:1 PRBC, FFP, Platelets ratio). Tranexamic Acid 1 g IV bolus < 3 hours (CRASH-2). Permissive hypotension (MAP 55-65 mmHg) until surgical hemostasis.",
        desc_pt: "Avaliar etiologia: Hemorragia maciça (trauma, gastrointestinal, cirúrgica) vs Perda não hemorrágica (desidratação grave, 3º espaço). Se hemorrágico: ativar protocolo de transfusão maciça (proporção 1:1:1 de Concentrado de Hemácias, Plasma e Plaquetas). Ácido Tranexâmico 1 g IV em < 3h (CRASH-2). Hipotensão permissiva (PAM 55-65 mmHg) até controlo cirúrgico da hemostase.",
        targetMap: "55 – 65 mmHg",
        drugs: [],
        question: "¿Hipotensión crítica extrema (PAM < 50 mmHg) con riesgo de paro mientras se infunden hemoderivados/fluidos?",
        question_en: "Critical extreme hypotension (MAP < 50 mmHg) with arrest risk while blood/fluids are infusing?",
        question_pt: "Hipotensão crítica extrema (PAM < 50 mmHg) com risco de paragem enquanto se infundem hemoderivados/fluidos?",
        yes: "hypo_2",
        no: "hypo_3"
      },
      hypo_2: {
        title: "Paso 2: Noradrenalina como Puente Transitorio de Emergencia",
        title_en: "Step 2: Norepinephrine as Temporary Emergency Bridge",
        title_pt: "Passo 2: Noradrenalina como Ponte Transitória de Emergência",
        desc: "Iniciar Noradrenalina a dosis baja (0.05-0.15 mcg/kg/min) EXCLUSIVAMENTE como puente transitorio para salvar la perfusión cerebral y coronaria. IMPORTANTE: Los vasopresores no sustituyen la volemia. Retirar tan pronto se restaure el volumen circulante con sangre y hemoderivados.",
        desc_en: "Start low-dose Norepinephrine (0.05-0.15 mcg/kg/min) SOLELY as a temporary bridge to maintain cerebral and coronary perfusion. IMPORTANT: Vasopressors do not replace blood volume. Discontinue as soon as circulating volume is restored.",
        desc_pt: "Iniciar Noradrenalina em dose baixa (0.05-0.15 mcg/kg/min) EXCLUSIVAMENTE como ponte transitória para manter a perfusão cerebral e coronária. IMPORTANTE: Vasopressores não substituem volemia. Descontinuar assim que o volume for restaurado com sangue e derivados.",
        targetMap: "55 – 65 mmHg",
        drugs: ["norepinephrine"],
        question: "¿Se ha logrado control definitivo de la hemorragia y reposición volémica efectiva?",
        question_en: "Has definitive hemorrhage control and effective volume resuscitation been achieved?",
        question_pt: "Foi alcançado controlo definitivo da hemorragia e reposição volémica eficaz?",
        yes: "hypo_stable",
        no: "hypo_4"
      },
      hypo_3: {
        title: "Paso 3: Restauración Volémica y Control Quirúrgico/Endoscópico",
        title_en: "Step 3: Volume Restoration & Surgical/Endoscopic Control",
        title_pt: "Passo 3: Restauração Volémica e Controlo Cirúrgico/Endoscópico",
        desc: "Pérdida no hemorrágica: cristaloides balanceados guiados por parámetros dinámicos de respuesta (VPP, colapsabilidad de vena cava). Hemorrágico: embolización angiográfica o cirugía de control de daños.",
        desc_en: "Non-hemorrhagic: balanced crystalloids guided by dynamic responsiveness parameters (PPV, IVC collapse). Hemorrhagic: angiographic embolization or damage control surgery.",
        desc_pt: "Perda não hemorrágica: cristaloides balanceados guiados por parâmetros dinâmicos (VPP, colapsabilidade da veia cava). Hemorrágico: embolização angiográfica ou cirurgia de controlo de danos.",
        targetMap: "65 – 75 mmHg",
        drugs: [],
        question: "¿Responde adecuadamente a la reposición de volumen con PAM >= 65 mmHg y normalización de lactato?",
        question_en: "Responsive to volume resuscitation with MAP >= 65 mmHg and lactate clearance?",
        question_pt: "Responde adequadamente à reposição de volume com PAM >= 65 mmHg e normalização do lactato?",
        yes: "hypo_stable",
        no: "hypo_2"
      },
      hypo_4: {
        title: "Paso 4: Manejo de Coagulopatía y Triada Mortal",
        title_en: "Step 4: Management of Coagulopathy & Lethal Triad",
        title_pt: "Passo 4: Controlo da Coagulopatia e Tríade Letal",
        desc: "Vigilar triada mortal: hipotermia, acidosis metabólica y coagulopatía. Corregir hipocalcemia (calcio iónico > 1.15 mmol/L), administrar fibrinógeno si nivel < 1.5-2 g/L y mantener temperatura central > 36°C.",
        desc_en: "Monitor lethal triad: hypothermia, metabolic acidosis, and coagulopathy. Correct hypocalcemia (ionized calcium > 1.15 mmol/L), administer fibrinogen if < 1.5-2 g/L, and maintain core temperature > 36°C.",
        desc_pt: "Vigiar tríade letal: hipotermia, acidose metabólica e coagulopatia. Corrigir hipocalcemia (cálcio iónico > 1.15 mmol/L), administrar fibrinogénio se nível < 1.5-2 g/L e manter temperatura central > 36°C.",
        targetMap: "60 – 70 mmHg",
        drugs: ["norepinephrine"],
        question: null,
        terminal: "Mantener hemostasia activa en quirófano o UCI. Desescalar y suspender vasopresores de inmediato al restituir la volemia.",
        terminal_en: "Maintain active hemostasis in OR/ICU. Wean and stop vasopressors immediately once volume is replenished.",
        terminal_pt: "Manter hemostase ativa no bloco ou UTI/CTI. Suspender vasopressores de imediato assim que a volemia for restabelecida."
      },
      hypo_stable: {
        title: "Estabilización Hemodinámica y Normalización de Volemia",
        title_en: "Hemodynamic Stabilization & Euvolemia",
        title_pt: "Estabilização Hemodinâmica e Euvolemia",
        desc: "Volemia intravascular restaurada, sangrado controlado, diuresis > 0.5 mL/kg/h y lactato en descenso.",
        desc_en: "Intravascular volume restored, bleeding controlled, urine output > 0.5 mL/kg/h, and falling lactate.",
        desc_pt: "Volemia intravascular restaurada, hemorragia controlada, diurese > 0.5 mL/kg/h e lactato em decréscimo.",
        targetMap: "65 – 75 mmHg",
        drugs: [],
        question: null,
        terminal: "Vasopresores suspendidos. Monitorizar hemoglobina seriada y balance hídrico acumulado.",
        terminal_en: "Vasopressors discontinued. Monitor serial hemoglobin and cumulative fluid balance.",
        terminal_pt: "Vasopressores descontinuados. Monitorizar hemoglobina seriada e balanço hídrico acumulado."
      }
    }
  },
  obstructive: {
    title: "Shock Obstructivo (TEP Masivo / Taponamiento / Neumotórax)",
    title_en: "Obstructive Shock (Massive PE / Tamponade / Tension Pneumothorax)",
    title_pt: "Choque Obstrutivo (TEP Maciço / Tamponamento / Pneumotórax Hipertensivo)",
    initialStep: "obs_1",
    steps: {
      obs_1: {
        title: "Paso 1: Reconocimiento Mecánico Inmediato con Ecografía POCUS",
        title_en: "Step 1: Immediate Bedside POCUS Mechanical Evaluation",
        title_pt: "Passo 1: Reconhecimento Mecânico Imediato com Ecografia POCUS",
        desc: "El shock obstructivo se debe a una barrera mecánica extracardiaca al flujo sanguíneo. El tratamiento definitivo es la desobstrucción inmediata. Realizar ecocardiografía a pie de cama urgente para diferenciar la causa.",
        desc_en: "Obstructive shock is caused by extracardiac mechanical barrier to blood flow. Definitive treatment is emergency mechanical relief. Perform immediate bedside ultrasound to differentiate the cause.",
        desc_pt: "O choque obstrutivo decorre de uma barreira mecânica extracardíaca ao fluxo sanguíneo. O tratamento definitivo é a desobstrução imediata. Realizar ecocardiografia à beira do leito urgente para diferenciar a causa.",
        targetMap: "65 – 75 mmHg",
        drugs: [],
        question: "¿Se confirma o sospecha Tromboembolismo Pulmonar (TEP) Masivo de Alto Riesgo?",
        question_en: "High-risk massive Pulmonary Embolism (PE) confirmed or suspected?",
        question_pt: "Confirma-se ou suspeita-se de Tromboembolismo Pulmonar (TEP) Maciço de Alto Risco?",
        yes: "obs_tep",
        no: "obs_mechanical"
      },
      obs_tep: {
        title: "Paso 2: TEP Masivo: Reperfusión Urgente y Soporte de VD",
        title_en: "Step 2: Massive PE: Emergency Reperfusion & RV Support",
        title_pt: "Passo 2: TEP Maciço: Reperfusão Urgente e Suporte de VD",
        desc: "Fibrinólisis sistémica inmediata con Alteplasa (rtPA 100 mg en 2h o 50 mg bolo si PCR inminente) o embolectomía percutánea/quirúrgica si contraindicación de lisis. Soporte hemodinámico: Noradrenalina (la PAM sistémica debe superar la presión del VD para perfundir la coronaria derecha) + Dobutamina (2.5-5 mcg/kg/min) para contractilidad del VD. Evitar sobrecarga de líquidos.",
        desc_en: "Immediate systemic fibrinolysis with Alteplase (rtPA 100 mg over 2h or 50 mg bolus if arrest imminent) or surgical/catheter embolectomy if thrombolysis is contraindicated. Hemodynamic support: Norepinephrine (systemic MAP must exceed RV pressure to perfuse right coronary artery) + Dobutamine (2.5-5 mcg/kg/min) for RV contractility. Avoid fluid overload.",
        desc_pt: "Fibrinólise sistémica imediata com Alteplase (rtPA 100 mg em 2h ou 50 mg em bólus se paragem iminente) ou embolectomia percutânea/cirúrgica se houver contraindicação de lise. Suporte hemodinâmico: Noradrenalina (PAM sistémica deve superar a pressão do VD para perfundir a coronária direita) + Dobutamina (2.5-5 mcg/kg/min) para inotropismo do VD. Evitar sobrecarga hídrica.",
        targetMap: "65 – 75 mmHg",
        drugs: ["norepinephrine", "dobutamine"],
        question: "¿Persiste fallo catastrófico del ventrículo derecho refractario a farmacología y fibrinólisis?",
        question_en: "Catastrophic right ventricular failure refractory to pharmacotherapy and fibrinolysis?",
        question_pt: "Persiste falência catastrófica do ventrículo direito refratária a fármacos e fibrinólise?",
        yes: "obs_ecmo",
        no: "obs_stable"
      },
      obs_mechanical: {
        title: "Paso 3: Taponamiento Cardíaco o Neumotórax a Tensión",
        title_en: "Step 3: Cardiac Tamponade or Tension Pneumothorax",
        title_pt: "Passo 3: Tamponamento Cardíaco ou Pneumotórax Hipertensivo",
        desc: "Taponamiento Cardíaco: Pericardiocentesis urgente guiada por ecografía (o ventana pericárdica quirúrgica). Cristaloides rápidos y Noradrenalina como puente temporal. ¡CONTRAINDICADOS vasodilatadores e inotrópicos con vasodilatación! Neumotórax a Tensión: Toracocentesis inmediata con aguja/catéter en 2° espacio intercostal línea medioclavicular o 5° EIC línea axilar anterior, seguida de colocación de tubo torácico de drenaje.",
        desc_en: "Cardiac Tamponade: Emergency echo-guided pericardiocentesis (or surgical pericardial window). Rapid crystalloids and temporary Norepinephrine bridge. Vasodilators and vasodilating inotropes CONTRAINDICATED! Tension Pneumothorax: Immediate needle thoracostomy (2nd intercostal space midclavicular line or 5th ICS anterior axillary line) followed by chest tube drainage.",
        desc_pt: "Tamponamento Cardíaco: Pericardiocentese urgente guiada por ecografia (ou janela pericárdica cirúrgica). Cristaloides rápidos e Noradrenalina temporária. Vasodilatadores e inodilatadores CONTRAINDICADOS! Pneumotórax Hipertensivo: Toracocentese imediata com agulha (2º espaço intercostal linha medioclavicular ou 5º EIC linha axilar anterior) seguida de inserção de dreno torácico.",
        targetMap: "65 – 75 mmHg",
        drugs: ["norepinephrine"],
        question: null,
        terminal: "La descompresión mecánica es curativa. Retirar inmediatamente el soporte farmacológico una vez aliviada la obstrucción.",
        terminal_en: "Mechanical decompression is curative. Discontinue pharmacological support immediately once obstruction is relieved.",
        terminal_pt: "A descompressão mecânica é curativa. Retirar de imediato o suporte farmacológico logo que a obstrução seja aliviada."
      },
      obs_ecmo: {
        title: "Paso 4: Asistencia Mecánica con VA-ECMO",
        title_en: "Step 4: Mechanical Circulatory Support with VA-ECMO",
        title_pt: "Passo 4: Assistência Mecânica com VA-ECMO",
        desc: "Indicación emergente de Oxigenación por Membrana Extracorpórea Veno-Arterial (VA-ECMO) como puente a trombectomía quirúrgica o recuperación del ventrículo derecho.",
        desc_en: "Emergent indication for Veno-Arterial Extracorporeal Membrane Oxygenation (VA-ECMO) as bridge to surgical thrombectomy or RV recovery.",
        desc_pt: "Indicação emergente de Oxigenação por Membrana Extracorpórea Veno-Arterial (VA-ECMO) como ponte para trombectomia cirúrgica ou recuperação do VD.",
        targetMap: "65 – 75 mmHg",
        drugs: ["norepinephrine"],
        question: null,
        terminal: "Manejo en UCI cardiovascular con equipo multidisciplinar de ECMO.",
        terminal_en: "Cardiovascular ICU management with dedicated multidisciplinary ECMO team.",
        terminal_pt: "Gestão em CTI cardiovascular com equipa multidisciplinar de ECMO."
      },
      obs_stable: {
        title: "Resolución de la Obstrucción",
        title_en: "Resolution of Mechanical Obstruction",
        title_pt: "Resolução da Obstrução",
        desc: "Reperfusión pulmonar lograda o descompresión efectiva. Normalización del gasto cardíaco y resistencias.",
        desc_en: "Pulmonary reperfusion achieved or effective decompression accomplished. Normalization of cardiac output and vascular resistance.",
        desc_pt: "Reperfusão pulmonar alcançada ou descompressão eficaz. Normalização do débito cardíaco e resistências.",
        targetMap: "65 – 75 mmHg",
        drugs: [],
        question: null,
        terminal: "Iniciar o continuar anticoagulación terapéutica según protocolo una vez controlada la hemorragia.",
        terminal_en: "Initiate or resume therapeutic anticoagulation according to protocol once active bleeding is excluded.",
        terminal_pt: "Iniciar ou continuar anticoagulação terapêutica conforme protocolo assim que o risco hemorrágico estiver controlado."
      }
    }
  },
  mixed: {
    title: "Shock Mixto (Multifactorial / Distributivo + Cardiogénico)",
    title_en: "Mixed Shock (Multifactorial / Distributive + Cardiogenic)",
    title_pt: "Choque Misto (Multifatorial / Distributivo + Cardiogênico)",
    initialStep: "mix_1",
    steps: {
      mix_1: {
        title: "Paso 1: Fenotipado Hemodinámico Multimodal",
        title_en: "Step 1: Multimodal Hemodynamic Phenotyping",
        title_pt: "Passo 1: Fenotipagem Hemodinâmica Multimodal",
        desc: "Shock mixto: coexistencia de más de un mecanismo fisiopatológico (ej. Shock séptico vasodilatador con miocardiopatía séptica o cardiopatía isquémica previa; Shock distributivo + hipovolemia). Evaluación obligatoria con ecocardiografía crítica POCUS seriada y monitorización de gasto cardíaco (catéter de Swan-Ganz o termodilución PiCCO).",
        desc_en: "Mixed shock: coexistence of multiple pathophysiological mechanisms (e.g. Septic vasodilation with septic cardiomyopathy or pre-existing CAD; Distributive shock + occult hypovolemia). Mandatory serial critical POCUS and continuous cardiac output monitoring (PAC or PiCCO).",
        desc_pt: "Choque misto: coexistência de múltiplos mecanismos fisiopatológicos (ex: Sépsis vasodilatadora com miocardiopatia séptica ou cardiopatia isquémica prévia; Choque distributivo + hipovolemia oculta). Avaliação obrigatória com POCUS seriado e monitorização de débito cardíaco (cateter de artéria pulmonar ou PiCCO).",
        targetMap: "65 – 75 mmHg",
        drugs: [],
        question: "¿Coexiste vasoplegia profunda (PAM < 65 mmHg, RVS bajas) con bajo gasto cardíaco (IC < 2.2 L/min/m2 o ScvO2 < 65%)?",
        question_en: "Does profound vasoplegia (MAP < 65 mmHg, low SVR) coexist with low cardiac output (CI < 2.2 L/min/m2 or ScvO2 < 65%)?",
        question_pt: "Coexiste vasoplegia profunda (PAM < 65 mmHg, RVS baixas) com baixo débito cardíaco (IC < 2.2 L/min/m2 ou ScvO2 < 65%)?",
        yes: "mix_2",
        no: "mix_3"
      },
      mix_2: {
        title: "Paso 2: Terapia Combinada Equilibrada (Vasopresor + Inotrópico)",
        title_en: "Step 2: Balanced Combination Therapy (Vasopressor + Inotrope)",
        title_pt: "Passo 2: Terapia Combinada Equilibrada (Vasopressor + Inotrópico)",
        desc: "Asociación guiada: Noradrenalina (titular para PAM >= 65 mmHg y restaurar postcarga) + Dobutamina (2.5-10 mcg/kg/min) o Levosimendán (0.05-0.1 mcg/kg/min) para mejorar la contractilidad ventricular sin sobrecargar la vasculatura periférica.",
        desc_en: "Guided co-administration: Norepinephrine (titrate for MAP >= 65 mmHg and afterload restoration) + Dobutamine (2.5-10 mcg/kg/min) or Levosimendan (0.05-0.1 mcg/kg/min) to enhance ventricular contractility without excessive vasoconstriction.",
        desc_pt: "Associação guiada: Noradrenalina (titular para PAM >= 65 mmHg e restaurar pós-carga) + Dobutamina (2.5-10 mcg/kg/min) ou Levosimendan (0.05-0.1 mcg/kg/min) para melhorar a contratilidade sem vasoconstrição excessiva.",
        targetMap: "65 – 75 mmHg",
        drugs: ["norepinephrine", "dobutamine", "levosimendan"],
        question: "¿Requerimiento de vasopresor alto (NED >= 0.25 mcg/kg/min) o taquicardia severa limitante con dobutamina?",
        question_en: "High vasopressor requirement (NED >= 0.25 mcg/kg/min) or limiting tachycardia with dobutamine?",
        question_pt: "Necessidade elevada de vasopressor (NED >= 0.25 mcg/kg/min) ou taquicardia severa limitante com dobutamina?",
        yes: "mix_4",
        no: "mix_stable"
      },
      mix_3: {
        title: "Paso 3: Optimización Específica por Componente Dominante",
        title_en: "Step 3: Tailored Component Optimization",
        title_pt: "Passo 3: Otimização Específica por Componente Dominante",
        desc: "Si predomina hipovolemia oculta: fluidos guiados por VPP o elevación pasiva de piernas. Si predomina fallo ventricular derecho: optimizar ventilación para bajar resistencias vasculares pulmonares y valorar Milrinona.",
        desc_en: "If occult hypovolemia predominates: fluids guided by PPV or passive leg raise. If RV failure dominates: optimize lung protective ventilation to reduce PVR and consider Milrinone.",
        desc_pt: "Se predominar hipovolemia oculta: fluidos guiados por VPP ou elevação passiva das pernas. Se predominar falência de VD: otimizar ventilação para reduzir resistências vasculares pulmonares e avaliar Milrinona.",
        targetMap: "65 – 75 mmHg",
        drugs: ["norepinephrine", "milrinone"],
        question: "¿Persiste inestabilidad hemodinámica mixta?",
        question_en: "Does mixed hemodynamic instability persist?",
        question_pt: "Persiste instabilidade hemodinâmica mista?",
        yes: "mix_2",
        no: "mix_stable"
      },
      mix_4: {
        title: "Paso 4: Soporte Multitarget y Terapias de Rescate",
        title_en: "Step 4: Multi-Target Support & Rescue Therapies",
        title_pt: "Passo 4: Suporte Multitarget e Terapias de Resgate",
        desc: "Añadir Vasopresina 0.03 UI/min a dosis fija + Hidrocortisona 200 mg/día. Si la disfunción miocárdica persiste con bajo gasto severo a pesar de inotrópicos, evaluar soporte circulatorio mecánico (Impella o VA-ECMO).",
        desc_en: "Add fixed-dose Vasopressin 0.03 IU/min + Hydrocortisone 200 mg/day. If myocardial dysfunction and severe low cardiac output persist despite inotropes, assess mechanical circulatory support (Impella or VA-ECMO).",
        desc_pt: "Adicionar Vasopressina 0.03 UI/min em dose fixa + Hidrocortisona 200 mg/dia. Se a disfunção miocárdica persistir com baixo débito grave apesar de inotrópicos, avaliar suporte mecânico (Impella ou VA-ECMO).",
        targetMap: "65 – 75 mmHg",
        drugs: ["norepinephrine", "vasopressin", "hydrocortisone", "levosimendan"],
        question: null,
        terminal: "Manejo avanzado con monitorización continua de ScvO2, gradiente veno-arterial de CO2 y ecocardiografía seriada.",
        terminal_en: "Advanced ICU management with continuous ScvO2 monitoring, veno-arterial CO2 gap, and serial echocardiography.",
        terminal_pt: "Gestão avançada em UTI com monitorização contínua de ScvO2, gradiente veno-arterial de CO2 e ecocardiografia seriada."
      },
      mix_stable: {
        title: "Estabilización y Desescalada Balanceada",
        title_en: "Stabilization & Balanced De-escalation",
        title_pt: "Estabilização e Desmame Balanceado",
        desc: "Parámetros de perfusión y contractilidad normalizados. Desescalar primero el inotrópico o el segundo vasopresor según predomine la estabilidad.",
        desc_en: "Perfusion parameters and cardiac contractility normalized. Taper the inotrope or secondary vasopressor first depending on prevailing stability.",
        desc_pt: "Parâmetros de perfusão e contratilidade normalizados. Desmamar primeiro o inotrópico ou o segundo vasopressor conforme a estabilidade clínica predominante.",
        targetMap: "65 – 75 mmHg",
        drugs: ["norepinephrine"],
        question: null,
        terminal: "Continuar monitorización invasiva hasta resolución completa del componente séptico y cardíaco.",
        terminal_en: "Continue invasive monitoring until complete resolution of both septic and cardiogenic components.",
        terminal_pt: "Continuar monitorização invasiva até resolução completa dos componentes séptico e cardíaco."
      }
    }
  }
};

// --------------------------------------------------------------------------
// 4. MOTOR DE CÁLCULO Y FORMULAS
// --------------------------------------------------------------------------
const FormulaEngine = {
  calculateRate(dose, weight, conc) {
    if (conc <= 0 || weight <= 0) return 0;
    return (dose * weight * 60) / conc;
  },
  calculateDose(rate, weight, conc) {
    if (weight <= 0 || conc <= 0) return 0;
    return (rate * conc) / (weight * 60);
  },
  calculateFixedRate(dosePerMin, concPerMl) {
    if (concPerMl <= 0) return 0;
    return (dosePerMin * 60) / concPerMl;
  },
  calculateHemoProfile({ sbp, dbp, hr, cvp, co, crt, scvo2, pvacogap }) {
    const map = (sbp + 2 * dbp) / 3;
    const pp = sbp - dbp;
    const si = sbp > 0 ? hr / sbp : 0;
    const msi = map > 0 ? hr / map : 0;
    const perf = map - cvp;
    const svr = co > 0 ? ((map - cvp) / co) * 80 : 0;
    const lang = currentLang;

    let phenotype = 'stable';
    let badgeText = 'ESTABLE / WEANING';
    let badgeColor = 'var(--alert-success)';
    let title = 'Compensación Hemodinámica y Perfusión Adecuada';
    let desc = 'Presión arterial media y gasto cardíaco en rangos fisiológicos con microcirculación preservada.';
    let reco = 'Mantener vigilancia. Si el paciente recibe vasopresores o inotrópicos, iniciar desescalada progresiva (weaning del 10-20% cada 30-60 min).';

    if (lang === 'en') {
      badgeText = 'STABLE / WEANING';
      title = 'Hemodynamic Compensation & Adequate Perfusion';
      desc = 'Mean arterial pressure and cardiac output in physiologic ranges with preserved microcirculation.';
      reco = 'Continue monitoring. If receiving vasoactive support, begin gradual weaning (taper by 10-20% every 30-60 min).';
    } else if (lang === 'pt') {
      badgeText = 'ESTÁVEL / WEANING';
      title = 'Compensação Hemodinâmica e Perfusão Adequada';
      desc = 'Pressão arterial média e débito cardíaco em limites fisiológicos com microcirculação preservada.';
      reco = 'Manter vigilância. Se em uso de vasopressores/inotrópicos, iniciar desmame progressivo (reduzir 10-20% a cada 30-60 min).';
    }

    if (si > 0.9 && pp < 35 && cvp < 8 && svr > 1200) {
      phenotype = 'hypovolemic';
      badgeColor = 'var(--cat-vasodilatador)';
      if (lang === 'en') {
        badgeText = 'HYPOVOLEMIC SHOCK';
        title = 'Hypovolemia / Severe Preload Deficit';
        desc = 'High Shock Index with narrow pulse pressure, low CVP, and intense compensatory vasoconstriction.';
        reco = 'Perform passive leg raise (PLR) or mini-fluid challenge. Do NOT increase vasopressor doses blindly without volume resuscitation.';
      } else if (lang === 'pt') {
        badgeText = 'CHOQUE HIPOVOLÊMICO';
        title = 'Hipovolemia / Déficit Grave de Pré-carga';
        desc = 'Índice de Choque elevado com pressão de pulso pinçada, PVC baixa e vasoconstrição compensatória.';
        reco = 'Realizar elevação passiva das pernas (PLR) ou prova de volume criteriosa. NÃO aumentar vasopressores às cegas sem corrigir o volume.';
      } else {
        badgeText = 'SHOCK HIPOVOLÉMICO';
        title = 'Hipovolemia / Déficit Crítico de Precarga';
        desc = 'Índice de Shock elevado con presión de pulso estrecha, PVC baja y vasoconstricción refleja compensadora.';
        reco = 'Realizar prueba de elevación pasiva de piernas (PLR) o bolo juicioso de cristaloides balanceados. NO escalar vasopresores a ciegas sin restaurar la volemia.';
      }
    } else if ((co < 4.0 || scvo2 < 70 || pvacogap >= 6.0) && svr >= 1000) {
      phenotype = 'cardiogenic';
      badgeColor = 'var(--cat-inotropico)';
      if (lang === 'en') {
        badgeText = 'CARDIOGENIC / LOW OUTPUT';
        title = 'Cardiogenic Failure / Inotropic Failure';
        desc = 'Elevated SVR with low cardiac output, ScvO2 < 70% or elevated veno-arterial CO2 gap (>= 6 mmHg).';
        reco = 'Start or titrate Dobutamine (2.5-10 mcg/kg/min) or Milrinone (if beta-blocked). Wean high vasopressor afterload. Consider mechanical support (Impella CP - DanGer Shock 2024).';
      } else if (lang === 'pt') {
        badgeText = 'CHOQUE CARDIOGÊNICO';
        title = 'Insuficiência de Bomba / Baixo Débito';
        desc = 'RVS elevada com baixo débito cardíaco, ScvO2 < 70% ou gradiente veno-arterial de CO2 alargado (>= 6 mmHg).';
        reco = 'Iniciar ou titular Dobutamina (2.5-10 mcg/kg/min) ou Milrinona (se betabloqueado). Reduzir vasopressores excessivos. Avaliar suporte mecânico (Impella CP - DanGer Shock 2024).';
      } else {
        badgeText = 'SHOCK CARDIOGÉNICO';
        title = 'Fallo de Bomba Miocárdica / Bajo Gasto';
        desc = 'RVS elevada con bajo débito cardíaco, ScvO2 < 70% o gradiente veno-arterial de CO2 ensanchado (>= 6 mmHg).';
        reco = 'Iniciar o titular Dobutamina (2.5-10 mcg/kg/min) o Milrinona (si betabloqueado o HTP). Desescalar vasoconstrictores que aumentan la postcarga. Evaluar soporte circulatorio mecánico (Impella CP según DanGer Shock 2024).';
      }
    } else if (svr < 800 && (scvo2 < 70 || pvacogap >= 6.0 || crt > 3.0)) {
      phenotype = 'mixed';
      badgeColor = 'var(--alert-warning)';
      if (lang === 'en') {
        badgeText = 'MIXED / SEPTIC CARDIOMYOPATHY';
        title = 'Mixed Shock (Vasoplegia + Myocardial Depression)';
        desc = 'Low systemic vascular resistance combined with tissue hypoperfusion markers (ScvO2 < 70%, CRT > 3s, or CO2 gap >= 6 mmHg).';
        reco = 'Balanced dual strategy: Norepinephrine for vascular tone + Dobutamine (2.5-5 mcg/kg/min) for stroke volume (SSC 2026).';
      } else if (lang === 'pt') {
        badgeText = 'CHOQUE MISTO / CARDIOMIOPATIA SÉPTICA';
        title = 'Choque Misto (Vasoplegia + Disfunção Miocárdica)';
        desc = 'Baixa resistência vascular sistêmica associada a hipoperfusão tecidual (ScvO2 < 70%, TEC > 3s ou gap de CO2 >= 6 mmHg).';
        reco = 'Estratégia combinada: Norepinefrina para restaurar o tônus vascular + Dobutamina (2.5-5 mcg/kg/min) para débito (SSC 2026).';
      } else {
        badgeText = 'SHOCK MIXTO / MIOCARDIOPATÍA SÉPTICA';
        title = 'Shock Mixto (Vasoplegia + Disfunción Miocárdica)';
        desc = 'Baja resistencia vascular sistémica asociada a hipoperfusión tisular (ScvO2 < 70%, CRT > 3s o brecha de CO2 >= 6 mmHg).';
        reco = 'Estrategia balanceada: Noradrenalina (restaurar PAM coronaria y tono vascular) + Dobutamina (2.5-5 mcg/kg/min para volumen latido según SSC 2026).';
      }
    } else if (svr < 800 || map < 65) {
      phenotype = 'vasoplegic';
      badgeColor = 'var(--cat-vasopresor)';
      if (lang === 'en') {
        badgeText = 'VASOPLEGIC / DISTRIBUTIVE';
        title = 'Distributive Shock / Pure Vasoplegia';
        desc = 'Loss of systemic vasomotor tone with low SVR (< 800 dyn·s·cm⁻⁵) and normal/high cardiac output.';
        reco = 'Titrate Norepinephrine for MAP >= 65 mmHg. If dose >= 0.25 mcg/kg/min, add Vasopressin (0.03 IU/min) + Hydrocortisone (200 mg/d). Inotropes NOT indicated.';
      } else if (lang === 'pt') {
        badgeText = 'CHOQUE DISTRIBUTIVO / VASOPLÉGICO';
        title = 'Choque Distributivo / Vasoplegia Pura';
        desc = 'Perda do tônus vasomotor sistêmico com RVS baixa (< 800 dyn·s·cm⁻⁵) e débito cardíaco normal/elevado.';
        reco = 'Titular Norepinefrina para PAM >= 65 mmHg. Se dose >= 0.25 mcg/kg/min, adicionar Vasopressina (0.03 UI/min) + Hidrocortisona (200 mg/dia). Inotrópico NÃO indicado.';
      } else {
        badgeText = 'SHOCK DISTRIBUTIVO / VASOPLÉGICO';
        title = 'Shock Distributivo / Vasoplegia Pura';
        desc = 'Pérdida del tono vasomotor sistémico con RVS baja (< 800 dyn·s·cm⁻⁵) y gasto cardíaco normal o aumentado.';
        reco = 'Titular Noradrenalina para PAM >= 65 mmHg. Si la dosis escala a >= 0.25 mcg/kg/min, añadir Vasopresina fija (0.03 UI/min) + Hidrocortisona (200 mg/día). Inotrópicos NO indicados.';
      }
    } else if (crt > 3.0 || pvacogap >= 6.0) {
      phenotype = 'occult_hypoperfusion';
      badgeColor = 'var(--alert-warning)';
      if (lang === 'en') {
        badgeText = 'OCCULT HYPOPERFUSION';
        title = 'Macro-Microcirculatory Dissociation (ANDROMEDA-SHOCK-2)';
        desc = 'Normal blood pressure and SVR, but altered microcirculatory markers (Capillary Refill > 3s or CO2 gap >= 6 mmHg).';
        reco = 'Do NOT raise vasopressor doses beyond MAP >= 65 mmHg. Check microcirculatory flow, assess fluid responsiveness or gentle inotrope.';
      } else if (lang === 'pt') {
        badgeText = 'HIPOPERFUSÃO OCULTA';
        title = 'Dissociação Macro-Microcirculatória (ANDROMEDA-SHOCK-2)';
        desc = 'Pressão arterial e RVS normais, porém marcadores microcirculatórios alterados (Enchimento capilar > 3s ou gap CO2 >= 6 mmHg).';
        reco = 'NÃO elevar vasopressores acima de PAM >= 65 mmHg. Avaliar microcirculação, prova de volume ou inotrópico suave.';
      } else {
        badgeText = 'HIPOPERFUSIÓN OCULTA';
        title = 'Disociación Macro-Microcirculatoria (ANDROMEDA-SHOCK-2)';
        desc = 'Presión arterial y RVS normales, pero marcadores microcirculatorios alterados (Llenado capilar > 3s o brecha de CO2 >= 6 mmHg).';
        reco = 'NO forzar PAM supranormal aumentando vasopresores. Investigar microcirculación, evaluar tolerancia a fluidos o inotrópico suave.';
      }
    }

    return { map, pp, si, msi, perf, svr, crt, scvo2, pvacogap, phenotype, badgeText, badgeColor, title, desc, reco };
  },
  calculatePrep(drugMg, volumeMl, dose, weight) {
    if (volumeMl <= 0) return { conc: 0, rate: 0, durationHours: 0 };
    const conc = (drugMg * 1000) / volumeMl;
    const rate = conc > 0 && weight > 0 ? (dose * weight * 60) / conc : 0;
    const durationHours = rate > 0 ? volumeMl / rate : 0;
    return { conc, rate, durationHours };
  }
};

// --------------------------------------------------------------------------
// 4.1 EVIDENCIA CIENTÍFICA Y ENSAYOS CLÍNICOS MULTILINGÜES (2021-2026)
// --------------------------------------------------------------------------
const EVIDENCE_DATA = [
  {
    id: "danger_shock",
    title_es: "1. DanGer Shock Trial (NEJM 2024)",
    title_en: "1. DanGer Shock Trial (NEJM 2024)",
    title_pt: "1. DanGer Shock Trial (NEJM 2024)",
    badge_es: "NEJM 2024",
    badge_en: "NEJM 2024",
    badge_pt: "NEJM 2024",
    badgeColor: "#0284C7",
    citation: "Møller JE, et al. N Engl J Med. 2024; 390:1974-1983.",
    desc_es: "Demostró por primera vez en 25 años una reducción significativa de la mortalidad por todas las causas a 180 días (45.8% vs 58.5%, HR 0.74, p=0.04) en pacientes con Shock Cardiogénico secundario a IAM con elevación del ST asistidos con bomba microaxial transvalvular (Impella CP) frente a tratamiento médico estándar. Establece la indicación formal de asistencia ventricular percutánea precoz antes de dosis excesivas de catecolaminas.",
    desc_en: "Demonstrated for the first time in 25 years a significant reduction in 180-day all-cause mortality (45.8% vs 58.5%, HR 0.74, p=0.04) in patients with STEMI-related cardiogenic shock supported with a microaxial transvalvular pump (Impella CP) compared with standard medical therapy. Establishes the formal indication for early mechanical circulatory support before escalating to excessive catecholamine doses.",
    desc_pt: "Demonstrou pela primeira vez em 25 anos uma redução significativa na mortalidade por todas as causas aos 180 dias (45.8% vs 58.5%, HR 0.74, p=0.04) em doentes com Choque Cardiogénico por enfarte agudo do miocárdio assistidos com bomba microaxial transvalvular (Impella CP) em comparação com o tratamento médico convencional. Estabelece a indicação formal de suporte mecânico circulatório precoce antes de doses excessivas de catecolaminas."
  },
  {
    id: "ssc_2026",
    title_es: "2. Surviving Sepsis Campaign (SSC 2021 / Actualización 2026)",
    title_en: "2. Surviving Sepsis Campaign (SSC 2021 / 2026 Update)",
    title_pt: "2. Surviving Sepsis Campaign (SSC 2021 / Atualização 2026)",
    badge_es: "GUÍA MUNDIAL",
    badge_en: "GLOBAL GUIDELINE",
    badge_pt: "DIRETRIZ MUNDIAL",
    badgeColor: "#16A34A",
    citation: "Evans L, et al. Intensive Care Med. 2021; 47:1181-1247. / Crit Care Med. 2021.",
    desc_es: "• <strong>Noradrenalina de 1ª elección indiscutible:</strong> Recomendación fuerte, calidad de evidencia alta. Se avala inicio por vía periférica segura para evitar retrasos de resucitación.<br>• <strong>Vasopresina a dosis fija (0.03 UI/min):</strong> 2ª línea precoz cuando NE escala a &ge; 0.25 mcg/kg/min (reduce requerimientos de catecolaminas y riesgo arrítmico).<br>• <strong>Hidrocortisona (200 mg/día):</strong> Recomendación en shock séptico refractario persistente a pesar de Noradrenalina + Vasopresina.<br>• <strong>Dopamina refutada:</strong> Recomendación fuerte EN CONTRA de su uso sistemático (duplica arritmias ventriculares).",
    desc_en: "• <strong>Norepinephrine as undisputed 1st-line choice:</strong> Strong recommendation, high-quality evidence. Safe peripheral initiation supported to avoid resuscitation delays.<br>• <strong>Fixed-dose Vasopressin (0.03 IU/min):</strong> Early 2nd-line when NE escalates to &ge; 0.25 mcg/kg/min (reduces catecholamine burden and arrhythmia risk).<br>• <strong>Hydrocortisone (200 mg/day):</strong> Recommended in refractory septic shock persisting despite Norepinephrine + Vasopressin.<br>• <strong>Dopamine refuted:</strong> Strong recommendation AGAINST routine use (doubles tachyarrhythmias).",
    desc_pt: "• <strong>Noradrenalina como 1ª escolha indiscutível:</strong> Recomendação forte, alta qualidade de evidência. Autorizado início por via periférica segura para evitar atrasos na ressuscitação.<br>• <strong>Vasopressina em dose fixa (0.03 UI/min):</strong> 2ª linha precoce quando a NE atinge &ge; 0.25 mcg/kg/min (poupadora de catecolaminas e reduz risco arrítmico).<br>• <strong>Hidrocortisona (200 mg/dia):</strong> Recomendada no choque séptico refratário persistente apesar de Noradrenalina + Vasopressina.<br>• <strong>Dopamina refutada:</strong> Recomendação forte CONTRA o uso rotineiro (duplica arritmias ventriculares)."
  },
  {
    id: "acc_aha_2025",
    title_es: "3. ACC/AHA/HFSA Shock Cardiogénico (Guías 2025)",
    title_en: "3. ACC/AHA/HFSA Cardiogenic Shock Guidelines (2025)",
    title_pt: "3. ACC/AHA/HFSA Choque Cardiogénico (Diretrizes 2025)",
    badge_es: "ACC/AHA 2025",
    badge_en: "ACC/AHA 2025",
    badge_pt: "ACC/AHA 2025",
    badgeColor: "#0D4A6B",
    citation: "Vahdatpour C, et al. J Am Coll Cardiol. 2025; Circulation 2025.",
    desc_es: "Estandariza el algoritmo por estadios SCAI (A hasta E). Recomienda Noradrenalina como vasopresor preferente sobre dopamina o adrenalina para sostener la PAM coronaria, Dobutamina o Milrinona según el perfil isquémico/betabloqueado, y desescalada rápida de catecolaminas para mitigar el consumo miocárdico de oxígeno mediante MCS.",
    desc_en: "Standardizes the management pathway across SCAI stages (A to E). Recommends Norepinephrine as the preferred vasopressor over dopamine or epinephrine to preserve coronary perfusion pressure, Dobutamine or Milrinone based on ischemic/beta-blocker profile, and rapid catecholamine de-escalation via early MCS to limit myocardial oxygen consumption.",
    desc_pt: "Padroniza a abordagem clínica segundo os estádios SCAI (A a E). Recomenda Noradrenalina como vasopressor de escolha sobre dopamina ou adrenalina para manter a PAM coronária, Dobutamina ou Milrinona conforme o perfil isquémico/betabloqueado, e desmame precoce de catecolaminas com recurso a MCS para reduzir o consumo miocárdico de oxigénio."
  },
  {
    id: "clovers_2023",
    title_es: "4. CLOVERS Trial (NEJM 2023)",
    title_en: "4. CLOVERS Trial (NEJM 2023)",
    title_pt: "4. CLOVERS Trial (NEJM 2023)",
    badge_es: "NEJM 2023",
    badge_en: "NEJM 2023",
    badge_pt: "NEJM 2023",
    badgeColor: "#0284C7",
    citation: "Shapiro NI, et al. N Engl J Med. 2023; 388:499-510.",
    desc_es: "<strong>Diseño:</strong> 1,563 pacientes con hipotensión inducida por sepsis refractaria a 1-3 L de fluidos. Comparó estrategia restrictiva de fluidos con vasopresores precoces frente a fluidoterapia liberal.<br><strong>Resultado:</strong> Demostró la seguridad absoluta de la instauración temprana de Noradrenalina con menor sobrecarga de volumen acumulado y similar mortalidad a 90 días, cambiando el paradigma de sobre-resucitación hídrica en sepsis.",
    desc_en: "<strong>Design:</strong> 1,563 patients with sepsis-induced hypotension refractory to 1-3 L of fluids. Evaluated a restrictive fluid strategy with early vasopressors versus liberal fluid resuscitation.<br><strong>Result:</strong> Confirmed the absolute safety of early Norepinephrine administration with lower cumulative fluid overload and equivalent 90-day mortality, reshaping the sepsis resuscitation paradigm away from fluid overload.",
    desc_pt: "<strong>Desenho:</strong> 1.563 doentes com hipotensão induzida por sépsis refratária a 1-3 L de fluidos. Comparou estratégia restritiva de fluidos com vasopressores precoces versus fluidoterapia liberal.<br><strong>Resultado:</strong> Confirmou a segurança total do início precoce de Noradrenalina com menor sobrecarga volémica acumulada e mortalidade idêntica aos 90 dias, consolidando a mudança de paradigma contra a hiper-ressuscitação hídrica."
  },
  {
    id: "classic_2022",
    title_es: "5. CLASSIC Trial (NEJM 2022)",
    title_en: "5. CLASSIC Trial (NEJM 2022)",
    title_pt: "5. CLASSIC Trial (NEJM 2022)",
    badge_es: "NEJM 2022",
    badge_en: "NEJM 2022",
    badge_pt: "NEJM 2022",
    badgeColor: "#0284C7",
    citation: "Meyhoff TS, et al. N Engl J Med. 2022; 386:2459-2470.",
    desc_es: "Ensayo en 1,554 pacientes críticos en UCI con shock séptico. La restricción de líquidos intravenosos guiada por vasopresores no incrementó eventos adversos graves ni necesidad de diálisis, reduciendo la prevalencia de edema tisular y lesión pulmonar aguda.",
    desc_en: "Trial in 1,554 adult ICU patients with septic shock. Restricting intravenous fluid volume guided by early vasopressor support did not increase serious adverse events or renal replacement therapy, while substantially limiting tissue edema and acute lung injury.",
    desc_pt: "Ensaio com 1.554 doentes em CTI com choque séptico. A restrição de fluidos intravenosos guiada por vasopressores não aumentou eventos adversos graves nem necessidade de diálise, diminuindo o edema tecidual e a lesão pulmonar aguda."
  },
  {
    id: "andromeda_shock_2",
    title_es: "6. ANDROMEDA-SHOCK-2 & CRT (2023–2024)",
    title_en: "6. ANDROMEDA-SHOCK-2 & CRT (2023–2024)",
    title_pt: "6. ANDROMEDA-SHOCK-2 & CRT (2023–2024)",
    badge_es: "JAMA / ESICM",
    badge_en: "JAMA / ESICM",
    badge_pt: "JAMA / ESICM",
    badgeColor: "#9333EA",
    citation: "Hernandez G, Bakker J, et al. Ann Intensive Care 2023; JAMA 2019; ESICM Consensus 2024.",
    desc_es: "Demostró que la resucitación hemodinámica guiada por la normalización del <strong>Tiempo de Llenado Capilar (CRT &le; 3 segundos)</strong> al pie de cama es superior a la cinética lenta del lactato sérico, acelerando la recuperación de la perfusión tisular y evitando la toxicidad de vasopresores a dosis innecesarias.",
    desc_en: "Demonstrated that hemodynamic resuscitation guided by normalizing bedside <strong>Capillary Refill Time (CRT &le; 3 seconds)</strong> outperforms serial lactate kinetics, enabling faster tissue reperfusion recovery while preventing unnecessary high-dose vasopressor toxicity.",
    desc_pt: "Demonstrou que a ressuscitação hemodinâmica guiada pela normalização do <strong>Tempo de Enchimento Capilar (TEC &le; 3 segundos)</strong> à beira do leito é superior à cinética lenta do lactato sérico, promovendo reperfusão tecidual mais rápida e evitando a toxicidade de doses desnecessárias de vasopressores."
  },
  {
    id: "doremi_2021",
    title_es: "7. DOREMI Trial (NEJM 2021)",
    title_en: "7. DOREMI Trial (NEJM 2021)",
    title_pt: "7. DOREMI Trial (NEJM 2021)",
    badge_es: "NEJM 2021",
    badge_en: "NEJM 2021",
    badge_pt: "NEJM 2021",
    badgeColor: "#0284C7",
    citation: "Mathew R, et al. N Engl J Med. 2021; 385:516-525.",
    desc_es: "Comparación directa aleatorizada doble ciego de <strong>Milrinona vs Dobutamina</strong> en 192 pacientes con shock cardiogénico. Demostró equivalencia global en el desenlace primario (muerte, paro o MCS), estableciendo que la elección debe individualizarse según el fenotipo: Milrinona preferente en hipertensión pulmonar y fallo de VD; Dobutamina preferente en hipotensión o insuficiencia renal severa.",
    desc_en: "Randomized double-blind trial comparing <strong>Milrinone vs Dobutamine</strong> in 192 patients with cardiogenic shock. Found no significant difference in the composite primary outcome (death, cardiac arrest, or mechanical support), showing selection should be phenotypically tailored: Milrinone for pulmonary hypertension and RV failure; Dobutamine when hypotension or severe renal dysfunction predominates.",
    desc_pt: "Comparação aleatorizada duplamente cega de <strong>Milrinona vs Dobutamina</strong> em 192 doentes com choque cardiogénico. Demonstrou equivalência no desfecho primário composto (mortalidade, paragem ou MCS), estabelecendo que a escolha deve guiar-se pelo fenótipo: Milrinona preferencial na hipertensão pulmonar e falência de VD; Dobutamina preferencial em hipotensão ou insuficiência renal grave."
  }
];

function renderEducationI18n() {
  const container = document.getElementById('education-trials-list');
  if (!container) return;
  const lang = currentLang || 'es';

  container.innerHTML = EVIDENCE_DATA.map((item, idx) => {
    const title = lang === 'en' ? item.title_en : (lang === 'pt' ? item.title_pt : item.title_es);
    const badge = lang === 'en' ? item.badge_en : (lang === 'pt' ? item.badge_pt : item.badge_es);
    const desc = lang === 'en' ? item.desc_en : (lang === 'pt' ? item.desc_pt : item.desc_es);
    const isLast = idx === EVIDENCE_DATA.length - 1;
    const borderStyle = isLast ? '' : 'border-bottom:1px solid var(--border-color); padding-bottom:12px;';

    return `
      <div style="margin-bottom:16px; ${borderStyle}">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px; gap:8px;">
          <h4 style="font-size:0.92rem; color:var(--text-main); font-weight:800;">${title}</h4>
          <span class="badge" style="background:${item.badgeColor}; color:#fff; font-size:0.7rem; padding:2px 8px; border-radius:4px; font-weight:700; white-space:nowrap;">${badge}</span>
        </div>
        <p style="font-size:0.75rem; color:var(--accent); font-weight:700; margin-bottom:4px;">
          ${item.citation}
        </p>
        <p style="font-size:0.8rem; color:var(--text-secondary); line-height:1.4;">
          ${desc}
        </p>
      </div>
    `;
  }).join('');
}

// --------------------------------------------------------------------------
// 5. CONTROLADOR DE VISTAS Y NAVEGACIÓN
// --------------------------------------------------------------------------
let currentView = 'dashboard';
let currentShockType = 'septic';
let currentShockStepKey = 'septic_1';
let shockHistory = [];

function switchView(viewId) {
  document.querySelectorAll('.view-section').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));

  const target = document.getElementById('view-' + viewId);
  if (target) target.classList.add('active');

  const navBtn = document.querySelector(`.nav-item[data-view="${viewId}"]`);
  if (navBtn) navBtn.classList.add('active');

  currentView = viewId;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --------------------------------------------------------------------------
// 6. GESTIÓN DEL TEMA DIURNO / NOCTURNO (DAY/NIGHT THEME)
// --------------------------------------------------------------------------
function applyTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('app_theme', theme);

  const btnHeader = document.getElementById('btn-header-theme');
  if (btnHeader) {
    btnHeader.innerText = theme === 'light' ? '☀️' : '🌙';
    btnHeader.title = theme === 'light' ? 'Cambiar a Modo Nocturno' : 'Cambiar a Modo Diurno';
  }

  const selectTheme = document.getElementById('settings-theme-select');
  if (selectTheme) {
    selectTheme.value = theme;
  }
}

function toggleTheme() {
  const next = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(next);
}

// --------------------------------------------------------------------------
// 7. GESTIÓN DEL IDIOMA (I18N REACTIVO)
// --------------------------------------------------------------------------
function setLanguage(lang) {
  if (!I18N[lang]) lang = 'es';
  currentLang = lang;
  localStorage.setItem('app_lang', lang);

  // Traducir todos los elementos con atributo data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (I18N[lang] && I18N[lang][key]) {
      el.innerText = I18N[lang][key];
    }
  });

  // Traducir elementos con marcado HTML enriquecido
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (I18N[lang] && I18N[lang][key]) {
      el.innerHTML = I18N[lang][key];
    }
  });

  // Traducir placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (I18N[lang] && I18N[lang][key]) {
      el.setAttribute('placeholder', I18N[lang][key]);
    }
  });

  // Actualizar selects de ajustes y cabecera
  const selectLang = document.getElementById('settings-lang-select');
  if (selectLang) selectLang.value = lang;

  const btnHeaderLang = document.getElementById('btn-header-lang');
  if (btnHeaderLang) {
    btnHeaderLang.innerText = lang.toUpperCase();
  }

  const btnMonoLang = document.getElementById('btn-mono-lang');
  if (btnMonoLang) {
    btnMonoLang.innerText = lang.toUpperCase();
  }

  // Re-renderizar módulo de monetización, apoyo y donaciones reactivamente
  if (typeof renderMonetizationI18n === 'function') {
    renderMonetizationI18n();
  }

  // Re-renderizar listas dependientes del idioma
  if (typeof renderDrugList === 'function') renderDrugList();
  if (typeof updateCalculatorConcentrations === 'function') updateCalculatorConcentrations();
  if (typeof window.updateHemoProfile === 'function') window.updateHemoProfile();
  if (typeof renderEducationI18n === 'function') renderEducationI18n();

  // Si estamos en la vista de algoritmo de shock, actualizar título y paso
  const shockAlgoView = document.getElementById('view-shock-algo');
  if (shockAlgoView && shockAlgoView.classList.contains('active') && typeof renderShockStep === 'function') {
    const protocol = SHOCK_PROTOCOLS[currentShockType] || SHOCK_PROTOCOLS.septic;
    const pTitle = currentLang === 'en' ? (protocol.title_en || protocol.title) : (currentLang === 'pt' ? (protocol.title_pt || protocol.title) : protocol.title);
    const titleEl = document.getElementById('shock-algo-title');
    if (titleEl) titleEl.innerText = pTitle;
    renderShockStep();
  }
}

window.cycleLanguage = function() {
  const langs = ['es', 'en', 'pt'];
  const nextIdx = (langs.indexOf(currentLang) + 1) % langs.length;
  setLanguage(langs[nextIdx]);
};

// --------------------------------------------------------------------------
// 8. INICIALIZACIÓN PRINCIPAL
// --------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  // Aplicar tema inicial
  applyTheme(currentTheme);

  // Setup de componentes
  setupNavigation();
  setupCalculator();
  setupHemoProfile();
  setupPrep();
  setupDrugList();
  setupShockSelector();
  setupDisclaimer();
  setupSettings();
  setupMonetization();

  // Aplicar idioma inicial
  setLanguage(currentLang);

  // Vista inicial
  switchView('dashboard');
});

function setupNavigation() {
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const view = btn.getAttribute('data-view');
      if (view === 'hemo' || view === 'shock') {
        if (!isPro()) { openMonoModal('pro'); return; }
      }
      switchView(view);
    });
  });

  document.querySelectorAll('.hub-card').forEach(card => {
    card.addEventListener('click', (e) => {
      const id = card.id;
      if (id === 'hub-card-upgrade') { openMonoModal('pro'); return; }
      if (id === 'hub-card-support') { openMonoModal('donate'); return; }
      const target = card.getAttribute('data-target');
      if (!target) return;
      if (target === 'hemo' || target === 'shock') {
        if (!isPro()) { openMonoModal('pro'); return; }
      }
      switchView(target);
    });
  });

  document.getElementById('btn-header-disclaimer').addEventListener('click', () => {
    document.getElementById('disclaimer-modal').classList.add('active');
  });

  document.getElementById('btn-header-theme').addEventListener('click', toggleTheme);

  document.getElementById('btn-header-lang').addEventListener('click', window.cycleLanguage);

  // Botón PRO de cabecera 👑
  document.getElementById('btn-header-pro').addEventListener('click', () => {
    if (isPro()) {
      openMonoModal('pro');
    } else {
      openMonoModal('pro');
    }
  });
}

function setupDisclaimer() {
  const modal = document.getElementById('disclaimer-modal');
  const btnAccept = document.getElementById('btn-accept-disclaimer');

  if (!sessionStorage.getItem('disclaimer_accepted')) {
    modal.classList.add('active');
  }

  btnAccept.addEventListener('click', () => {
    sessionStorage.setItem('disclaimer_accepted', 'true');
    modal.classList.remove('active');
  });
}

function setupSettings() {
  const selectLang = document.getElementById('settings-lang-select');
  if (selectLang) {
    selectLang.value = currentLang;
    selectLang.addEventListener('change', () => {
      setLanguage(selectLang.value);
    });
  }

  const selectTheme = document.getElementById('settings-theme-select');
  if (selectTheme) {
    selectTheme.value = currentTheme;
    selectTheme.addEventListener('change', () => {
      applyTheme(selectTheme.value);
    });
  }
}

// --------------------------------------------------------------------------
// MÓDULO 1: CALCULADORA DE INFUSIÓN
// --------------------------------------------------------------------------
let updateCalculatorConcentrations = null;

function setupCalculator() {
  const selectDrug = document.getElementById('calc-drug');
  const selectConc = document.getElementById('calc-conc');
  const inputWeight = document.getElementById('calc-weight');
  const inputDose = document.getElementById('calc-dose');
  const inputRate = document.getElementById('calc-rate');
  const tabDoseToRate = document.getElementById('tab-mode-a');
  const tabRateToDose = document.getElementById('tab-mode-b');
  let mode = 'doseToRate';

  function updateDrugNames() {
    const curVal = selectDrug.value;
    selectDrug.innerHTML = DRUGS_DATA.map((d, i) => {
      const name = currentLang === 'en' ? d.nameEn : currentLang === 'pt' ? d.namePt : d.name;
      return `<option value="${i}">${name}</option>`;
    }).join('');
    if (curVal !== undefined && curVal !== '') selectDrug.value = curVal;
  }

  updateCalculatorConcentrations = function() {
    updateDrugNames();
    const drug = DRUGS_DATA[parseInt(selectDrug.value) || 0];
    if (drug && drug.preparations && drug.preparations.length > 0) {
      selectConc.innerHTML = drug.preparations.map(p => {
        let val = 16;
        if (p.includes('16 mcg/mL')) val = 16;
        else if (p.includes('32 mcg/mL')) val = 32;
        else if (p.includes('64 mcg/mL')) val = 64;
        else if (p.includes('1000 mcg/mL')) val = 1000;
        else if (p.includes('2000 mcg/mL')) val = 2000;
        else if (p.includes('1600 mcg/mL')) val = 1600;
        else if (p.includes('3200 mcg/mL')) val = 3200;
        else if (p.includes('0.2 UI/mL')) val = 0.2;
        else if (p.includes('200 mcg/mL')) val = 200;
        else if (p.includes('50 mcg/mL')) val = 50;
        else if (p.includes('10000 ng/mL')) val = 10;
        return `<option value="${val}">${p}</option>`;
      }).join('');
    } else {
      selectConc.innerHTML = `<option value="16">16 mcg/mL (Estándar)</option>`;
    }
    calculate();
  };

  selectDrug.addEventListener('change', () => {
    const drug = DRUGS_DATA[parseInt(selectDrug.value) || 0];
    if (drug && drug.preparations && drug.preparations.length > 0) {
      selectConc.innerHTML = drug.preparations.map(p => {
        let val = 16;
        if (p.includes('16 mcg/mL')) val = 16;
        else if (p.includes('32 mcg/mL')) val = 32;
        else if (p.includes('64 mcg/mL')) val = 64;
        else if (p.includes('1000 mcg/mL')) val = 1000;
        else if (p.includes('2000 mcg/mL')) val = 2000;
        else if (p.includes('1600 mcg/mL')) val = 1600;
        else if (p.includes('3200 mcg/mL')) val = 3200;
        else if (p.includes('0.2 UI/mL')) val = 0.2;
        else if (p.includes('200 mcg/mL')) val = 200;
        else if (p.includes('50 mcg/mL')) val = 50;
        else if (p.includes('10000 ng/mL')) val = 10;
        return `<option value="${val}">${p}</option>`;
      }).join('');
    }
    calculate();
  });
  updateCalculatorConcentrations();

  tabDoseToRate.addEventListener('click', () => {
    mode = 'doseToRate';
    tabDoseToRate.classList.add('active');
    tabRateToDose.classList.remove('active');
    document.getElementById('group-dose-input').style.display = 'block';
    document.getElementById('group-rate-input').style.display = 'none';
    calculate();
  });

  tabRateToDose.addEventListener('click', () => {
    mode = 'rateToDose';
    tabRateToDose.classList.add('active');
    tabDoseToRate.classList.remove('active');
    document.getElementById('group-dose-input').style.display = 'none';
    document.getElementById('group-rate-input').style.display = 'block';
    calculate();
  });

  [inputWeight, inputDose, inputRate, selectConc].forEach(el => {
    el.addEventListener('input', calculate);
    el.addEventListener('change', calculate);
  });

  function calculate() {
    const weight = parseFloat(inputWeight.value) || 70;
    const conc = parseFloat(selectConc.value) || 16;
    const resBox = document.getElementById('calc-result-box');
    const resLabel = document.getElementById('calc-result-label');
    const resVal = document.getElementById('calc-result-value');
    const titrationBox = document.getElementById('calc-titration');

    if (mode === 'doseToRate') {
      const dose = parseFloat(inputDose.value) || 0;
      const rate = FormulaEngine.calculateRate(dose, weight, conc);
      resLabel.innerText = I18N[currentLang].calc_res_rate_label;
      resVal.innerText = `${rate.toFixed(2)} mL/h`;

      const steps = [0.5, 0.75, 1.0, 1.25, 1.5];
      let titHtml = `<strong>${I18N[currentLang].calc_titration_title}</strong><br>`;
      steps.forEach(s => {
        const d = (dose * s).toFixed(3);
        const r = FormulaEngine.calculateRate(dose * s, weight, conc).toFixed(2);
        const marker = s === 1.0 ? '► ACTUAL: ' : '   ';
        titHtml += `${marker}<strong>${d}</strong> mcg/kg/min → <strong>${r}</strong> mL/h<br>`;
      });
      titrationBox.innerHTML = titHtml;
    } else {
      const rate = parseFloat(inputRate.value) || 0;
      const dose = FormulaEngine.calculateDose(rate, weight, conc);
      resLabel.innerText = I18N[currentLang].calc_res_dose_label;
      resVal.innerText = `${dose.toFixed(4)} mcg/kg/min`;
      titrationBox.innerHTML = `Calculado para ${weight} kg con concentración de ${conc} mcg/mL.`;
    }
    resBox.style.display = 'block';
  }
  calculate();
}

// --------------------------------------------------------------------------
// MÓDULO 2: PERFIL HEMODINÁMICO & PERFUSIÓN AL PIE DE CAMA
// --------------------------------------------------------------------------
function setupHemoProfile() {
  const inputs = ['hemo-sbp', 'hemo-dbp', 'hemo-hr', 'hemo-cvp', 'hemo-co', 'hemo-crt', 'hemo-scvo2', 'hemo-pvacogap']
    .map(id => document.getElementById(id));

  function updateHemo() {
    const [sbp, dbp, hr, cvp, co, crt, scvo2, pvacogap] = inputs.map(el => parseFloat(el ? el.value : 0) || 0);
    const res = FormulaEngine.calculateHemoProfile({ sbp, dbp, hr, cvp, co, crt, scvo2, pvacogap });

    const elMap = document.getElementById('hemo-res-map');
    const elPp = document.getElementById('hemo-res-pp');
    const elSi = document.getElementById('hemo-res-si');
    const elSvr = document.getElementById('hemo-res-svr');
    const elPerf = document.getElementById('hemo-res-perf');
    const elCrt = document.getElementById('hemo-res-crt');

    if (elMap) elMap.innerText = res.map.toFixed(1);
    if (elPp) elPp.innerText = Math.round(res.pp);
    if (elSi) {
      elSi.innerText = res.si.toFixed(2);
      elSi.style.color = res.si > 0.9 ? 'var(--alert-critical)' : res.si >= 0.7 ? 'var(--alert-warning)' : 'var(--alert-success)';
    }
    if (elSvr) {
      elSvr.innerText = Math.round(res.svr);
      elSvr.style.color = (res.svr < 800 || res.svr > 1200) ? 'var(--alert-warning)' : 'var(--alert-success)';
    }
    if (elPerf) elPerf.innerText = res.perf.toFixed(1);
    if (elCrt) {
      elCrt.innerText = `${res.crt.toFixed(1)}s`;
      elCrt.style.color = res.crt > 3.0 ? 'var(--alert-critical)' : 'var(--alert-success)';
    }

    const badge = document.getElementById('hemo-phenotype-badge');
    if (badge) {
      badge.innerText = res.badgeText;
      badge.style.background = res.badgeColor;
    }
    const titleEl = document.getElementById('hemo-phenotype-title');
    if (titleEl) titleEl.innerText = res.title;
    const descEl = document.getElementById('hemo-phenotype-desc');
    if (descEl) descEl.innerText = res.desc;
    const recoEl = document.getElementById('hemo-phenotype-reco');
    if (recoEl) recoEl.innerText = res.reco;
  }

  inputs.forEach(el => { if (el) el.addEventListener('input', updateHemo); });
  window.updateHemoProfile = updateHemo;
  updateHemo();
}

// --------------------------------------------------------------------------
// MÓDULO 3: PREPARACIÓN DE MEZCLAS
// --------------------------------------------------------------------------
function setupPrep() {
  const presetSelect = document.getElementById('prep-preset');
  const inputMg = document.getElementById('prep-mg');
  const inputVol = document.getElementById('prep-vol');
  const inputWeight = document.getElementById('prep-weight');
  const inputDose = document.getElementById('prep-dose');

  const presets = [
    { name: "— Seleccionar Plantilla Estándar —", mg: 4, vol: 250, dose: 0.1 },
    { name: "Noradrenalina: 4 mg en 250 mL (16 mcg/mL)", mg: 4, vol: 250, dose: 0.1 },
    { name: "Noradrenalina: 8 mg en 250 mL (32 mcg/mL)", mg: 8, vol: 250, dose: 0.2 },
    { name: "Noradrenalina: 16 mg en 250 mL (64 mcg/mL)", mg: 16, vol: 250, dose: 0.3 },
    { name: "Adrenalina: 4 mg en 250 mL (16 mcg/mL)", mg: 4, vol: 250, dose: 0.05 },
    { name: "Dobutamina: 250 mg en 250 mL (1000 mcg/mL)", mg: 250, vol: 250, dose: 5.0 },
    { name: "Dopamina: 400 mg en 250 mL (1600 mcg/mL)", mg: 400, vol: 250, dose: 5.0 },
    { name: "Milrinona: 20 mg en 100 mL (200 mcg/mL)", mg: 20, vol: 100, dose: 0.375 },
    { name: "Levosimendán: 12.5 mg en 250 mL (50 mcg/mL)", mg: 12.5, vol: 250, dose: 0.1 },
    { name: "Nitroprusiato: 50 mg en 250 mL (200 mcg/mL)", mg: 50, vol: 250, dose: 0.5 }
  ];

  presetSelect.innerHTML = presets.map((p, i) => `<option value="${i}">${p.name}</option>`).join('');

  presetSelect.addEventListener('change', () => {
    const idx = parseInt(presetSelect.value);
    if (idx > 0) {
      inputMg.value = presets[idx].mg;
      inputVol.value = presets[idx].vol;
      inputDose.value = presets[idx].dose;
      calculatePrep();
    }
  });

  [inputMg, inputVol, inputWeight, inputDose].forEach(el => {
    el.addEventListener('input', calculatePrep);
  });

  function calculatePrep() {
    const mg = parseFloat(inputMg.value) || 0;
    const vol = parseFloat(inputVol.value) || 250;
    const weight = parseFloat(inputWeight.value) || 70;
    const dose = parseFloat(inputDose.value) || 0.1;

    const res = FormulaEngine.calculatePrep(mg, vol, dose, weight);
    document.getElementById('prep-res-conc').innerText = `${res.conc.toFixed(2)} mcg/mL`;
    document.getElementById('prep-res-rate').innerText = `${res.rate.toFixed(2)} mL/h`;

    const h = Math.floor(res.durationHours);
    const m = Math.round((res.durationHours - h) * 60);
    document.getElementById('prep-res-duration').innerText = `${h} horas y ${m} minutos`;
  }

  calculatePrep();
}

// --------------------------------------------------------------------------
// MÓDULO 4: GUÍA DE FÁRMACOS
// --------------------------------------------------------------------------
let renderDrugList = null;

function setupDrugList() {
  const container = document.getElementById('drug-list-container');
  const searchInput = document.getElementById('drug-search');
  const chips = document.querySelectorAll('.filter-chip');
  let selectedCat = 'ALL';

  renderDrugList = function() {
    const query = searchInput.value.toLowerCase().trim();
    const filtered = DRUGS_DATA.filter(d => {
      const matchCat = selectedCat === 'ALL' || d.category === selectedCat;
      const drugName = (currentLang === 'en' ? d.nameEn : currentLang === 'pt' ? d.namePt : d.name).toLowerCase();
      const matchQuery = drugName.includes(query) ||
                         d.name.toLowerCase().includes(query) ||
                         d.category.toLowerCase().includes(query);
      return matchCat && matchQuery;
    });

    if (filtered.length === 0) {
      const emptyMsg = currentLang === 'en' ? 'No drugs match your criteria.' : currentLang === 'pt' ? 'Nenhum fármaco encontrado com este critério.' : 'No se encontraron fármacos con ese criterio.';
      container.innerHTML = `<p style="text-align:center; padding:24px; color:var(--text-secondary);">${emptyMsg}</p>`;
      return;
    }

    container.innerHTML = filtered.map(d => {
      const displayName = currentLang === 'en' ? d.nameEn : currentLang === 'pt' ? d.namePt : d.name;
      const t = (DRUGS_I18N[currentLang] && DRUGS_I18N[currentLang][d.id]) ? DRUGS_I18N[currentLang][d.id] : null;
      const lineText = t && t.line ? t.line : d.line;
      const catKey = 'cat_' + d.category.toLowerCase();
      const catLabel = (I18N[currentLang] && I18N[currentLang][catKey]) ? I18N[currentLang][catKey] : d.category;
      return `
        <div class="drug-item" data-id="${d.id}">
          <div class="drug-info">
            <h4>${displayName}</h4>
            <p>${d.subcategory} • ${lineText}</p>
            <div class="drug-dose-tag">${d.dosage.initialMin} – ${d.dosage.initialMax} ${d.dosage.unit}</div>
          </div>
          <div>
            <span class="badge badge-${d.category.toLowerCase()}">${catLabel}</span>
          </div>
        </div>
      `;
    }).join('');

    container.querySelectorAll('.drug-item').forEach(el => {
      el.addEventListener('click', () => {
        const id = el.getAttribute('data-id');
        openDrugModal(id);
      });
    });
  };

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      selectedCat = chip.getAttribute('data-cat');
      renderDrugList();
    });
  });

  searchInput.addEventListener('input', renderDrugList);
  renderDrugList();
}

function openDrugModal(drugId) {
  const drug = DRUGS_DATA.find(d => d.id === drugId);
  if (!drug) return;

  const modal = document.getElementById('drug-modal');
  const content = document.getElementById('drug-modal-body');
  const lang = currentLang || 'es';
  const dict = I18N[lang] || I18N.es;
  const t = (DRUGS_I18N[lang] && DRUGS_I18N[lang][drugId]) ? DRUGS_I18N[lang][drugId] : null;

  // Localized Name & Subtitle
  let titleName = drug.name;
  let subNames = `EN: ${drug.nameEn} | PT: ${drug.namePt}`;
  if (lang === 'en') {
    titleName = drug.nameEn || drug.name;
    subNames = `ES: ${drug.name} | PT: ${drug.namePt}`;
  } else if (lang === 'pt') {
    titleName = drug.namePt || drug.name;
    subNames = `ES: ${drug.name} | EN: ${drug.nameEn}`;
  }

  // Localized Category
  const catKey = 'cat_' + drug.category.toLowerCase();
  const categoryLabel = dict[catKey] || drug.category;

  // Localized Warning Box
  const warningText = (t && t.warningBox !== undefined) ? t.warningBox : drug.warningBox;
  let warningHtml = '';
  if (warningText) {
    warningHtml = `
      <div class="warning-callout">
        <strong>${dict.modal_head_warning || '⚠️ ADVERTENCIA DE CAJA NEGRA'}</strong>
        <p style="margin-top:4px;">${warningText}</p>
      </div>
    `;
  }

  // Localized Content Fields
  const mechanismText = (t && t.mechanism) ? t.mechanism : drug.mechanism;
  const indicationsList = (t && t.indications) ? t.indications : drug.indications;
  const contraindicationsList = (t && t.contraindications) ? t.contraindications : drug.contraindications;
  const adverseList = (t && t.adverseEffects) ? t.adverseEffects : drug.adverseEffects;
  const monitoringList = (t && t.monitoring) ? t.monitoring : drug.monitoring;
  const specialPopsText = (t && t.specialPops) ? t.specialPops : drug.specialPops;
  const weaningText = (t && t.weaning) ? t.weaning : drug.weaning;
  const prepsList = (t && t.preparations) ? t.preparations : drug.preparations;
  const routeText = (t && t.route) ? t.route : drug.pk.route;

  // Localized Hemodynamic Labels
  const lblMap = lang === 'en' ? 'MAP' : 'PAM';
  const lblCo = lang === 'pt' ? 'DC' : (lang === 'en' ? 'CO' : 'GC');
  const lblSvr = lang === 'en' ? 'SVR' : 'RVS';
  const lblHr = lang === 'en' ? 'HR' : 'FC';
  const lblPcwp = lang === 'en' ? 'PCWP' : 'PCP';
  const lblSvo2 = 'SvO2';

  // Sections HTML
  let adverseHtml = '';
  if (adverseList && adverseList.length > 0) {
    adverseHtml = `
      <div class="card" style="padding:12px; margin-bottom:12px;">
        <h4 style="font-size:0.8rem; color:var(--alert-warning); margin-bottom:4px;">${dict.modal_head_adverse || 'EFECTOS ADVERSOS'}</h4>
        <div style="font-size:0.82rem; color:var(--text-main);">${adverseList.map(a => `• ${a}`).join('<br>')}</div>
      </div>
    `;
  }

  let monitoringHtml = '';
  if (monitoringList && monitoringList.length > 0) {
    monitoringHtml = `
      <div class="card" style="padding:12px; margin-bottom:12px;">
        <h4 style="font-size:0.8rem; color:var(--accent); margin-bottom:4px;">${dict.modal_head_monitoring || 'MONITORIZACIÓN EN UCI'}</h4>
        <div style="font-size:0.82rem; color:var(--text-main);">${monitoringList.map(m => `• ${m}`).join('<br>')}</div>
      </div>
    `;
  }

  let specialPopsHtml = '';
  if (specialPopsText) {
    specialPopsHtml = `
      <div class="card" style="padding:12px; margin-bottom:12px;">
        <h4 style="font-size:0.8rem; color:var(--accent); margin-bottom:4px;">${dict.modal_head_special || 'POBLACIONES ESPECIALES'}</h4>
        <p style="font-size:0.82rem; color:var(--text-main);">${specialPopsText}</p>
      </div>
    `;
  }

  content.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:12px;">
      <div>
        <h2 style="font-size:1.3rem; font-weight:800; color:var(--text-main);">${titleName}</h2>
        <p style="font-size:0.75rem; color:var(--accent);">${subNames}</p>
      </div>
      <span class="badge badge-${drug.category.toLowerCase()}">${categoryLabel}</span>
    </div>

    ${warningHtml}

    <div class="card" style="padding:12px; margin-bottom:12px;">
      <h4 style="font-size:0.8rem; color:var(--accent); margin-bottom:4px;">${dict.modal_head_mechanism || 'MECANISMO DE ACCIÓN'}</h4>
      <p style="font-size:0.85rem; color:var(--text-main); line-height:1.45;">${mechanismText}</p>
    </div>

    <div class="card" style="padding:12px; margin-bottom:12px;">
      <h4 style="font-size:0.8rem; color:var(--accent); margin-bottom:6px;">${dict.modal_head_receptors || 'PERFIL DE RECEPTORES'}</h4>
      <div style="font-family:var(--font-mono); font-size:0.75rem; line-height:1.6;">
        α1: ${"+".repeat(drug.receptors.a1) || "—"} | α2: ${"+".repeat(drug.receptors.a2) || "—"} | β1: ${"+".repeat(drug.receptors.b1) || "—"} | β2: ${"+".repeat(drug.receptors.b2) || "—"}<br>
        DOPA: ${"+".repeat(drug.receptors.dopa) || "—"} | V1: ${"+".repeat(drug.receptors.v1) || "—"} | V2: ${"+".repeat(drug.receptors.v2) || "—"} | AT1: ${"+".repeat(drug.receptors.at1) || "—"} | PDE: ${"+".repeat(drug.receptors.pde) || "—"}
      </div>
    </div>

    <div class="card" style="padding:12px; margin-bottom:12px;">
      <h4 style="font-size:0.8rem; color:var(--accent); margin-bottom:6px;">${dict.modal_head_hemodynamics || 'EFECTOS HEMODINÁMICOS'}</h4>
      <div style="font-family:var(--font-mono); font-size:0.78rem; line-height:1.6;">
        ${lblMap}: <strong>${drug.hemodynamics.map}</strong> | ${lblCo}: <strong>${drug.hemodynamics.co}</strong> | ${lblSvr}: <strong>${drug.hemodynamics.svr}</strong><br>
        ${lblHr}: <strong>${drug.hemodynamics.hr}</strong> | ${lblPcwp}: <strong>${drug.hemodynamics.pcwp}</strong> | ${lblSvo2}: <strong>${drug.hemodynamics.svo2}</strong>
      </div>
    </div>

    <div class="card" style="padding:12px; margin-bottom:12px;">
      <h4 style="font-size:0.8rem; color:var(--accent); margin-bottom:4px;">${dict.modal_head_dosing || 'DOSIFICACIÓN Y VÍA'}</h4>
      <p style="font-size:0.82rem;">• ${dict.modal_lbl_range || 'Rango:'} <strong>${drug.dosage.initialMin} – ${drug.dosage.initialMax} ${drug.dosage.unit}</strong> (${dict.modal_lbl_max || 'Máx:'} ${drug.dosage.rangeMax} ${drug.dosage.unit})</p>
      <p style="font-size:0.82rem;">• ${dict.modal_lbl_route || 'Vía:'} ${routeText}</p>
      <p style="font-size:0.82rem;">• ${dict.modal_lbl_pk || 'Farmacocinética: Inicio'} ${drug.pk.onset} min | ${dict.modal_lbl_half_life || 'Vida media:'} ${drug.pk.halfLife} min</p>
    </div>

    <div class="card" style="padding:12px; margin-bottom:12px;">
      <h4 style="font-size:0.8rem; color:var(--accent); margin-bottom:4px;">${dict.modal_head_preparations || 'PREPARACIONES ESTÁNDAR'}</h4>
      <div style="font-size:0.8rem; color:var(--text-main); font-family:var(--font-mono);">
        ${prepsList.map(p => `• ${p}`).join('<br>')}
      </div>
    </div>

    <div class="card" style="padding:12px; margin-bottom:12px;">
      <h4 style="font-size:0.8rem; color:var(--accent); margin-bottom:4px;">${dict.modal_head_indications || 'INDICACIONES CLÍNICAS'}</h4>
      <div style="font-size:0.82rem;">${indicationsList.map(i => `• ${i}`).join('<br>')}</div>
    </div>

    <div class="card" style="padding:12px; margin-bottom:12px;">
      <h4 style="font-size:0.8rem; color:var(--alert-warning); margin-bottom:4px;">${dict.modal_head_contraindications || 'CONTRAINDICACIONES'}</h4>
      <div style="font-size:0.82rem; color:var(--alert-warning-text);">${contraindicationsList.map(c => `• ${c}`).join('<br>')}</div>
    </div>

    ${adverseHtml}
    ${monitoringHtml}
    ${specialPopsHtml}

    <div class="card" style="padding:12px; margin-bottom:12px;">
      <h4 style="font-size:0.8rem; color:var(--alert-success); margin-bottom:4px;">${dict.modal_head_weaning || 'DESESCALADA (WEANING)'}</h4>
      <p style="font-size:0.82rem;">${weaningText}</p>
    </div>

    <button class="btn btn-primary" onclick="selectDrugForCalc('${drug.id}')">
      ${dict.modal_btn_calc || dict.btn_calc_this_drug}
    </button>
  `;

  modal.classList.add('active');
}

window.closeDrugModal = function() {
  document.getElementById('drug-modal').classList.remove('active');
};

window.selectDrugForCalc = function(drugId) {
  closeDrugModal();
  const select = document.getElementById('calc-drug');
  const idx = DRUGS_DATA.findIndex(d => d.id === drugId);
  if (idx >= 0) {
    select.value = idx;
    select.dispatchEvent(new Event('change'));
  }
  switchView('calculator');
};

// --------------------------------------------------------------------------
// MÓDULO 5: SELECTOR DE SHOCK Y ALGORITMOS INTERACTIVOS (6 ESCENARIOS)
// --------------------------------------------------------------------------
function setupShockSelector() {
  const shockCards = document.querySelectorAll('.shock-type-card');
  shockCards.forEach(card => {
    card.addEventListener('click', () => {
      const type = card.getAttribute('data-shock');
      openShockAlgorithm(type);
    });
  });

  document.getElementById('btn-shock-restart').addEventListener('click', () => {
    shockHistory = [];
    const protocol = SHOCK_PROTOCOLS[currentShockType];
    if (protocol) {
      currentShockStepKey = protocol.initialStep;
      renderShockStep();
    }
  });

  document.getElementById('btn-shock-back').addEventListener('click', () => {
    if (shockHistory.length > 0) {
      currentShockStepKey = shockHistory.pop();
      renderShockStep();
    }
  });
}

function openShockAlgorithm(type) {
  currentShockType = type;
  const protocol = SHOCK_PROTOCOLS[type] || SHOCK_PROTOCOLS.septic;
  currentShockStepKey = protocol.initialStep;
  shockHistory = [];

  const lang = currentLang || 'es';
  const pTitle = lang === 'en' ? (protocol.title_en || protocol.title) : (lang === 'pt' ? (protocol.title_pt || protocol.title) : protocol.title);
  document.getElementById('shock-algo-title').innerText = pTitle;
  renderShockStep();
  switchView('shock-algo');
}

function renderShockStep() {
  const protocol = SHOCK_PROTOCOLS[currentShockType] || SHOCK_PROTOCOLS.septic;
  const step = protocol.steps[currentShockStepKey];
  if (!step) return;

  const lang = currentLang || 'es';
  const sTitle = lang === 'en' ? (step.title_en || step.title) : (lang === 'pt' ? (step.title_pt || step.title) : step.title);
  const sDesc = lang === 'en' ? (step.desc_en || step.desc) : (lang === 'pt' ? (step.desc_pt || step.desc) : step.desc);
  const sQuestion = lang === 'en' ? (step.question_en || step.question) : (lang === 'pt' ? (step.question_pt || step.question) : step.question);
  const sTerminal = lang === 'en' ? (step.terminal_en || step.terminal) : (lang === 'pt' ? (step.terminal_pt || step.terminal) : step.terminal);

  document.getElementById('shock-step-title').innerText = sTitle;
  document.getElementById('shock-step-desc').innerText = sDesc;
  const mapPrefix = lang === 'en' ? '🎯 Target MAP:' : (lang === 'pt' ? '🎯 Alvo PAM:' : '🎯 Objetivo PAM:');
  document.getElementById('shock-step-map').innerText = `${mapPrefix} ${step.targetMap}`;

  // Fármacos recomendados
  const drugsBox = document.getElementById('shock-step-drugs');
  if (step.drugs && step.drugs.length > 0) {
    const drugsHeader = lang === 'en' ? 'RECOMMENDED DRUGS:' : (lang === 'pt' ? 'FÁRMACOS RECOMENDADOS:' : 'FÁRMACOS RECOMENDADOS:');
    drugsBox.innerHTML = `
      <p style="font-size:0.75rem; color:var(--text-secondary); margin-bottom:6px; font-weight:700;">${drugsHeader}</p>
      <div style="display:flex; flex-wrap:wrap; gap:8px;">
        ${step.drugs.map(id => {
          const d = DRUGS_DATA.find(x => x.id === id);
          const name = d ? (lang === 'en' ? d.nameEn : lang === 'pt' ? d.namePt : d.name) : id;
          return `<button class="filter-chip active" onclick="openDrugModal('${id}')">💊 ${name}</button>`;
        }).join('')}
      </div>
    `;
    drugsBox.style.display = 'block';
  } else {
    drugsBox.style.display = 'none';
  }

  // Decisión clínica o nodo terminal
  const decisionCard = document.getElementById('shock-decision-card');
  const terminalCard = document.getElementById('shock-terminal-card');

  if (sQuestion) {
    decisionCard.style.display = 'block';
    terminalCard.style.display = 'none';
    document.getElementById('shock-decision-text').innerText = sQuestion;

    document.getElementById('btn-shock-yes').innerText = (I18N[lang] && I18N[lang].btn_yes) || 'SÍ';
    document.getElementById('btn-shock-no').innerText = (I18N[lang] && I18N[lang].btn_no) || 'NO';

    document.getElementById('btn-shock-yes').onclick = () => {
      shockHistory.push(currentShockStepKey);
      currentShockStepKey = step.yes;
      renderShockStep();
    };

    document.getElementById('btn-shock-no').onclick = () => {
      shockHistory.push(currentShockStepKey);
      currentShockStepKey = step.no;
      renderShockStep();
    };
  } else {
    decisionCard.style.display = 'none';
    terminalCard.style.display = 'block';
    const defTerm = lang === 'en' ? "Continue close ICU monitoring." : (lang === 'pt' ? "Continuar vigilância intensiva na UTI/CTI." : "Continuar vigilancia continua en UCI.");
    document.getElementById('shock-terminal-text').innerText = sTerminal || defTerm;
  }

  document.getElementById('btn-shock-back').disabled = shockHistory.length === 0;
  document.getElementById('btn-shock-back').innerText = (I18N[lang] && I18N[lang].btn_back_step) || '← Paso Anterior';
  document.getElementById('btn-shock-restart').innerText = (I18N[lang] && I18N[lang].btn_restart_algo) || '🔄 Reiniciar';
}

// ==========================================================================
// MÓDULO 6: MONETIZACIÓN — Publicidad (AdSense), Donaciones y Freemium PRO
// Dr. Luis Enrique Borroto Garcia, MD, MsC
// ==========================================================================

// =========================================================================
// CONFIGURACIÓN DE MONETIZACIÓN
// Dr. Luis Enrique Borroto Garcia, MD, MsC
// =========================================================================
const MONO_CONFIG = {
  adsensePubId: 'ca-pub-XXXXXXXXXXXXXXXX',
  maxDevicesPerLicense: 2,

  donate: {
    transferAO: {
      bank:     'Banco BAI (Banco Angolano de Investimentos)',
      titular:  'Dr. Luis Enrique Borroto Garcia',
      iban:     'AO06 0040 0000 3361 2865 1018 6',
      swift:    'BAIPAOLUXXX',
      concepto: 'Donación / Apoyo Proyecto VasoActivos UCI'
    },

    referenciaAO: {
      entidad:     '00040 (Banco BAI Angola)',
      telefonoMcx: '+244 932 708 186',
      titular:     'Dr. Luis Enrique Borroto Garcia',
      concepto:    'VasoActivos UCI — Apoyo / Licencia PRO',
      instruccion: 'Multicaixa Express → Pagamentos / Transferência directa para telemóvel ou IBAN BAI'
    },

    internacional: {
      email:   'luboga02@gmail.com',
      monedas: 'USD, EUR, AOA, BRL, GBP (Wise / Revolut)'
    },

    contacto: {
      whatsapp: '+244 932 708 186',
      email:    'luboga02@gmail.com',
      web:      'https://vasoactivos-uci.netlify.app'
    }
  },

  pro: {
    lifetime: {
      price:      '45.000 Kz',
      priceAO:    '45.000 Kz',
      stripeLink: 'https://buy.stripe.com/your_lifetime_link_here',
      label:      '⭐ PRO — PAGO ÚNICO DE POR VIDA (recomendado)'
    },
    monthly: {
      price:      '4.000 Kz/mes',
      priceAO:    '4.000 Kz/mes',
      stripeLink: 'https://buy.stripe.com/your_monthly_link_here',
      label:      '📅 PRO — Suscripción Mensual (sin compromiso)'
    },
    yearly: {
      price:      '30.000 Kz/año',
      priceAO:    '30.000 Kz/año (equivale a 2.500 Kz/mes)',
      stripeLink: 'https://buy.stripe.com/your_yearly_link_here',
      label:      '🗓️ PRO — Plan Anual (Ahorra 37%)'
    }
  },

  licenseSecret: 'DrLuisEnriqueBorrotoUCI2026VasoActivosAngolaLicenciasPro'
};

const PRO_STORAGE_KEY = 'vasoactivos_uci_pro_license_v1';
const _MK_H = '4e0c633c0f01fa2f4635c9d92b8eabd9698e8ae69034204a9e6fd75d55c08805';

function _sha256(ascii) {
  function rr(v, a) { return (v >>> a) | (v << (32 - a)); }
  const maxWord = Math.pow(2, 32);
  let result = '';
  const words = [];
  const bitLen = ascii.length * 8;
  let hash = [];
  const k = [];
  let pc = 0;
  const comp = {};
  for (let c = 2; pc < 64; c++) {
    if (!comp[c]) {
      for (let i = 0; i < 313; i += c) comp[i] = c;
      hash[pc] = (Math.pow(c, .5) * maxWord) | 0;
      k[pc++] = (Math.pow(c, 1 / 3) * maxWord) | 0;
    }
  }
  ascii += '\x80';
  while (ascii.length % 64 - 56) ascii += '\x00';
  for (let i = 0; i < ascii.length; i++) {
    const j = ascii.charCodeAt(i);
    if (j >> 8) return '';
    words[i >> 2] |= j << ((3 - i) % 4) * 8;
  }
  words[words.length] = ((bitLen / maxWord) | 0);
  words[words.length] = bitLen;
  for (let j = 0; j < words.length;) {
    const w = words.slice(j, j += 16);
    const old = hash;
    hash = hash.slice(0, 8);
    for (let i = 0; i < 64; i++) {
      const w15 = w[i - 15], w2 = w[i - 2];
      const a = hash[0], e = hash[4];
      const t1 = hash[7] + (rr(e, 6) ^ rr(e, 11) ^ rr(e, 25)) + ((e & hash[5]) ^ ((~e) & hash[6])) + k[i] +
        (w[i] = (i < 16) ? w[i] : (w[i - 16] + (rr(w15, 7) ^ rr(w15, 18) ^ (w15 >>> 3)) + w[i - 7] + (rr(w2, 17) ^ rr(w2, 19) ^ (w2 >>> 10))) | 0);
      const t2 = (rr(a, 2) ^ rr(a, 13) ^ rr(a, 22)) + ((a & hash[1]) ^ (a & hash[2]) ^ (hash[1] & hash[2]));
      hash = [(t1 + t2) | 0].concat(hash);
      hash[4] = (hash[4] + t1) | 0;
    }
    for (let i = 0; i < 8; i++) hash[i] = (hash[i] + old[i]) | 0;
  }
  for (let i = 0; i < 8; i++) {
    for (let j = 3; j + 1; j--) {
      const b = (hash[i] >> (j * 8)) & 255;
      result += ((b < 16) ? 0 : '') + b.toString(16);
    }
  }
  return result;
}

function _esClaveMaestra(k) {
  return typeof k === 'string' && k.length > 0 && _sha256(k.trim().toUpperCase()) === _MK_H;
}

function isPro() {
  try {
    const raw = localStorage.getItem(PRO_STORAGE_KEY);
    if (!raw) return false;
    const lic = JSON.parse(raw);
    if (!lic || !lic.key) return false;
    if (_esClaveMaestra(lic.key)) return true;
    if (/DEMO/i.test(lic.key)) return false;
    return validateLicenseKey(lic.key);
  } catch (_) {
    return false;
  }
}

function saveProLicense(key, plan = 'lifetime') {
  const data = { key, plan, activatedAt: Date.now() };
  localStorage.setItem(PRO_STORAGE_KEY, JSON.stringify(data));
}

function clearProLicense() {
  localStorage.removeItem(PRO_STORAGE_KEY);
}

const ANTIPIRATERIA = {
  maxDispositivosPorLicencia: 2,
  dominiosPermitidos: [
    'localhost',
    '127.0.0.1'
  ]
};

// --------- Util: Generar/Recuperar ID ÚNICO de ESTE dispositivo (persistente) ---------
function _deviceId() {
  try {
    let id = localStorage.getItem('vaso_device_id');
    if (!id) {
      const r = () => Math.random().toString(36).slice(2, 10);
      id = ('dev-' + r() + r() + '-' + Date.now().toString(36)).slice(0, 36);
      localStorage.setItem('vaso_device_id', id);
    }
    return id;
  } catch (_) {
    return 'dev-' + Math.random().toString(36).slice(2, 16);
  }
}

// --------- Util: ¿Estamos en un dominio permitido? ---------
function _dominioOk() {
  try {
    const h = (location.hostname || '').toLowerCase();
    if (!h) return true; // file:// sin hostname
    if (ANTIPIRATERIA.dominiosPermitidos.includes(h)) return true;
    if (h.endsWith('.netlify.app')) return true; // cualquier subdominio Netlify
    // Warning leve: aceptar mientras tanto (solo muestra banner no bloquea UI
    return true;
  } catch (_) { return true; }
}

function validateLicenseKey(rawKey) {
  if (!rawKey || typeof rawKey !== 'string') return false;
  const key = rawKey.trim().toUpperCase();

  if (key === 'PRO-DEMO-1234' || /DEMO|TEST|SAMPLE/i.test(key)) return false;

  const pattern = /^PRO-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/;
  if (!pattern.test(key)) return false;

  const body = key.substring(4);
  const secret = MONO_CONFIG.licenseSecret || '';
  let h = 0;
  for (let i = 0; i < body.length; i++) {
    h = ((h << 5) - h + body.charCodeAt(i) + secret.charCodeAt(i % secret.length)) | 0;
  }
  const bloques = body.split('-');
  const lastBlock = bloques.pop();
  const sumLast = lastBlock.charCodeAt(0) + lastBlock.charCodeAt(1) + lastBlock.charCodeAt(2) + lastBlock.charCodeAt(3);
  const checkOk = (sumLast % 7) === 0;

  if (!checkOk) return false;

  const body2 = bloques.join('');
  let h2 = 0;
  for (let i = 0; i < body2.length; i++) {
    h2 = (h2 * 31 + body2.charCodeAt(i) + secret.charCodeAt(i % secret.length)) | 0;
  }
  const check2 = (Math.abs(h2) % 17) === (lastBlock.charCodeAt(3) % 17);
  return checkOk && check2;
}

function _licenciasRegistradas() {
  try {
    return JSON.parse(localStorage.getItem('vaso_lic_reg') || '{}');
  } catch (_) { return {}; }
}
function _guardarLicReg(data) {
  try { localStorage.setItem('vaso_lic_reg', JSON.stringify(data)); } catch (_) {}
}

function verificarDeviceBinding(licencia) {
  const maxAllowed = MONO_CONFIG.maxDevicesPerLicense || ANTIPIRATERIA.maxDispositivosPorLicencia || 2;
  const devId = _deviceId();
  const reg = _licenciasRegistradas();
  let entry = reg[licencia];
  if (!entry) entry = { devices: [], created: Date.now() };

  if (entry.devices.indexOf(devId) !== -1) {
    return { ok: true, devices: entry.devices, devId: devId };
  }

  if (entry.devices.length < maxAllowed) {
    entry.devices.push(devId);
    reg[licencia] = entry;
    _guardarLicReg(reg);
    return { ok: true, devices: entry.devices, devId: devId, nuevo: true };
  }

  return { ok: false, devices: entry.devices, devId: devId, max: maxAllowed };
}

// La generación de licencias se realiza con la herramienta privada local
// (fuera de la carpeta publicada en Netlify).


// --------- Estado: plan seleccionado en Modal ---------
let selectedPlan = 'lifetime';

// --------- Función de Renderizado Reactivo I18N de Monetización / Apoyo ---------
function renderMonetizationI18n() {
  const lang = currentLang || 'es';
  const t = I18N[lang] || I18N.es;
  const CFG = MONO_CONFIG;

  // 1) Badges de cambio de idioma (cabecera y modal)
  const btnHeaderLang = document.getElementById('btn-header-lang');
  if (btnHeaderLang) btnHeaderLang.innerText = lang.toUpperCase();

  const btnMonoLang = document.getElementById('btn-mono-lang');
  if (btnMonoLang) btnMonoLang.innerText = lang.toUpperCase();

  // 2) Título y pestañas del modal de monetización
  const modalTitle = document.getElementById('mono-modal-title');
  if (modalTitle && t.mono_modal_title) modalTitle.innerText = t.mono_modal_title;

  const tabDonateBtn = document.getElementById('mono-tab-donate-btn');
  if (tabDonateBtn && t.mono_tab_donate) tabDonateBtn.innerText = t.mono_tab_donate;

  const tabProBtn = document.getElementById('mono-tab-pro-btn');
  if (tabProBtn && t.mono_tab_pro) tabProBtn.innerText = t.mono_tab_pro;

  // 3) Tarjetas del Dashboard
  const hubUpgradeTitle = document.getElementById('hub-card-upgrade-title');
  if (hubUpgradeTitle && t.hub_card_upgrade_title) hubUpgradeTitle.innerText = t.hub_card_upgrade_title;
  const hubUpgradeDesc = document.getElementById('hub-card-upgrade-desc');
  if (hubUpgradeDesc && t.hub_card_upgrade_desc) hubUpgradeDesc.innerText = t.hub_card_upgrade_desc;

  const hubSupportTitle = document.getElementById('hub-card-support-title');
  if (hubSupportTitle && t.hub_card_support_title) hubSupportTitle.innerText = t.hub_card_support_title;
  const hubSupportDesc = document.getElementById('hub-card-support-desc');
  if (hubSupportDesc && t.hub_card_support_desc) hubSupportDesc.innerText = t.hub_card_support_desc;

  const adTextDash = document.getElementById('ad-banner-text-dashboard');
  if (adTextDash && t.ad_dashboard_text) adTextDash.innerHTML = t.ad_dashboard_text;
  const adCtaDash = document.getElementById('ad-banner-cta-dashboard');
  if (adCtaDash && t.ad_dashboard_cta) adCtaDash.innerText = t.ad_dashboard_cta;

  // 4) Botones de donación (Transferencia y Referencia)
  const btnDonateTr = document.getElementById('btn-donate-transfer');
  if (btnDonateTr && t.donate_btn_transfer) btnDonateTr.innerText = t.donate_btn_transfer;

  const btnDonateRef = document.getElementById('btn-donate-reference');
  if (btnDonateRef && t.donate_btn_reference) btnDonateRef.innerText = t.donate_btn_reference;

  // Detalles de transferencia (Angola + Multicaixa Express + Internacional)
  const transfer = document.getElementById('transfer-details');
  if (transfer) {
    const trAO = CFG.donate.transferAO;
    const refAO = CFG.donate.referenciaAO;
    const trInt = CFG.donate.internacional;
    const c = CFG.donate.contacto;
    const waNum = c.whatsapp.replace(/[^0-9]/g, '');

    const waGreetings = {
      es: '¡Hola Dr. Borroto! Ya realicé el pago/donación para el proyecto VasoActivos UCI. Adjunto mi comprobante para recibir mi código PRO: ',
      en: 'Hello Dr. Borroto! I have completed the payment/donation for the VasoActivos ICU project. Here is my receipt to receive my PRO code: ',
      pt: 'Olá Dr. Borroto! Já efetuei o pagamento/doação para o projeto VasoAtivos CTI. Segue o meu comprovativo para receber o meu código PRO: '
    };
    const waText = encodeURIComponent(waGreetings[lang] || waGreetings.es);
    const waLink = `https://wa.me/${waNum}?text=${waText}`;

    if (lang === 'pt') {
      transfer.innerHTML = `
        <div class="transfer-box" id="sec-transfer-bai" style="margin-bottom:12px; padding:12px; background:var(--bg-surface-elevated); border-radius:10px; border-left:4px solid #0a4a82;">
          <h4 style="color:#0a4a82; font-size:0.88rem; font-weight:800; margin-bottom:6px;">🏦 1. TRANSFERÊNCIA BANCÁRIA (BANCO BAI - ANGOLA)</h4>
          <div style="font-size:0.78rem; line-height:1.6;">
            <strong>Banco:</strong> ${trAO.bank}<br>
            <strong>Titular:</strong> ${trAO.titular}<br>
            <strong>IBAN:</strong> <span style="font-family:monospace; background:rgba(0,0,0,0.2); padding:2px 6px; border-radius:4px; font-weight:700;">${trAO.iban}</span><br>
            <strong>SWIFT/BIC:</strong> ${trAO.swift}<br>
            <strong>Descritivo:</strong> "${trAO.concepto}"
          </div>
        </div>

        <div class="transfer-box" id="sec-transfer-ref" style="margin-bottom:12px; padding:12px; background:var(--bg-surface-elevated); border-radius:10px; border-left:4px solid #D4AF37;">
          <h4 style="color:#D4AF37; font-size:0.88rem; font-weight:800; margin-bottom:6px;">💳 2. PAGAMENTO POR REFERÊNCIA (MULTICAIXA EXPRESS / ATM)</h4>
          <div style="font-size:0.78rem; line-height:1.6;">
            <strong>Aplicação:</strong> Multicaixa Express (ou qualquer Caixa ATM)<br>
            <strong>Opção no Multicaixa:</strong> Enviar Dinheiro ou Pagamentos por Referência<br>
            <strong>Telemóvel Express:</strong> <span style="font-family:monospace; font-weight:700; color:var(--accent);">${refAO.telefonoMcx}</span><br>
            <strong>Entidade BAI:</strong> ${refAO.entidad}<br>
            <strong>Titular:</strong> ${refAO.titular}<br>
            <strong>Referência:</strong> ${refAO.concepto}
          </div>
        </div>

        <div class="transfer-box" style="margin-bottom:12px; padding:12px; background:var(--bg-surface-elevated); border-radius:10px; border-left:4px solid #0891b2;">
          <h4 style="color:#0891b2; font-size:0.88rem; font-weight:800; margin-bottom:6px;">🌍 3. TRANSFERÊNCIA INTERNACIONAL (WISE / REVOLUT)</h4>
          <div style="font-size:0.78rem; line-height:1.6;">
            <strong>Email beneficiário:</strong> <a href="mailto:${trInt.email}" style="color:var(--accent); font-weight:700;">${trInt.email}</a><br>
            <strong>Moedas aceites:</strong> ${trInt.monedas}
          </div>
        </div>

        <div style="margin-top:12px; padding:12px; background:rgba(34, 197, 94, 0.12); border:1.5px solid #22c55e; border-radius:10px; text-align:center;">
          <h4 style="color:#22c55e; font-size:0.88rem; font-weight:800; margin-bottom:6px;">📲 COMO RECEBER O SEU CÓDIGO PRO APÓS PAGAR:</h4>
          <p style="font-size:0.78rem; line-height:1.5; color:var(--text-main); margin-bottom:10px;">
            Após concluir a transferência ou pagamento por referência, clique no botão abaixo para enviar o comprovativo direto ao Dr. Luis Borroto. O seu código de ativação <code>PRO-XXXX-XXXX-XXXX</code> será enviado <strong>diretamente para a sua conversa no WhatsApp</strong> em <strong>menos de 15 min a 2 horas</strong> ⚡.
          </p>
          <a href="${waLink}" target="_blank" rel="noopener" class="mono-continue-btn" style="display:inline-block; text-decoration:none; background:#22c55e; color:#fff; padding:10px 18px; font-size:0.84rem;">
            💬 Enviar Comprovativo por WhatsApp (+244 932 708 186)
          </a>
        </div>
      `;
    } else if (lang === 'en') {
      transfer.innerHTML = `
        <div class="transfer-box" id="sec-transfer-bai" style="margin-bottom:12px; padding:12px; background:var(--bg-surface-elevated); border-radius:10px; border-left:4px solid #0a4a82;">
          <h4 style="color:#0a4a82; font-size:0.88rem; font-weight:800; margin-bottom:6px;">🏦 1. BANK TRANSFER (BANCO BAI - ANGOLA)</h4>
          <div style="font-size:0.78rem; line-height:1.6;">
            <strong>Bank:</strong> ${trAO.bank}<br>
            <strong>Account Holder:</strong> ${trAO.titular}<br>
            <strong>IBAN:</strong> <span style="font-family:monospace; background:rgba(0,0,0,0.2); padding:2px 6px; border-radius:4px; font-weight:700;">${trAO.iban}</span><br>
            <strong>SWIFT/BIC:</strong> ${trAO.swift}<br>
            <strong>Reference:</strong> "Donation / VasoActivos ICU Project"
          </div>
        </div>

        <div class="transfer-box" id="sec-transfer-ref" style="margin-bottom:12px; padding:12px; background:var(--bg-surface-elevated); border-radius:10px; border-left:4px solid #D4AF37;">
          <h4 style="color:#D4AF37; font-size:0.88rem; font-weight:800; margin-bottom:6px;">💳 2. PAYMENT BY REFERENCE (MULTICAIXA EXPRESS / ATM)</h4>
          <div style="font-size:0.78rem; line-height:1.6;">
            <strong>Application:</strong> Multicaixa Express (or any ATM kiosk)<br>
            <strong>Express Menu:</strong> Send Money or Payments by Reference<br>
            <strong>Express Mobile:</strong> <span style="font-family:monospace; font-weight:700; color:var(--accent);">${refAO.telefonoMcx}</span><br>
            <strong>BAI Entity:</strong> ${refAO.entidad}<br>
            <strong>Holder:</strong> ${refAO.titular}<br>
            <strong>Reference:</strong> ${refAO.concepto}
          </div>
        </div>

        <div class="transfer-box" style="margin-bottom:12px; padding:12px; background:var(--bg-surface-elevated); border-radius:10px; border-left:4px solid #0891b2;">
          <h4 style="color:#0891b2; font-size:0.88rem; font-weight:800; margin-bottom:6px;">🌍 3. INTERNATIONAL WIRE (WISE / REVOLUT)</h4>
          <div style="font-size:0.78rem; line-height:1.6;">
            <strong>Recipient email:</strong> <a href="mailto:${trInt.email}" style="color:var(--accent); font-weight:700;">${trInt.email}</a><br>
            <strong>Accepted currencies:</strong> ${trInt.monedas}
          </div>
        </div>

        <div style="margin-top:12px; padding:12px; background:rgba(34, 197, 94, 0.12); border:1.5px solid #22c55e; border-radius:10px; text-align:center;">
          <h4 style="color:#22c55e; font-size:0.88rem; font-weight:800; margin-bottom:6px;">📲 HOW TO RECEIVE YOUR PRO CODE AFTER PAYING:</h4>
          <p style="font-size:0.78rem; line-height:1.5; color:var(--text-main); margin-bottom:10px;">
            After completing your transfer or reference payment, click below to send your receipt directly to Dr. Luis Borroto. Your <code>PRO-XXXX-XXXX-XXXX</code> activation code will be sent <strong>directly to your WhatsApp chat</strong> in <strong>under 15 min to 2 hours</strong> ⚡.
          </p>
          <a href="${waLink}" target="_blank" rel="noopener" class="mono-continue-btn" style="display:inline-block; text-decoration:none; background:#22c55e; color:#fff; padding:10px 18px; font-size:0.84rem;">
            💬 Send Receipt via WhatsApp (+244 932 708 186)
          </a>
        </div>
      `;
    } else {
      transfer.innerHTML = `
        <div class="transfer-box" id="sec-transfer-bai" style="margin-bottom:12px; padding:12px; background:var(--bg-surface-elevated); border-radius:10px; border-left:4px solid #0a4a82;">
          <h4 style="color:#0a4a82; font-size:0.88rem; font-weight:800; margin-bottom:6px;">🏦 1. TRANSFERENCIA BANCARIA (BANCO BAI - ANGOLA)</h4>
          <div style="font-size:0.78rem; line-height:1.6;">
            <strong>Banco:</strong> ${trAO.bank}<br>
            <strong>Titular:</strong> ${trAO.titular}<br>
            <strong>IBAN:</strong> <span style="font-family:monospace; background:rgba(0,0,0,0.2); padding:2px 6px; border-radius:4px; font-weight:700;">${trAO.iban}</span><br>
            <strong>SWIFT/BIC:</strong> ${trAO.swift}<br>
            <strong>Concepto:</strong> "${trAO.concepto}"
          </div>
        </div>

        <div class="transfer-box" id="sec-transfer-ref" style="margin-bottom:12px; padding:12px; background:var(--bg-surface-elevated); border-radius:10px; border-left:4px solid #D4AF37;">
          <h4 style="color:#D4AF37; font-size:0.88rem; font-weight:800; margin-bottom:6px;">💳 2. PAGO POR REFERENCIA (MULTICAIXA EXPRESS / ATM)</h4>
          <div style="font-size:0.78rem; line-height:1.6;">
            <strong>Aplicación:</strong> Multicaixa Express (o cualquier cajero Multicaixa)<br>
            <strong>Opción en Express:</strong> Enviar Dinero o Pagos por Referencia<br>
            <strong>Teléfono Express:</strong> <span style="font-family:monospace; font-weight:700; color:var(--accent);">${refAO.telefonoMcx}</span><br>
            <strong>Entidad BAI:</strong> ${refAO.entidad}<br>
            <strong>Titular:</strong> ${refAO.titular}<br>
            <strong>Referencia / Concepto:</strong> ${refAO.concepto}
          </div>
        </div>

        <div class="transfer-box" style="margin-bottom:12px; padding:12px; background:var(--bg-surface-elevated); border-radius:10px; border-left:4px solid #0891b2;">
          <h4 style="color:#0891b2; font-size:0.88rem; font-weight:800; margin-bottom:6px;">🌍 3. TRANSFERENCIA INTERNACIONAL (WISE / REVOLUT)</h4>
          <div style="font-size:0.78rem; line-height:1.6;">
            <strong>Email beneficiario:</strong> <a href="mailto:${trInt.email}" style="color:var(--accent); font-weight:700;">${trInt.email}</a><br>
            <strong>Monedas aceptadas:</strong> ${trInt.monedas}
          </div>
        </div>

        <div style="margin-top:12px; padding:12px; background:rgba(34, 197, 94, 0.12); border:1.5px solid #22c55e; border-radius:10px; text-align:center;">
          <h4 style="color:#22c55e; font-size:0.88rem; font-weight:800; margin-bottom:6px;">📲 CÓMO RECIBES TU CÓDIGO PRO TRAS PAGAR:</h4>
          <p style="font-size:0.78rem; line-height:1.5; color:var(--text-main); margin-bottom:10px;">
            Tras realizar la transferencia o pago por referencia, pulsa el botón abajo para enviar tu comprobante directo al Dr. Luis Borroto. Tu código de activación <code>PRO-XXXX-XXXX-XXXX</code> te llegará <strong>directamente a tu WhatsApp</strong> en <strong>menos de 15 min a 2 horas</strong> ⚡.
          </p>
          <a href="${waLink}" target="_blank" rel="noopener" class="mono-continue-btn" style="display:inline-block; text-decoration:none; background:#22c55e; color:#fff; padding:10px 18px; font-size:0.84rem;">
            💬 Enviar Comprobante por WhatsApp (+244 932 708 186)
          </a>
        </div>
      `;
    }
  }

  // 5) Tarjetas de precio PRO
  const planCards = document.querySelectorAll('.mono-price-card');
  planCards.forEach(card => {
    const planKey = card.getAttribute('data-plan');
    const plan = CFG.pro[planKey];
    if (!plan) return;
    const amountEl = card.querySelector('.mono-price-amount');
    const labelEl = card.querySelector('.mono-price-label');
    const periodEl = card.querySelector('.mono-price-period');

    if (labelEl && t['pro_plan_' + planKey + '_title']) {
      labelEl.textContent = t['pro_plan_' + planKey + '_title'];
    }
    if (periodEl && t['pro_plan_' + planKey + '_sub']) {
      periodEl.textContent = t['pro_plan_' + planKey + '_sub'];
    }

    if (amountEl) {
      if (planKey === 'yearly') {
        const unit = t.pro_plan_yearly_unit || (lang === 'en' ? '/year' : (lang === 'pt' ? '/ano' : '/año'));
        amountEl.innerHTML = `30.000 Kz<span style="font-size:0.72rem; color:var(--text-muted);">${unit}</span>`;
      } else if (planKey === 'monthly') {
        const mUnit = t.pro_plan_monthly_unit || (lang === 'en' ? '/month' : (lang === 'pt' ? '/mês' : '/mes'));
        amountEl.innerHTML = `4.000 Kz<span style="font-size:0.72rem; color:var(--text-muted);">${mUnit}</span>`;
      } else {
        amountEl.textContent = `45.000 Kz`;
      }
    }
  });

  // 6) Botones y etiquetas PRO
  const btnBuyPro = document.getElementById('btn-buy-pro');
  if (btnBuyPro && t.pro_btn_stripe) btnBuyPro.innerText = t.pro_btn_stripe;

  const btnBuyBai = document.getElementById('btn-buy-bai');
  if (btnBuyBai && t.pro_btn_bai) btnBuyBai.innerText = t.pro_btn_bai;

  // 6.1) Tarjeta explicativa de flujo de activación PRO
  const flowTitle = document.getElementById('pro-flow-title');
  if (flowTitle && t.pro_flow_title) flowTitle.innerText = t.pro_flow_title;

  const flowSteps = document.getElementById('pro-flow-steps');
  if (flowSteps && t.pro_flow_steps) flowSteps.innerHTML = t.pro_flow_steps;

  const actLabel = document.getElementById('activate-label');
  if (actLabel && t.pro_activate_label) actLabel.innerText = t.pro_activate_label;

  const actBtn = document.getElementById('btn-activate-license');
  if (actBtn && t.pro_activate_btn) actBtn.innerText = t.pro_activate_btn;

  const actInput = document.getElementById('license-input');
  if (actInput && t.pro_activate_ph) actInput.setAttribute('placeholder', t.pro_activate_ph);

  const actNote = document.getElementById('mono-activate-note');
  if (actNote && t.pro_activate_note) actNote.innerHTML = t.pro_activate_note;

  // 7) Ajustes: Tarjeta upgrade y pro activo
  const setUpgTitle = document.querySelector('#settings-upgrade-card .pro-title');
  if (setUpgTitle && t.settings_upgrade_title) setUpgTitle.innerText = t.settings_upgrade_title;

  const setUpgSub = document.querySelector('#settings-upgrade-card .pro-subtitle');
  if (setUpgSub && t.settings_upgrade_sub) setUpgSub.innerText = t.settings_upgrade_sub;

  const setUpgBtn = document.querySelector('#settings-upgrade-card .pro-cta-btn');
  if (setUpgBtn && t.settings_upgrade_btn) setUpgBtn.innerText = t.settings_upgrade_btn;

  const setActiveTitle = document.querySelector('#settings-pro-active h4');
  if (setActiveTitle && t.settings_active_title) setActiveTitle.innerText = t.settings_active_title;

  const setActiveBtn = document.querySelector('#settings-pro-active button');
  if (setActiveBtn && t.settings_active_reset_btn) setActiveBtn.innerText = t.settings_active_reset_btn;
}

// --------- Setup general Monetización ---------
function setupMonetization() {
  const CFG = MONO_CONFIG; // alias

  try {
    [PRO_STORAGE_KEY, 'vaso_pro_active'].forEach(k => {
      const val = localStorage.getItem(k);
      if (val) {
        try {
          const parsed = JSON.parse(val);
          const lic = (parsed && (parsed.key || parsed.license)) || '';
          if (typeof lic === 'string' && (lic.toUpperCase().includes('DEMO') || lic === 'PRO-DEMO-1234')) {
            localStorage.removeItem(k);
          }
        } catch (_) {}
      }
    });
  } catch (_) {}

  try {
    const h = (location.hostname || '').toLowerCase();
    const banner = document.getElementById('anticlon-banner');
    if (banner && h) {
      const esOficial =
        !h ||
        h === 'localhost' ||
        h === '127.0.0.1' ||
        h.endsWith('.netlify.app') ||
        h.endsWith('.vercel.app') ||
        h.includes('intensitechsolutions') ||
        h === 'vasoactivos-uci.netlify.app';
      if (!esOficial) banner.style.display = 'block';
    }
  } catch (_) {}

  // 1) Aplicar paywall / ocultar ads según PRO
  applyProStateToUI();

  // 2) Renderizar textos e interfaz según idioma actual
  renderMonetizationI18n();

  // 3) Pre-seleccionar plan Lifetime
  selectPlan('lifetime', true);

  // 4) Enter en input de licencia = activar
  const licInput = document.getElementById('license-input');
  if (licInput) {
    licInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') activateLicense();
    });
  }
}

// --------- Aplicar estado PRO a toda la UI ---------
function applyProStateToUI() {
  const pro = isPro();

  // Badges "PRO" en hub cards
  const bh = document.getElementById('badge-hemo');
  const bs = document.getElementById('badge-shock');
  if (bh) bh.style.display = pro ? 'none' : 'inline-flex';
  if (bs) bs.style.display = pro ? 'none' : 'inline-flex';

  // Paywalls (overlay)
  const pwallHemo = document.getElementById('paywall-hemo');
  if (pwallHemo) pwallHemo.style.display = pro ? 'none' : 'flex';

  const pwallShock = document.getElementById('paywall-shock');
  if (pwallShock) pwallShock.style.display = pro ? 'none' : 'flex';

  // Banners publicidad (ocultar si PRO)
  const adBanners = document.querySelectorAll('.ad-banner');
  adBanners.forEach(b => { b.style.display = pro ? 'none' : ''; });

  // Tarjeta settings upgrade vs activo
  const upgradeCard = document.getElementById('settings-upgrade-card');
  const activeCard = document.getElementById('settings-pro-active');
  if (upgradeCard) upgradeCard.style.display = pro ? 'none' : '';
  if (activeCard) {
    activeCard.style.display = pro ? '' : 'none';
    if (pro) {
      try {
        const info = document.getElementById('settings-pro-active-info');
        const raw = JSON.parse(localStorage.getItem(PRO_STORAGE_KEY) || '{}');
        const planName = raw.plan === 'monthly' ? 'Suscripción mensual'
          : raw.plan === 'yearly' ? 'Plan anual'
          : 'Licencia de por vida';
        const date = new Date(raw.activatedAt || Date.now()).toLocaleDateString();
        info.textContent = `${planName} — Activada el ${date}.`;
      } catch(_) {}
    }
  }

  // Botón cabecera PRO (cambiar aspecto si ya es PRO)
  const headerBtn = document.getElementById('btn-header-pro');
  if (headerBtn) {
    headerBtn.textContent = pro ? '✅PRO' : '👑';
    headerBtn.title = pro ? 'Tu licencia PRO está activa' : 'Upgrade PRO';
  }

  // Inicializar AdSense si no es PRO
  if (!pro && typeof (window.adsbygoogle) !== 'undefined') {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (_) {}
  }
}

// --------- Abrir/Cerrar Modal Monetización ---------
window.openMonoModal = function(tab = 'donate') {
  if (typeof renderMonetizationI18n === 'function') {
    renderMonetizationI18n();
  }
  switchMonoTab(tab);
  document.getElementById('mono-modal').classList.add('active');
};

window.closeMonoModal = function() {
  document.getElementById('mono-modal').classList.remove('active');
};

window.switchMonoTab = function(tab) {
  document.querySelectorAll('.mono-tab-btn').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-mtab') === tab);
  });
  document.getElementById('mtab-donate').classList.toggle('active', tab === 'donate');
  document.getElementById('mtab-pro').classList.toggle('active', tab === 'pro');
};

window.showTransferDetails = function(mode = 'all') {
  const el = document.getElementById('transfer-details');
  if (!el) return;
  el.style.display = 'block';
  el.classList.remove('transfer-highlight');
  void el.offsetWidth;
  el.classList.add('transfer-highlight');

  if (mode === 'reference') {
    const secRef = document.getElementById('sec-transfer-ref');
    if (secRef) {
      try { secRef.scrollIntoView({ behavior: 'smooth', block: 'center' }); } catch (_) {}
      return;
    }
  } else if (mode === 'transfer') {
    const secBai = document.getElementById('sec-transfer-bai');
    if (secBai) {
      try { secBai.scrollIntoView({ behavior: 'smooth', block: 'center' }); } catch (_) {}
      return;
    }
  }
  try { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); } catch (_) {}
};

window.toggleTransferDetails = function() {
  const el = document.getElementById('transfer-details');
  if (el) {
    if (el.style.display === 'none' || !el.style.display) {
      window.showTransferDetails('all');
    } else {
      el.style.display = 'none';
    }
  }
};

// --------- Planes PRO ---------
window.selectPlan = function(plan, silent) {
  selectedPlan = plan;
  document.querySelectorAll('.mono-price-card').forEach(c => {
    c.classList.toggle('selected', c.getAttribute('data-plan') === plan);
  });
  if (!silent) {
    const label = MONO_CONFIG.pro[plan] ? MONO_CONFIG.pro[plan].label : plan;
    console.log('Plan seleccionado:', plan, '-', label);
  }
};

// --------- Redirección directa a Transferencia BAI (Angola) ---------
window.goToBaiTransfer = function() {
  switchMonoTab('donate');
  window.showTransferDetails('transfer');
  const t = MONO_CONFIG.donate.transferAO;
  const msgs = {
    es: '🏦 PAGOS DIRECTOS EN ANGOLA — BANCO BAI / MULTICAIXA EXPRESS\n\n' +
        '• Banco: ' + t.bank + '\n' +
        '• Titular: ' + t.titular + '\n' +
        '• IBAN: ' + t.iban + '\n' +
        '• SWIFT: ' + t.swift + '\n\n' +
        '👉 Hemos desplegado los datos bancarios y de pago por referencia en pantalla.\n\n' +
        '📲 ¿CÓMO TE LLEGA EL CÓDIGO PRO TRAS PAGAR?\n' +
        'Tras la transferencia o pago por Multicaixa Express, pulsa el botón de WhatsApp (+244 932 708 186) para enviar tu comprobante.\n' +
        'El Dr. Luis Borroto te enviará tu código personal directamente a tu WhatsApp en menos de 15 min a 2 horas para que lo actives en la casilla "Activar".',
    en: '🏦 DIRECT PAYMENTS IN ANGOLA — BANCO BAI / MULTICAIXA EXPRESS\n\n' +
        '• Bank: ' + t.bank + '\n' +
        '• Account Holder: ' + t.titular + '\n' +
        '• IBAN: ' + t.iban + '\n' +
        '• SWIFT: ' + t.swift + '\n\n' +
        '👉 Bank transfer and reference payment details are displayed on screen.\n\n' +
        '📲 HOW DO YOU RECEIVE YOUR PRO KEY AFTER PAYING?\n' +
        'After completing payment via BAI or Multicaixa Express, click the WhatsApp button (+244 932 708 186) to send your receipt.\n' +
        'Dr. Luis Borroto will send your activation code directly to your WhatsApp in under 15 min to 2 hours so you can paste it into the "Activate" box.',
    pt: '🏦 PAGAMENTOS DIRECTOS EM ANGOLA — BANCO BAI / MULTICAIXA EXPRESS\n\n' +
        '• Banco: ' + t.bank + '\n' +
        '• Titular: ' + t.titular + '\n' +
        '• IBAN: ' + t.iban + '\n' +
        '• SWIFT: ' + t.swift + '\n\n' +
        '👉 Exibimos os dados bancários e de pagamento por referência no ecrã.\n\n' +
        '📲 COMO RECEBE O SEU CÓDIGO PRO APÓS PAGAR?\n' +
        'Após efetuar a transferência ou pagamento via Multicaixa Express, clique no botão do WhatsApp (+244 932 708 186) para enviar o comprovativo.\n' +
        'O Dr. Luis Borroto enviará o seu código pessoal diretamente para o seu WhatsApp em menos de 15 min a 2 horas para ativá-lo na caixa "Ativar".'
  };
  alert(msgs[currentLang] || msgs.es);
};

// --------- Comprar PRO ---------
window.buyPro = function() {
  const cfg = MONO_CONFIG.pro[selectedPlan];
  if (!cfg) return;
  const link = (cfg.stripeLink || '').trim();

  // Si Stripe no está configurado, lleva DIRECTO a Transferencia BAI (Angola)
  const stripeNotConfigured = !link || /your_/.test(link) || !link.startsWith('https://');
  if (stripeNotConfigured) {
    goToBaiTransfer();
    return;
  }

  // Stripe configurado: abrir
  sessionStorage.setItem('vaso_pending_plan', selectedPlan);
  window.open(link, '_blank', 'noopener');
  setTimeout(() => {
    const planLabel = (I18N[currentLang] && I18N[currentLang]['pro_plan_' + selectedPlan + '_title']) || cfg.label || 'Plan PRO';
    const stripeAlerts = {
      es: '💳 Ventana de pago Stripe abierta — ' + planLabel + '\n\n' +
          'Tras completar el pago:\n\n' +
          '   1) Guarda el código de licencia enviado a tu email.\n' +
          '   2) Pégalo en la sección "Activar licencia" para desbloquear acceso inmediato.\n\n' +
          '🇦🇴 Si prefieres pagar en Angola por transferencia BAI o Multicaixa Express, pulsa el botón correspondiente.',
      en: '💳 Stripe payment window opened — ' + planLabel + '\n\n' +
          'After completing payment:\n\n' +
          '   1) Keep the license key sent to your email.\n' +
          '   2) Paste it into the "Activate license" section for instant access.\n\n' +
          '🇦🇴 If you prefer paying in Angola via BAI Transfer or Multicaixa Express, click the corresponding button.',
      pt: '💳 Janela de pagamento Stripe aberta — ' + planLabel + '\n\n' +
          'Após concluir o pagamento:\n\n' +
          '   1) Guarde o código de licença enviado para o seu email.\n' +
          '   2) Cole-o na seção "Ativar licença" para desbloqueio imediato.\n\n' +
          '🇦🇴 Se preferir pagar em Angola por transferência BAI ou Multicaixa Express, clique no botão correspondente.'
    };
    alert(stripeAlerts[currentLang] || stripeAlerts.es);
  }, 500);
};

// // --------- Activar licencia (con verificación en línea y Device Binding: Máx 2 dispositivos) ---------
window.activateLicense = async function() {
  const input = document.getElementById('license-input');
  if (!input) return;
  const key = input.value.trim().toUpperCase();
  if (!key) {
    const emptyAlerts = {
      es: 'Por favor, introduce un código de licencia.',
      en: 'Please enter a license key.',
      pt: 'Por favor, introduza um código de licença.'
    };
    alert(emptyAlerts[currentLang] || emptyAlerts.es);
    return;
  }

  // 1. Comando Secreto exclusivo para Dr. Luis Borroto (acceso maestro inmediato y sin internet)
  if (_esClaveMaestra(key)) {
    saveProLicense(key, 'lifetime');
    applyProStateToUI();
    closeMonoModal();
    const masterAlerts = {
      es: '👑 Modo Maestro Dr. Luis Borroto Activado — Acceso PRO Ilimitado desbloqueado en este dispositivo.',
      en: '👑 Master Mode Dr. Luis Borroto Activated — Unlimited PRO access unlocked on this device.',
      pt: '👑 Modo Mestre Dr. Luis Borroto Ativado — Acesso PRO Ilimitado desbloqueado neste dispositivo.'
    };
    alert(masterAlerts[currentLang] || masterAlerts.es);
    input.value = '';
    return;
  }

  // 2. Bloqueo explícito de licencias demo
  if (key === 'PRO-DEMO-1234' || /DEMO|TEST|SAMPLE/i.test(key)) {
    const demoAlerts = {
      es: '❌ Licencia no válida. Las licencias de demostración no están autorizadas en producción.',
      en: '❌ Invalid license. Demo licenses are not authorized for production.',
      pt: '❌ Licença inválida. As licenças de demonstração não são autorizadas em produção.'
    };
    alert(demoAlerts[currentLang] || demoAlerts.es);
    input.focus();
    input.select();
    return;
  }

  // 3. Validación criptográfica inicial de sintaxis y firma
  const valida = validateLicenseKey(key);
  const c = MONO_CONFIG.donate.contacto;
  if (!valida) {
    const invalidAlerts = {
      es: '❌ Licencia no válida.\n\n' +
          'Comprueba que hayas introducido el código correctamente (formato PRO-XXXX-XXXX-XXXX).\n\n' +
          'Si realizaste el pago por Transferencia BAI, Multicaixa Express o Stripe y aún no tienes tu código, contáctanos:\n\n' +
          `   📱 WhatsApp: ${c.whatsapp}\n   ✉️  Email: ${c.email}\n\n` +
          '(Respondemos en menos de 12h).',
      en: '❌ Invalid license.\n\n' +
          'Please verify that you entered the code correctly (format PRO-XXXX-XXXX-XXXX).\n\n' +
          'If you completed payment via BAI Transfer, Multicaixa Express or Stripe and do not have your code yet, contact us:\n\n' +
          `   📱 WhatsApp: ${c.whatsapp}\n   ✉️  Email: ${c.email}\n\n` +
          '(We reply in less than 12h).',
      pt: '❌ Licença inválida.\n\n' +
          'Verifique se introduziu o código correctamente (formato PRO-XXXX-XXXX-XXXX).\n\n' +
          'Se efectuou o pagamento por Transferência BAI, Multicaixa Express ou Stripe e ainda não tem o seu código, contacte-nos:\n\n' +
          `   📱 WhatsApp: ${c.whatsapp}\n   ✉️  Email: ${c.email}\n\n` +
          '(Respondemos em menos de 12h).'
    };
    alert(invalidAlerts[currentLang] || invalidAlerts.es);
    input.focus();
    input.select();
    return;
  }

  // 4. Verificación de conectividad para el registro del dispositivo
  if (typeof navigator !== 'undefined' && navigator.onLine === false) {
    const offlineAlerts = {
      es: '📡 Conexión a Internet requerida para la activación inicial:\n\n' +
          'Para vincular este dispositivo a tu licencia (máximo 2 dispositivos autorizados), se requiere conexión a internet durante solo unos segundos.\n\n' +
          '✅ Tras esta activación inicial, VasoActivos UCI funcionará 100% OFFLINE de forma permanente en la UCI sin necesidad de internet.',
      en: '📡 Internet connection required for initial activation:\n\n' +
          'To register this device with your license (maximum 2 authorized devices), an internet connection is needed for just a few seconds.\n\n' +
          '✅ After this initial activation, VasoActivos ICU will run 100% OFFLINE permanently in the ICU without internet.',
      pt: '📡 Ligação à Internet necessária para a ativação inicial:\n\n' +
          'Para associar este dispositivo à sua licença (máximo de 2 dispositivos autorizados), é necessária ligação à internet durante alguns segundos.\n\n' +
          '✅ Após esta ativação inicial, o VasoAtivos CTI funcionará 100% OFFLINE permanentemente no CTI sem necessitar de internet.'
    };
    alert(offlineAlerts[currentLang] || offlineAlerts.es);
    return;
  }

  // 5. Estado de carga en botón de activación
  const btnActivar = document.querySelector('#mono-tab-pro button[onclick*="activateLicense"]') || document.getElementById('btn-activate-license');
  const originalBtnText = btnActivar ? btnActivar.innerText : '';
  if (btnActivar) {
    btnActivar.disabled = true;
    btnActivar.innerText = currentLang === 'en' ? '⏳ Verifying online...' : (currentLang === 'pt' ? '⏳ A verificar online...' : '⏳ Verificando en línea...');
  }

  try {
    const devId = _deviceId();
    let serverData = null;

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 9000);

      const resp = await fetch('/.netlify/functions/activate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          licenseKey: key,
          deviceId: devId,
          deviceInfo: navigator.userAgent || 'Web'
        }),
        signal: controller.signal
      });
      clearTimeout(timeoutId);

      if (resp.status === 403) {
        const errJson = await resp.json().catch(() => ({}));
        if (errJson.error === 'DEVICE_LIMIT_REACHED') {
          handleDeviceLimitExceeded(key, 2);
          return;
        }
      }

      if (resp.ok) {
        serverData = await resp.json();
      } else if (resp.status === 404 || resp.status === 502) {
        console.warn('Endpoint serverless no detectado en este host. Validando con Device Binding local (máx 2).');
      }
    } catch (netErr) {
      console.warn('Conexión con servidor de activación no completada:', netErr);
    }

    // 6. Si el servidor respondió explícitamente con error de límite
    if (serverData && serverData.ok === false) {
      if (serverData.error === 'DEVICE_LIMIT_REACHED') {
        handleDeviceLimitExceeded(key, serverData.maxDevices || 2);
        return;
      }
      alert(serverData.message || 'Error en la activación.');
      return;
    }

    // 7. Registro local de dispositivo (Device Binding local complementario con límite 2)
    const devResult = verificarDeviceBinding(key);
    if (!devResult.ok) {
      handleDeviceLimitExceeded(key, devResult.max || 2);
      return;
    }

    // 8. Éxito: Guardar y activar PRO de por vida
    const plan = sessionStorage.getItem('vaso_pending_plan') || 'lifetime';
    saveProLicense(key, plan);
    sessionStorage.removeItem('vaso_pending_plan');
    applyProStateToUI();
    closeMonoModal();

    const maxAllowed = 2;
    const totalDisp = (serverData && serverData.devicesCount) ? serverData.devicesCount : devResult.devices.length;
    const isNuevo = (serverData && typeof serverData.isNewDevice === 'boolean') ? serverData.isNewDevice : !!devResult.nuevo;

    const infoExtra = isNuevo
      ? `\n   (${currentLang === 'en' ? 'Device registered' : (currentLang === 'pt' ? 'Dispositivo registado' : 'Dispositivo registrado')}: ${totalDisp}/${maxAllowed})`
      : `\n   (${currentLang === 'en' ? 'Device verified' : (currentLang === 'pt' ? 'Dispositivo verificado' : 'Dispositivo verificado')}: ${totalDisp}/${maxAllowed})`;

    const successAlerts = {
      es: '✅ ¡PRO activado con éxito!\n\n' +
          'Gracias por apoyar este proyecto médico. Ya tienes acceso COMPLETO a:\n' +
          '   ✓ Profiler Hemodinámico & Perfusión\n' +
          '   ✓ 6 Árboles de Decisión de Shock\n' +
          '   ✓ 0 Publicidad\n' + infoExtra + '\n\n' +
          '📲 La aplicación ya funciona 100% OFFLINE en este dispositivo.\n' +
          'Guarda tu código en un lugar seguro:  ' + key,
      en: '✅ PRO activated successfully!\n\n' +
          'Thank you for supporting this medical project. You now have FULL access to:\n' +
          '   ✓ Hemodynamic & Perfusion Profiler\n' +
          '   ✓ 6 Shock Decision Trees\n' +
          '   ✓ Zero Ads\n' + infoExtra + '\n\n' +
          '📲 The application now runs 100% OFFLINE on this device.\n' +
          'Keep your code in a safe place:  ' + key,
      pt: '✅ PRO ativado com sucesso!\n\n' +
          'Obrigado por apoiar este projeto médico. Já tem acesso COMPLETO a:\n' +
          '   ✓ Profiler Hemodinâmico & Perfusão\n' +
          '   ✓ 6 Árvores de Decisão de Choque\n' +
          '   ✓ Zero Anúncios\n' + infoExtra + '\n\n' +
          '📲 A aplicação funciona agora 100% OFFLINE neste dispositivo.\n' +
          'Guarde o seu código num local seguro:  ' + key
    };
    alert(successAlerts[currentLang] || successAlerts.es);
    input.value = '';

  } finally {
    if (btnActivar) {
      btnActivar.disabled = false;
      btnActivar.innerText = originalBtnText;
    }
  }
};

function handleDeviceLimitExceeded(key, maxLimit = 2) {
  const waNum = (MONO_CONFIG.donate && MONO_CONFIG.donate.contacto && MONO_CONFIG.donate.contacto.whatsapp)
    ? MONO_CONFIG.donate.contacto.whatsapp.replace(/[^0-9]/g, '')
    : '244932708186';

  const msgContacto = encodeURIComponent(
    `Olá Dr. Borroto! A minha licença PRO (${key}) atingiu o limite máximo de ${maxLimit} dispositivos ao tentar registar um novo dispositivo. Gostaria de solicitar ampliação para dispositivos adicionais ou uma nova licença. Obrigado!`
  );
  const waLink = `https://wa.me/${waNum}?text=${msgContacto}`;

  const limitAlerts = {
    es: `⚠️ Límite de dispositivos alcanzado (Máximo: ${maxLimit} dispositivos por licencia).\n\n` +
        `Esta licencia ya está vinculada al límite máximo de ${maxLimit} dispositivos autorizados.\n\n` +
        `Redirigiendo automáticamente a WhatsApp con el Dr. Luis Borroto para ampliar su cupo o autorizar dispositivos adicionales...`,
    en: `⚠️ Device limit reached (Maximum: ${maxLimit} devices per license).\n\n` +
        `This license is already registered on ${maxLimit} authorized devices.\n\n` +
        `Redirecting automatically to WhatsApp with Dr. Luis Borroto to expand your limit or authorize additional devices...`,
    pt: `⚠️ Limite de dispositivos atingido (Máximo: ${maxLimit} dispositivos por licença).\n\n` +
        `Esta licença já está vinculada ao limite máximo de ${maxLimit} dispositivos autorizados.\n\n` +
        `A redirecionar automaticamente para o WhatsApp com o Dr. Luis Borroto para ampliar o seu limite ou autorizar dispositivos adicionais...`
  };
  alert(limitAlerts[currentLang] || limitAlerts.es);
  try {
    window.open(waLink, '_blank', 'noopener') || (location.href = waLink);
  } catch (_) {
    location.href = waLink;
  }
  const input = document.getElementById('license-input');
  if (input) {
    input.focus();
    input.select();
  }
}

// --------- Resetear licencia (usar con moderación) ---------
window.resetLicense = function() {
  const confirmAlerts = {
    es: '¿Seguro que quieres desactivar la licencia PRO de este dispositivo?',
    en: 'Are you sure you want to deactivate the PRO license on this device?',
    pt: 'Tem certeza de que deseja desativar a licença PRO neste dispositivo?'
  };
  if (!confirm(confirmAlerts[currentLang] || confirmAlerts.es)) return;
  clearProLicense();
  applyProStateToUI();
  const resetAlerts = {
    es: 'Licencia eliminada del dispositivo. Puedes volver a activarla introduciendo de nuevo tu código.',
    en: 'License removed from device. You can reactivate anytime by re-entering your key.',
    pt: 'Licença removida do dispositivo. Pode voltar a ativá-la introduzindo novamente o seu código.'
  };
  alert(resetAlerts[currentLang] || resetAlerts.es);
};

// --------- Hook: cada vez que cambiamos de vista -> refrescar paywall/ads ---------
const originalSwitchView = window.switchView;
window.switchView = function(view) {
  // Paywall antes de mostrar vistas protegidas
  if (view === 'hemo' || view === 'shock' || view === 'shock-algo') {
    if (!isPro()) {
      openMonoModal('pro');
      return;
    }
  }
  if (originalSwitchView) originalSwitchView(view);
  // Refrescar estado PRO por si cambió en runtime
  applyProStateToUI();
};
