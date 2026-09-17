```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CareStratify - Population Health & PhilPEN Risk Stratification</title>
  
  <style>
    :root {
      --bg-dark: #0b0f19;
      --card-bg: #111827;
      --card-border: #1f293d;
      --text-main: #f3f4f6;
      --text-muted: #9ca3af;
      --primary: #3b82f6;
      --primary-dark: #2563eb;
      --primary-glow: rgba(59, 130, 246, 0.25);
      
      /* Tier Colors */
      --tier-1: #10b981; /* Low Risk - Emerald */
      --tier-2: #f59e0b; /* Rising Risk - Amber */
      --tier-3: #f97316; /* High Risk - Orange */
      --tier-4: #ef4444; /* Very High Risk - Red */
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    }

    body {
      background-color: var(--bg-dark);
      color: var(--text-main);
      line-height: 1.5;
      padding: 20px;
      min-height: 100vh;
    }

    .container {
      max-width: 1280px;
      margin: 0 auto;
    }

    /* Header Bar */
    header {
      background: var(--card-bg);
      padding: 16px 20px;
      border-radius: 14px;
      border: 1px solid var(--card-border);
      margin-bottom: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 15px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.3);
    }

    .brand-btn {
      display: flex;
      align-items: center;
      gap: 14px;
      background: rgba(31, 41, 61, 0.6);
      border: 1px solid rgba(59, 130, 246, 0.35);
      padding: 10px 18px;
      border-radius: 12px;
      cursor: pointer;
      transition: all 0.2s ease;
      text-align: left;
      color: var(--text-main);
    }

    .brand-btn:hover {
      background: rgba(59, 130, 246, 0.15);
      border-color: var(--primary);
      transform: translateY(-1px);
      box-shadow: 0 4px 12px var(--primary-glow);
    }

    .cs-avatar {
      width: 42px;
      height: 42px;
      background: linear-gradient(135deg, var(--primary), #8b5cf6);
      color: white;
      font-weight: 800;
      font-size: 1.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.4);
    }

    .brand-title {
      font-size: 1.2rem;
      font-weight: 700;
      color: #ffffff;
      letter-spacing: -0.01em;
    }

    .brand-sub {
      font-size: 0.75rem;
      color: var(--primary);
      background: rgba(59, 130, 246, 0.18);
      padding: 3px 10px;
      border-radius: 6px;
      display: inline-block;
      margin-top: 2px;
      font-weight: 600;
    }

    /* Action Toolbar */
    .toolbar {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
    }

    .btn {
      background: #1f293d;
      border: 1px solid #374151;
      color: var(--text-main);
      padding: 9px 14px;
      border-radius: 8px;
      font-size: 0.83rem;
      font-weight: 600;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: all 0.2s ease;
    }

    .btn:hover {
      background: #374151;
      border-color: #4b5563;
      transform: translateY(-1px);
    }

    .btn-reset {
      background: rgba(239, 68, 68, 0.12);
      border-color: rgba(239, 68, 68, 0.35);
      color: #fca5a5;
    }

    .btn-reset:hover {
      background: rgba(239, 68, 68, 0.25);
      border-color: #ef4444;
      color: white;
    }

    .btn-hotline {
      background: rgba(245, 158, 11, 0.15);
      border-color: rgba(245, 158, 11, 0.4);
      color: #fcd34d;
    }

    .btn-hotline:hover {
      background: rgba(245, 158, 11, 0.3);
      border-color: #f59e0b;
      color: white;
    }

    .preset-group {
      display: flex;
      gap: 4px;
      background: #0b0f19;
      padding: 3px;
      border-radius: 8px;
      border: 1px solid var(--card-border);
      margin-left: 4px;
    }

    .btn-preset {
      padding: 5px 10px;
      font-size: 0.75rem;
      border-radius: 6px;
      background: transparent;
      border: none;
      color: var(--text-muted);
      cursor: pointer;
      font-weight: 600;
      transition: all 0.2s;
    }

    .btn-preset:hover {
      color: var(--text-main);
      background: #1f293d;
    }

    /* Grid Layout */
    .dashboard-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }

    @media (max-width: 980px) {
      .dashboard-grid {
        grid-template-columns: 1fr;
      }
    }

    /* Cards */
    .card {
      background: var(--card-bg);
      border-radius: 14px;
      border: 1px solid var(--card-border);
      padding: 22px;
      margin-bottom: 20px;
      box-shadow: 0 4px 16px rgba(0,0,0,0.2);
    }

    .card-title {
      font-size: 1.05rem;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 18px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid var(--card-border);
      padding-bottom: 12px;
    }

    .card-title .badge {
      font-size: 0.72rem;
      font-weight: 600;
      color: var(--text-muted);
      background: #0b0f19;
      padding: 4px 8px;
      border-radius: 6px;
      border: 1px solid var(--card-border);
    }

    /* Form Inputs */
    .form-group {
      margin-bottom: 18px;
    }

    .form-group label {
      display: block;
      font-size: 0.85rem;
      font-weight: 600;
      color: #d1d5db;
      margin-bottom: 8px;
    }

    .form-control {
      width: 100%;
      padding: 11px 14px;
      background: #0b0f19;
      border: 1px solid var(--card-border);
      border-radius: 10px;
      color: var(--text-main);
      font-size: 0.92rem;
      outline: none;
      transition: border-color 0.2s;
    }

    .form-control:focus {
      border-color: var(--primary);
      box-shadow: 0 0 0 2px var(--primary-glow);
    }

    /* Clean Checkbox Grid */
    .checkbox-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
    }

    @media (max-width: 600px) {
      .checkbox-grid { grid-template-columns: 1fr; }
    }

    .check-card {
      background: #0b0f19;
      border: 1px solid var(--card-border);
      padding: 12px 14px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      gap: 12px;
      cursor: pointer;
      font-size: 0.86rem;
      color: var(--text-main);
      transition: all 0.2s;
      user-select: none;
    }

    .check-card:hover {
      background: #151d2e;
      border-color: #374151;
    }

    .check-card input {
      accent-color: var(--primary);
      width: 18px;
      height: 18px;
      cursor: pointer;
    }

    /* Risk Banner Output */
    .risk-banner {
      padding: 22px;
      border-radius: 14px;
      color: white;
      margin-bottom: 20px;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
      box-shadow: 0 8px 24px rgba(0,0,0,0.35);
    }

    .banner-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
    }

    .tier-title {
      font-size: 1.45rem;
      font-weight: 800;
      letter-spacing: -0.01em;
    }

    .score-badge {
      background: rgba(0,0,0,0.35);
      padding: 6px 14px;
      border-radius: 20px;
      font-weight: 700;
      font-size: 0.88rem;
      backdrop-filter: blur(4px);
      border: 1px solid rgba(255,255,255,0.15);
      white-space: nowrap;
    }

    .tier-desc {
      font-size: 0.88rem;
      margin-top: 8px;
      opacity: 0.95;
      line-height: 1.45;
    }

    .sdoh-alert {
      margin-top: 12px;
      padding: 8px 12px;
      background: rgba(0,0,0,0.35);
      border-radius: 8px;
      font-size: 0.82rem;
      border-left: 4px solid #f59e0b;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    /* Visual Risk Pyramid */
    .pyramid-container {
      display: flex;
      flex-direction: column;
      gap: 6px;
      margin: 18px 0;
    }

    .pyramid-tier {
      padding: 12px;
      text-align: center;
      color: white;
      font-weight: 700;
      font-size: 0.86rem;
      border-radius: 8px;
      opacity: 0.3;
      transition: all 0.3s ease;
      border: 1px solid rgba(255,255,255,0.1);
    }

    .pyramid-tier.active {
      opacity: 1;
      transform: scale(1.02);
      box-shadow: 0 6px 20px rgba(0,0,0,0.6);
      border-color: rgba(255,255,255,0.4);
    }

    .pyr-t4 { background: var(--tier-4); width: 48%; margin: 0 auto; }
    .pyr-t3 { background: var(--tier-3); width: 68%; margin: 0 auto; }
    .pyr-t2 { background: var(--tier-2); width: 84%; margin: 0 auto; }
    .pyr-t1 { background: var(--tier-1); width: 100%; margin: 0 auto; }

    /* Score Gauges */
    .gauge-item {
      margin-bottom: 14px;
    }

    .gauge-label {
      display: flex;
      justify-content: space-between;
      font-size: 0.82rem;
      color: var(--text-muted);
      margin-bottom: 6px;
      font-weight: 600;
    }

    .gauge-track {
      height: 10px;
      background: #0b0f19;
      border-radius: 6px;
      overflow: hidden;
      border: 1px solid var(--card-border);
    }

    .gauge-bar {
      height: 100%;
      width: 0%;
      transition: width 0.5s ease, background-color 0.5s ease;
      border-radius: 6px;
    }

    /* Management Strategy Cards */
    .mgmt-block {
      background: #0b0f19;
      padding: 14px 16px;
      border-radius: 10px;
      border-left: 4px solid var(--primary);
      margin-bottom: 12px;
      border-top: 1px solid var(--card-border);
      border-right: 1px solid var(--card-border);
      border-bottom: 1px solid var(--card-border);
    }

    .mgmt-block h4 {
      font-size: 0.88rem;
      color: #ffffff;
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      gap: 6px;
      font-weight: 700;
    }

    .mgmt-list {
      padding-left: 20px;
      font-size: 0.83rem;
      color: var(--text-muted);
    }

    .mgmt-list li {
      margin-bottom: 5px;
      line-height: 1.4;
    }

    .hotline-highlight {
      margin-top: 14px;
      background: rgba(239, 68, 68, 0.15);
      border: 1px solid rgba(239, 68, 68, 0.4);
      padding: 12px 14px;
      border-radius: 10px;
      font-size: 0.85rem;
      color: #fca5a5;
      display: flex;
      align-items: flex-start;
      gap: 10px;
      line-height: 1.4;
    }

    /* Share Button */
    .btn-share {
      width: 100%;
      background: linear-gradient(135deg, var(--primary), var(--primary-dark));
      color: white;
      border: none;
      padding: 14px;
      border-radius: 10px;
      font-weight: 700;
      font-size: 0.95rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      transition: all 0.2s;
      box-shadow: 0 4px 14px var(--primary-glow);
    }

    .btn-share:hover {
      opacity: 0.95;
      transform: translateY(-1px);
    }

    /* Modal Framework */
    .modal-overlay {
      display: none;
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0, 0, 0, 0.82);
      backdrop-filter: blur(6px);
      z-index: 1000;
      justify-content: center;
      align-items: center;
      padding: 20px;
      animation: fadeIn 0.2s ease-out;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    .modal-box {
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: 16px;
      max-width: 580px;
      width: 100%;
      max-height: 88vh;
      overflow-y: auto;
      padding: 26px;
      position: relative;
      box-shadow: 0 20px 50px rgba(0,0,0,0.6);
    }

    .modal-close {
      position: absolute;
      top: 18px; right: 18px;
      background: #1f293d;
      border: 1px solid #374151;
      color: var(--text-muted);
      width: 32px;
      height: 32px;
      border-radius: 8px;
      font-size: 1.2rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s;
    }

    .modal-close:hover {
      color: white;
      background: #374151;
    }

    .info-item {
      margin-bottom: 14px;
      padding-bottom: 12px;
      border-bottom: 1px solid #1f293d;
    }

    .info-item:last-child {
      border-bottom: none;
      margin-bottom: 0;
      padding-bottom: 0;
    }

    .info-item h4 {
      font-size: 0.92rem;
      color: var(--primary);
      margin-bottom: 4px;
      font-weight: 700;
    }

    .info-item p {
      font-size: 0.84rem;
      color: var(--text-muted);
      line-height: 1.45;
    }

    /* Toast Notification System */
    .toast-container {
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 2000;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .toast {
      background: #1f293d;
      color: white;
      padding: 12px 18px;
      border-radius: 10px;
      border: 1px solid var(--primary);
      box-shadow: 0 10px 25px rgba(0,0,0,0.5);
      font-size: 0.86rem;
      display: flex;
      align-items: center;
      gap: 10px;
      animation: slideUp 0.3s ease-out;
    }

    @keyframes slideUp {
      from { transform: translateY(20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
  </style>
</head>
<body>

  <div class="container">
    <!-- Header Bar -->
    <header>
      <!-- CS Brand Header Button Unit -->
      <button class="brand-btn" onclick="openModal('csModal')" title="View CareStratify System Objectives">
        <div class="cs-avatar">CS</div>
        <div>
          <div class="brand-title">CareStratify</div>
          <div class="brand-sub">Population Health & PhilPEN Risk Stratification Engine</div>
        </div>
      </button>

      <!-- Action Toolbar -->
      <div class="toolbar">
        <button class="btn btn-reset" onclick="resetForm()" title="Reset inputs to default">🔄 Reset</button>
        <button class="btn" onclick="openModal('guideModal')">ℹ️ Framework Guide</button>
        <button class="btn btn-hotline" onclick="openModal('hotlineModal')">☎️ PH Hotlines</button>
        
        <div class="preset-group">
          <button class="btn-preset" onclick="loadPreset(1)" title="Load Low Risk Preset">T1</button>
          <button class="btn-preset" onclick="loadPreset(2)" title="Load Rising Risk Preset">T2</button>
          <button class="btn-preset" onclick="loadPreset(3)" title="Load High Risk SDOH Preset">T3 (SDOH)</button>
          <button class="btn-preset" onclick="loadPreset(4)" title="Load Emergency Preset">T4</button>
        </div>
      </div>
    </header>

    <div class="dashboard-grid">
      <!-- LEFT COLUMN: Input Checklist -->
      <div class="left-col">
        <!-- Panel 1: Patient Clinical Indicators -->
        <div class="card">
          <div class="card-title">
            <span>🩺 Patient Clinical Indicators</span>
            <span class="badge">PhilPEN Clinical Core</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
            <div class="form-group">
              <label for="ptAge">Age (Years)</label>
              <input type="number" id="ptAge" class="form-control" value="45" min="1" max="120" oninput="calculateRisk()">
            </div>
            <div class="form-group">
              <label for="ptBMI">Asian BMI (kg/m²)</label>
              <input type="number" id="ptBMI" class="form-control" value="22.5" step="0.1" oninput="calculateRisk()">
            </div>
          </div>

          <div class="form-group">
            <label style="color:#ef4444; font-weight:700;">PhilPEN Emergency Red Flags</label>
            <div class="checkbox-grid" style="grid-template-columns: 1fr;">
              <label class="check-card" style="border-color: rgba(239, 68, 68, 0.4); background: rgba(239,68,68,0.06);">
                <input type="checkbox" id="rfChestPain" onchange="calculateRisk()">
                <span>🚨 Acute Chest Pain / Severe Dyspnea / Neuro Deficit</span>
              </label>
            </div>
          </div>

          <div class="form-group">
            <label>NCD Comorbidities & Risk Factors</label>
            <div class="checkbox-grid">
              <label class="check-card"><input type="checkbox" id="condHTN" onchange="calculateRisk()"> Hypertension</label>
              <label class="check-card"><input type="checkbox" id="condDiabetes" onchange="calculateRisk()"> Diabetes Mellitus</label>
              <label class="check-card"><input type="checkbox" id="condHF" onchange="calculateRisk()"> Heart Failure</label>
              <label class="check-card"><input type="checkbox" id="condCOPD" onchange="calculateRisk()"> COPD / Asthma</label>
              <label class="check-card"><input type="checkbox" id="condCKD" onchange="calculateRisk()"> Renal Disease (CKD)</label>
              <label class="check-card"><input type="checkbox" id="condPolypharm" onchange="calculateRisk()"> Polypharmacy (&gt;5 Meds)</label>
            </div>
          </div>
        </div>

        <!-- Panel 2: Utilization & SDOH -->
        <div class="card">
          <div class="card-title">
            <span>🌐 Utilization & SDOH Vulnerability</span>
            <span class="badge">Social Multiplier</span>
          </div>

          <div class="form-group">
            <label for="erVisits">ER Visits / Hospital Admissions (Past 12 Months)</label>
            <select id="erVisits" class="form-control" onchange="calculateRisk()">
              <option value="0">0 Visits (Routine Primary Care)</option>
              <option value="1">1 Visit (Moderate Health System Use)</option>
              <option value="2">2 Visits (High Utilization Risk)</option>
              <option value="3">3+ Visits (Frequent High Utilizer)</option>
            </select>
          </div>

          <div class="form-group">
            <label>Social Determinants of Health (SDOH Barriers)</label>
            <div class="checkbox-grid">
              <label class="check-card"><input type="checkbox" id="sdohHousing" onchange="calculateRisk()"> Housing Instability</label>
              <label class="check-card"><input type="checkbox" id="sdohFood" onchange="calculateRisk()"> Food Insecurity</label>
              <label class="check-card"><input type="checkbox" id="sdohTransport" onchange="calculateRisk()"> Medical Transit Barrier</label>
              <label class="check-card"><input type="checkbox" id="sdohFinancial" onchange="calculateRisk()"> Financial Stress / Uninsured</label>
              <label class="check-card"><input type="checkbox" id="sdohTobacco" onchange="calculateRisk()"> Active Heavy Tobacco Use</label>
              <label class="check-card"><input type="checkbox" id="sdohAlone" onchange="calculateRisk()"> Social Isolation / Lives Alone</label>
            </div>
          </div>
        </div>
      </div>

      <!-- RIGHT COLUMN: Dashboard Output -->
      <div class="right-col">
        <!-- Risk Output Banner -->
        <div id="riskBanner" class="risk-banner" style="background-color: var(--tier-1);">
          <div class="banner-head">
            <div>
              <div style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.05em; opacity:0.85; font-weight:700;">Stratified Risk Output</div>
              <div id="tierTitle" class="tier-title">Tier 1: Low Risk</div>
            </div>
            <div id="tierScoreBadge" class="score-badge">Score: 0 pts</div>
          </div>
          <div id="tierDesc" class="tier-desc">Healthy baseline population. Focus on preventive health screening and health promotion.</div>
          
          <div id="sdohAlert" class="sdoh-alert" style="display:none;">
            <span>⚠️</span>
            <div><strong>SDOH Multiplier Triggered:</strong> Compound social vulnerabilities added a +1 tier risk escalation.</div>
          </div>
        </div>

        <!-- Visual Population Risk Pyramid & Score Gauges -->
        <div class="card">
          <div class="card-title">
            <span>🔺 Population Risk Pyramid Level</span>
            <span class="badge">4-Tier Model</span>
          </div>

          <div class="pyramid-container">
            <div id="pyrT4" class="pyramid-tier pyr-t4">Tier 4: Very High Risk (~1%)</div>
            <div id="pyrT3" class="pyramid-tier pyr-t3">Tier 3: High Risk (~3–5%)</div>
            <div id="pyrT2" class="pyramid-tier pyr-t2">Tier 2: Rising Risk (~15–20%)</div>
            <div id="pyrT1" class="pyramid-tier pyr-t1 active">Tier 1: Low Risk (~70–80%)</div>
          </div>

          <div style="margin-top:20px;">
            <div class="gauge-item">
              <div class="gauge-label">
                <span>Clinical & Utilization Burden</span>
                <span id="txtClinical">0 / 100</span>
              </div>
              <div class="gauge-track">
                <div id="barClinical" class="gauge-bar" style="width:0%; background:var(--tier-1);"></div>
              </div>
            </div>

            <div class="gauge-item">
              <div class="gauge-label">
                <span>SDOH Social Barrier Impact</span>
                <span id="txtSdoh">0 / 100</span>
              </div>
              <div class="gauge-track">
                <div id="barSdoh" class="gauge-bar" style="width:0%; background:var(--tier-1);"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Care Management Strategy -->
        <div class="card">
          <div class="card-title">
            <span>📋 Individualized Care Management Strategy</span>
            <span class="badge">PhilPEN Standard</span>
          </div>

          <div id="mgmtContent">
            <!-- Populated dynamically via JS -->
          </div>
        </div>

        <!-- Share Report Button -->
        <button class="btn-share" onclick="openQRModal()">
          📱 Share / Export Assessment QR & Link
        </button>
      </div>
    </div>
  </div>

  <!-- MODAL 1: About CareStratify -->
  <div id="csModal" class="modal-overlay">
    <div class="modal-box">
      <button class="modal-close" onclick="closeModal('csModal')">&times;</button>
      <h3 style="color:#ffffff; margin-bottom:12px; font-size:1.15rem;">🏥 About CareStratify Engine</h3>
      <p style="font-size:0.86rem; color:var(--text-muted); margin-bottom:16px; line-height:1.5;">
        CareStratify harmonizes the <strong>DOH PhilPEN (Philippine Package of Essential NCD Interventions)</strong> with modern 4-tier population health risk pyramid models to optimize primary care delivery.
      </p>

      <div class="info-item">
        <h4>Key System Objectives</h4>
        <p>Proactively segment patient populations into actionable risk tiers to assign appropriate clinical care managers, allocate health system resources efficiently, and eliminate social barriers to care.</p>
      </div>

      <div class="info-item">
        <h4>Integrated Risk Scoring Engine</h4>
        <p>Combines clinical comorbidity metrics, hospital utilization velocity, and localized Social Determinants of Health (SDOH) multipliers for whole-person health management.</p>
      </div>
    </div>
  </div>

  <!-- MODAL 2: Framework & Assessment Checklist Guide -->
  <div id="guideModal" class="modal-overlay">
    <div class="modal-box">
      <button class="modal-close" onclick="closeModal('guideModal')">&times;</button>
      <h3 style="color:#ffffff; margin-bottom:14px; font-size:1.15rem;">ℹ️ Assessment Parameter Framework</h3>
      
      <div class="info-item">
        <h4>🚨 PhilPEN Crisis Red Flags</h4>
        <p>Immediate triage screening for severe symptoms (chest pain, acute severe dyspnea, sudden neurological deficits). Checking this immediately triggers an Emergency Tier 4 override.</p>
      </div>

      <div class="info-item">
        <h4>⚖️ Asian BMI Criteria (WHO Western Pacific Region)</h4>
        <p>Accounts for increased cardiovascular and metabolic risk at lower body composition thresholds in Asian populations: Overweight (23.0–27.4 kg/m²) and Obese (≥27.5 kg/m²).</p>
      </div>

      <div class="info-item">
        <h4>🩺 NCD Comorbidities & Polypharmacy</h4>
        <p>Evaluates major Non-Communicable Diseases (Hypertension, Diabetes, Heart Failure, COPD/Asthma, CKD). Polypharmacy (&gt;5 chronic daily medications) adds complexity scoring.</p>
      </div>

      <div class="info-item">
        <h4>🏥 Acute Health System Utilization</h4>
        <p>Tracks emergency room visits and unplanned hospital admissions over the past 12 months. 3 or more admissions automatically escalates patient to Tier 4.</p>
      </div>

      <div class="info-item">
        <h4>🌐 SDOH Tier Escalation Multiplier</h4>
        <p>When a patient presents with 2 or more Social Determinants of Health barriers (e.g. food insecurity, housing instability, transit barriers), the system triggers a +1 Risk Tier bump.</p>
      </div>
    </div>
  </div>

  <!-- MODAL 3: Philippine Health System Hotlines -->
  <div id="hotlineModal" class="modal-overlay">
    <div class="modal-box">
      <button class="modal-close" onclick="closeModal('hotlineModal')">&times;</button>
      <h3 style="color:#ffffff; margin-bottom:14px; font-size:1.15rem;">☎️ Philippine Health System Hotlines</h3>
      
      <div class="info-item">
        <h4>🚨 Emergency Response Command</h4>
        <p><strong>911</strong> — Nationwide Emergency Hotline</p>
      </div>

      <div class="info-item">
        <h4>🏥 DOH Emergency Operations Center (EOC)</h4>
        <p><strong>1555</strong> / <strong>(02) 8651-7800</strong> — Department of Health Central Hotline</p>
      </div>

      <div class="info-item">
        <h4>🧠 NCMH Mental Health Crisis Helpline</h4>
        <p><strong>1553</strong> (Toll-free) / <strong>0917-899-8727</strong> — 24/7 National Center for Mental Health Support</p>
      </div>

      <div class="info-item">
        <h4>💳 PhilHealth Helpline (KonSulfatation & Benefits)</h4>
        <p><strong>(02) 8441-7442</strong> — 24/7 PhilHealth Call Center</p>
      </div>

      <div class="info-item">
        <h4>🚑 Philippine Red Cross Dispatch</h4>
        <p><strong>143</strong> / <strong>(02) 8790-2300</strong> — Medical Ambulance & Disaster Response</p>
      </div>
    </div>
  </div>

  <!-- MODAL 4: Mobile Compatible QR Modal -->
  <div id="qrModal" class="modal-overlay">
    <div class="modal-box" style="text-align:center;">
      <button class="modal-close" onclick="closeModal('qrModal')">&times;</button>
      <h3 style="color:#ffffff; margin-bottom:6px; font-size:1.15rem;">Share Stratification Report</h3>
      <p style="font-size:0.8rem; color:var(--text-muted);">Scan QR code on mobile or export link</p>
      
      <div style="width:210px; height:210px; margin:16px auto; padding:10px; background:white; border-radius:14px; box-shadow:0 4px 12px rgba(0,0,0,0.4);">
        <div id="qrContainer" style="width:100%; height:100%;"></div>
      </div>

      <p style="font-size:0.75rem; color:var(--text-muted); margin-bottom:14px;">
        <em>Tap & hold image on iOS Safari to save or share.</em>
      </p>

      <button id="btnNativeShare" class="btn-share">
        📤 Share Assessment Link
      </button>
    </div>
  </div>

  <!-- Toast Container -->
  <div id="toastContainer" class="toast-container"></div>

  <script>
    // Care Management Strategy Datasets
    const MANAGEMENT_PLANS = {
      1: {
        title: "Tier 1: Primary Prevention & Health Promotion",
        color: "var(--tier-1)",
        clinical: [
          "Annual PhilPEN risk assessment and baseline NCD screening (FBS, Lipid Profile)",
          "Maintain routine age-appropriate immunizations (Flu, Pneumococcal)",
          "Counsel on regular physical activity and baseline Mediterranean / DASH diet"
        ],
        sdoh: [
          "Enroll in patient portal and digital self-management wellness tools",
          "Provide community preventive health literacy resources"
        ],
        interval: "Annual Health Check-Up (Every 12 Months)"
      },
      2: {
        title: "Tier 2: Early Disease Coaching & Targeted Intervention",
        color: "var(--tier-2)",
        clinical: [
          "Initiate structured lifestyle coaching (150 min/wk moderate physical activity)",
          "Perform targeted PhilPEN laboratory workup to screen for early organ damage",
          "Conduct Tobacco & Substance Cessation 5As counseling if applicable"
        ],
        sdoh: [
          "Refer to Barangay Diabetes & Hypertension Wellness Support Groups",
          "Screen for financial or nutritional barriers to healthy diet"
        ],
        interval: "Quarterly Primary Care Touchpoints (Every 3–6 Months)"
      },
      3: {
        title: "Tier 3: Complex Multi-Condition Management",
        color: "var(--tier-3)",
        clinical: [
          "Assign a dedicated Primary Care Nurse Coordinator for chronic care tracking",
          "Conduct comprehensive pharmacy audit to resolve polypharmacy and drug interactions",
          "Schedule quarterly organ protection biomarker monitoring (eGFR, Urine ACR, HbA1c)"
        ],
        sdoh: [
          "Connect with Non-Emergency Medical Transportation (NEMT) assistance",
          "Link patient with local social services for subsidized medicine access"
        ],
        interval: "Monthly Care Coordinator Contact + 48-Hour Post-ED Follow-Up"
      },
      4: {
        title: "Tier 4: Intensive Complex Care Management (ICCM)",
        color: "var(--tier-4)",
        clinical: [
          "Enroll patient in Intensive Complex Care Management with dedicated Clinical Case Manager",
          "Establish home health or continuous remote physiological monitoring (RPM)",
          "Immediate physician-led medication reconciliation and specialist multidisciplinary review"
        ],
        sdoh: [
          "Deploy Community Health Worker (CHW / BHW) for home visits and caregiver support",
          "Arrange emergency food delivery and urgent social safety-net enrollment"
        ],
        interval: "Weekly Case Manager Touchpoints + 24/7 Clinical Crisis Hotline Access"
      }
    };

    // Core Calculation Logic
    function calculateRisk() {
      const isRedFlag = document.getElementById('rfChestPain').checked;
      
      let clinicalPts = 0;
      
      // Age Factor
      const age = parseInt(document.getElementById('ptAge').value) || 0;
      if (age >= 60) clinicalPts += 10;

      // BMI Factor (Asian Standards)
      const bmi = parseFloat(document.getElementById('ptBMI').value) || 22.5;
      if (bmi >= 23.0 && bmi < 27.5) clinicalPts += 10;
      else if (bmi >= 27.5) clinicalPts += 20;
      else if (bmi < 18.5) clinicalPts += 5;

      // Comorbidities
      if (document.getElementById('condHTN').checked) clinicalPts += 15;
      if (document.getElementById('condDiabetes').checked) clinicalPts += 20;
      if (document.getElementById('condHF').checked) clinicalPts += 25;
      if (document.getElementById('condCOPD').checked) clinicalPts += 20;
      if (document.getElementById('condCKD').checked) clinicalPts += 25;
      if (document.getElementById('condPolypharm').checked) clinicalPts += 15;

      // Health Utilization
      const erVisits = parseInt(document.getElementById('erVisits').value) || 0;
      let utilPts = 0;
      if (erVisits === 1) utilPts = 25;
      else if (erVisits === 2) utilPts = 50;
      else if (erVisits >= 3) utilPts = 75;

      // SDOH Count
      let sdohPts = 0;
      let sdohCount = 0;
      const sdohIds = ['sdohHousing', 'sdohFood', 'sdohTransport', 'sdohFinancial', 'sdohTobacco', 'sdohAlone'];
      
      sdohIds.forEach(id => {
        if (document.getElementById(id).checked) {
          sdohPts += 18;
          sdohCount++;
        }
      });

      const totalClinical = Math.min(100, clinicalPts + utilPts);
      const totalSdoh = Math.min(100, sdohPts);
      const compositeScore = Math.min(100, Math.round((totalClinical * 0.65) + (totalSdoh * 0.35)));

      // Determine Tier Level
      let tier = 1;
      let sdohEscalated = false;

      if (isRedFlag || totalClinical >= 75 || erVisits >= 3) {
        tier = 4;
      } else if (totalClinical >= 45 || erVisits === 2) {
        tier = 3;
      } else if (totalClinical >= 20 || erVisits === 1) {
        tier = 2;
      } else {
        tier = 1;
      }

      // SDOH Escalation Rule (>= 2 barriers bumps tier up by 1 level if not already T4)
      if (sdohCount >= 2 && tier < 4 && !isRedFlag) {
        tier += 1;
        sdohEscalated = true;
      }

      renderUI(tier, compositeScore, totalClinical, totalSdoh, sdohEscalated, isRedFlag);
    }

    // Render UI Updates
    function renderUI(tier, score, clinicalScore, sdohScore, sdohEscalated, isRedFlag) {
      const banner = document.getElementById('riskBanner');
      const title = document.getElementById('tierTitle');
      const scoreBadge = document.getElementById('tierScoreBadge');
      const desc = document.getElementById('tierDesc');
      const sdohAlert = document.getElementById('sdohAlert');

      const tierConfigs = {
        1: { name: "Tier 1: Low Risk", color: "var(--tier-1)", desc: "Healthy population baseline. Focus on preventive screening and lifestyle wellness." },
        2: { name: "Tier 2: Rising Risk", color: "var(--tier-2)", desc: "Early disease stage or unmanaged risk factors. Lifestyle coaching and targeted care." },
        3: { name: "Tier 3: High Risk", color: "var(--tier-3)", desc: "Multiple comorbidities or moderate hospital use. Requires active care coordination." },
        4: { name: "Tier 4: Very High Risk", color: "var(--tier-4)", desc: "Complex high utilizer or emergency red flag. Enrolled in Intensive Complex Care Management." }
      };

      const cfg = tierConfigs[tier];
      banner.style.backgroundColor = cfg.color;
      
      if (isRedFlag) {
        title.innerText = "Tier 4: Emergency Override";
        desc.innerText = "🚨 Emergency Red Flag Symptoms detected! Immediate triage and emergency hotline intervention required.";
        scoreBadge.innerText = "CRITICAL 🚨";
      } else {
        title.innerText = cfg.name;
        desc.innerText = cfg.desc;
        scoreBadge.innerText = `Score: ${score} pts`;
      }

      sdohAlert.style.display = sdohEscalated ? "flex" : "none";

      // Pyramid Level Highlight
      for (let i = 1; i <= 4; i++) {
        const el = document.getElementById(`pyrT${i}`);
        if (i === tier) el.classList.add('active');
        else el.classList.remove('active');
      }

      // Gauge Progress Bars
      document.getElementById('txtClinical').innerText = `${clinicalScore} / 100`;
      const bClin = document.getElementById('barClinical');
      bClin.style.width = `${clinicalScore}%`;
      bClin.style.backgroundColor = cfg.color;

      document.getElementById('txtSdoh').innerText = `${sdohScore} / 100`;
      const bSdoh = document.getElementById('barSdoh');
      bSdoh.style.width = `${sdohScore}%`;
      bSdoh.style.backgroundColor = sdohScore >= 50 ? "var(--tier-3)" : "var(--tier-1)";

      // Render Individual Care Management Plan
      const mgmtContainer = document.getElementById('mgmtContent');
      const plan = MANAGEMENT_PLANS[tier];

      mgmtContainer.innerHTML = `
        <div class="mgmt-block" style="border-left-color:${plan.color};">
          <h4>🩺 Clinical Care Strategy</h4>
          <ul class="mgmt-list">
            ${plan.clinical.map(i => `<li>${i}</li>`).join('')}
          </ul>
        </div>

        <div class="mgmt-block" style="border-left-color:${plan.color};">
          <h4>🤝 SDOH & Social Interventions</h4>
          <ul class="mgmt-list">
            ${plan.sdoh.map(i => `<li>${i}</li>`).join('')}
          </ul>
        </div>

        <div style="font-size:0.83rem; color:var(--primary); font-weight:700; margin-top:10px; display:flex; align-items:center; gap:6px;">
          <span>⏱️ Recommended Review:</span>
          <span style="color:white;">${plan.interval}</span>
        </div>

        ${(tier === 4 || isRedFlag) ? `
          <div class="hotline-highlight">
            <span style="font-size:1.2rem;">📞</span>
            <div>
              <strong>Immediate Referral Hotline:</strong> Call <strong>911</strong> or DOH Emergency Operations Center (<strong>1555</strong> / 02-8651-7800) for emergency assistance.
            </div>
          </div>
        ` : ''}
      `;
    }

    // Reset Form
    function resetForm() {
      document.getElementById('ptAge').value = "45";
      document.getElementById('ptBMI').value = "22.5";
      document.getElementById('rfChestPain').checked = false;
      document.getElementById('erVisits').value = "0";

      const checkIds = [
        'condHTN', 'condDiabetes', 'condHF', 'condCOPD', 'condCKD', 'condPolypharm',
        'sdohHousing', 'sdohFood', 'sdohTransport', 'sdohFinancial', 'sdohTobacco', 'sdohAlone'
      ];

      checkIds.forEach(id => {
        document.getElementById(id).checked = false;
      });

      calculateRisk();
      showToast("Form reset to baseline values");
    }

    // Load Presets
    function loadPreset(t) {
      resetForm();
      if (t === 1) {
        // Default T1 baseline
      } else if (t === 2) {
        document.getElementById('condHTN').checked = true;
        document.getElementById('ptBMI').value = "28.0";
        document.getElementById('sdohTobacco').checked = true;
      } else if (t === 3) {
        document.getElementById('condDiabetes').checked = true;
        document.getElementById('condCOPD').checked = true;
        document.getElementById('erVisits').value = "1";
        document.getElementById('sdohHousing').checked = true;
        document.getElementById('sdohFood').checked = true;
      } else if (t === 4) {
        document.getElementById('condDiabetes').checked = true;
        document.getElementById('condHF').checked = true;
        document.getElementById('condCKD').checked = true;
        document.getElementById('condPolypharm').checked = true;
        document.getElementById('erVisits').value = "3";
        document.getElementById('sdohTransport').checked = true;
      }
      calculateRisk();
      showToast(`Loaded Preset Tier ${t}`);
    }

    // Modal Control Functions
    function openModal(id) {
      document.getElementById(id).style.display = 'flex';
    }

    function closeModal(id) {
      document.getElementById(id).style.display = 'none';
    }

    // Close Modal on Background Overlay Click
    window.onclick = function(event) {
      if (event.target.classList.contains('modal-overlay')) {
        event.target.style.display = "none";
      }
    };

    // Mobile Compatible QR Generator & Share API
    function openQRModal() {
      const url = window.location.href;
      const encodedUrl = encodeURIComponent(url);
      const imgUrl = `https://quickchart.io/qr?text=${encodedUrl}&size=300&margin=2`;

      document.getElementById('qrContainer').innerHTML = `
        <img src="${imgUrl}" alt="CareStratify Report QR" style="width:100%; height:100%; border-radius:8px; object-fit:contain;" />
      `;

      document.getElementById('btnNativeShare').onclick = async () => {
        if (navigator.share) {
          try {
            await navigator.share({
              title: 'CareStratify Risk Stratification Report',
              text: 'View patient population health stratification & care strategy report:',
              url: url
            });
          } catch(e) {
            // User cancelled share
          }
        } else {
          try {
            document.execCommand('copy');
            showToast("Report URL copied to clipboard!");
          } catch(e) {
            showToast("Share report URL: " + url);
          }
        }
      };

      openModal('qrModal');
    }

    // Toast Notification Utility (no alert calls)
    function showToast(msg) {
      const container = document.getElementById('toastContainer');
      const toast = document.createElement('div');
      toast.className = 'toast';
      toast.innerHTML = `<span>ℹ️</span> <div>${msg}</div>`;
      container.appendChild(toast);

      setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(20px)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 300);
      }, 2500);
    }

    // Initial Load Calculation
    window.onload = function() {
      calculateRisk();
    };
  </script>
</body>
</html>
```
