//      EXERCICIO

// EU QUERO QUE O VALOR DE A VIRE O VALOR DE B, O VALOR DE B VIRE O VALOR DE C, E O VALOR DE C VIRE O VALOR DE A.

let valorA = "A";
let valorB = "B";
let valorC = "C";

[valorA, valorB, valorC] = [valorB, valorC, valorA];

console.log(valorA, valorB, valorC);

// EXERCICIO SOLUCIONADO DA MANEIRA NOVA!

/* MANEIRA ANTIGA DE FAZER O EXERCICIO

const valorTempA = valorA; 

valorA = valorB; 
valorB = valorC;
valorC - valorTempA; 
*/
