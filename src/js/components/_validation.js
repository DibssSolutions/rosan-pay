import validate from '../lib/jquery.form-validator.js';

$('.validation').each((index, el) => {
  $.validate({
    form: $(el)
  });
});
