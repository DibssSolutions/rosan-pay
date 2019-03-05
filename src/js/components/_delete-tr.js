const deleteButtons = $('.js-tr-delete');

deleteButtons.each((i, btn) => {
  const tr = $(btn).closest('.js-tr-parent');
  $(btn).on('click', () => tr.remove());
});
