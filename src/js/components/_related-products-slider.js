import slick from 'slick-carousel';

const parent = $('.js-related-slider-parent');

parent.each((i, el) => {
  const parent = $(el);
  const relatedSlider = $('.js-related-slider', parent);
  const prevButton = $('.js-related-slider-prev', parent);
  const nextButton = $('.js-related-slider-next', parent);
  relatedSlider.slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: prevButton,
    nextArrow: nextButton,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          // variableWidth: true,
          slidesToShow: 3,
          centerMode: true
          // centerPadding: '40px'
          
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });
});
