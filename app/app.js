let Marvel = {
  init() {
    // Full list of configuration options available here:
    // https://github.com/hakimel/reveal.js#configuration
    Reveal.initialize({
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

    Reveal.addEventListener('slidechanged', (event) => {
      let shouldShowDemo = $(event.currentSlide).eq(0).data('demo');
      let demoWrapper = $('.js-demo--video');
      let demoIframe = demoWrapper.find('iframe');
      let videoUrl = 'https://www.youtube.com/embed/SwnP8U6vuWQ?rel=0&autoplay=1&loop=1&playlist=SwnP8U6vuWQ';
      if (shouldShowDemo) {
        demoWrapper.addClass('demo--video__shown');
        demoIframe.attr('src', videoUrl);
      } else {
        demoWrapper.removeClass('demo--video__shown');
        demoIframe.attr('src', null);
      }
    });
  }
};

export default Marvel;
