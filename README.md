# Web3 Platform Landing Page

A modern, responsive landing page for a Web3 DeFi platform built with React, TypeScript, Vite, and Tailwind CSS. Features Web3 wallet connection via RainbowKit, scroll-triggered animations with Framer Motion, and a dark mode premium design.

## Features

- **Hero with kinetic typography** — animated word-by-word reveal that draws the eye to the value proposition.
- **Features with glow cards** — premium gradient-bordered cards highlighting platform capabilities.
- **How It Works** — clear, step-by-step explanation of the user journey.
- **Social proof with animated counters** — stats, testimonials, and a logo cloud that builds credibility.
- **Wallet connection via RainbowKit** — first-class Web3 onboarding for the major wallets.
- **Responsive design** — mobile-first layouts that scale fluidly to desktop.
- **Performance optimized** — image lazy loading, font preloading, and meta tags tuned for Core Web Vitals.

## Tech Stack

- **React 18** — component-driven UI library
- **TypeScript** — static typing for maintainability
- **Vite 5** — fast dev server and optimized production builds
- **Tailwind CSS 3** — utility-first styling
- **wagmi + RainbowKit** — Web3 wallet connection and chain management
- **Framer Motion** — declarative animations and scroll-triggered reveals
- **Lucide React** — consistent, accessible icon set

## Getting Started

### Prerequisites

- Node.js >= 18

### Installation

```bash
git clone https://github.com/your-org/proj_257-web3-platform-landing-page.git
cd proj_257-web3-platform-landing-page
npm install
```

### Development

```bash
npm run dev
```

The dev server starts at [http://localhost:5173](http://localhost:5173) with hot module replacement enabled.

### Build

```bash
npm run build
```

Type-checks the project and emits an optimized production bundle to the `dist/` directory. Preview the production build locally with:

```bash
npm run preview
```

## Environment Variables

Copy `.env.example` to `.env` and fill in the required values:

```bash
cp .env.example .env
```

| Variable | Description |
| --- | --- |
| `VITE_WALLETCONNECT_PROJECT_ID` | WalletConnect Cloud project identifier used by RainbowKit / wagmi to enable WalletConnect-based wallet connections. Obtain one at [https://cloud.walletconnect.com](https://cloud.walletconnect.com). |

Variables prefixed with `VITE_` are exposed to client-side code at build time.

## Project Structure

```
src/
├── components/
│   ├── layout/        # Header, Footer
│   ├── sections/      # Hero, Features, HowItWorks, Stats, Testimonials, LogoCloud, ConnectCTA
│   ├── ui/            # AnimatedCounter, GlowCard, LazyImage, MorphingButton, ScrollReveal, WordReveal
│   └── providers/     # Web3Provider (wagmi + RainbowKit)
├── config/            # web3.ts (chains, wagmi config)
└── hooks/             # useReducedMotion and other reusable hooks
```

## Deployment

Deployed via **GitHub Pages** with a **GitHub Actions** workflow. Pushing to `main` triggers an automatic build and deploy — the production bundle from `dist/` is published to the `gh-pages` branch and served from the configured Pages URL.

## License

[MIT](LICENSE)
