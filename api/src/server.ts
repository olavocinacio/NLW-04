import 'reflect-metadata';
import express from 'express';
import "./database" //Quando existe um arquivo index, o projeto reconhece que ele quem deve ser importado
import { router } from './routes';

const app = express();

app.use(express.json());

// /*
// Métodos de requisição:
// * GET => Buscar
// * POST => Salvar
// * PUT => Alterar
// * DELETE => Deletar
// * PATCH => Alteração específica
// */

// app.get("/", (request, response) => {
//     return response.json({message: "Hello World - NLW04"})
// });

// app.post("/", (request, response) => {
//     return response.json({message: "Os dados foram salvos com sucesso!"})
// });

app.use(router);

app.listen(3333, () => console.log("Servidor Rodando!!!"));

