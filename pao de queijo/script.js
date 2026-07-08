let carrinho = [];
let total = 0;


function addProduto(nome, preco){

    carrinho.push(nome);

    total += preco;

    mostrar();

}


function mostrar(){

    let lista = document.getElementById("lista");

    lista.innerHTML="";


    carrinho.forEach(item=>{

        lista.innerHTML += 
        "<li>"+item+"</li>";

    });


    document.getElementById("total").innerHTML =
    total.toFixed(2);

}



function finalizarPedido(){


let cliente = prompt(
"Digite seu nome:"
);


let telefone = prompt(
"Digite seu WhatsApp:"
);



fetch("http://localhost:3000/pedido",{


method:"POST",


headers:{

"Content-Type":"application/json"

},


body:JSON.stringify({

cliente: cliente,

telefone: telefone,

produtos:carrinho.join(", "),

total:total

})


})


.then(res=>res.json())


.then(()=>{


alert(
"Pedido enviado com sucesso!"
);


carrinho=[];

total=0;

mostrar();


});


}