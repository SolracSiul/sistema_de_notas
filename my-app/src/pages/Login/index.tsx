import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useNavigate } from "react-router-dom";

export const Login = () =>{
    const auth = useContext(AuthContext)
    const navigate = useNavigate();
    const handleLogin = async () =>{
        if(email && password){
            const isLogged = await auth.signin(email, password)
            if(isLogged){
                console.log('chamei no index de Login ?')
                navigate('/private')
            }else{
                alert("Não deu certo")
            }
        }
    }
    const [email, setEmail] = useState('');
    const [password, setPassowrd] = useState('')
    return(
        <div className="max-w-[1200px] my-auto mx-auto pt-8 flex items-center justify-center overflow-y-hidden">
            <div className="flex flex-col justify-center gap-4 bg-yellow-100 w-[400px] h-[400px] rounded-sm">
                <h2>LOGO </h2>
                <input type="text" value={email} onChange={(e) =>setEmail(e.target.value)} placeholder="Digite seu e-mail" />
                <input type="text" value={password} onChange={(e) =>setPassowrd(e.target.value)} placeholder="Digite sua senha" />
                <div className="flex items-center justify-center">
                    <button onClick={handleLogin} className="inline-block w-[200px] bg-blue-500 text-white px-4 py-2 rounded">Logar</button>
                </div>
            </div>

        </div>
    )
}