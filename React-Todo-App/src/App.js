import "./App.css";

import { Route, Routes } from "react-router-dom";
import RegisterPage from "./components/RegisterPage";
import Homepage from "./pages/Homepage";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
