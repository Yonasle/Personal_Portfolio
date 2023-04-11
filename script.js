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



// Get the modal
const modal = document.querySelector("#myModal");
// Get the button that opens the modal
const btn = document.querySelector(".seepro");
// Get the <span> element that closes the modal
const close = document.querySelector(".close");
// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <close> (x), close the modal
close.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}