// calcolo del prezzo del biglietto del treno

// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

// il prezzo del biglietto è definito in base ai km (0.21 € al km)

// va applicato uno sconto del 20% per i minorenni

// va applicato uno sconto del 40% per gli over 65.

// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

var km = parseInt(prompt("Quanti kilometri necessita percorrere?"));

var age = parseInt(prompt("Quanti anni ha?"));

var price;

if (age < 18) {

    price = ((km * 0.21) * 0.8);

} else if (age > 64) {

    price = ((km * 0.21) * 0.6);

} else {

    price = (km * 0.21);

}

document.getElementById("price").innerHTML = price.toFixed(2);
