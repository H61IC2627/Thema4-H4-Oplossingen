const knop = document.querySelector("#check");
const invoer = document.querySelector("#leeftijd");
const resultaat = document.querySelector("#resultaat");

function checkLeeftijd(leeftijd) {
    if (leeftijd < 12) {
        return "Alleen met een volwassene";
    } else if (leeftijd < 18) {
        return "Toegelaten met begeleiding";
    } else {
        return "Vrije toegang";
    }
}

knop.addEventListener("click", function() {
    const leeftijd = Number(invoer.value);
    resultaat.textContent = checkLeeftijd(leeftijd);

    resultaat.className = "";

    if (leeftijd < 12) {
        resultaat.classList.add("geweigerd");
    } else if (leeftijd < 18) {
        resultaat.classList.add("begeleiding");
    } else {
        resultaat.classList.add("toegang");
    }
});