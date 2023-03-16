function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const closeBtn = document.querySelector(".bground .close");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Close modal by clicking on background
modalbg.addEventListener('click', () => modalbg.style.display = "none")

// Close modal by clicking on close button
closeBtn.addEventListener('click', () => modalbg.style.display = "none")

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

