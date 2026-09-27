// Breakthrough Author Live — front-end only (no backend, no build step)

// --- Facebook Pixel placeholder ---
// Replace YOUR_PIXEL_ID below and uncomment to track PageView / ViewContent.
// !function(f,b,e,v,n,t,s){...}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
// fbq('init', 'YOUR_PIXEL_ID');
// fbq('track', 'PageView');
// fbq('track', 'ViewContent');
console.log('[pixel] PageView (placeholder — add real Facebook Pixel ID in script.js)');

// --- Sticky mobile CTA: hide once the final CTA button is on screen ---
document.addEventListener('DOMContentLoaded', function () {
  var stickyBar = document.querySelector('.sticky-cta');
  var finalTarget = document.querySelector('#final-buy');

  if (stickyBar && finalTarget && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        stickyBar.style.display = entry.isIntersecting ? 'none' : 'block';
      });
    }, { threshold: 0.2 });
    observer.observe(finalTarget);
  }

  // Track InitiateCheckout on any buy button click
  document.querySelectorAll('a[data-cta="buy"]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      console.log('[pixel] InitiateCheckout (placeholder)');
    });
  });
});
