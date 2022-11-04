`use strict`

// Visualizzare in pagina 5 numeri casuali da 1 a 100 senza duplicati.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// FUNZIONI

//funzione creazione numeri casuali
function getRndInteger(min, max){
    return Math.floor(Math.random()* (max - min + 1) + min);
}



// ARRAY

const numberArray = [];
let userNumberChoice = [];
const numbersGuessed = [];

// aggiunge 5 numeri casuali all'array
while (numberArray.length < 5) {

    let numberRandom = getRndInteger(1, 100);
    if (numberArray.includes(numberRandom) === false) {
        numberArray.push(numberRandom);
    }
}
console.log(numberArray);

// creo contanitore per inserire i numeri stampati
const numberContainer = document.querySelector(".container");

// stampo in HTML i numeri casuali ottenuti precedentemente
for ( let i = 0; i < numberArray.length; i++) {
    let numberList = document.createElement("div");
    numberList.innerHTML = numberArray[i];
    numberContainer.append(numberList);
}

// creo timeout il cui termine nasconde i numeri stampati

setTimeout(function(){
    numberContainer.classList.add("hide-numbers");
    
}, 3000);

// l'utente inserisce 5 numeri che devono corrispondere ai numeri appena scomparsi

let userNumber;

setTimeout(function(){
    for (i = 0; i < 5; i++){
        userNumber = Number(prompt("Inserisci il numero"));
        userNumberChoice.push(userNumber);
    }

    // ciclo for che aggiunge all'array precedente i numeri indovinati
    for ( let i = 0; i < numberArray.length; i++){
        if (userNumberChoice.includes(numberArray[i])) {
            console.log(numberArray[i]);
            numbersGuessed.push(numberArray[i]);
        }  
    }
    // inserisco le condizioni di vittoria e di sconfitta
    alert(`Hai perso! Hai indovinato ${numbersGuessed.length} numeri e sono rispettivamente ${numbersGuessed}`);
}, 4000);

