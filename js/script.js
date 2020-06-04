//16 numeri casuali da 1  a 100
var arrayBombe = creaArrayBombe(rangeMaxNumeri, numeroBombe);
// numero massimo di tentativi
var rangeMaxNumeri = 100;
var numeroBombe = 16;
var numeroMassimoTentativi = rangeMaxNumeri - numeroBombe;

// serve un array di 16 numeri casuali da 1 a 100 ( bombe )
var contatore = 0;
var bombaBeccata = false;
//while che chiede all'utente numero all'utente
while(bombaBeccata === false && (bombabcontatore < numeroMassimoTentativi) ) {
  // chiedere all'utente di inserire un numero
  var numeroUtente = parseInt(prompt('dimmi un numero da 1 a' + rangeMaxNumeri));
  if (verificaElementoArray(numeroUtente, arrayBombe) === true) {
    bombaBeccata = true;
  }
  contatore++;
}
console.log(contatore)

//stampare il messaggio finale in cui comunichiamo all'utente il risultato
//HAI VINTO
if (bombaBeccata === false) {
  alert('hai vinto, il tuo punteggio è ' + contatore)
} else if (bombaBeccata === true) {
  //hai perso
  alert('BOOM! hai perso, il tuo punteggio finale è ' + contatore)
}


//FUNZIONI

function creaArrayBombe(rangeMaxNumeri, numeroBombe) {
  var numeriBombeArray = [];
//mandiamo avanti while fino a quando non abbiamo 16 numeri diversi
  while (numeriBombeArray.length < numeroBombe) {
    var numeroCasuale = Math.floor(Math.random() * rangeMaxNumeri - 1) + 1;
    if (verificaElementoArray(numeroCasuale, numeriBombeArray) === false) {
      numeriBombeArray.push(numeroCasuale)
    }
  }
  console.log(numeriBombeArray)

  return numeriBombeArray;
}
//utile a verificare se elemento è presente in un array
// elemento: elemento che deve verificare
// lista array: array in cui si può trovare l'elemento
// true se si trova dentro all'array, false se è fuori
function verificaElementoArray(elemento, listaArray) {
  var inArray = false;
// se trovo l'elemento la funzione diventerà vera
  for (var i = 0; i < listaArray.length; i++) {
    if (elemento === listaArray[i]) {
      inArray = true;
    }
  }

  return inArray;
}
