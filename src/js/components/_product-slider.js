import slick from 'slick-carousel';

const parent = $('.js-slider-parent');
parent.each((i,el) => {
  const parent = $(el);
  const mainSlider = $('.js-product-slider', parent);
  const navSlider = $('.js-product-slider-nav', parent);

  $(mainSlider).on('init', function(event, slick) {
    $(mainSlider).css({ opacity: '1', visibility: 'visible' });
  });

  $(navSlider).on('init', function(event, slick) {
    $(navSlider).css({ opacity: '1', visibility: 'visible' });
  });

  // const prevButton = $('.js-st-slider-nav-prev', parent);
  // const nextButton = $('.js-st-slider-nav-next', parent);
  mainSlider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: navSlider
  });
  navSlider.slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: mainSlider,
    focusOnSelect: true,
    arrows: false
    // prevArrow: prevButton,
    // nextArrow: nextButton
  });
});
