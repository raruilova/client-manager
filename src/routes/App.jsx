import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import NewClient from '../pages/NewClient';
import EditClient from '../pages/EditClient';
import ViewClient from '../pages/ViewClient';

function App() {
  // al colocar ese path dentro de <Route></Route> se crea una ruta asi, /clientes/nuevo, si creo otra seria /cliente/ruta
  //:id rutas dinamicas para pasarle el id y con eso puedo modificar al usuario
  //console.log(import.meta.env); //accediendo a las variables de entorno
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="nuevo" element={<NewClient/>}/> 
          <Route path="editar/:id" element={<EditClient/>}/>
          <Route path=":id" element={<ViewClient/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
