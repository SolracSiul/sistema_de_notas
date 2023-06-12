import { useState, useEffect, ChangeEvent } from "react"
import { useApi } from "../../../hooks/useApi"
import { useNavigate, useParams } from "react-router-dom";

export interface IUserForm{
    id: number;
    name: string;
    email: string;
    password?: string;
    funcao: string;
}

export interface IParamsProps {
    id: string;
    [key: string]: string | undefined; 
}

function FormUser() {    
    const api = useApi()
    const navigate = useNavigate();
    const { id } = useParams<IParamsProps>();
    useEffect(() =>{
        if(id !== undefined){
            findUser(id || '')
        }
    },[id])

    const [user, setUser] = useState<IUserForm>({
        id: 0,
        name: '',
        email: '',
        password: '',
        funcao: ''
    })
    function updateUser(e:ChangeEvent<HTMLInputElement>){
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    async function onSubmit(e:ChangeEvent<HTMLFormElement>){
        e.preventDefault()
        if(id === undefined){
            await api.createUsers(user)
        }else{
            await api.updateUser(id, user)
        }
        backList()
    }
    function backList(){
        navigate('/students')
    }
    async function findUser(id: string){
        const user = await api.findUser(id)
        setUser({
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password,
            funcao: user.funcao,
        })
    }
  return (
    <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-between items-center h-[100px] px-2">
            <h1 className="font-bold text-white tracking-wider text-[22px]">Página de Cadastro </h1>
            <button onClick={backList} className="bg-white hover:bg-green-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Voltar
            </button>
        </div>
        <div>
        <div className="mx-auto max-w-xs">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={onSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >
                            Nome
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='name' value={user.name} onChange={(e: ChangeEvent<HTMLInputElement>) => updateUser(e)} type="text" placeholder="Nome completo"/>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="email" value={user.email}  onChange={(e: ChangeEvent<HTMLInputElement>) => updateUser(e)} type="text" placeholder="usuario@abc.com"/>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Password
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="password" value={user.password} onChange={(e: ChangeEvent<HTMLInputElement>) => updateUser(e)}  type="text" placeholder="******************"/>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Função
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="funcao" value={user.funcao}  onChange={(e: ChangeEvent<HTMLInputElement>) => updateUser(e)} type="text" placeholder="aluno ou professor" />
                    </div>
                    <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        {id !== undefined ? 'editar' : 'salvar'}
                    </button>
                    </div>
                </form>
                </div>
        </div>
    </div>
  )
}

export default FormUser