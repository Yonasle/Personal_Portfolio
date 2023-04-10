const mobileIcon = document.querySelector('.hamburg');
const mobileMenu = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar a');

mobileIcon.addEventListener('click', () => {
  mobileIcon.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    mobileIcon.classList.remove('active');
  });
});
