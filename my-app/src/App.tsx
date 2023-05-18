
import { Route, Routes, Link } from 'react-router-dom'
import { Home } from './pages/Home';
import {Private} from './pages/PageHome';

function App() {
  return (
    <div className="bg-red-500">
      <header>
        <h1>
          Header do site
        </h1>
        <nav className='text-bg-black-300 inline-block mx-4'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/private">Pagina do principal</Link>
          </li>
        </nav>
      </header>
      <hr />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/private" element={<Private/>}/>
      </Routes>
    </div>
  );
}

export default App;
