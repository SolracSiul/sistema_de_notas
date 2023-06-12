import axios from "axios";
import { IUserForm } from "../pages/Students";

const api = axios.create({
    baseURL: "http://localhost:3333"
});

export const useApi = () => ({
    validateToken: async(token: string) =>{
        return {
            user:{id: 2, name: 'Usuario', email: 'srk@gmail.com'},
        }
        const response = await api.post('/validate', {token});
        return response.data;
    },
    signin: async (email:string, password:string) =>{
        return {
            user:{id: 2, name: 'Usuario', email: 'srk@gmail.com'},
            token: 'token response'
        }
        const response = await api.post('/signin.', {email, password});
        return response.data;
    },
    logout: async () => {
        return {status: true}
        const response = await api.post('/logout');
        return response.data;
    },
    getUsers:async () =>{
        const response = await api.get('/users')
        return response.data;    
    },
    createUsers: async (user: IUserForm) =>{
        const response = await api.post('/users',user)
        return response.data
    },
    findUser: async (id: string) => {
        const response = await api.get('/users/id/' + id)
        return response.data
    },
    updateUser: async(id: string, user:IUserForm) =>{
        const response = await api.put(`/users/${id}`, user)
        return response.data
    },
    deleteUser: async(id: string) =>{
        const response = await api.delete(`/users/${id}`)
        return response.data
    }
});