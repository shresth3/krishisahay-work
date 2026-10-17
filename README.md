# KrishiSahay — Dual-sided Agritech Frontend

A runnable Next.js + React starter with Buyer and Seller workspaces, persistent light/dark mode, and English/Hindi/Bhojpuri language selection.

## Requirements
- Node.js 20.9 or newer
- npm

## Run locally
1. Extract this ZIP.
2. Open a terminal in the extracted project folder (the folder containing `package.json`).
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open http://localhost:3000

For a production build:
```bash
npm run build
npm run start
```

## Features
- Role selection with Seller Marketplace and Buyer Procurement views.
- Global light/dark mode preference saved in local storage.
- Language selector: English, Hindi, and Bhojpuri placeholder translations.
- Seller can create and remove sample listings; listings are saved in this browser on this device.
- Buyer inquiry form validates commodity, quantity, grade, location, and optional budget, then previews the request locally.
- Responsive desktop and mobile layout.

## Important demo limitations
This is a frontend demo. Market demand labels are illustrative, not live data. Buyer inquiries are not sent to sellers, and prices are not fetched from a market API. Listings use browser local storage rather than a shared database. Authentication and server-side authorization are not enabled in this demo.

## GitHub Pages
The included `next.config.ts` and workflow are configured for static export. Confirm the `basePath` in `next.config.ts` matches your actual GitHub repository name before deploying. Since this app uses client-side state and no server-only page rendering, the exported site is intended for static hosting.
