// selectors
const tekstvak = document.querySelector("textarea");
const teller = document.querySelector("#aantal");

// event: Tellen hoeveel tekens er getypt worden.
tekstvak.addEventListener("input", function(){
    teller.textContent = tekstvak.value.length;
})