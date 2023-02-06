
// Spread Operator.
 let primeiros = [1, 2, 3];

 let numeros = [...primeiros, 4, 5, 10];
 console.log(numeros);

 let segundos = [10, 20, 30];

 let numeros2= [...segundos, 40, 50, 100];
 console.log(numeros2);

 //para eu adicionar um array dentro do outro eu devo usar 3 pontos ... no inicio do array

 let pessoa = {
  nome: "Matheus",
  idade: 45,
  cargo: "RH"
 }

 let novaPessoa = {
   ...pessoa,
   status: "ATIVO",
   cidade: "Campo Grande / MS",
   telefone: "67959595959"
 };
 console.log(novaPessoa);

 //para adicionar um objeto dentro de outro objeto eu devo usar 3 pontos ... e logo em seguida por o nome do outro objeto

function novoUsuario(info){
  let dados = {
    ...info,
    status: "ATIVO",
    inicio: "20/03/2023",
    codigo: "123123"
  };

  console.log(dados);
}

novoUsuario({ nome: "Jose", sobrenome: "Silva", cargo: "DEV" }) // chamando a função e passando valores para o parametro

// adicionando novos dados de um objeto dentro de uma função