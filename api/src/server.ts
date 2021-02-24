import express from 'express';

const app = express();

/*
Métodos de requisição:
* GET => Buscar
* POST => Salvar
* PUT => Alterar
* DELETE => Deletar
* PATCH => Alteração específica
*/

app.get("/users", (request, response) => {
    return response.send("Hello World - NLW04")
})

app.listen(3333, () => console.log("Servidor Rodando!!!"));

