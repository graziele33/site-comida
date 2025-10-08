//botão para salva
const btnsalvar = document. createElement('button');
btnsalvar.textContent = 'salvar lista';
btnsalvar.styles.display = 'block';
btnsalvar.style.margin = '20px auto';
btnsalvar.styles.padding = '6px 12px';
btnsalvar.styles.cursor = 'pointer';
container.appendChild(btnsalvar);

//função para salva a  lista em um arquivo.txt
function salvarlista() {
    //pega todos os <li> e monta o texto (cada item em uma linha)
    const itens = Array.from(lista.querySelectorAll ('li'))
                       .map(li => li.textContent)
                       .join('/n');


if (!itens){
    alert('a lista esta vazia!');
    return;
}
 //cria um blob com o conteudo  de  texto
 const blob = new blob ([itens], {type: 'text/plain'});
 const url =URL.createObjectURL(blob);
 
 // cria um link temporario para download
 const a = documento.createElement('a');
 a.href = url;
 a.download = 'lista,txt'; // nome do arquivo
 document.body.appendChild(a);
 a.click(); // dispara o download
 document.body.removeChild(a);


 //libera o objeto URL
 URL.revokeObjectURL(url);
}
 // evento do botão
 btnsalvar.addEventListener('click', salvarlista);