import slick from 'slick-carousel';
import { mediaWidth } from '../utils';
import { WIN } from '../constants';

const parent = $('.js-related-slider-parent');

parent.each((i, el) => {
  const parent = $(el);
  const relatedSlider = $('.js-related-slider', parent);
  const prevButton = $('.js-related-slider-prev', parent);
  const nextButton = $('.js-related-slider-next', parent);

  $(relatedSlider).on('init', function(event, slick) {
    $(relatedSlider).css({ opacity: '1', visibility: 'visible' });
  });

  relatedSlider.slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: prevButton,
    nextArrow: nextButton,
    responsive: [
      {
        breakpoint: 1022,
        settings: {
          slidesToShow: 1,
          variableWidth: true
        }
      }
    ]
  });

  
});

let timeOut;
let arrayHref = [];
const sliderIcons = $('.js-related-slider .icon use');
sliderIcons.each((i, el) => {
  const atr = $(el).attr('xlink:href');
  arrayHref.push(atr);
});

WIN.on('load resize orientationchange', function(e) {
  clearTimeout(timeOut);
  timeOut = setTimeout(() => {
    for (let i = 0; i <= sliderIcons.length - 1; i++) {
      $(sliderIcons[i]).attr('xlink:href', `${arrayHref[i]}`);
    }
  }, 120);
});
