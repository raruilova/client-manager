import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../layout/Login";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import LoginForm from "../pages/LoginForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}>
          <Route index element={<LoginForm />} />
        </Route>
        <Route path="/clientes" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
