import {Outlet} from 'react-router-dom';

const Layout = () => {
  return <div>
    <h1>desde layout</h1>
    <Outlet/> {/**muestra el componente dentro de su ruta */}
  </div>;
};

export default Layout;
