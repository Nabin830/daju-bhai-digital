# DAJU BHAI DIGITAL — React + Vite (TypeScript) + Tailwind

A production-ready frontend e-commerce website for selling **digital PDF books** and **digital subscriptions** using **local mock data** (no backend).
Checkout is a **UI simulation only** (no real Stripe/PayPal keys).

## Requirements
- Node.js 18+ recommended
- npm (or pnpm/yarn)

## Install
```bash
npm install
```

## Run locally
```bash
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Notes for compliance readiness (Stripe/PayPal/Wise)
- Business identity shown site-wide
- Clear product labeling: digital PDF/ZIP only
- Prices displayed in USD & NPR
- Refund policy, delivery policy, terms, privacy, cookies, and subscription terms included
- Contact page includes support email, business hours, response time
- No restricted content (no gambling/adult/crypto)

## Where to customize
- `src/config/site.ts` (domain, support email, business text)
- `src/data/products.ts` (digital products)
- `src/data/subscriptions.ts` (subscription plans)
