const navbar = document.querySelector('.nav');
const menu = document.querySelector('.hamburger');

menu.addEventListener('click', function () {
  navbar.classList.toggle('showlinks');
});
