// Custom JS code can go here

// You can customize Reveal options:
Reveal.configure({
  "center": false,
  "transition": "none",
  "progress": true
});

// Remove walrus from notes
if (window.frameElement) {
  document.body.classList.add('no-walrus');
}

// Autoplay "time to clean up" video on focus
(function autoPlayVideo (slideIds) {
  var timeout = null;
  var iframe = null;
  var videoPlaying = null;
  function onSlide (e) {
    if (videoPlaying && iframe) {
      // Changed slide: cancel playing
      iframe.src = videoPlaying;
      iframe = null;
      videoPlaying = null;
    }
    clearTimeout(timeout);
    if (slideIds.indexOf(e.currentSlide.id) !== -1) {
      timeout = setTimeout(function waitForIframe () {
        iframe = document.querySelector('.backgrounds .slide-background.present iframe');
        if (!iframe) {
          timeout = setTimeout(waitForIframe, 10);
        } else {
          videoPlaying = iframe.src;
          if (iframe.src.match(/\?/)) {
            iframe.src += "&autoplay=1";
          } else {
            iframe.src += "?autoplay=1";
          }
        }
      }, 10);
    }
  }

  Reveal.addEventListener('ready', onSlide);
  Reveal.addEventListener('slidechanged', onSlide);
})([
  'time-to-clean-up'
]);
