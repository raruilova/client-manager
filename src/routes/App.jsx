import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import NewClient from '../pages/NewClient';
import EditClient from '../pages/EditClient';

function App() {
  // al colocar ese path dentro de <Route></Route> se crea una ruta asi, /clientes/nuevo, si creo otra seria /cliente/ruta
  //:id rutas dinamicas para pasarle el id y con eso puedo modificar al usuario
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/clientes" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="nuevo" element={<NewClient/>}/> 
          <Route path="editar:id" element={<EditClient/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
