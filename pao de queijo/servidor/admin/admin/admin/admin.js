if(localStorage.getItem("admin")!="ok"){

    window.location="login.html";
    
    }
    
    
    
    fetch("http://localhost:3000/pedidos")
    
    .then(res=>res.json())
    
    .then(dados=>{
    
    
    let area =
    document.getElementById("pedidos");
    
    
    
    dados.forEach(p=>{
    
    
    area.innerHTML += `
    
    <hr>
    
    <h3>
    Pedido #${p.id}
    </h3>
    
    <p>
    Cliente:
    ${p.cliente}
    </p>
    
    <p>
    Produtos:
    ${p.produtos}
    </p>
    
    <p>
    Total:
    R$ ${p.total}
    </p>
    
    <p>
    Data:
    ${p.data}
    </p>
    
    `;
    
    });
    
    
    });