document.getElementById('contactForm').addEventListener('submit', function(event)) {
    Event.preventDefault();

    const formData =new formData(event.target);
    const data = {} ;
    formData.forEach((value,key) => {
        data[key] = value;
    });
]
   console.log(data); // Adiciona esta linha para verificar os dados no console

   fetch('CODIGO DA PANILHA', {
     method:'POST,
     body: new URLSearchParams(data)
   })
   .then(response => response.json())
   .then(responseData) => {
       if (responseData.result === 'success') {
          alert('Dados enviados com sucesso ! ') ;
          event.target.reset(); // Limpa o formulario
        } else if (responseData.result=== 'error' && responseData.message == ''
           alert('Error:O email ja existe .') ;
    } else  {
         alert('Error ao enviar os dados.') ;
    }
})
   .catch(error => console.error('Error:', error))
});


