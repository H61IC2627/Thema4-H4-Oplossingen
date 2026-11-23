// Selectors
const knop = document.querySelector("#begroet");
const invoerveld = document.querySelector("#naam");
const paragraaf = document.querySelector("#welkom");

// Event: klik op knop = boodschap tonen
knop.addEventListener("click", function(){
    paragraaf.textContent = "Welkom, " + invoerveld.value + "!";
})