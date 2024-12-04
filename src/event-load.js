<script>
  'use strict';
  document.getElementById('loadEmbedButton').addEventListener('click', function () {
    if (window.Straddle?.loadEmbeds) {
      window.Straddle.loadEmbeds();
    } else {
      console.error('Straddle: loadEmbeds function is not available.');
    }
  });
</script>
