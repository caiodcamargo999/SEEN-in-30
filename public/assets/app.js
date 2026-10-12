/**
 * SEEN in 30 — Sales Landing Page JavaScript
 * Handles:
 *  1. Configuration & dynamic variable insertion
 *  2. Seamless UTM parameter forwarding to Checkout URL
 *  3. Meta Pixel injection & InitiateCheckout event tracking (conditional)
 *  4. Sticky mobile bottom CTA observer
 *  5. Legal placeholder modals
 */

// ==========================================================================
// 1. CONFIGURATION OBJECT
// Easily customize product details, links, tracking, and tokens here.
// ==========================================================================
const CONFIG = {
  PRODUCT_NAME: "SEEN in 30",
  PRICE: "$12",
  OLD_PRICE: "$27",
  CHECKOUT_URL: "https://stan.store/isadoramelo/p/unstuck-method",
  META_PIXEL_ID: "", // Add Meta Pixel ID here (e.g. "987654321012345") when ready. Empty by default.
  ISADORA_FOLLOWER_COUNT: "", // e.g., "50K+" — If left empty, the badge cleanly hides automatically.
  LEGAL_LINKS: {
    privacy: "modal-privacy",
    terms: "modal-terms",
    refund: "modal-refund"
  }
};

// ==========================================================================
// 2. UTM PARAMETER FORWARDING
// Preserves any incoming UTM and campaign tags and appends to checkout URL.
// ==========================================================================
function getCheckoutUrlWithParams() {
  try {
    const checkoutUrl = new URL(CONFIG.CHECKOUT_URL);
    const currentParams = new URLSearchParams(window.location.search);

    // Forward all current URL parameters to the checkout URL
    currentParams.forEach((value, key) => {
      checkoutUrl.searchParams.set(key, value);
    });

    return checkoutUrl.toString();
  } catch (err) {
    console.error("Error constructing checkout URL:", err);
    return CONFIG.CHECKOUT_URL;
  }
}

function updateAllCheckoutButtons() {
  const finalUrl = getCheckoutUrlWithParams();
  const ctaLinks = document.querySelectorAll('a[data-role="checkout-cta"]');
  ctaLinks.forEach(link => {
    link.href = finalUrl;
  });
}

// ==========================================================================
// 3. META PIXEL INJECTION & TRACKING (CONDITIONAL)
// Loads ONLY if META_PIXEL_ID is configured. No external calls if empty.
// ==========================================================================
function initMetaPixel() {
  if (!CONFIG.META_PIXEL_ID || CONFIG.META_PIXEL_ID.trim() === "") {
    // Pixel is not configured yet. No script loaded.
    return;
  }

  /* eslint-disable */
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  /* eslint-enable */

  fbq('init', CONFIG.META_PIXEL_ID.trim());
  fbq('track', 'PageView');
}

function trackInitiateCheckout() {
  if (window.fbq && CONFIG.META_PIXEL_ID && CONFIG.META_PIXEL_ID.trim() !== "") {
    fbq('track', 'InitiateCheckout', {
      content_name: CONFIG.PRODUCT_NAME,
      value: 12,
      currency: 'USD'
    });
  }
}

// ==========================================================================
// 4. DYNAMIC TOKEN RENDERING
// ==========================================================================
function renderConfigTokens() {
  // Update follower count badge
  const followerBadge = document.getElementById("isadora-follower-badge");
  if (followerBadge) {
    if (CONFIG.ISADORA_FOLLOWER_COUNT && CONFIG.ISADORA_FOLLOWER_COUNT.trim() !== "") {
      followerBadge.textContent = `${CONFIG.ISADORA_FOLLOWER_COUNT} Community`;
      followerBadge.style.display = "inline-flex";
    } else {
      followerBadge.style.display = "none";
    }
  }

  // Update dynamic price text if present
  document.querySelectorAll('[data-bind="product-name"]').forEach(el => {
    el.textContent = CONFIG.PRODUCT_NAME;
  });
  document.querySelectorAll('[data-bind="price"]').forEach(el => {
    el.textContent = CONFIG.PRICE;
  });
  document.querySelectorAll('[data-bind="old-price"]').forEach(el => {
    el.textContent = CONFIG.OLD_PRICE;
  });
}

// ==========================================================================
// 5. STICKY MOBILE BOTTOM CTA OBSERVER
// Reveals the floating CTA when the Hero section scrolls out of view.
// ==========================================================================
function initStickyMobileCta() {
  const heroSection = document.getElementById("hero");
  const stickyBar = document.getElementById("sticky-mobile-cta");

  if (!heroSection || !stickyBar) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // If hero section has scrolled past the top of the viewport
        if (!entry.isIntersecting && entry.boundingClientRect.bottom <= 0) {
          stickyBar.classList.add("is-visible");
        } else {
          stickyBar.classList.remove("is-visible");
        }
      });
    },
    {
      root: null,
      threshold: 0
    }
  );

  observer.observe(heroSection);
}

// ==========================================================================
// 6. LEGAL MODAL HANDLERS
// ==========================================================================
function initModals() {
  const modalTriggers = document.querySelectorAll("[data-modal-target]");
  const modalCloseBtns = document.querySelectorAll("[data-modal-close]");

  modalTriggers.forEach(trigger => {
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = trigger.getAttribute("data-modal-target");
      const modal = document.getElementById(targetId);
      if (modal) {
        modal.classList.add("active");
        document.body.style.overflow = "hidden";
      }
    });
  });

  modalCloseBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const modal = btn.closest(".modal-overlay");
      if (modal) {
        modal.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  });

  // Close modal when clicking backdrop
  document.querySelectorAll(".modal-overlay").forEach(overlay => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        overlay.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  });

  // Close modal with Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const openModal = document.querySelector(".modal-overlay.active");
      if (openModal) {
        openModal.classList.remove("active");
        document.body.style.overflow = "";
      }
    }
  });
}

// ==========================================================================
// 7. EVENT ATTACHMENTS & INITIALIZATION
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  renderConfigTokens();
  updateAllCheckoutButtons();
  initMetaPixel();
  initStickyMobileCta();
  initModals();

  // Attach tracking event to all checkout CTAs
  document.querySelectorAll('a[data-role="checkout-cta"]').forEach(button => {
    button.addEventListener("click", () => {
      trackInitiateCheckout();
    });
  });
});
