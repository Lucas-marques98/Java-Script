//  Nós vamos usar estes operadores  (And e Or) quando eu precisar fazer multiplos testes, para o mesmo Retorno dentro de um if.

//  por exemplo:
//  Se eu quiser testar faixas de Valores para um resultado de uma Várivel.
// Se eu quiser testar valores de várias Váriaveis pra uma mesma condição.

// Lembrando que o AND (&&) só vai retornar verdadeiro Quando todos os testes forem Verdadeiros.
// e o OR (||) só vai retornar falso quando todos os testes Retornarem Falsos, Caso ao Contrario Retornara Verdadeiro.

// Objetivo: Checar se o valor dos pontos do Jogador foi alcançado para ser um campeão ou perdedor.

let pontos = 45; // Valor dos pontos

if(
    (pontos >=30)&& (pontos <=40) // checa se é maior ou igual que 30 ou menor e igual a 50
                    ||
     (pontos >=60) &&(pontos <=70) // checa se é maior ou igual a 60 ou menor e igual a 70
){console.log('Você é um campeão')
} else{
    console.log('Você Perdeu')
}

