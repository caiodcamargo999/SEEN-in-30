# SEEN in 30 — Sales Landing Page

A high-converting, mobile-first sales landing page for **SEEN in 30** by **Isadora Melo** (@isadoramelo). Built with plain HTML5, modern vanilla CSS, and vanilla JavaScript—zero frameworks, zero build steps, and instant static deployment.

---

## 🚀 Quick Start / Local Preview

You can run this project locally using any simple HTTP server:

### Option 1: Using Python (Built-in on macOS & Linux)
```bash
# Navigate to the landing directory
cd landing

# Start local server
python3 -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

### Option 2: Using Node `serve` / `npx`
```bash
npx serve landing
```

### Option 3: Direct File Opening
You can double-click `landing/index.html` to open directly in Chrome/Safari/Firefox.

---

## 📦 Deployment Options

The `/landing` folder is 100% self-contained and ready for zero-configuration static hosting:

### 1. Vercel
- Install Vercel CLI: `npm i -g vercel`
- Inside `/landing`, run `vercel`
- Follow the prompt to deploy in seconds.

### 2. Netlify
- Drag and drop the `landing` folder directly into [Netlify Drop](https://app.netlify.com/drop).
- Or run `netlify deploy --dir=landing --prod`.

### 3. Cloudflare Pages / GitHub Pages
- Push the repository to GitHub.
- Set the build output directory to `landing/` (no build command needed).

---

## ⚙️ Configuration (`landing/assets/app.js`)

At the very top of `assets/app.js`, edit the `CONFIG` object to customize product details:

```javascript
const CONFIG = {
  PRODUCT_NAME: "SEEN in 30",
  PRICE: "$12",
  OLD_PRICE: "$27",
  CHECKOUT_URL: "https://stan.store/isadoramelo/p/unstuck-method",
  META_PIXEL_ID: "", // Add Meta Pixel ID (e.g., "123456789012345") when ready
  ISADORA_FOLLOWER_COUNT: "", // e.g., "50K+" — If left empty, badge cleanly hides
  LEGAL_LINKS: {
    privacy: "modal-privacy",
    terms: "modal-terms",
    refund: "modal-refund"
  }
};
```

---

## 🔍 Features & Persuasion Architecture

1. **Top-to-Bottom Conversion Flow**:
   - Slim announcement banner with price anchor ($12 today, regular $27).
   - Emotion-led Hero with instant price block, trust microcopy, and creator preview.
   - 7 core outcome transformations ("This will help you...").
   - Repeated CTAs placed every 1–2 scroll heights.
   - Social proof gallery with real community DM feedback (`imgi_3_unstuckreviews.jpg`) and owner upload slots.
   - Meet Isadora authority section with photo, bio, and dynamic stat handling.
   - 4 numbered pillar cards (Energy, Strategy with AI Prompt badge, 30-Day Challenge, Community).
   - 4-week roadmap timeline.
   - "This is for you / NOT for you" honest filter.
   - Commitment statement rejecting fake promises.
   - 6 keyboard-accessible FAQ accordion items.
   - High-impact closing CTA block.
   - Compliance footer with Meta/Instagram disclaimers and results disclaimer.
   - **Sticky Mobile Bottom Bar** that activates when hero scrolls out of view.

2. **UTM Parameter Forwarding**:
   - Preserves all incoming campaign tags (e.g., `?utm_source=instagram&utm_campaign=bio`) and appends them to all Stan Store checkout links dynamically.

3. **Conditional Meta Pixel**:
   - No tracking scripts loaded unless `META_PIXEL_ID` is defined.
   - Automatically tracks `PageView` on page load and `InitiateCheckout` (value: $12, currency: USD) upon any CTA click.

4. **Accessibility & Performance**:
   - Fluid typography with `clamp()` optimized for mobile (390px Instagram in-app browser).
   - AA color contrast on all text and buttons.
   - Keyboard accessible `<details>` / `<summary>` accordion.
