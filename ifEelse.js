// if pode ser usado sozinho.

// sempre que eu utilizo a palavra else, preciso de um if antes, e é usado else if.

// eu posso ter varios else ifs na checagem.

// só posso ter um else na checagem

// podemos usar condição sem else if, utilizando somente if e else.



// exemplo:



const hora = 10;

if (hora >= 0 && hora <= 11) { 
    console.log('Bom dia') 
} else if(hora => 12 && hora <= 17){
    console.log('Boa Tarde')
} else if (hora >= 18 && hora <= 23){
    console.log('Boa Noite')
};

// Vai calcular a hora e dizer se é Bom dia, Boa Tarde ou Boa Noite.

