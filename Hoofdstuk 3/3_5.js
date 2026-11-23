// Selectors
const knopJa = document.querySelector("#ja");
const knopNee = document.querySelector("#nee");
const toonJa = document.querySelector("#tellerJa");
const toonNee = document.querySelector("#tellerNee");
const toonWinnaar = document.querySelector("#winnaar");

// Initialisatie tellers
let stemmenJa = 0;
let stemmenNee = 0;

// Nakijken of ja of nee voorloopt
function bepaalWinnaar(ja, nee) {
    if (ja > nee) {
        return "Ja loopt voor!";
    } else if (nee > ja) {
        return "Nee loopt voor!";
    } else {
        return "Gelijkstand!";
    }
}

// De kleur aanpassen naar gelang de uitslag
function updateKleur(ja, nee) {
    if (ja > nee) {
        toonWinnaar.style.color = "green";
    } else if (nee > ja) {
        toonWinnaar.style.color = "red";
    } else {
        toonWinnaar.style.color = "black";
    }
}

// Events: stemmenJa of stemmenNee verhogen naargelang klik op knop
knopJa.addEventListener("click", function() {
    stemmenJa = stemmenJa + 1;
    toonJa.textContent = stemmenJa;
    toonWinnaar.textContent = bepaalWinnaar(stemmenJa, stemmenNee);
    updateKleur(stemmenJa, stemmenNee);
});

knopNee.addEventListener("click", function() {
    stemmenNee = stemmenNee + 1;
    toonNee.textContent = stemmenNee;
    toonWinnaar.textContent = bepaalWinnaar(stemmenJa, stemmenNee);
    updateKleur(stemmenJa, stemmenNee);
});