//Botão para carregar Lista
const btnsalvar = document









//Input de arquivo oculto 
const inputArquivo = document.createElement('input')
inputArquivo.type = 'file';
inputArquivo.accept = '.txt'; // apenas arquivosde texto
inputArquivo.style.displey = 'none';
document.body.appendChild(inputArquivo);

// Função para processar o arquivo selecionado
function carregarListaDoArquivo(file) {
    const reader = new FileReader





    // Divide o conteudo em linhas e adicione cada uma como <li>
    const linhas = reader.result.split(/\r?\n/)
    
