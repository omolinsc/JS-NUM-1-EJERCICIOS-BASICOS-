/* 
* Para correr este fichero -> tendréis que estar dentro de la carpeta Ejercicio1
* Abrir la terminal de VsCode
* Escribir en consola 'node app.js' 
*/

/*
* Ejercicio Guiado
* -> Arrays y condicionales
*/ 

// Vamos a declarar 3 arrays y queremos saber la longitud de cada uno de ellos.
var avengers = ['Spiderman', 'AntMan', 'Hulk'];
var mutants = ['Wolverine', 'Ciclops', 'Storm'];
var defenders = ['Daredevil', 'IronFist', 'Luke Cage'];
// Para ello declaremos una function -> por parametro le entra una lista
var calcListLength = (list) => {
    // Declaramos el contador que irá sumando el valor de cada uno de los elementos de la lista
    var myLength = 0;
    // Recorremos los elementos de la lista
    list.forEach(element => {
        // Acumumlamos el valor de la lista
        myLength = myLength + element.length;
    });
    // Devolvemos 
    return myLength;
}
// Llamamos a nuestras funciones y asignamos el valor de retorno
var avengersLength = calcListLength(avengers);
var mutantsLength = calcListLength(mutants);
var defendersLength = calcListLength(defenders);

// Declaramos una funcion comparador para saber cual de los tres arrays es el mayor
var comparator = (a,b,c) => {
    if (a > b) {
        if (a == c)
          return 'Empate entre a y c';
        if (a > c)
          return 'a gana';
        else
          return 'c gana';
      } else {
        if (a == b)
          return 'Empate entre a y b';
        if (b > c)
          return 'b gana';
        else
          return 'c gana';
      }
}

// le pasamos las longitudes de nuestros arrays y nos devolverá el elemento mayor-> el c
console.log(comparator(avengersLength,mutantsLength, defendersLength));

//Ahora vamos a añadir la media de la longitud de los elementos de nuestra lista
var media = (a,b,c) => {
    return a+b+c / 3
}
// Le pasamos a nuestra media los valores
console.log(media(avengersLength,mutantsLength, defendersLength));

/* 
* Ejercicio 1
* → Devuelve el string de mayor longitud
*/

console.log("");
console.log("EJERCICIO NÚM. 1 ---------");

// Declaramos un array -> Cambiar nombre de myArray al vuestro e introducimos valores
var nombres = ["Oriol", "Alejandro", "Marcos", "Paula", "Miguelángel", "José María"];
// Declaramos una variable donde guardaremos el string mayor de nuestro myArray
var longestElement= '';
// PRIMERA ITERACIÓN: Recorrer el Array y comprobar la longitud de cada uno de ellos.
nombres.forEach( (element) => {
    // SEGUNDA ITERACIÓN: Si longestElement es mayor a relement cambiamos el valor de longestElement
    if(element.length > longestElement.length) {
        longestElement = element
    }
});
// TERCERA ITERACIÓN MOSTRAR EL ELEMENTO MAYOR
console.log("EJERCICIO 1 : ", longestElement);

/* 
* Ejercicio 2
* → Devuelve si puedes conducir
*/

console.log("");
console.log("EJERCICIO NÚM. 2 ---------");

// PRIMERA ITERACIÓN: Declara variable age
const age = 20;
const tieneCarnet = true;
let puedeConducir = false;

// SEGUNDA ITERACIÓN: Comprobar con un condicional si puedes conducir
if (age >= 18 && tieneCarnet===true){
  puedeConducir = true;
} else {
  puedeConducir = false;
};

// TERCERA ITERACIÓN: Mostrar si puede conducir o no

if (puedeConducir === true){
  console.log("FELICIDADES!!!! - - PUEDES CONDUCIR!!!!")
};

if (puedeConducir === false){
  console.log("WARNING!!!! - - NO PUEDES CONDUCIR!!!!")
}

/* 
* Ejercicio 3
* → Quiero comer Pizza
*/

console.log("");
console.log("EJERCICIO NÚM. 3 ---------");

// PRIMERA ITERACIÓN: Declara variable con un listado de comidas
const listadoComidas = ["pizza", "ensalada", "macarrones", "kebab", "sushi", "bocadillo"];

// SEGUNDA ITERACIÓN: Recorrer el listado de comidas

let isPizza = false;
listadoComidas.forEach(element => {
  // if(element === "pizza"){
  //   isPizza = true;
  // }
  isPizza = (element = "pizza") ? true : false;
});

// TERCERA ITERACIÓN: Si hay pizza me sirves pizza 

//! if ( isPizza === true){
//!   console.log("Sírveme Pizza por favor!!");
//! }
//! está dentro de la QUINTA ITERACIÓN

// CUARTA ITERACIÓN: Declara variable estoy a dieta
let hacerDieta = true;

// QUINTA ITERACIÓN: Cuando quiera pizza me sirves brocoli
hacerDieta = (!hacerDieta) ? console.log("Sírveme Pizza por favor!!") : console.log("Sírveme Brócoli en lugar de Pizza.... 😫");
// if ( isPizza === true && hacerDieta===true){
//   console.log("Sírveme Brócoli en lugar de Pizza.... 😫");
// } else if ( isPizza === true && hacerDieta===false ){
//   console.log("Sírveme Pizza por favor!!");
// };



/* 
* Ejercicio 4
* → E-L-R-A-Y-O-E-S-E-L-M-E-J-O-R
*/

console.log("");
console.log("EJERCICIO NÚM. 4 ---------");

// PRIMERA ITERACIÓN: Declara variable con 'El rayo es el mejor'

// SEGUNDA ITERACIÓN: Pasa ese texto a mayúsculas -> MDN es vuestro amigo

// TERCERA ITERACIÓN: Modifica el string -> to array MDN 

// CUARTA ITERACIÓN: Añade un '-' después de cada elemento

// Devuelve en un string E-L-R-A-Y-O-E-S-E-L-M-E-J-O-R


// * Ejercicio 5
// * → La piramide - imprime por consola:

console.log("");
console.log("EJERCICIO NÚM. 5 ---------");

// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999



// * Ejercicio 6
// * → La piramide Invertida- imprime por consola:

console.log("");
console.log("EJERCICIO NÚM. 6 ---------");

// 999999999
// 88888888
// 7777777
// 666666
// 55555
// 4444
// 333
// 22
// 1



// * Ejercicio 7 - BONUS
// * → Palíndromo: Esta función debe recibir un string y decir si es un palíndromo. 
// * Un palíndromo es una frase que se lee igual al derecho que al revés.

console.log("");
console.log("EJERCICIO NÚM. 7 ---------");

var palindrome = (word) => {
    // PRIMERA ITERACIÓN: declarar variable y pasarle el valor + toUpperCae + Eliminar espacios replace MDN
    var initialWord = word; // + toUpperCae + replace;
    // SEGUNDA ITERACIÓN: Hacer split + reverse + join MDN
    var reverseWord = initialWord //  Split into an array, Reverse array, Join array elements into string
    // TERCERA ITERACIÓN: Devolver true o false
    return initialWord === reverseWord ? true : false;  // check if word is palindrome
}
// CUARTA ITERACIÓN: Llamar a la función palindrome pasando una palabra o frase- 'Yo soy'
console.log(palindrome('Yo soy') ? 'es palíndromo' : 'NO es palíndromo');