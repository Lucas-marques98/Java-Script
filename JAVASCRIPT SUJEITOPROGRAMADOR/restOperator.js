
// REST Operator.

 function convidados(...nomes){
   console.log("SEJA BEM VINDO TODOS CONVIDADOS")
   console.log(nomes); }

 convidados("Matheus", "Lucas", "Maria", "Ana caroline", "Neide") //dando valores ao parametro / no caso serão os convidados
//para eu passar mais de um valores em apenas 1 parametro eu devo usar os 3 pontos ...

function sorteador(...numeros){
  console.log(numeros);

  const numeroGerado = Math.floor(Math.random() * numeros.length); //Math.floor ele vai sempre garantir que o nosso número sempre vai ser inteiro, sem casas decimais
 //Math.random vai calcular um número aleatório , numeros.length vai trazer o comprimento da minha lista
 // Math.random * numeros.length vai calcular um número aleatório com base no tamanho da minha lista

  console.log("Numero gerado foi: " + numeros[numeroGerado]);

}

sorteador(1, 4, 5, 15, 25, 90, 55, 34)