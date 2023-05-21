import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useNavigate } from "react-router-dom";
import logo from '../../assets/imgs/logo.jpeg'

export const Login = () =>{
    const auth = useContext(AuthContext)
    const navigate = useNavigate();
    const handleLogin = async () =>{
        if(email && password){
            const isLogged = await auth.signin(email, password)
            if(isLogged){
                navigate('/private')
            }else{
                alert("Não deu certo")
            }
        }
    }
    const [email, setEmail] = useState('');
    const [password, setPassowrd] = useState('')
    return(
        <div className="max-w-[1200px] my-auto mx-auto flex items-center justify-center overflow-y-hidden">
            <div className="flex flex-col justify-center gap-4 w-[400px] h-[400px] rounded-sm" style={{ backgroundColor: '#c2d5e0' }}>
                <div className="mx-auto">
                    <img src={logo} alt="" width={120} height={120} />
                </div>
                <input type="text" value={email} onChange={(e) =>setEmail(e.target.value)} placeholder="Digite seu e-mail" className="block w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                <input type="text" value={password} onChange={(e) =>setPassowrd(e.target.value)} placeholder="Digite sua senha" className="block w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"/>
                <div className="flex items-center justify-center">
                    <button onClick={handleLogin} className="inline-block w-[200px] bg-blue-500 text-white px-4 py-2 rounded">Logar</button>
                </div>
            </div>

        </div>
    )
}