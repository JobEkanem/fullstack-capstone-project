import LoginPanel from "./components/Login/Login";
import Register from './components/Register/Register';
import Dealers from './components/Dealers/Dealers';
import Dealer from "./components/Dealers/Dealer"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPanel />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dealers" element={<Dealers/>} />
      <Route path="/dealer/:id" element={<Dealer/>} />
    </Routes>
  );
}

export default App;
