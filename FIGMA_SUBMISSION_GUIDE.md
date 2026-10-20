# 🎨 FIGMA_SUBMISSION_GUIDE.md — Jupiter Terminal Pro v2.5
## Solana Open Design Bounty ($1,250 Prize Pool) | Figma Config Bengaluru × Solana Summit India

> **Target Deadline**: November 2, 2026  
> **Prize Pool**: $1,250 USD (Solana Summit India 2026 Track)  
> **Project Vault**: `f:\Life OS\Projects\Solana-Bounty-AI-Build\`  
> **Live Prototype URL**: `file:///F:/Life%20OS/Projects/Solana-Bounty-AI-Build/index.html` (Local) / Ready for GitHub Pages & Vercel deployment  
> **Benchmark Standards**: Apple visionOS × Linear Dark × Jupiter Solar Identity

---

## 🏛️ PART 1: The 1-Click Figma Vector Import Pipeline

The prototype has been engineered using clean semantic HTML5, CSS Grid/Flexbox, native SVG vectors, and CSS variables. This ensures that when imported into Figma, every button, card, input, and chip translates into clean **Auto-Layout Frames** with editable text and vectors.

### Step 1: Install the `html.to.design` Plugin in Figma
1. Open Figma desktop or web.
2. Go to **Plugins** $\to$ Search for **`html.to.design`** (by divRIOTS) $\to$ Click **Run**.
3. (Alternative: Use **Figma to HTML / Builder.io** or native screenshot vector tracing).

### Step 2: Import the Local Prototype
1. In `html.to.design`:
   - If hosting locally: Run a local static server:
     ```powershell
     cd "f:\Life OS\Projects\Solana-Bounty-AI-Build"
     npx serve . -l 3000
     ```
   - In `html.to.design`, select **Import URL** $\to$ enter `http://localhost:3000`.
   - Select Viewport: **Desktop (1440px or 1600px)**.
   - Click **Import as Editable Figma Design**.
2. Alternatively (if deploying to Vercel/GitHub Pages):
   - Push repository to GitHub $\to$ Connect to Vercel (1-click deploy).
   - Enter your public Vercel URL into `html.to.design`.

### Step 3: Verify Figma Layers & Auto-Layout
Once imported, verify:
- Fonts map to **Plus Jakarta Sans** and **JetBrains Mono** (install both Google Fonts locally if prompted).
- Cards translate to frames with 20px corner radius and dark fills (`#0F1118`).
- SVGs (Jupiter brand glyph, Jito shield, flip icons, chevron arrows) remain monoline vector shapes.

---

## 🖼️ PART 2: The 5-Frame Award-Winning Figma Presentation Board

To win the $1,250 bounty, you must present more than a static screenshot. The judges at Figma Config and Solana Summit look for **design rationale, token architecture, and micro-interaction states**.

Organize your Figma canvas into **5 master 1920x1080 artboards**:

```
+---------------------------------------------------------------------------------------------------+
|  [FRAME 1: HERO & THESIS]   [FRAME 2: CORE TERMINAL]   [FRAME 3: ROUTING & MEV]                  |
|  - Value Proposition        - Full 1600x900 Terminal   - 3-Channel DLMM Visualizer                |
|  - Problem/Solution         - Annotations & Callouts   - Jito 1-Block Bundling                    |
+---------------------------------------------------------------------------------------------------+
|  [FRAME 4: DESIGN SYSTEM & TOKENS]                     [FRAME 5: INTERACTION & STATES]           |
|  - Color Ramps (Obsidian, Solar Orange, Mint)          - Swap / Limit / DCA / Perps 20x          |
|  - Plus Jakarta Sans + JetBrains Mono Typography       - Dynamic Island Bottom-Center Toast       |
|  - Specular Glassmorphism Tokens                       - Hold-to-Execute Progress Micro-states   |
+---------------------------------------------------------------------------------------------------+
```

### Detailed Board Specs:

#### 🌟 Frame 1: Cover & Institutional Thesis (1920 × 1080)
- **Title**: `JUPITER TERMINAL PRO v2.5`
- **Subtitle**: `Institutional Liquid Execution Suite for Solana`
- **Key Thesis Points**:
  - *Unified Liquidity Aggregator*: Merging Swap, Limit Orders, DCA Ladders, and 20x Perpetuals into a single zero-latency surface.
  - *Visual Multi-Hop Distribution*: Dynamic liquidity channel graph showing real-time split routing across Orca Whirlpools, Raydium CPMM, and Meteora DLMM.
  - *Hardware-Grade Apple Ergonomics*: True Obsidian smoked glass, non-obtrusive Dynamic Island telemetry, and tactile hold-to-confirm execution.
- **Badge**: `Solana Open Design Bounty 2026 | Figma Config Bengaluru`

#### 🖥️ Frame 2: Core Terminal Master Interface (1920 × 1080)
- Place the full-fidelity desktop view at 1600x900 inside a device container.
- **Key Callout Pins**:
  - `Pin A`: **Header Telemetry Bar** — Live Solana TPS pulse, 400ms slot timing ring, tactile Web Audio toggle, and connected wallet chip.
  - `Pin B`: **Market Hero Strip** — 24H Volume ($48.2M), Pool Liquidity ($18.4M), 24H High/Low stats with hairline dividers.
  - `Pin C`: **TradingView-Grade Candlestick Engine** — Live tick animations, volume histogram, and 20 EMA trendline.
  - `Pin D`: **Precision Execution Dock** — Token selector chips, quick percentage presets, dynamic slippage indicator, and Jito tip slider.

#### 🔀 Frame 3: Multi-Hop Split Routing & Jito MEV Architecture (1920 × 1080)
- Zoom in on the `.route-visualizer-card`:
  - Visual breakdown of the 3 parallel liquidity channels (Orca 48%, Raydium 34%, Meteora 18%).
  - Explain the flow particle animation showing routing micro-timing.
  - **Jito Front-Run Shield Deep Dive**:
    - How 1-block bundle landing eliminates sandwich attacks on Solana DEX trades.
    - Dynamic priority tip slider calculations (0.0001 to 0.001 SOL).

#### 🎨 Frame 4: Design Tokens & Typography Foundation (1920 × 1080)
- **Color Palette Swatches**:
  - `True Obsidian`: `#040508` (Deep Space Void)
  - `Smoked Obsidian Glass`: `rgba(15, 17, 24, 0.72)` + `backdrop-filter: blur(40px)`
  - `Jupiter Solar Orange`: `#FF6B00` (Core Brand Accent & Action Fill)
  - `Solar Amber`: `#F59E0B` (Telemetry & Limit Orders)
  - `Solana Violet`: `#8B5CF6` (Ecosystem Identity)
  - `Apple Mint`: `#10B981` (Bullish Price & Confirmed Status)
  - `Apple Rose`: `#F43F5E` (Bearish Delta & Sell Orders)
  - `Zinc Monochromatic Stack`: `#FFFFFF`, `#A1A1AA`, `#71717A`
- **Typography Scale**:
  - Primary UI: **Plus Jakarta Sans** (800 Bold, 700 SemiBold, 600 Medium) with tight tracking `-0.02em` to `-0.035em`.
  - Financial & Telemetry: **JetBrains Mono** with `font-variant-numeric: tabular-nums`.

#### ⚡ Frame 5: Interactive States & Micro-Interactions (1920 × 1080)
- Display the 4 execution modes side-by-side:
  - **State A**: *Market Swap* (Instant route estimation, hold to execute).
  - **State B**: *Limit Order* (Target price input, +4.5% above market badge).
  - **State C**: *DCA Ladder* (10 orders, 1h interval distribution).
  - **State D**: *Perpetuals 20x* (Leverage slider, liquidation price calculation).
- Highlight the **Dynamic Island Notification**:
  - Show the bottom-center floating glass capsule with emerald checkmark and smooth spring entrance.
  - Compare with traditional congested top-right toasts that obstruct wallet chips.
- Highlight the **Execution Settings Modal**:
  - Show decoupled `.setting-item-card` containers with Apple-grade toggle switches.

---

## 🚀 PART 3: 5-Minute Free Public Deployment (Vercel / GitHub)

To give judges a live link they can click and test in their browser:

### Option A: Deploy to Vercel (Recommended)
1. Initialize git in the project directory if not already done:
   ```powershell
   cd "f:\Life OS\Projects\Solana-Bounty-AI-Build"
   git init
   git add .
   git commit -m "feat: Jupiter Terminal Pro v2.5 Apple Obsidian frontend build"
   ```
2. Create a GitHub repo using GitHub CLI or web:
   ```powershell
   gh repo create solana-jupiter-terminal-bounty --public --source=. --push
   ```
3. Deploy to Vercel:
   - Go to [vercel.com/new](https://vercel.com/new).
   - Select `solana-jupiter-terminal-bounty`.
   - Click **Deploy** (zero build configuration needed; static HTML/CSS/JS deploys in 8 seconds).

### Option B: Deploy to GitHub Pages
1. In the GitHub repository $\to$ **Settings** $\to$ **Pages**.
2. Select branch `main` $\to$ folder `/(root)` $\to$ Click **Save**.
3. Live URL generated at `https://<your-username>.github.io/solana-jupiter-terminal-bounty/`.

---

## 📝 PART 4: Superteam Earn Bounty Submission Form Template

Copy and paste these exact value-points into your Superteam Earn submission:

- **Bounty Name**: Solana Open Design Bounty ($1,250 Prize Pool)
- **Project Title**: **Jupiter Terminal Pro v2.5 — Institutional Liquid Execution Suite**
- **Figma Link**: `[Paste your Public Figma View Link]`
- **Live Demo Link**: `[Paste your Vercel or GitHub Pages URL]`
- **GitHub Repository**: `[Paste your Public GitHub Repo URL]`
- **Submission Writeup**:
  > *Jupiter Terminal Pro v2.5 is a production-grade frontend prototype and Figma design system built for institutional and high-velocity Solana traders. It unites Swap, Limit Orders, DCA Ladders, and 20x Perpetuals into a single zero-friction glassmorphic terminal.*
  >
  > **Key Design Innovations**:
  > 1. **Multi-Hop Liquidity Visualizer**: Real-time 3-channel split beam visualizer illustrating order routing across Orca Whirlpools (48%), Raydium CPMM (34%), and Meteora DLMM (18%) with Jito 1-block front-run MEV protection.
  > 2. **Apple visionOS × Obsidian Aesthetics**: Smoked obsidian glass (`backdrop-filter: blur(40px)`), silver specular top-edge lighting, dynamic mouse-following specular spotlight pool, and Jupiter Solar Orange brand energy.
  > 3. **Ergonomic Dynamic Island Hub**: Solved the industry-wide notification congestion issue by moving toasts to a floating bottom-center capsule, keeping wallet addresses, TPS counters, and action docks 100% visible at all times.
  > 4. **Tactile Execution Physics**: Features sliding segmented mode pills, live TradingView-grade high-DPI candlestick canvas with EMA trendlines, and a tactile hold-to-confirm execution button with liquid fill progress.
