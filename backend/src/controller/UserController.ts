import { AppDataSource } from "../data-source"
import { Request, Response } from "express"
import { Users } from "../entity/Users"
import * as crypto from 'crypto';
import { getRepository } from "typeorm";



export const getUsers = async (request: Request, response: Response) => {
    try {
        const users = await AppDataSource.getRepository(Users).find();
        response.json(users);
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: 'Ocorreu um erro ao obter os usuários.' });
    }
};
export const getUserName = async (request: Request, response: Response) => {
    const { name } = request.params;

    try {
        const user = await AppDataSource.getRepository(Users).findOne({ where: { name } });
        if (!user) {
            return response.status(404).json({ error: 'Usuário não encontrado.' });
        }
        return response.json(user);
    } catch (error) {
        console.error(error);
        return response.status(500).json({ error: 'Ocorreu um erro ao buscar o usuário.' });
    }
};

export const saveUser = async (request: Request, response: Response) => {
    const { email } = request.body;

    const existingUser = await AppDataSource.getRepository(Users).findOne({ where: { email } });
    if (existingUser) {
        return response.status(400).json({ error: 'Este email já está sendo utilizado por outro usuário.' });
    }
    try {
        const user = await AppDataSource.getRepository(Users).save(request.body);
        response.json({ message: 'Usuário salvo com sucesso!' });
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: 'Ocorreu um erro ao salvar o usuário.' });
    }
};
export const getUserId = async (request: Request, response: Response) => {
    const { id } = request.params;
    const userId = parseInt(id, 10); 
    const user = await AppDataSource.getRepository(Users).findOne({ where: { id: userId } });
    return response.json(user);
}

export const getUpdateUser = async (request: Request, response: Response) => {
    const { id } = request.params;
    const userId = parseInt(id, 10);
    const user = await AppDataSource.getRepository(Users).update(userId, request.body);

    if (user.affected === 1) {
        const userUpdate = await AppDataSource.getRepository(Users).findOne({ where: { id: userId } });
        if (userUpdate) {
            return response.json(userUpdate);
        } else {
            return response.status(404).json({ message: 'User not found' });
        }
    }
    return response.status(404).json({ message: 'User not found' });
};
export const getToken = async(request: Request, response: Response) =>{
    const { email, password} = request.body;

    const user = await AppDataSource.getRepository(Users).findOne({where: {email}});

    if(user.password !== password){
        return response.status(401).json({message: 'Dados invalidos'});
    }
    const secretKey = crypto.randomBytes(64).toString('hex');

    const token = secretKey;

    return response.json({token});
}
export const deleteUser = async (request: Request, response: Response) =>{
    const {id} = request.params
    const userId = parseInt(id, 10);

    const user = await AppDataSource.getRepository(Users).delete(userId)
    if(user.affected === 1){
        const taskUpdated = await AppDataSource.getRepository(Users).findOne({ where: { id: userId } });
        return response.json({message: 'user removed!'})
    }
    return response.status(404).json({message: 'user not found!'})
}