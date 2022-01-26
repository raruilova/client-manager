import FormClient from '../components/FormClient';

const NewClient = () => {
  return (<>
  <h1 className="font-black text-4xl text-blue-900">Nuevo cliente</h1>
  <p className="mt-3">Llena los campos para registrar un cliente</p>
  <FormClient/>
  </>)
};

export default NewClient;
