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

const data = [
  {
    imgSrc: "./Asset/nasir.svg",
    title: "Tonic",
    canopy: "CANOPY",
    role: "Back End Dev",
    year: "2015",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    languages: ["HTML", "CSS", "JavaScript"],
  },
  {
    imgSrc: "./Asset/avail.svg",
    title: "Multi-Post stories",
    canopy: "CANOPY",
    role: "Back End Dev",
    year: "2015",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    languages: ["HTML", "CSS", "JavaScript"],
  },
  {
    imgSrc: "./Asset/oval.svg",
    title: "Tonic",
    canopy: "CANOPY",
    role: "Back End Dev",
    year: "2015",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    languages: ["HTML", "CSS", "JavaScript"],
  },
  {
    imgSrc: "./Asset/prof.svg",
    title: "Multi-Post Stories",
    canopy: "CANOPY",
    role: "Back End Dev",
    year: "2015",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    languages: ["HTML", "CSS", "JavaScript"],
  },
];

const container = document.querySelector(".grid_container");

data.forEach((item) => {
  const gridItem = document.createElement("div");
  gridItem.classList.add("grid_item");

  const img = document.createElement("img");
  img.src = item.imgSrc;
  img.alt = "card image";
  gridItem.appendChild(img);

  const title = document.createElement("h2");
  title.textContent = item.title;
  gridItem.appendChild(title);

  const canList = document.createElement("ul");
  canList.classList.add("can");

  const canopy = document.createElement("li");
  canopy.classList.add("canopy");
  canopy.textContent = item.canopy;
  canList.appendChild(canopy);

  const role = document.createElement("li");
  role.classList.add("backend");
  role.textContent = item.role;
  canList.appendChild(role);

  const year = document.createElement("li");
  year.classList.add("twenty");
  year.textContent = item.year;
  canList.appendChild(year);

  gridItem.appendChild(canList);

  const description = document.createElement("p");
  description.textContent = item.description;
  gridItem.appendChild(description);

  const langList = document.createElement("ul");
  langList.classList.add("lang");

  item.languages.forEach((lang) => {
    const langItem = document.createElement("li");
    langItem.classList.add(lang.toLowerCase());
    langItem.textContent = lang;
    langList.appendChild(langItem);
    console.log(langItem.classList);
  });

  gridItem.appendChild(langList);

  const button = document.createElement("button");
  button.classList.add("seepro");
  button.textContent = "See project";
  gridItem.appendChild(button);

  container.appendChild(gridItem);
});
