import { Link } from "react-router-dom"
export const Home = () =>{
    return(
        <div className="max-w-[1200px] mx-auto">
            <div className="bg-red-100 min-h-[300px]" style={{ backgroundColor: '#6D92A1' }}>
            <main className="container mx-auto px-4 py-8">
                <div className="max-w-[500px] mx-auto rounded-lg shadow-md p-8" style={{ backgroundColor: '#c2d5e0' }}>
                    <h2 className="text-2xl font-bold mb-4">Bem-vindo(a) ao ABC Notas</h2>
                    <p className="text-gray-700 mb-6">
                        Nosso sistema de notas é a solução perfeita para manter alunos e professores conectados em um só lugar. Com a facilidade de acesso, os alunos podem verificar suas notas de forma rápida e prática, enquanto os professores têm a conveniência de postar e atualizar as notas de maneira eficiente. Agora, todo o sistema escolar está integrado, proporcionando uma experiência simplificada e organizada para todos os envolvidos. Descubra a praticidade e a eficiência do nosso sistema de notas, onde a colaboração entre alunos e professores se torna ainda mais dinâmica e efetiva.
                    </p>
                    <p className="text-gray-700 mb-6">Acesse o sistema para começar a criar suas notas e organizar suas tarefas.</p>
                    <a href="#" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
                        <Link to="/private" className="text-white hover:text-gray-700">Acessar nosso sistema</Link>
                    </a>
                </div>
            </main>
            </div>
        </div>
    )
}