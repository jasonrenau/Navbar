const navbar = document.querySelector('.nav');
const menu = document.querySelector('.hamburger');

menu.addEventListener('click', function () {
  if (navbar.classList.contains('showlinks')) {
    navbar.classList.remove('showlinks');
  } else {
    navbar.classList.add('showlinks');
  }
});
