const ham = document.querySelector('#js-hamburger');
const nav = document.querySelector('#js-nav');

ham.addEventListener('click', () => {
  nav.classList.toggle('active');
  ham.classList.toggle('active');
});

