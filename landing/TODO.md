# Owner Action Checklist (Placeholders to Fill)

Welcome, Isadora & Team! Below is the complete checklist of items and placeholders that you can update before launching this sales page.

---

### 1. Meta Pixel ID (Tracking)
- [ ] **File**: `landing/assets/app.js` (Line 18)
- [ ] **Action**: If you are running Meta (Instagram / Facebook) ads, insert your Pixel ID into `META_PIXEL_ID: "YOUR_PIXEL_ID_HERE"`.
- [ ] **Default**: Left blank. When blank, no Meta tracking scripts load. When added, `PageView` and `InitiateCheckout` events fire automatically.

---

### 2. Follower / Community Stat (Optional)
- [ ] **File**: `landing/assets/app.js` (Line 19)
- [ ] **Action**: If you want to display a follower count chip on your photo block (e.g., `"35K+"` or `"50K+"`), enter it in `ISADORA_FOLLOWER_COUNT`.
- [ ] **Default**: Currently set to `""`. When empty, the badge is automatically hidden so no blank brackets or empty spaces appear.

---

### 3. Additional Community Screenshots
- [ ] **File**: `landing/index.html` (Lines 240–270)
- [ ] **Action**: There are 3 framed placeholder cards labelled `[ADD SCREENSHOT]` in the Social Proof section:
  - *Slot 1*: Community Win / Milestone
  - *Slot 2*: Overcoming Camera Fear DM
  - *Slot 3*: Follower & Engagement Analytics Growth
- [ ] **Tip**: Add real screenshots from your DMs or community into `landing/assets/images/` and update the placeholder slots with `<img>` tags.

---

### 4. Community Delivery Platform
- [ ] **File**: `landing/index.html` (FAQ Item #1, Line 370)
- [ ] **Action**: Confirm which platform is used for the community hub (e.g., Skool, Discord, WhatsApp group, Telegram, or Stan Store community feature).

---

### 5. Refund Policy Clarification
- [ ] **File**: `landing/index.html` (FAQ Item #6, Line 418 & Modal Line 502)
- [ ] **Action**: Specify whether digital purchases have a 7-day action-based guarantee or if all digital sales are final per Stan Store digital terms.

---

### 6. Official Terms & Privacy Links (Optional)
- [ ] **File**: `landing/index.html` (Footer & Modals, Lines 460–515)
- [ ] **Action**: Replace the placeholder text in the modals with your official legal terms, or link them directly to external policy URLs if you have them hosted on Stan Store.

---

### 7. Checkout URL Verification
- [ ] **File**: `landing/assets/app.js` (Line 17)
- [ ] **Action**: Currently configured to `https://stan.store/isadoramelo/p/unstuck-method`. If your Stan Store product slug changes, update it here.
