import {useNavigate} from 'react-router-dom';

const Client = ({ client, handleDelete }) => {

    const navigate = useNavigate();

    return (
        <tr className="border-b hover:bg-gray-50">
            <td className="p-3">{client.name}</td>
            <td className="p-3">
                <p>
                    <span className="text-gray-800 uppercase font-bold">Email:</span>{" "}
                    {client.email}
                </p>
                <p>
                    <span className="text-gray-800 uppercase font-bold">Tel:</span>{" "}
                    {client.phone}
                </p>
            </td>
            <td className="p-3">{client.company}</td>
            <td className="p-3">
                <button
                    type="button"
                    className="bg-yellow-500 hover:bg-yellow-600 block w-full text-white p-2 uppercase font-bolf text-xs"
                    onClick={() => navigate(`/${client.id}`)}
                >
                    Ver
                </button>
                <button
                    type="button"
                    className="bg-blue-600 hover:bg-blue-700 block w-full text-white p-2 uppercase font-bolf text-xs mt-3"
                onClick={() => navigate(`/editar/${client.id}`)}
                >
                    Editar
                </button>
                <button
                    type="button"
                    className="bg-red-600 hover:bg-red-700 block w-full text-white p-2 uppercase font-bolf text-xs mt-3"
                onClick={() => handleDelete(client.id)}
                >
                    Eliminar
                </button>
            </td>
        </tr>
    );
};

export default Client;
