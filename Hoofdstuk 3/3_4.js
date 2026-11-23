// Selectors
const invoer = document.querySelector("#bedrag");
const keuze = document.querySelector("#percentage");
const knop = document.querySelector("#bereken");
const fooiUitvoer = document.querySelector("#fooi");
const totaalUitvoer = document.querySelector("#totaal");

// Functies
function berekenFooi(bedrag, percentage) {
    return bedrag * percentage / 100;
}

function toonResultaat() {
    const bedrag = Number(invoer.value);
    const percentage = Number(keuze.value);

    if (bedrag <= 0) {
        fooiUitvoer.textContent = "Vul een geldig bedrag in.";
        fooiUitvoer.style.color = "red";
        totaalUitvoer.textContent = "";
    } else {
        const fooi = berekenFooi(bedrag, percentage);
        fooiUitvoer.style.color = "black";
        fooiUitvoer.textContent = "Fooi: €" + fooi;
        totaalUitvoer.textContent = "Totaal: €" + (bedrag + fooi);
    }
}

// Events
knop.addEventListener("click", function() {
    toonResultaat();
});

keuze.addEventListener("change", function() {
    if (invoer.value !== "") {
        toonResultaat();
    }
});