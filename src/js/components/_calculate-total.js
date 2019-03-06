const total = $('.js-total');

if (total[0]) {
  const subtotals = $('.js-tr-total');
  const plus = $('.js-choose-plus');
  const minus = $('.js-choose-minus');

  plus.on('click', calculateTotal);
  minus.on('click', calculateTotal);

  function calculateTotal() {
    var result = 0;
    subtotals.each((i, el) => {
      const trTotal = parseFloat($(el).val(), 2);
      result += trTotal;
    });
    total.text(result.toFixed(2));
  }

  calculateTotal();
}
