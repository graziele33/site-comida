

function cadastro() {
   
    const nome = prompt("Qual é o seu nome?");
    const idade = parseInt(prompt("Quantos anos você tem?"));
    const altura = parseFloat(prompt("Qual é a sua altura em metros?"));

   
    const idadeFutura = idade + 10;

    
    console.log(`Olá, ${nome}! Você tem ${idade} anos e sua altura é ${altura} metros.`);
    console.log(`Em 10 anos, você terá ${idadeFutura} anos.`);
}


