import React from "react";
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
      username: Yup.string()
        .required("El nombre de usuario es requerido")
        .min(4, "El nombre debe tener al menos 4 caracteres"),
      password: Yup.string()
        .required("Se requiere contraseña")
        .min(6, "La clave debe tener al menos 6 carácteres"),
    }),
    onSubmit: async (values) => {
      try {
        await login(values.username, values.password);
        navigate("/blog");
      } catch (error) {
        console.error("Error al iniciar sesión:", error);
      }
    },
  });

  return (
    <>
      <div className="login-container">
        <h3>Ingresar</h3>

        <form className="formulario" onSubmit={formik.handleSubmit}>
          <label htmlFor="username">Usuario:</label>
          <input
            className=""
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
            className=""
            type="password"
            id="password"
            name="password"
            value={formik.values.password}
            onChange={(e) =>
              formik.setFieldValue("password", sanitizeInput(e.target.value))
            }
            onBlur={formik.handleBlur}
          />
          
           
            <p className="login-parrafo">
              No eres un usuario registrado? Crea una cuenta{" "}
              <Link to="/register">
                Aquí
              </Link>
            </p>
            <button className="btn-form" type="submit">
              Entrar
            </button>
          

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
        </form>
      </div>
    </>
  );
};

export default Login;
