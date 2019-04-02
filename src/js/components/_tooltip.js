const remove = $('.js-tooltip-remove');
remove.on('click', function() {
  $(this).parent('.js-tooltip').remove();
});
