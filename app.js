/**
 * JUPITER TERMINAL — INSTITUTIONAL SOLANA RUNTIME
 * Solana Summit India 2026 & Figma Config Open Design Bounty
 * Apple Stocks × macOS Sequoia × Linear Pro Terminal
 */
'use strict';

// --- 1. Apple-Calibrated Web Audio Synthesizer ---
class AppleAudioEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  _ensure() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playTick() {
    if (!this.enabled) return;
    this._ensure();
    const ctx = this.ctx;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(840, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(140, ctx.currentTime + 0.035);
    gain.gain.setValueAtTime(0.09, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.035);
    osc.connect(gain).connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.04);
  }

  playChime() {
    if (!this.enabled) return;
    this._ensure();
    const ctx = this.ctx;
    const now = ctx.currentTime;
    [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.value = freq;
      const t = now + i * 0.07;
      gain.gain.setValueAtTime(0, t);
      gain.gain.linearRampToValueAtTime(0.12, t + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.35);
      osc.connect(gain).connect(ctx.destination);
      osc.start(t);
      osc.stop(t + 0.4);
    });
  }

  playAlert() {
    if (!this.enabled) return;
    this._ensure();
    const ctx = this.ctx;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(280, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(160, ctx.currentTime + 0.15);
    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
    osc.connect(gain).connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.18);
  }
}

const audio = new AppleAudioEngine();

// --- 2. Live Terminal State ---
const state = {
  flipped: false,
  bonkPrice: 0.00001842,
  dayChangePct: 4.82,
  slippage: '0.5',
  mevOn: true,
  tip: 35,
  feeLevel: 'market',
  autoSlippage: true,
  simulate: true,
  activeMode: 'swap', // 'swap', 'limit', 'dca', 'perps'
  userSolBalance: 48.21,
  activeFilter: 'all' // Declared first to prevent hoisting bugs
};

const RATE_SOL_TO_BONK = 54274.57;

// --- 3. DOM References ---
const tpsValue = document.getElementById('tpsValue');
const slotValue = document.getElementById('slotValue');
const slotRing = document.getElementById('slotRing');
const walletPill = document.getElementById('walletPill');
const soundToggleBtn = document.getElementById('soundToggleBtn');
const soundLabel = document.getElementById('soundLabel');

const fromTokenLabel = document.getElementById('fromTokenLabel');
const toTokenLabel = document.getElementById('toTokenLabel');
const flipTokensBtn = document.getElementById('flipTokensBtn');
const miniFlip = document.getElementById('miniFlip');

const priceValue = document.getElementById('priceValue');
const priceDelta = document.getElementById('priceDelta');

const payAmount = document.getElementById('payAmount');
const receiveAmount = document.getElementById('receiveAmount');
const receiveUsd = document.getElementById('receiveUsd');
const payBadge = document.getElementById('payBadge');
const receiveBadge = document.getElementById('receiveBadge');
const maxBtn = document.getElementById('maxBtn');

const modeTabs = document.querySelectorAll('.mode-tab');
const modeTabIndicator = document.getElementById('modeTabIndicator');
const dockModeTag = document.getElementById('dockModeTag');
const modeExtension = document.getElementById('modeExtension');
const slippageValue = document.getElementById('slippageValue');
const presetBtns = document.querySelectorAll('.preset-btn');
const sizeBtns = document.querySelectorAll('.size-btn');

const mevToggle = document.getElementById('mevToggle');
const mevSubtitle = document.getElementById('mevSubtitle');
const mevShieldIcon = document.getElementById('mevShieldIcon');
const jitoTipRow = document.getElementById('jitoTipRow');
const tipSlider = document.getElementById('tipSlider');
const tipValue = document.getElementById('tipValue');

const executeBtn = document.getElementById('executeBtn');
const executeFill = document.getElementById('executeFill');
const btnLabelText = document.getElementById('btnLabelText');

const activityList = document.getElementById('activityList');
const filterTabs = document.querySelectorAll('.filter-tab');

const settingsFab = document.getElementById('settingsFab');
const settingsModal = document.getElementById('settingsModal');
const modalClose = document.getElementById('modalClose');
const feeSegment = document.getElementById('feeSegment');
const autoSlippageToggle = document.getElementById('autoSlippageToggle');
const simulateToggle = document.getElementById('simulateToggle');
const livePreviewBox = document.getElementById('livePreviewBox');
const toastHub = document.getElementById('toastHub');

// --- 4. Toast Notification Hub ---
function showToast(message, type = 'success', duration = 3000) {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  const icon = type === 'info' 
    ? `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`
    : `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
  toast.innerHTML = `
    <span class="toast-icon">${icon}</span>
    <span class="toast-message">${message}</span>
  `;
  toastHub.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(16px) scale(0.92)';
    setTimeout(() => toast.remove(), 250);
  }, duration);
}

// --- 5. Candlestick & Volume Chart Simulation ---
const chartCanvas = document.getElementById('candlestickCanvas');
const chartCtx = chartCanvas.getContext('2d');
let candles = [];

function initChartData() {
  let p = 140;
  candles = [];
  for (let i = 0; i < 48; i++) {
    const delta = (Math.random() - 0.47) * 8;
    const open = p;
    const close = p + delta;
    const high = Math.max(open, close) + Math.random() * 4;
    const low = Math.min(open, close) - Math.random() * 4;
    const vol = Math.floor(Math.random() * 40 + 10);
    candles.push({ open, close, high, low, vol });
    p = close;
  }
}

function drawCandlestickChart() {
  const dpr = window.devicePixelRatio || 1;
  const rect = chartCanvas.getBoundingClientRect();
  const w = rect.width || 720;
  const h = rect.height || 280;

  if (chartCanvas.width !== Math.floor(w * dpr) || chartCanvas.height !== Math.floor(h * dpr)) {
    chartCanvas.width = Math.floor(w * dpr);
    chartCanvas.height = Math.floor(h * dpr);
  }

  chartCtx.save();
  chartCtx.scale(dpr, dpr);
  chartCtx.clearRect(0, 0, w, h);

  const candleW = w / candles.length;
  const maxPrice = Math.max(...candles.map(c => c.high)) + 2;
  const minPrice = Math.min(...candles.map(c => c.low)) - 2;
  const range = maxPrice - minPrice;

  // Grid lines
  chartCtx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
  chartCtx.lineWidth = 1;
  for (let y = 35; y < h; y += 48) {
    chartCtx.beginPath();
    chartCtx.moveTo(0, y);
    chartCtx.lineTo(w, y);
    chartCtx.stroke();
  }

  // Draw Volume & Candles
  candles.forEach((c, i) => {
    const x = i * candleW + candleW * 0.15;
    const isGreen = c.close >= c.open;
    const top = h - ((Math.max(c.open, c.close) - minPrice) / range) * (h * 0.72) - 35;
    const bottom = h - ((Math.min(c.open, c.close) - minPrice) / range) * (h * 0.72) - 35;
    const highY = h - ((c.high - minPrice) / range) * (h * 0.72) - 35;
    const lowY = h - ((c.low - minPrice) / range) * (h * 0.72) - 35;

    const candleColor = isGreen ? '#00F59B' : '#FF3B56';

    // Volume bar
    chartCtx.fillStyle = isGreen ? 'rgba(0, 245, 155, 0.16)' : 'rgba(255, 59, 86, 0.16)';
    chartCtx.fillRect(x, h - c.vol * 1.5, candleW * 0.7, c.vol * 1.5);

    // Wick
    chartCtx.strokeStyle = candleColor;
    chartCtx.lineWidth = 1;
    chartCtx.beginPath();
    chartCtx.moveTo(x + (candleW * 0.35), highY);
    chartCtx.lineTo(x + (candleW * 0.35), lowY);
    chartCtx.stroke();

    // Candle Body
    chartCtx.fillStyle = candleColor;
    chartCtx.fillRect(x, top, candleW * 0.7, Math.max(2, bottom - top));
  });

  // Draw EMA 20 line
  chartCtx.strokeStyle = 'rgba(0, 245, 155, 0.7)';
  chartCtx.lineWidth = 1.75;
  chartCtx.beginPath();
  candles.forEach((c, i) => {
    const x = i * candleW + candleW * 0.5;
    const y = h - ((c.close - minPrice) / range) * (h * 0.72) - 35;
    if (i === 0) chartCtx.moveTo(x, y);
    else chartCtx.lineTo(x, y);
  });
  chartCtx.stroke();
  chartCtx.restore();
}

function updateCandleTick() {
  const last = candles[candles.length - 1];
  const delta = (Math.random() - 0.46) * 6;
  const open = last.close;
  const close = open + delta;
  const high = Math.max(open, close) + Math.random() * 3;
  const low = Math.min(open, close) - Math.random() * 3;
  const vol = Math.floor(Math.random() * 45 + 10);

  candles.shift();
  candles.push({ open, close, high, low, vol });
  drawCandlestickChart();
}

// --- 6. Telemetry & Calculations ---
setInterval(() => {
  const tps = 3200 + Math.floor(Math.random() * 850);
  tpsValue.textContent = tps.toLocaleString();
}, 1200);

setInterval(() => {
  slotValue.textContent = '400ms';
  slotRing.classList.add('pulse');
  setTimeout(() => slotRing.classList.remove('pulse'), 380);
}, 400);

setInterval(() => {
  const wobble = (Math.random() - 0.5) * 0.00000035;
  state.bonkPrice = Math.max(0.0000001, state.bonkPrice + wobble);
  state.dayChangePct += (Math.random() - 0.5) * 0.25;
  priceValue.textContent = '$' + state.bonkPrice.toFixed(8);
  priceValue.classList.add('flash');
  setTimeout(() => priceValue.classList.remove('flash'), 400);
  priceDelta.textContent = (state.dayChangePct >= 0 ? '+' : '') + state.dayChangePct.toFixed(2) + '%';
  priceDelta.classList.toggle('positive', state.dayChangePct >= 0);
  priceDelta.classList.toggle('negative', state.dayChangePct < 0);
  recalcQuote();
}, 2200);

function recalcQuote() {
  const pay = parseFloat(payAmount.value) || 0;
  const rate = state.flipped ? 1 / RATE_SOL_TO_BONK : RATE_SOL_TO_BONK;
  const receive = pay * rate;
  receiveAmount.value = receive.toLocaleString(undefined, { maximumFractionDigits: state.flipped ? 4 : 2 });
  const usd = state.flipped ? receive * 145.20 : receive * state.bonkPrice;
  receiveUsd.textContent = '≈ $' + usd.toFixed(2);
}
payAmount.addEventListener('input', recalcQuote);

// Quick % buttons
sizeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    audio.playTick();
    sizeBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const pct = parseFloat(btn.dataset.pct);
    const amount = (state.userSolBalance * pct).toFixed(2);
    payAmount.value = amount;
    recalcQuote();
  });
});

maxBtn.addEventListener('click', () => {
  audio.playTick();
  payAmount.value = state.userSolBalance.toFixed(2);
  recalcQuote();
});

// Flip tokens
function flipTokens() {
  audio.playTick();
  state.flipped = !state.flipped;
  const from = state.flipped ? 'BONK' : 'SOL';
  const to = state.flipped ? 'SOL' : 'BONK';
  fromTokenLabel.textContent = from;
  toTokenLabel.textContent = to;
  payBadge.textContent = from;
  receiveBadge.textContent = to;
  recalcQuote();
}
flipTokensBtn.addEventListener('click', flipTokens);
miniFlip.addEventListener('click', flipTokens);

// Slippage
presetBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    audio.playTick();
    presetBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const slip = btn.dataset.slip;
    state.slippage = slip;
    slippageValue.textContent = slip === 'auto' ? 'Auto' : slip + '%';
  });
});

// MEV Shield
function updateMevUI() {
  if (state.mevOn) {
    mevSubtitle.textContent = 'Jito front-run shield active';
    mevShieldIcon.classList.remove('inactive');
    jitoTipRow.classList.remove('hidden');
  } else {
    mevSubtitle.textContent = 'Protection disabled';
    mevShieldIcon.classList.add('inactive');
    jitoTipRow.classList.add('hidden');
  }
}
mevToggle.addEventListener('change', () => {
  state.mevOn = mevToggle.checked;
  updateMevUI();
  audio.playTick();
});
tipSlider.addEventListener('input', () => {
  state.tip = parseInt(tipSlider.value, 10);
  const tipSol = 0.0001 + (state.tip / 100) * 0.0009;
  tipValue.textContent = tipSol.toFixed(5) + ' SOL';
});

// --- 7. Order Mode Switcher (Swap vs Limit vs DCA vs Perps) ---
function updateModeIndicator(tabElement) {
  if (!modeTabIndicator || !tabElement) return;
  const parent = tabElement.parentElement;
  const pRect = parent.getBoundingClientRect();
  const tRect = tabElement.getBoundingClientRect();
  const x = tRect.left - pRect.left;
  modeTabIndicator.style.transform = `translateX(${x - 3}px)`;
  modeTabIndicator.style.width = `${tRect.width}px`;
}

modeTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    audio.playTick();
    modeTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    updateModeIndicator(tab);
    state.activeMode = tab.dataset.mode;

    if (state.activeMode === 'swap') {
      dockModeTag.textContent = 'MARKET SWAP';
      btnLabelText.textContent = 'Hold to Execute';
      modeExtension.innerHTML = '';
    } else if (state.activeMode === 'limit') {
      dockModeTag.textContent = 'LIMIT ORDER';
      btnLabelText.textContent = 'Place Limit Order';
      modeExtension.innerHTML = `
        <div class="dock-section" style="margin-top: 6px;">
          <div class="section-top-label">
            <label class="dock-label">Target Limit Price</label>
            <span class="mono" style="font-size: 0.65rem; color: var(--emerald);">+4.5% above market</span>
          </div>
          <input type="text" class="amount-input mono" value="$0.00001925" style="font-size: 1.1rem;">
        </div>
      `;
    } else if (state.activeMode === 'dca') {
      dockModeTag.textContent = 'DCA LADDER';
      btnLabelText.textContent = 'Start DCA Stream';
      modeExtension.innerHTML = `
        <div class="dock-section" style="margin-top: 6px;">
          <div class="section-top-label">
            <label class="dock-label">DCA Frequency & Orders</label>
            <span class="mono" style="font-size: 0.65rem; color: var(--violet);">10 Orders • 1h Interval</span>
          </div>
          <div style="font-size: 0.72rem; color: var(--text-secondary); margin-top: 4px;">
            Executes 1.25 SOL every 1 hour for 10 hours.
          </div>
        </div>
      `;
    } else if (state.activeMode === 'perps') {
      dockModeTag.textContent = 'PERPETUALS (20X)';
      btnLabelText.textContent = 'Open 20x Position';
      modeExtension.innerHTML = `
        <div class="dock-section" style="margin-top: 6px;">
          <div class="section-top-label">
            <label class="dock-label">Leverage Multiplier</label>
            <strong class="mono" style="color: var(--amber);">20x Leverage</strong>
          </div>
          <input type="range" min="1" max="20" value="20" class="tip-slider" style="margin-top: 6px;">
          <div style="display:flex; justify-content:space-between; font-size:0.65rem; color:var(--text-muted); margin-top:4px;">
            <span>Liq. Price: $138.40</span>
            <span>Fee: 0.05%</span>
          </div>
        </div>
      `;
    }
  });
});

// --- 8. Hold to Confirm Execution ---
const HOLD_DURATION = 850;
let holdStart = 0, holdTimer = null, executed = false;

function startHold() {
  audio.playTick();
  executed = false;
  holdStart = performance.now();
  executeFill.style.transition = `width ${HOLD_DURATION}ms cubic-bezier(0.16, 1, 0.3, 1)`;
  requestAnimationFrame(() => { executeFill.style.width = '100%'; });
  holdTimer = setTimeout(completeExecution, HOLD_DURATION);
}

function cancelHold() {
  clearTimeout(holdTimer);
  executeFill.style.transition = 'width 0.2s ease-out';
  executeFill.style.width = '0%';
}

function completeExecution() {
  executed = true;
  audio.playChime();
  const pair = state.flipped ? 'BONK → SOL' : 'SOL → BONK';
  showToast(`Transaction Confirmed · ${pair}`, 'success');
  addActivityRow({ type: state.activeMode, pair, amount: receiveAmount.value, status: 'confirmed' });
  setTimeout(() => {
    executeFill.style.transition = 'width 0.25s ease';
    executeFill.style.width = '0%';
  }, 400);
}

executeBtn.addEventListener('pointerdown', startHold);
executeBtn.addEventListener('pointerup', () => {
  const elapsed = performance.now() - holdStart;
  if (elapsed < HOLD_DURATION && !executed) cancelHold();
});
executeBtn.addEventListener('pointerleave', () => {
  const elapsed = performance.now() - holdStart;
  if (elapsed < HOLD_DURATION && !executed) cancelHold();
});

// Keyboard Hotkey (Ctrl+Enter or Cmd+Enter)
document.addEventListener('keydown', (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
    e.preventDefault();
    audio.playTick();
    executeFill.style.transition = 'width 0.12s ease';
    executeFill.style.width = '100%';
    setTimeout(() => {
      audio.playChime();
      const pair = state.flipped ? 'BONK → SOL' : 'SOL → BONK';
      showToast(`Instant Order Filled · ${pair}`, 'success');
      addActivityRow({ type: state.activeMode, pair, amount: receiveAmount.value, status: 'confirmed' });
      executeFill.style.width = '0%';
    }, 150);
  }
});

// --- 9. Activity Feed ---
const ROW_ICONS = {
  swap: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 1l4 4-4 4"></path><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><path d="M7 23l-4-4 4-4"></path><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg>',
  limit: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"></circle><path d="M12 6v6l4 2"></path></svg>',
  dca: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 1 1-3-6.7"></path><path d="M21 3v6h-6"></path></svg>',
  perps: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>'
};

function addActivityRow({ type, pair, amount, status }) {
  const row = document.createElement('div');
  row.className = 'activity-row';
  row.dataset.type = type;
  row.innerHTML = `
    <div class="row-icon ${type}">${ROW_ICONS[type] || ROW_ICONS.swap}</div>
    <div>
      <div class="row-pair">${pair}</div>
      <div class="row-sub">${type.toUpperCase()} EXECUTION</div>
    </div>
    <div class="row-amount mono">${amount}</div>
    <div class="row-time mono">just now</div>
    <div class="row-status ${status}">${status}</div>
  `;
  activityList.prepend(row);
  while (activityList.children.length > 9) activityList.lastChild.remove();
  applyFilter();
}

function applyFilter() {
  [...activityList.children].forEach(row => {
    row.style.display = (state.activeFilter === 'all' || row.dataset.type === state.activeFilter) ? 'grid' : 'none';
  });
}

filterTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    audio.playTick();
    filterTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    state.activeFilter = tab.dataset.filter;
    applyFilter();
  });
});

function seedActivity() {
  const seed = [
    { type: 'swap', pair: 'SOL → BONK', amount: '1,204,221.40', status: 'confirmed' },
    { type: 'limit', pair: 'SOL → JUP', amount: '842.10', status: 'pending' },
    { type: 'dca', pair: 'USDC → SOL', amount: '50.00', status: 'confirmed' },
    { type: 'swap', pair: 'WIF → USDC', amount: '312.88', status: 'confirmed' }
  ];
  seed.forEach(s => addActivityRow(s));
}

// Background Simulated Network Orders
setInterval(() => {
  const types = ['swap', 'limit', 'dca'];
  const type = types[Math.floor(Math.random() * types.length)];
  const pairs = ['SOL → BONK', 'SOL → WIF', 'USDC → JUP', 'SOL → PYTH'];
  const pair = pairs[Math.floor(Math.random() * pairs.length)];
  const amount = (Math.random() * 12500).toFixed(2);
  const status = Math.random() > 0.15 ? 'confirmed' : 'pending';
  addActivityRow({ type, pair, amount, status });
}, 4500);

// --- 10. Settings Modal & Audio Toggle ---
function updateLivePreview() {
  const feeMap = { low: '0.000005 SOL', market: '0.00002 SOL', turbo: '0.0001 SOL' };
  livePreviewBox.innerHTML = `
    Priority Fee: <strong>${state.feeLevel.toUpperCase()}</strong> (${feeMap[state.feeLevel]})<br>
    Auto Slippage: <strong>${state.autoSlippage ? 'Enabled' : 'Disabled'}</strong><br>
    Simulate Before Send: <strong>${state.simulate ? 'Active' : 'Bypassed'}</strong>
  `;
}

settingsFab.addEventListener('click', () => {
  settingsModal.classList.add('open');
  audio.playTick();
});
modalClose.addEventListener('click', () => settingsModal.classList.remove('open'));
settingsModal.addEventListener('click', (e) => {
  if (e.target === settingsModal) settingsModal.classList.remove('open');
});

feeSegment.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', () => {
    audio.playTick();
    feeSegment.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.feeLevel = btn.dataset.fee;
    updateLivePreview();
  });
});

autoSlippageToggle.addEventListener('change', () => {
  state.autoSlippage = autoSlippageToggle.checked;
  updateLivePreview();
});

simulateToggle.addEventListener('change', () => {
  state.simulate = simulateToggle.checked;
  updateLivePreview();
});

soundToggleBtn.addEventListener('click', () => {
  audio.enabled = !audio.enabled;
  soundLabel.textContent = audio.enabled ? 'Audio ON' : 'Audio OFF';
  showToast(audio.enabled ? 'Audio feedback enabled' : 'Audio feedback muted', 'info');
});

walletPill.addEventListener('click', () => {
  audio.playTick();
  navigator.clipboard.writeText('7xKXtg2CW3xkV9EtRCe7gCqk7A9bXqf1vJ8m3nQ9pQr');
  showToast('Wallet address copied to clipboard', 'success');
});

// Dynamic Spotlight Pool Listener for Apple Glass Cards
function initSpotlightPool() {
  document.querySelectorAll('.glass-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
      card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    });
  });
}

// --- 11. Initializer ---
window.addEventListener('DOMContentLoaded', () => {
  initChartData();
  drawCandlestickChart();
  setInterval(updateCandleTick, 1400);

  initSpotlightPool();

  const activeTab = document.querySelector('.mode-tab.active');
  if (activeTab) updateModeIndicator(activeTab);

  window.addEventListener('resize', () => {
    drawCandlestickChart();
    const currActive = document.querySelector('.mode-tab.active');
    if (currActive) updateModeIndicator(currActive);
  });

  seedActivity();
  recalcQuote();
  updateMevUI();
  updateLivePreview();

  setTimeout(() => {
    showToast('Jupiter Terminal Online · Jito Shield Active', 'success');
  }, 450);
});