import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { useApi } from "../../../hooks/useApi";
import { LockKey, User, Exam, EnvelopeSimple } from "@phosphor-icons/react";
interface IUserForm{
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

function Detail() {
    const navigate = useNavigate();
    const api = useApi();
    const { id } = useParams<IParamsProps>();
    const [user, setUser] = useState<IUserForm>();

    useEffect(() =>{
        if(id !== undefined){
            findUser(id)
            console.log(user)
        }
    }, [id])

    function backStudents(){
        navigate('/students')
    } 
    async function findUser(id:string){
        const response = await api.findUser(id);
        setUser(response)
    }
    
  return (
    <div className="flex flex-col items-center">
    <div className="w-[300px] bg-white shadow-lg rounded-lg overflow-hidden my-4">
        <div className="flex items-center px-6 py-3 bg-gray-900">
            <User size={22} color="#fcfcfc" />
            <h1 className="mx-3 text-white font-semibold text-lg">{user?.funcao}</h1>
        </div>
        <div className="py-4 px-6">
            <h1 className="text-2xl font-semibold text-gray-800">{user?.name}</h1>
            <div className="flex items-center mt-4 text-gray-700">
                <LockKey size={22} />
                <h1 className="px-2 text-sm">{user?.password}</h1>
            </div>
            <div className="flex items-center mt-4 text-gray-700">
                <Exam size={22} />
                <h1 className="px-2 text-sm">notas</h1>
            </div>
            <div className="flex items-center mt-4 text-gray-700">
                <EnvelopeSimple size={22} />
                <h1 className="px-2 text-sm">{user?.email}</h1>
            </div>
            <div className="flex justify-end mt-4 text-gray-700">
            <button onClick={backStudents} className="bg-white hover:bg-green-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Voltar
            </button>
            </div>

        </div>
    </div>
    </div>
  )
}

export default Detail