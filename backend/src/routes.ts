import {Router, Request, Response} from 'express'
import {getUsers, saveUser, getUserName, getUserId, getToken, getUpdateUser, deleteUser } from './controller/UserController'

const routes = Router();

routes.get('/', (request: Request, response: Response) =>{
    return response.json({message: 'hello world 2'})
})
routes.get('/users', getUsers)
routes.post('/users', saveUser)
routes.get('/users/:name', getUserName)
routes.get('/users/id/:id', getUserId)
routes.post('/login', getToken)
routes.put('/users/:id', getUpdateUser)
routes.delete('/users/:id', deleteUser )

export default routes;