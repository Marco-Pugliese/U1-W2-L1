/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript.
 Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
console.log("ESERCIZIO 1");
let typeString =
  "String = Considerando che una variabile è come se fosse una scatola con un targetta identificativa, una stringa è l'insieme di caratteri/parole usati per definire la variabile. Esse verranno lette per quello che sono come se lasciassimo un foglio con scritto un qualcosa all'interno della scatola";
let typeNumber =
  "Number = Questo invece è un valore numerico con cui definiamo la variabile. Questo ci permette anche di poter operare matematicamente. Un po' come se informassimo alla scatola della nostra età e (ad esempio) ad ogni anno che passa aggiungiamo un +1 alla nostra età";
let typeBoolean =
  "Boolean = Un valore booleano invece è una dichiarazione che accetta soltanto due caratteri, nonché 'true' e 'false', essi servono ad indicare un valore di esito. Un po' come se informassimo la scatola che nel caso chiedi una determinata informazione lui ti può rispondere con esito positivo('true') o negativo('false').";
let typeUndefined =
  "Undefined = Il valore generico di una variabile prima che viene definita";
let typeNull =
  "Null = Valore nullo della variabile (scatola), utilizzato per svuotarla del suo contenuto";
console.log(typeString);
console.log(typeNumber);
console.log(typeBoolean);
console.log(typeUndefined);
console.log(typeNull);

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
console.log("ESERCIZIO 2");
let name = "Marco";
console.log(name);
/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
console.log("ESERCIZIO 3");
n1 = 12;
n2 = 20;
let sum = n1 + n2;
console.log(n1);
console.log(n2);
console.log("La somma dei due numeri è = " + sum);
/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
console.log("ESERCIZIO 4");
let x = 12;
console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
console.log("ESERCIZIO 5");
name = "Pugliese";
console.log(name);

// DECOMMENTANDO QUESTA RIGA SI PUO' NOTARE DI COME IL VALORE DI "fullName" NON POSSA ESSERE CAMBIATO.
// const fullName = "MarcoPugliese";
// fullName = "MarcoPugliese";
// console.log(surname);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
console.log("ESERCIZIO 6");
let sub = 4 - x;
console.log("4" + " - ", x, " = " + sub);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
console.log("ESERCIZIO 7");
let name1 = "john";
let name2 = "John";
console.log(name1, name2);
console.log("EXTRA");
let sameName = name1 === name2;
console.log(sameName);
// o più semplicemente console.log(name1 === name2);

let sameNameLowered = name1.toLowerCase() === name2.toLowerCase();
console.log(sameNameLowered);
// o più semplicemente console.log(name1.toLowerCase() === name2.toLowerCase());
