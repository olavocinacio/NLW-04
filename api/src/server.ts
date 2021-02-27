import 'reflect-metadata';
import express from 'express';
import "./database" //Quando existe um arquivo index, o projeto reconhece que ele quem deve ser importado

const app = express();

/*
Métodos de requisição:
* GET => Buscar
* POST => Salvar
* PUT => Alterar
* DELETE => Deletar
* PATCH => Alteração específica
*/

app.get("/", (request, response) => {
    return response.json({message: "Hello World - NLW04"})
});

app.post("/", (request, response) => {
    return response.json({message: "Os dados foram salvos com sucesso!"})
});

app.listen(3333, () => console.log("Servidor Rodando!!!"));

