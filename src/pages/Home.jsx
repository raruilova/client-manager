import Client from "../components/Client";
import useGetClients from "../hooks/useGetClients";

const Home = () => {
  const API = "http://localhost:4000/clients";

  const [clients] = useGetClients(API);
  console.log(clients);

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
            <Client key={client.id} client={client} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
