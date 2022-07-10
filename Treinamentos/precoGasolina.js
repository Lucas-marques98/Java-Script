// Faça um programa que solicite ao usuário o preço atual da gasolina e informe a mensagem "A gasolina está cara" se o valor informado for maior do que 2.5

import { question } from "readline-sync";

let precoGasolina = question("digite o Preco");

let gasosa;

if(precoGasolina > 2.5) {
gasosa = "gasolina esta cara"  
} else {
gasosa = "gasolina esta barata pai"    
}

console.log(gasosa);