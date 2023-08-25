import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Reset from "./pages/Reset";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/Register" />
        <Route element={<Reset />} path="/Reset" />
      </Routes>
    </Router>
  );
}

export default App;
