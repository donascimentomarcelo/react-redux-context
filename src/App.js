import './App.css';
import { useAuthUser } from './context/AuthUser';
import {
  Routes,
  Route
} from "react-router-dom";

import Login from './pages/Login';
import Register from './pages/Register';

function App() {

  const { user } = useAuthUser();

  console.log(user);

  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  );
}

export default App;
