const express = require('express');

const app = express();

/* 
==Metodos HTTP;
* GET: Bsucar uma informação do back-end
* POST: Criar uma informação no back-end
* PUT: Alterar uma informação no back-end
* DELETE: Deletar uma informação no back-end
*/ 

app.get('/',(request, response)=> {
    return response.json({
        evento: 'Semana OmniStack 12.0',
        aluno: 'Fábio Cipriano'
    });
});
app.listen(3333);