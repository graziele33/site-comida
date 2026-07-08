const express = require("express");

const cors = require("cors");

const banco = require("../banco");


const app = express();


app.use(cors());

app.use(express.json());



app.get("/",(req,res)=>{

res.send("Servidor Pão de Queijo funcionando!");

});




// receber pedido

app.post("/pedido",(req,res)=>{


let pedido=req.body;



banco.run(

`
INSERT INTO pedidos
(cliente, produtos, total,telefone)

VALUES(?,?,?)
`,

[
pedido.cliente,
pedido.produtos,
pedido.total,
pedido.telefone
],


function(){

res.json({

sucesso:true,

id:this.lastID

});


});


});





// listar pedidos do dono

app.get("/pedidos",(req,res)=>{


banco.all(

"SELECT * FROM pedidos ORDER BY id DESC",

(err,rows)=>{


res.json(rows);


});


});




app.listen(3000,()=>{

console.log(
"Servidor rodando na porta 3000"
);

});