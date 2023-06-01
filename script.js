const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg"
];

const container = document.querySelector(".carousel-container");
const burger_menu = document.querySelector(".menu-list");
const icon = document.querySelector(".icon");

icon.addEventListener("click", function() {
  if (burger_menu.style.display === "block") {
    burger_menu.style.display = "none";
  } else {
    burger_menu.style.display = "block";
  }
});

for (let i = 0; i < images.length; i++) {
  const image = document.createElement("img");
  image.src = images[i];
  container.appendChild(image);
}

let position = 0;

const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

function updateButtons() {
  if (position === 0) {
    prevButton.disabled = true;
  } else {
    prevButton.disabled = false;
  }

  if (position === (images.length - 1) * -100) {
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
  }
}

nextButton.addEventListener("click", () => {
  position -= 100;
  container.style.transform = `translateX(${position}%)`;

  if (position === (images.length - 1) * -100) {
    position = 0;
    container.style.transform = `translateX(${position}%)`;
  }

  updateButtons();
});

prevButton.addEventListener("click", () => {
  position += 100;
  container.style.transform = `translateX(${position}%)`;

  if (position === 100) {
    position = (images.length - 1) * -100;
    container.style.transform = `translateX(${position}%)`;
  }

  updateButtons();
});

updateButtons();


function showTrainersPopup() {
  document.getElementById("trainers-popup").style.display = "block";
}

function hideTrainersPopup() {
  document.getElementById("trainers-popup").style.display = "none";
}

function showAssistantsPopup() {
  document.getElementById("assistants-popup").style.display = "block";
}

function hideAssistantsPopup() {
  document.getElementById("assistants-popup").style.display = "none";
}
