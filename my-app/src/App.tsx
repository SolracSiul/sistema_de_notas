
import { Route, Routes, Link } from 'react-router-dom'
import { Home } from './pages/Home';
import { Private } from './pages/PageHome';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { Header } from './components/Header';


function App() {
  return (
    <div className="">
        <Header/>
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
