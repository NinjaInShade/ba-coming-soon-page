function validateForm(event) {
  event.preventDefault();

  const form = document.getElementById('header-form');
  const email = document.getElementById('email');
  const email_error_text = document.getElementById('email-error-text');

  form.classList.remove('header-form-invalid');

  const email_re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!email.value || !email_re.test(String(email.value).toLowerCase())) {
    form.classList.add('header-form-invalid');

    email_error_text.innerHTML = 'Please provide a valid email address';

    return;
  }
}
