
// MAP = PERCORRER TODO UM ARRAY

 let lista = ["MATHEUS", "JOSE", "MARIA", "LUCAS"];

 lista.map((item, index) => {
   console.log(`PASSANDO: ${item} - Esta na posicao ${index} `)
 })

 //.map ele percorre todo o array conforme o indice do array
 // não importa o nome do parametro, o primeiro sempre ira retorno o item e o segundo o indice 

// Reduce = O reduce busca reduzir um array.

let numeros = [5, 3, 2, 5,10];

let total = numeros.reduce((acumulador, numero, indice, original)=>{
  console.log(`${acumulador} - total ate o momento`);
  console.log(`${numero} - valor atual`);
   console.log(`${indice} - indice atual`);
   console.log(`${original} - array original`);
  console.log("========================")

  return acumulador += numero;

})


console.log("TOTAL DO REDUCE: " + total);

//array function (função anônima) 
() => {}