
// includes, startsWith, endsWith

 let nomes = ["Matheus", "Lucas", "Jose"];

 console.log(nomes.includes("Maria"));

 if(nomes.includes("Matheus")){
   console.log("ESTA NA LISTA")
 }else{
   console.log("NAO ESTA NA LISTA")
 }
//includes sempre vai devolver pra gente um boolean, true ou false

let nome = "Matheus";

console.log(nome.startsWith("Mat"))
//startsWith servi para descobrir se o nome começa com o valor que eu passar
console.log(nome.endsWith("eus"))
//endsWith servi para descobrir se  o nome termina com o valor que eu passar