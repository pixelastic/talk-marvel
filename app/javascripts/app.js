let Talk = {
  init() {
    // Full list of configuration options available here:
    // https://github.com/hakimel/reveal.js#configuration
    Reveal.initialize({
      width: 1080,
      controls: false,
      progress: true,
      history: true,
      center: true,

      transition: 'linear',

      dependencies: [{
        src: 'js/classList.js',
        condition: () => {
          return !document.body.classList;
        }
      }, {
        src: 'js/prism.js',
        async: true,
        callback: () => {
          Prism.highlightAll();
        }
      }]
    });

    Reveal.addEventListener('slidechanged', function (event) {
      let shouldShowDemo = $(event.currentSlide).eq(0).data('demo');
      let revealRoot = $('.js-root');
      let jsDemo = $('.js-demo');

      // Hide the demo
      if (!shouldShowDemo) {
        revealRoot.removeClass('js-demo-enabled');
        return;
      }

      // Change the src of the demo, appending a random string to force it to
      // redraw
      jsDemo.attr('src', jsDemo.data('src') + `?x=${Math.random()}`);
      revealRoot.addClass('js-demo-enabled');
    });
  }
};

export default Talk;
