import { useState, useEffect } from "react"
import { useApi } from "../../hooks/useApi"
import { useNavigate } from "react-router-dom";
export interface IUserForm{
    id: number;
    name: string;
    email: string;
    password?: string;
    funcao: string;
}
function Students() {
    const [users, setUsers] = useState<IUserForm[]>([])
    const navigate = useNavigate()

    const api = useApi()
    useEffect(() => {
        loadUsers();
        console.log(users)
      }, []);

    async function loadUsers(){
        const response = await api.getUsers();
        setUsers(response)
    }
    async function deleteUser(id:number){
        const idString = id.toString();
        await api.deleteUser(idString)
        loadUsers()
    }
    function newUser(){
        navigate('/students_cadastro')
    }   
    function editUser(id: number){
        const idString = id.toString()
        navigate(`/students_cadastro/${idString}`)
    }
    function viewUser(id: number){
        const idString = id.toString()
        navigate(`/students/${idString}`)
    }
  return (
    <div className="max-w-[1200px] mx-auto">
   <div className="">
    <div className="flex justify-between items-center h-[100px] px-2">
        <h1 className="font-bold text-white tracking-wider text-[22px]">Página de Usuários</h1>
        <button onClick={newUser} className="bg-white hover:bg-green-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Novo Usuário
        </button>
    </div>
    </div>
    <div className="relative mx-auto overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Nome
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                    Função
                </th>
                <th scope="col" className="px-6 py-3">
                    Senha
                </th>
                <th scope="col" className="text-center">
                    Ações
                </th>
            </tr>
        </thead>
        <tbody>
            {users && users.map((user, index) =>{
                return(
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={user.id}>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {user.name}
                    </th>
                    <td className="px-6 py-4">
                        {user.email}
                    </td>
                    <td className="px-6 py-4">
                        {user.funcao}
                    </td>
                    <td className="px-6 py-4">
                        {user.password}
                    </td>
                    <td className="text-center space-x-1">
                    <button onClick={() => editUser(user.id)} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent rounded">
                            Editar
                    </button>
                    <button onClick={() => viewUser(user.id)} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent rounded">
                            Visualizar
                    </button>
                    <button  onClick={() => deleteUser(user.id)} className="bg-transparent hover:bg-red-500 text-blue-700 font-semibold hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent rounded">
                            Remover
                    </button>
                    </td>
                </tr>
                )
            })}
        </tbody>
    </table>
</div>
</div>
  )
}

export default Students