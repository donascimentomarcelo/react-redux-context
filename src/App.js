import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { ImageUserProvider } from './context/ImageUser';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <ImageUserProvider>
              <Profile />
            </ImageUserProvider>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
