import { useParams } from "react-router-dom";
import FormClient from '../components/FormClient';
import useGetClients from "../hooks/useGetClients";

const EditClient = () => {
  const params = useParams();
  const API = `${import.meta.env.VITE_API_URL}/${params.id}`;
  const {clients, loading} = useGetClients(API);
  return (<>
    <h1 className="font-black text-4xl text-blue-900">Editar cliente</h1>
    <p className="mt-3">Utiliza este formulario para editar un cliente</p>
    {clients?.name ? (<FormClient client={clients} loading={loading}/>) : <p>Clieente ID no válido</p>}
    
    </>)
};

export default EditClient;
