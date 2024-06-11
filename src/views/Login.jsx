

import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import DOMPurify from "dompurify";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const sanitizeInput = (input) => {
    return DOMPurify.sanitize(input);
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("El nombre de usuario es requerido")
                            .min(4, 'El nombre debe tener al menos 4 caracteres'),
      password: Yup.string()
        .required("Se requiere contraseña")
        .min(6, "La clave debe tener al menos 6 carácteres"),
    }),
    onSubmit: (values) => {
      // Aquí puedes agregar lógica de autenticación real
      login();
      navigate("/blog"); // Redirigir al usuario a la página del blog después de iniciar sesión
    },
  });

  return (
    <>
      <div className="portada-container">
        <div className="titulo">
          <Link to="/">
            <h1 className="font-bold opacity-50">
              <span className="text-white">Al</span>
              <span className="text-white">
                va<span className="text-white">ren</span>
              </span>
              <span className="text-white">ga</span>
              <span className="text-white">Groo</span>
              <span className="text-white">Ve</span>
            </h1>
          </Link>
        </div>
      </div>

      <div className="login-container rounded-md text-white font-semibold m-auto ">
        <h1 className="login-title">Ingresar</h1>
        <div className="errores">
          <div>
            {formik.touched.username && formik.errors.username ? (
              <div className="error">{formik.errors.username}</div>
            ) : null}
          </div>
          <div>
            {formik.touched.password && formik.errors.password ? (
              <div className="error">{formik.errors.password}</div>
            ) : null}
          </div>
        </div>

        <form className="formulario" onSubmit={formik.handleSubmit}>
          
            <label htmlFor="username">Usuario:</label>
            <input
              className="p-1 border text-black border-gray-300 rounded"
              type="text"
              id="username"
              name="username"
              value={formik.values.username}
              onChange={(e) =>
                formik.setFieldValue("username", sanitizeInput(e.target.value))
              }
              onBlur={formik.handleBlur}
            />
          
          
            <label className="label" htmlFor="password">
              Clave:
            </label>
            <input
              className="p-1 border text-black border-gray-300 rounded"
              type="password"
              id="password"
              name="password"
              value={formik.values.password}
              onChange={(e) =>
                formik.setFieldValue("password", sanitizeInput(e.target.value))
              }
              onBlur={formik.handleBlur}
            />
          
          <button className="btn-form" type="submit">
            Entrar
          </button>
        </form>
        <div>
          <p className="mt-4 login-parrafo">
            No eres un usuario registrado? Crea una cuenta{" "}
            <Link to="/register" className="underline text-blue-400">
              Aquí
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;



