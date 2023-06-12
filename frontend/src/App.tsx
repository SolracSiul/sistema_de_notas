
import { Route, Routes, Link } from 'react-router-dom'
import { Home } from './pages/Home';
import { Private } from './pages/PageHome';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { Header } from './components/Header';
import Students from './pages/Students';
import FormUser from './pages/Students/Form';
import Detail from './pages/Students/Details';
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
        <Route path="/students" element={<RequireAuth>
          <Students/>
        </RequireAuth>}/>
        <Route path="/students_cadastro" element={<RequireAuth>
          <FormUser/>
        </RequireAuth>}/>
        <Route path="/students_cadastro/:id" element={<RequireAuth>
          <FormUser/>
        </RequireAuth>}/>
        <Route path="/students/:id" element={<RequireAuth>
          <Detail/>
        </RequireAuth>}/>
      </Routes>
    </div>
  );
}

export default App;
