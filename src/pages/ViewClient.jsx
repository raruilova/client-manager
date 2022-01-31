import { useParams } from "react-router-dom"; //este lee los parametros de mi url, ese id dinamico
import Spinner from "../components/Spinner";
import useGetClients from "../hooks/useGetClients";

const VierClient = () => {
  const params = useParams();
  const API = `${import.meta.env.VITE_API_URL}/${params.id}`;
  const {clients, loading} = useGetClients(API);
  console.log(clients);

  return (
    <>
      {!loading ? (
        <Spinner />
      ) : Object.keys(clients).length === 0 ? (
        <p>No hay resultados</p>
      ) : (
        <>
          <h1 className="font-black text-4xl text-blue-900">
            Ver cliente: {clients.name}
          </h1>
          <p className="mt-3">Información del cliente</p>
          {clients.name && (
            <p className="text-4xl text-gray-600 mt-10">
              <span className="text-gray-800 uppercase font-bold">
                Cliente:
              </span>{" "}
              {clients.name}
            </p>
          )}

          {clients.email && (
            <p className="text-2xl text-gray-600 mt-4">
              <span className="text-gray-800 uppercase font-bold">Email:</span>{" "}
              {clients.email}
            </p>
          )}

          {clients.phone && (
            <p className="text-2xl text-gray-600 mt-4">
              <span className="text-gray-800 uppercase font-bold">
                Teléfono:
              </span>{" "}
              {clients.phone}
            </p>
          )}

          {clients.company && (
            <p className="text-2xl text-gray-600 mt-4">
              <span className="text-gray-800 uppercase font-bold">
                Empresa:
              </span>{" "}
              {clients.company}
            </p>
          )}

          {clients.notes && (
            <p className="text-2xl text-gray-600 mt-4">
              <span className="text-gray-800 uppercase font-bold">Notas:</span>{" "}
              {clients.notes}
            </p>
          )}
        </>
      )}
    </>
  );
};

export default VierClient;
