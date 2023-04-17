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
  });

  gridItem.appendChild(langList);

  const button = document.createElement("button");
  button.classList.add("seepro");
  button.textContent = "See project";
  gridItem.appendChild(button);

  container.appendChild(gridItem);
});

const popy = [
  {
    imgSrc: "./Asset/nasir.svg",
    title: "Tonic",
    canopy: "CANOPY",
    role: "Back End Dev",
    year: "2015",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    languages: ["HTML", "CSS", "JavaScript"],
  },
  {
    imgSrc: "./Asset/avail.svg",
    title: "Multi-Post stories",
    canopy: "CANOPY",
    role: "Back End Dev",
    year: "2015",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    languages: ["HTML", "CSS", "JavaScript"],
  },
  {
    imgSrc: "./Asset/oval.svg",
    title: "Tonic",
    canopy: "CANOPY",
    role: "Back End Dev",
    year: "2015",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    languages: ["HTML", "CSS", "JavaScript"],
  },
  {
    imgSrc: "./Asset/prof.svg",
    title: "Multi-Post Stories",
    canopy: "CANOPY",
    role: "Back End Dev",
    year: "2015",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    languages: ["HTML", "CSS", "JavaScript"],
  },
];

const popupContainer = document.createElement("div");
popupContainer.classList.add("popup-container");
document.body.appendChild(popupContainer);

popupContainer.addEventListener("click", (event) => {
  if (event.target === popupContainer) {
    popupContainer.style.display = "none";
  }
});

function popup(parram) {
  if (parram < 0 || parram >= popy.length) {
    // Handle the out-of-bounds case here
    return null;
  }
  const html = `<div class="pone"> <span class="close">&times;</span><h1>${
    popy[parram].title
  }</h1><ul class="po"><li><span class="canop">${
    popy[parram].canopy
  }</span> <span class="role">${
    popy[parram].role
  }</span>  <span class="year"> ${
    popy[parram].year
  }</span> </li></ul><img src="${popy[parram].imgSrc}"></img><p>${
    popy[parram].description
  }</p> <ul class="hcj">
  ${popy[parram].languages
    .map((lang) => `<li class="pop_language">${lang}</li>`)
    .join("")}
</ul> <button class="popnewa">See live</button> <button class="popnewb">See source</button>
</div> `;

  return html;
}

const seeprobtns = document.querySelectorAll(".seepro");
seeprobtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    // Show the popup for the project at the corresponding index
    const html = popup(index);
    popupContainer.innerHTML = html;
    popupContainer.style.display = "block";

    const closeBtn = document.querySelector(".close");
    closeBtn.addEventListener("click", () => {
      popupContainer.style.display = "none";
    });
  });
});
const seeprobtn = document.querySelectorAll(".seepro");

for (let i = 0; i < seeprobtn.length; i += 1) {
  seeprobtn[i].addEventListener("click", () => {
    popup(0);
  });
}
