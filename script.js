const mobileIcon = document.querySelector('.hamburg');
const mobileMenu = document.querySelector('.navbar');

mobileIcon.addEventListener('click',()=>{
      mobileIcon.classList.toggle('active')
      mobileMenu.classList.toggle('active')
})