import { Formik, Form, Field } from "formik";
import * as Yup from "yup"; //para validaciones mas potentes
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";
import Spinner from "./Spinner";

const FormClient = ({ client, loading }) => {
 
  const navigate = useNavigate();
  const newClientShema = Yup.object().shape({
    name: Yup.string()
      .min(3, "El nombre es muy corto")
      .max(30, "El nombre es muy largo")
      .required("El nombre del cliente es obligatorio"),
    company: Yup.string().required("El nombre de la empresa es obligatorio"),
    email: Yup.string()
      .email("Email no válido")
      .required("El email es obligatorio"),
    phone: Yup.number()
      .positive("Número no válido")
      .integer("Número no válido")
      .typeError("El número no es válido"), //va ese typeError ya que no me deja escribir el error como los anteriores
  });

  const handleSubmit = async (values) => {
    //los values es como obtengo los datos escritos en los campos

    try {
      let response;
      if (client.id) {
        //editanto registro
        const url = `${import.meta.env.VITE_API_URL}/${client.id}`;
        response = await fetch(url, {
          method: "PUT",
          body: JSON.stringify(values), //json-server se envia el objeto en string
          //structura para las peticiones de json-server
          headers: {
            "Content-Type": "application/json",
          },
        });
      } else {
        //nuevo registro
        const url = import.meta.env.VITE_API_URL;
        response = await fetch(url, {
          method: "POST",
          body: JSON.stringify(values), //json-server se envia el objeto en string
          //structura para las peticiones de json-server
          headers: {
            "Content-Type": "application/json",
          },
        });
      }
      await response.json();
      navigate("/clientes");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
      <h1 className="text-gray-600 font-bold text-xl uppdercase text-center">
        {client?.name ? "Editar cliente" : "Agregar cliente"}
      </h1>
      <Formik
        initialValues={{
          name: client.name || "",
          company: client.company || "",
          email: client.email || "",
          phone: client.phone || "",
          notes: client.notes || "",
        }}
        enableReinitialize={true} //para colocar los datos en el formulario para editar
        onSubmit={async (values, { resetForm }) => {
          await handleSubmit(values);
          resetForm();
        }}
        validationSchema={newClientShema} //lo conecto con yup y lo valida
      >
        {/**debe ser asi para que en los inputs no aparezca Objetc, colocar el name */}
        {({ errors, touched }) => {
          //esos errors lo obtengo del formik, puedo consultar sus datos imprimiedno su data, sin destructurar

          return !loading ? (
            <Spinner />
          ) : (
            <Form className="mt-10">
              <div className="mb-4">
                <label htmlFor="name" className="text-gray-800">
                  Nombre
                </label>
                <Field
                  id="name"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="Nombre del cliente"
                  type="text"
                  name="name"
                />
                {errors.name && touched.name ? (
                  <Alert>{errors.name}</Alert>
                ) : null}
              </div>
              <div className="mb-4">
                <label htmlFor="company" className="text-gray-800">
                  Empresa
                </label>
                <Field
                  id="company"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="Nombre de la empresa"
                  type="text"
                  name="company"
                />
                {errors.company && touched.company ? (
                  <Alert>{errors.company}</Alert>
                ) : null}
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="text-gray-800">
                  Email
                </label>
                <Field
                  id="email"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="Email del la cliente"
                  type="email"
                  name="email"
                />
                {errors.email && touched.email ? (
                  <Alert>{errors.email}</Alert>
                ) : null}
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="text-gray-800">
                  Teléfono
                </label>
                <Field
                  id="phone"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="Teléfono del cliente"
                  type="tel"
                  name="phone"
                />
                {errors.phone && touched.phone ? (
                  <Alert>{errors.phone}</Alert>
                ) : null}
              </div>
              <div className="mb-4">
                <label htmlFor="notes" className="text-gray-800">
                  Notas
                </label>
                <Field
                  as="textarea"
                  id="notes"
                  className="mt-2 block w-full p-3 bg-gray-50 h-40"
                  placeholder="Notas del cliente"
                  type="text"
                  name="notes"
                />
              </div>
              <input
                type="submit"
                value={client?.name ? "Editar cliente" : "Agregar cliente"}
                className="mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg"
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
//default props ---- asi evito pasar props a un componente cuando no lo necesito, si esta los paso y si no, los toma de aqui
FormClient.defaultProps = {
  client: {},
  loading: true,
};

export default FormClient;
