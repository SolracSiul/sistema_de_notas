import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import { useContext } from 'react';
import { AuthContext } from "../contexts/Auth/AuthContext";

export const Header = () =>{
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const auth = useContext(AuthContext)
    const navigate = useNavigate();

    const handleLogout =  async () =>{
      await auth.signout()
      window.location.reload()
      navigate('/')
    }
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
 
  return (
    <nav className="">
    <div className="mx-auto px-4">
      <div className="bg-gray-400 py-4 md:py-6">
        <div className="flex items-center justify-between">
          <div className="flex justify-between">
            <div>
              <a href="/" className="text-lg font-semibold text-gray-800">Logo</a>
            </div>
          </div>
          <div className="items-end hidden md:block space-x-4 pr-2">
            <Link to="/">Home</Link>  
            <ul>
        <li>
         <Link to="/private">Logar</Link>
         {auth.user && <button onClick={handleLogout}>Sair</button>}
        </li>
      </ul>
          </div>
          <div className="md:hidden">
          <button
                type="button"
                className={`block text-gray-800 hover:text-gray-700 focus:text-gray-700 focus:outline-none transition ease-in-out duration-300 ${
                  isMenuOpen ? 'rotate-90' : ''
                }`}
                onClick={handleMenuToggle}
              >
                  {isMenuOpen ? (
                 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 fill-current" viewBox="0 0 24 24" fill="currentColor" >
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/> </svg>
                  ) : (
                    <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                      />
                    </svg>
                  )}
              </button>
          </div>
        </div>
      </div>
      <div
          className={`relative transition ease-in-out duration-300 transform-gpu ${
            isMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{ width: '100%' }}
        >
        <div className={`md:hidden transition-all duration-300  ${isMenuOpen ? 'block ' : 'hidden'}`} style={{ width: '100%' }}>
          <ul className="text-sm text-gray-800 z-99 absolute bg-blue-400 w-full px-4">
            <li className="py-2">
              <span className="block hover:text-gray-700"><Link to="/">Home</Link></span>
            </li>
            <li className="py-2">
              <span className="block hover:text-gray-700"><Link to="/private">Logar</Link></span>
            </li>
           
          </ul>
        </div>
      </div>
    </div>
  </nav>
  );
}