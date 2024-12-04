<script>
  'use strict';
  document.addEventListener('DOMContentLoaded', function () {
    if (window.Straddle?.loadEmbeds) {
      window.Straddle.loadEmbeds();
    } else {
      console.error('Straddle: loadEmbeds function is not available.');
    }
  });
</script>
