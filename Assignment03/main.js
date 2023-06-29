const formSignup = document.querySelector('#signup');
const btnLogin = document.querySelector('.nav-mobile .btn-login');
const btnSignup = document.querySelector('.nav-mobile .btn-signup');
const formLoginMobile = document.querySelector('#login-mobile');
const formSignupMobile = document.querySelector('#signup-mobile');

formSignup.addEventListener('submit', onSubmitFormSignup);

function onSubmitFormSignup(e) {
  e.preventDefault();
  const email = this.querySelector('input[name="email"]').value;
  const reEmail = this.querySelector('input[name="re-email"]').value;

  if (
    !email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) ||
    !reEmail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
  ) {
    alert('You have entered an invalid email address!');
    return;
  }

  if (email !== reEmail) {
    alert('Retype email and email must be matched');
    return;
  }

  alert('Welcome to Facebook!');
  this.reset();
}

formSignupMobile.addEventListener('submit', onSubmitFormSignup);
btnLogin.addEventListener('click', function () {
  toggleNav(btnLogin, btnSignup, formLoginMobile, formSignupMobile);
});
btnSignup.addEventListener('click', function () {
  toggleNav(btnSignup, btnLogin, formSignupMobile, formLoginMobile);
});

function toggleNav(btna, btnb, forma, formb) {
  btnb.classList.remove('active');
  btna.classList.add('active');
  formb.classList.remove('active');
  forma.classList.add('active');
}
