console.clear();
console.log("hi");
const form = document.querySelector('[data-js="card-form"]');
console.log(form);

const cardContainer = document.querySelector('[data-js="card-container"]');
console.log(cardContainer);
let counter = 0;

function newCard(cardTitle, counterValue) {
  console.log("cardTitle: ", cardTitle, "\ncounterValue: ", counterValue);
  // Create my new Card
  const newCard = document.createElement("section");
  // We need to add a class to the newCard
  newCard.classList.add("card");

  const imageCard = newImage();
  const titleCard = newTitle(cardTitle);
  const pCounter = newP(counterValue);

  // We need to place the element in my HTML.
  newCard.append(imageCard, titleCard, pCounter);

  return newCard;
}

function newImage() {
  //Create card image
  const imageCard = document.createElement("img");
  // attribute: src, alt, class
  //setAttribute(nameOfTheAttribute, theValue )
  imageCard.setAttribute("src", "https://fileinfo.com/img/ss/xl/jpeg_43-2.jpg");
  imageCard.setAttribute("alt", "Flowers");
  return imageCard;
}

function newTitle(title) {
  // Create card inputValue
  const titleCard = document.createElement("h3");
  titleCard.textContent = title;

  return titleCard;
}

function newP(pText) {
  // Create card p for the counter
  const pCounter = document.createElement("p");
  // Text.
  pCounter.textContent = "The counter is: " + pText;

  return pCounter;
}

function handleSubmit(event) {
  event.preventDefault();
  console.log("event", event);

  const formData = new FormData(event.target);
  const dataForm = Object.fromEntries(formData);
  console.log(dataForm);
  const card = newCard(dataForm["input-text"]);
  cardContainer.append(card);
}

form.addEventListener("submit", handleSubmit);
