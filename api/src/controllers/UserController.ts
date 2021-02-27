import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../models/User";


class UserController{
    async create(request: Request, response: Response){
        const { name, email } = request.body;

        const usersRepository = getRepository(User);

        const userAlreadyExists = await usersRepository.findOne({
            email
        }); //Se o email for igaul, indica que o usuário já existe

        if(userAlreadyExists){
            return response.status(400).json({
                error: "Usuário já existe!",
            }); //Caso o usuário já exista, retorna um erro
        }

        const user = usersRepository.create({
            name, email
        })

        await usersRepository.save(user);

        return response.json(user);
    }
}

export { UserController }