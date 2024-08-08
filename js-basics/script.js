console.clear();
console.log("hi");
const form = document.querySelector('[data-js="card-form"]');
console.log(form);

const cardContainer = document.querySelector('[data-js="card-container"]');
console.log(cardContainer);
let counter = 0;
// verify i am grabbing the form correctly

//element.addEventListener('event Name',function)

// way of creating function 1
//function handleSubmit(event) {
// event.preventDefault();
// console.log("hi cehcking another function");
//}

/*form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("hi cehcking arrow");
  }); */

// way of creating functon 2

/*form.addEventListener('submit', fuction(e){
    e.preventDefault();
    console.log("i am in the event function");
});*/

//separate functions

function handleSubmit(event) {
  event.preventDefault();
  console.log("event", event);
  counter++;
  //ways of working with form element values

  /* const formElements = event.target.elements;
  inputText = formElements['input-text'].value;
  console.log(inputText);*/

  const formData = new FormData(event.target);
  const dataForm = Object.fromEntries(formData);
  console.log(dataForm);
  //cardContainer.innerHTML = "<p>" + "counter is: " + counter + "</p>";

  //cardContainer.innerHTML += "<p>" + "counter is: " + counter + "</p>";

  //create my new card
  const newCard = document.createElement("section");
  //we need to add a class to the newCard
  newCard.classList.add("card");

  const imgaeCard = document.createElement("img");
  // attribute: src,alt,class
  //setAttribute(name of the attribute,value)
  imgaeCard.setAttribute("src", "https://fileinfo.com/img/ss/xl/jpeg_43-2.jpg");
  imgaeCard.setAttribute("alt", "Flowers");

  //js methods

  // create my p for the couter

  //
  const pCounter = document.createElement("p");
  //text.
  pCounter.textContent = "The counter is:" + counter;

  const titleCard = document.createElement("h3");
  titleCard.textContent = dataForm["input-text"];

  //we need to place the element in my HTML.
  newCard.append(imgaeCard, titleCard, pCounter);
  cardContainer.append(newCard);
}

form.addEventListener("submit", handleSubmit);
