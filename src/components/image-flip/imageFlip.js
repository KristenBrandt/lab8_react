
const carton = document.querySelectorAll('.card');

function flipCard() {
  console.log("FLIP ACTIVATED");
  this.classList.toggle('flip');

}

carton.forEach(card => carton.addEventListener('click', flipCard()));