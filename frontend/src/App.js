import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home';
import Navbar from './components/navbar';
import Signup from './pages/signup';
import Signin from './pages/signin';
import { Usesigncontext } from './hooks/usesigncontext';
import { Navigate } from 'react-router-dom';

function App() {

  const { user } = Usesigncontext()

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
        <Routes>
            <Route  path="/"  element={user ? <Home /> : <Navigate to="/signin" />} />
            <Route  path="/signin"  element={!user ? <Signin /> : <Navigate to="/" />} />
            <Route  path="/signup"  element={!user ? <Signup /> : <Navigate to="/" />} />
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
