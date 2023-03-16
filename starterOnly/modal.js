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
modalbg.addEventListener('click', e => {
  if(e.target !== modalbg) {
    return
  }
  modalbg.style.display = "none"
})

// Close modal by clicking on close button
closeBtn.addEventListener('click', () => modalbg.style.display = "none")

// Launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

function validate() {
  // Réinitialiser les erreurs
  formData.forEach(unsetErrorMessage)

  // Les données doivent être saisies correctement :
  validateFirstName()
  validateLastName()
  validateEmail()
  validateContestNumber()
  validateRadio()
  validateCGU()

  // Valide si aucune erreur n'est detectée
  return Array.prototype.slice.call(formData).filter(el => el.hasAttribute('data-error')).length === 0
}

// (1) Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
function validateFirstName() {
  const el = document.getElementById('first')
  const rule = new RegExp("^[A-Za-zÀ-ÖØ-öø-ÿ\ ]{2,}$");
  if(!rule.test(el.value.trim())) {
    setErrorMessage(el, 'Le champ Prénom doit avoir un minimum de 2 caractères.')
    return false;
  }

  return true
}

// (2) Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.
function validateLastName() {
  const el = document.getElementById('last')
  const rule = new RegExp("^[A-Za-zÀ-ÖØ-öø-ÿ\ ]{2,}$");
  if(!rule.test(el.value.trim())) {
    setErrorMessage(el, 'Le champ Nom doit avoir un minimum de 2 caractères')
    return false;
  }

  return true
}

// (3) L'adresse électronique est valide.
function validateEmail() {
  const el = document.getElementById('email')
  const rule = new RegExp("^([a-z0-9]+(?:[._-][a-z0-9]+)*)@([a-z0-9]+(?:[.-][a-z0-9]+)*\.[a-z]{2,})$");
  if(!rule.test(el.value.trim())) {
    console.log('qsdqsd')
    setErrorMessage(el, 'L\'adresse saisie n\'est pas valide')
    return false;
  }

  return true
}

// (4) Pour le nombre de concours, une valeur numérique est saisie.
function validateContestNumber() {
  const el = document.getElementById('quantity')
  const rule = new RegExp("^[0-9]$");
  if(!rule.test(el.value.trim())) {
    setErrorMessage(el, 'Une valeur numérique est attendue')
    return false;
  }

  return true
}

// (5) Un bouton radio est sélectionné.
function validateRadio() {
  if(document.forms.reserve.location.value === '') {
    const el = document.getElementById('location1')
    setErrorMessage(el, 'Merci de choisir une localité')
    return false;
  }
  
  return true
}

// (6) La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée.
function validateCGU() {
  const el = document.getElementById('checkbox1')
  if(!el.checked) {
    setErrorMessage(el, 'Merci de lire et d\'accepter les conditions d\'utilisation')
    return false;
  }

  return true
}


// Remove data attributes for defined element
function unsetErrorMessage(el) {
  const formData = el.closest('.formData')

  formData.removeAttribute('data-error')
  formData.removeAttribute('data-error-visible')
}

function setErrorMessage(el, message) {
  // (1) Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
  const formData = el.closest('.formData')

  formData.setAttribute('data-error', message)
  formData.setAttribute('data-error-visible', 'true')
}
