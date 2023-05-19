
import { Route, Routes, Link } from 'react-router-dom'
import { Home } from './pages/Home';
import { Private } from './pages/PageHome';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { Header } from './components/Header';
import { useContext } from 'react';
import { AuthContext } from './contexts/Auth/AuthContext';

function App() {
  return (
    <div className="">
      <header className=''>
        <Header/>
      </header>
      <hr />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/private" element={<RequireAuth>
          <Private/>
          </RequireAuth>}/>
      </Routes>
    </div>
  );
}

export default App;
