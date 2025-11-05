// JavaScript Document
console.log("hi");


//  de menu-button en sla die op in een variabele
var openButton = document.querySelector("header > button");

// de menu-button luisteren naar kliks en voer dan een functie uit
openButton.onclick = openMenu;

// de functie een class toe aan de nav
function openMenu() {  
  // zoek de nav op
  var deNav = document.querySelector("nav");
  // voeg class toe aan nav
  deNav.classList.add("toonMenu");
}

var sluitButton = document.querySelector("nav > button");

// laat die button luisteren naar kliks
sluitButton.onclick = sluitMenu;

// in de functie verwijder de class van de nav
function sluitMenu() {
  var deNav = document.querySelector("nav");
  deNav.classList.remove("toonMenu");
}




/**********************************/
/* menu sluiten met escape */
/**********************************/
window.onkeydown = handleKeydown;

function handleKeydown(event) {
  if (event.key == "Escape") {
    var deNav = document.querySelector("nav");
    deNav.classList.remove("toonMenu");
  }
}
