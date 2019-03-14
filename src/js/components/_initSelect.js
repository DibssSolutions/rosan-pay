import select2 from 'select2';

let select_2 = $('.js-select');

select_2.each(function(index, val) {
  $(val).select2({
    width: '100%',
    dropdownAutoWidth: true,
    placeholder: $(val).data('placeholder')
  });
});
