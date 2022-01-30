import Client from "../components/Client";
import useGetClients from "../hooks/useGetClients";

const Home = () => {
  const API = "http://localhost:4000/clients";

  const {clients, setClients} = useGetClients(API);
  
  const handleDelete = async (id) => {
    const confirmDeleteClient = confirm("¿Estás seguro de eliminar este cliente?"); //devuelve true al pulsar aceptar y false al pulsar cancelar

    if (confirmDeleteClient) {
      const API = `http://localhost:4000/clients/${id}`;
      const response = await fetch(API, {
        method: "DELETE",
      });

      await response.json();

      //location.reload(); recarga la pagina donde este ubicado 
      const clientsArray = clients.filter((client) => client.id !== id);
      setClients(clientsArray);
    }
  }

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
      <p className="mt-3">Administra tus clientes</p>
      <table className="w-full mt-5 table-auto shadow bg-white">
        <thead className="bg-blue-800 text-white">
          <tr>
            <th className="p-2">Nombre</th>
            <th className="p-2">Contacto</th>
            <th className="p-2">Empresa</th>
            <th className="p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <Client key={client.id} client={client} handleDelete={handleDelete} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
