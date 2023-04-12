const mobileIcon = document.querySelector(".hamburg");
const mobileMenu = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".navbar a");

mobileIcon.addEventListener("click", () => {
  mobileIcon.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    mobileIcon.classList.remove("active");
  });
});

const gridItem = {
  imgSrc: "./Asset/nasir.svg",
  title: "Tonic",
  canopy: "CANOPY",
  backend: "Back End Dev",
  year: 2015,
  description:
    "A daily selection of privately personalized reads; no accounts or sign-ups required.",
  languages: ["HTML", "CSS", "JavaScript"],
};
