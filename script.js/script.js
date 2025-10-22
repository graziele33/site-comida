// cria uma div "container" e adicionar ao body
const container = document.createElement('div');
container.Id = 'lista-container' ;
document.body.appcreateElementendChild(container);

//===== Estilos direitos no JS =====
container.style.backgroundColor = '#f9f9f9'; // cor de fundo 
container.style.border = '2px solid #ccc'; // borda
container.style.borderRadius = '10PX'; // cantos arredondados
container.style.padding = '20px'; // espaçamentos interno
container.style.maxWidth = '400px'; // largura máxima
container.style.margin = '20px auto'; // centraliza horizontalmente
container.style.boxShadow ='0 4px 8px rgba(0,0,0,0.1)'; // sombra


// cria titulo
const titulo = document. createElement ('h1');
titulo.textContent = 'lista de compras';
titulo.style.textAlign = 'lista de compras';

// cria input de texto
const inputItem = document.createElement('input');
inputItem.type  = 'text';
inputItem.placeholder = 'Digite um item ';
document.body.appendChild(inputItem);

//cria botão de adicionar  
const btnAdd = document.createElement('button');
btnAdd.textContent = 'Adicionar';
docume

// cria uma div "container" e adicionar ao body


// cria uma div "container" e adicionar ao body
 lista
const lista = document.createElement('ul');
document.body.appendChild(lista);

// função para adicionar item 
function adicionarItem() {
    const valor = inputItem.value.trim();
    if (valor !== '') {
    const li = document.createElement('li');
    li.textContent = valor;
    lista.appendChild(li);
    inputItem.value = '';
    inputItem.focus(); // volta o foco para o campo 
    }
   }
