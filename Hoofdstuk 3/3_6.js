// Selectors
const productInvoer = document.querySelector("#product");
const prijsInvoer = document.querySelector("#prijs");
const aantalInvoer = document.querySelector("#aantal");

const knop = document.querySelector("#voegToe");

const bedragUitvoer = document.querySelector("#bedrag");
const totaalUitvoer = document.querySelector("#totaal");
const verzendingUitvoer = document.querySelector("#verzending");

let totaal = 0;
let bedrag = 0;


// Bedrag berekenen
function berekenBedrag(prijs, aantal){
    return prijs * aantal;
}

// Nakijken of er verzendkosten zijn
function checkVerzending(totaal){
    if (totaal>50){
        return "Gratis verzending!";
    }
    else{
        return "Verzending €4,95";
    }
}

// Event: Product, prijs en aantal toevoegen.
knop.addEventListener("click", function(){
    const product = productInvoer.value;
    productInvoer.value = "";
    const prijs = Number(prijsInvoer.value);
    prijsInvoer.value = "";
    const aantal = Number(aantalInvoer.value);
    aantalInvoer.value = "";

    bedrag = berekenBedrag(prijs, aantal);
    totaal = totaal + bedrag;

    bedragUitvoer.textContent = product + ": €" + bedrag;
    totaalUitvoer.textContent = "Totaal: €" + totaal;

    verzendingUitvoer.textContent = checkVerzending(totaal);
    if (totaal>50){
        verzendingUitvoer.style.color = "green";
    }
    else{
        verzendingUitvoer.style.color = "red";
    }

})