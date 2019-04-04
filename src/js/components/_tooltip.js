import { BODY } from '../constants';
const remove = $('.js-tooltip-remove');
BODY.on('click', '.js-tooltip-remove', function() {
  $(this).parent('.js-tooltip').remove();
});
