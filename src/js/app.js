import svg4everybody from 'svg4everybody';
import './common';
import { BODY, NO_TOUCH } from './constants';
import { isTouch } from './utils';
import fancybox from '@fancyapps/fancybox';
$('[data-fancybox]').fancybox({
  protect 		  : true,
  keyboard        : true,
  animationEffect : 'zoom',
  arrows          : true,
  clickContent    : false,
  buttons: [
	  'close'
  ]
});
svg4everybody();

if (!isTouch()) BODY.addClass(NO_TOUCH);
