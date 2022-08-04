import './App.css';
import { useAuthUser } from './context/AuthUser';
import {
  Routes,
  Route
} from "react-router-dom";

import Login from './pages/Login';
import Register from './pages/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProtectedRoute from './components/ProtectedRoute';

function App() {

  const { user } = useAuthUser();

  console.log(user);

  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={
        <ProtectedRoute>
          <Register />
        </ProtectedRoute>
      } />
    </Routes>
  );
}

export default App;
