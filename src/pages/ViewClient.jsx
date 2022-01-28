import { useParams } from "react-router-dom"; //este lee los parametros de mi url, ese id dinamico
import Spinner from "../components/Spinner";
import useGetClients from "../hooks/useGetClients";

const VierClient = () => {
  const params = useParams();
  const API = `http://localhost:4000/clients/${params.id}`;
  const [client, loading] = useGetClients(API);

  return (
    <>
      {!loading ? (
        <Spinner />
      ) : Object.keys(client).length === 0 ? (
        <p>No hay resultados</p>
      ) : (
        <>
          <h1 className="font-black text-4xl text-blue-900">
            Ver cliente: {client.name}
          </h1>
          <p className="mt-3">Información del cliente</p>
          {client.name && (
            <p className="text-4xl text-gray-600 mt-10">
              <span className="text-gray-800 uppercase font-bold">
                Cliente:
              </span>{" "}
              {client.name}
            </p>
          )}

          {client.email && (
            <p className="text-2xl text-gray-600 mt-4">
              <span className="text-gray-800 uppercase font-bold">Email:</span>{" "}
              {client.email}
            </p>
          )}

          {client.phone && (
            <p className="text-2xl text-gray-600 mt-4">
              <span className="text-gray-800 uppercase font-bold">
                Teléfono:
              </span>{" "}
              {client.phone}
            </p>
          )}

          {client.company && (
            <p className="text-2xl text-gray-600 mt-4">
              <span className="text-gray-800 uppercase font-bold">
                Empresa:
              </span>{" "}
              {client.company}
            </p>
          )}

          {client.notes && (
            <p className="text-2xl text-gray-600 mt-4">
              <span className="text-gray-800 uppercase font-bold">Notas:</span>{" "}
              {client.notes}
            </p>
          )}
        </>
      )}
    </>
  );
};

export default VierClient;
