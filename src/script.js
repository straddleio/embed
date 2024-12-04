<script>
  (function (window) {
    'use strict';
    window.Straddle = window.Straddle || {};

    window.Straddle.loadEmbeds = function () {
      try {
        const isDebugMode = false; // Set to true for debugging

        if (isDebugMode) {
          console.log('Straddle: Loading embeds...');
        }

        const iframes = document.querySelectorAll(
          'iframe[data-straddle-src]:not([src])'
        );

        if (typeof iframes.forEach === 'function') {
          iframes.forEach((iframe) => {
            if (isDebugMode) {
              console.log('Straddle: Setting src for iframe:', iframe);
            }
            const src =
              iframe.dataset?.straddleSrc ||
              iframe.getAttribute('data-straddle-src') ||
              '';
            iframe.src = src;
          });
        } else {
          for (let i = 0; i < iframes.length; i++) {
            const iframe = iframes[i];
            if (isDebugMode) {
              console.log('Straddle: Setting src for iframe:', iframe);
            }
            const src = iframe.getAttribute('data-straddle-src') || '';
            iframe.src = src;
          }
        }
      } catch (error) {
        console.error('Straddle: Failed to load embeds.', error);
      }
    };
  })(window);
</script>
