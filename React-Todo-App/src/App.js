import "./App.css";

import { Route, Routes } from "react-router-dom";
import RegisterPage from "./components/RegisterPage";
import Homepage from "./pages/Homepage";
import Header from "./components/Header";
import Login from "./pages/LoginPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
