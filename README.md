# 🪐 JUPITER TERMINAL PRO v2.5

> **Institutional Liquid Execution Suite for Solana**  
> *Apple visionOS Smoked Obsidian Glassmorphism × Solana High-Speed Execution Architecture*

[![Solana](https://img.shields.io/badge/Solana-Mainnet_Beta-14F195?style=for-the-badge&logo=solana&logoColor=black)](https://solana.com)
[![Figma Config](https://img.shields.io/badge/Figma_Config-Bengaluru_2026-F24E1E?style=for-the-badge&logo=figma&logoColor=white)](https://figma.com)
[![Jupiter](https://img.shields.io/badge/Jupiter-Exchange_Redesign-FF6B00?style=for-the-badge)](https://jup.ag)
[![UI Architecture](https://img.shields.io/badge/Interface-visionOS_Obsidian-040508?style=for-the-badge&logo=apple&logoColor=white)](https://github.com/sanjay3226/jupiter-terminal-pro)

---

## ⚡ Executive Summary

**Jupiter Terminal Pro v2.5** is an institutional-grade frontend interface and design system engineered for high-velocity Solana traders. It eliminates multi-tab cognitive drag by consolidating **Instant Swaps, Limit Orders, DCA Ladders, and 20x Perpetuals** into a unified, zero-latency surface.

Traditional DEX aggregators force traders to juggle multiple browser windows (Birdeye/DexScreener for charts, Jupiter for swaps, separate interfaces for perps). **Jupiter Terminal Pro** integrates high-DPI market telemetry, real-time 3-pool split liquidity pathing, and Jito 1-block MEV protection into a single ergonomic dashboard.

---

## 🌟 4 Core Architectural Innovations

### 1. 🔀 3-Channel Split Liquidity Router
- **The Problem**: Conventional swap aggregators hide their routing math behind opaque dropdown accordions.
- **The Solution**: An animated multi-hop liquidity beam visualizer that displays real-time execution distribution across:
  - **Orca Whirlpools (CLMM)** — `48%` route weight
  - **Raydium CPMM** — `34%` route weight
  - **Meteora DLMM** — `18%` route weight
- Features dynamic animated SVG flow particles illustrating routing micro-timing and latency.

### 2. 📈 High-DPI TradingView-Grade Candlestick Engine
- **The Problem**: Opening external charting tabs drains system memory and introduces execution delay.
- **The Solution**: An integrated HTML5 Canvas 2D candlestick engine utilizing high-DPI backing store scaling (`window.devicePixelRatio = 2`).
  - Real-time tick simulations with procedural green/red candle formations.
  - 20 EMA (Exponential Moving Average) smoothed spline overlay.
  - Sub-pixel volume histogram bars with gradient fills.

### 3. 🛡️ Jito 1-Block MEV Shield & Tactile Liquid Hold
- **The Problem**: High-slippage meme token traders frequently suffer toxic MEV sandwich attacks on public mempools.
- **The Solution**: Built-in Jito MEV protection toggle routing orders directly to validators through private 1-block bundles.
  - Dynamic Jito priority tip slider (`0.0001` to `0.001` SOL).
  - Tactile **Hold-to-Execute** liquid progress confirmation button with smooth cubic-bezier fill physics (`0.75s` confirmation window).

### 4. 🏝️ Ergonomic Dynamic Island Notification Hub
- **The Problem**: Standard top-right toast alerts obstruct wallet addresses, RPC status indicators, and header navigation.
- **The Solution**: A non-obtrusive, floating **Dynamic Island capsule** anchored at the bottom-center focal zone (`bottom: 32px`).
  - Spring-physics entrance animation (`cubic-bezier(0.16, 1, 0.3, 1)`).
  - Auto-collapsing status indicators for routing confirmation, slippage warnings, and simulated tx signatures.

---

## 🎨 Design System & Token Foundation

Inspired by Apple visionOS spatial computing and Linear Dark minimalism, calibrated specifically for Solana's speed.

| Token | Hex / Value | Semantic Role |
|---|---|---|
| **True Obsidian** | `#040508` | Deep space background canvas void |
| **Smoked Glass** | `rgba(15, 17, 24, 0.72)` | Card surfaces (`backdrop-filter: blur(40px)`) |
| **Specular Highlight** | `rgba(255, 255, 255, 0.08)` | 1px hairline top-edge reflection border |
| **Jupiter Solar Orange**| `#FF6B00` | Primary brand accent, action fills & CTA |
| **Solana Violet** | `#8B5CF6` | Ecosystem identity & secondary telemetry |
| **Apple Mint** | `#10B981` | Bullish candlesticks & confirmed transactions |
| **Apple Rose** | `#F43F5E` | Bearish candlesticks & sell orders |

### Typography Stack
- **Primary Interface**: `Plus Jakarta Sans` (`800` Extrabold, `700` Bold, `600` SemiBold) with tight optical kerning (`-0.025em`).
- **Telemetry & Numerical Data**: `JetBrains Mono` with `font-variant-numeric: tabular-nums` for rock-solid tabular alignment without jitter.

---

## 🕹️ Unified Execution Modes

A sliding segmented pill selector enables seamless switching between 4 distinct execution engines:

1. **Market Swap**: Instant best-route estimation with tactile hold-to-confirm button.
2. **Limit Order**: Precision price-target entry with visual `+4.5% Above Market` indicator badges.
3. **DCA Ladder**: Automated periodic accumulation (e.g., 10 orders over 1h intervals) with visual allocation bar.
4. **Perpetuals 20x**: High-leverage execution dock featuring dynamic leverage slider, liquidation price calculations, and collateral margin meters.

---

## 🚀 Quick Start & Local Execution

This repository is built with 100% clean, native web standards (HTML5, Vanilla CSS3, Vanilla JS). Zero node bloat, zero heavy frameworks, zero build steps required.

### 1. Clone the Repository
```bash
git clone https://github.com/sanjay3226/jupiter-terminal-pro.git
cd jupiter-terminal-pro
```

### 2. Run Locally
Simply open `index.html` in any modern web browser, or serve it via a local static server:

```bash
# Using Python
python -m http.server 3000

# Or using Node / npx
npx serve .
```

Open `http://localhost:3000` to interact with the live high-DPI candlestick canvas and split liquidity engine.

---

## 📁 Repository Structure

```
jupiter-terminal-pro/
├── index.html              # Semantic HTML5 single-pane terminal layout
├── style.css               # Apple visionOS glassmorphism & responsive stylesheet (40KB)
├── app.js                  # Candlestick engine, liquidity visualizer & state physics (24KB)
├── README.md               # Institutional documentation & architectural breakdown
└── presentation-slides/    # 5-Frame high-DPI Figma presentation assets
    ├── 01_COVER_SLIDE.png
    ├── 02_CORE_TRADING_TERMINAL.png
    ├── 03_PERPS_EXECUTION_DOCK.png
    ├── 04_JITO_MEV_SETTINGS_MODAL.png
    └── 05_DYNAMIC_ISLAND_ALERT.png
```

---

## ⚖️ License & Attribution

Designed and engineered for the **Solana Open Design Bounty ($1,250 USDC)** hosted by **Superteam India** for **Figma Config Bengaluru × Solana Summit India 2026**.

- **Author**: Discipline Guy (`@sanjay3226`)
- **License**: MIT
