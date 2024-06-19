
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import DOMPurify from "dompurify";
import { useAuth } from "../context/AuthContext";

const Register = () => {

  const { register } = useAuth();
  const navigate = useNavigate();

  const sanitizeInput = (input) => {
    return DOMPurify.sanitize(input);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Email no es válido").required("El email es requerido"),
      username: Yup.string()
        .min(3, "El nombre de usuario debe tener al menos 3 caracteres")
        .required("Se requiere un nombre"),
      password: Yup.string()
        .min(6, "La contraseña debe tener al menos 6 caracteres")
        .required("Debes ingresar una contraseña"),
    }),
    onSubmit: (values) => {
      // Aquí puedes manejar el envío del formulario, por ejemplo, enviar los datos a un servidor
      console.log("Email:", values.email);
      console.log("Username:", values.username);
      console.log("Password:", values.password);
      register(values);
      navigate("/login"); // Redirigir al usuario a la página de inicio de sesión después de registrarse
    },
  });

  return (
    <>
      <div className="portada-container">
        <div className="titulo">
          <Link to="/">
            <h1 className="font-bold opacity-50 text-white">
              AlvarengaGroove
            </h1>
          </Link>
        </div>
      </div>
      <div className="register-container rounded-md text-white font-semibold">
        <h2 className="register-title">Registro</h2>
        <div className="errores">
          <div>
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
          </div>
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
          
            <label htmlFor="email" className="font-medium">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="p-2 border text-black border-gray-300 rounded"
              value={formik.values.email}
              onChange={(e) =>
                formik.setFieldValue("email", sanitizeInput(e.target.value))
              }
              onBlur={formik.handleBlur}
              required
            />
            
          
          
            <label htmlFor="username" className="block font-medium label">
              Nombre:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="p-2 border text-black border-gray-300 rounded"
              value={formik.values.username}
              onChange={(e) =>
                formik.setFieldValue("username", sanitizeInput(e.target.value))
              }
              onBlur={formik.handleBlur}
              required
            />
          
          
            <label htmlFor="password" className="block font-medium label">
              Clave:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="p-2 border text-black border-gray-300 rounded"
              value={formik.values.password}
              onChange={(e) =>
                formik.setFieldValue("password", sanitizeInput(e.target.value))
              }
              onBlur={formik.handleBlur}
              autoComplete="off"
              required
            />
          
          <button type="submit" className="btn-form">
            Enviar
          </button>
        </form>
        <div>
          <p className="mt-4 parrafo-register">
            ¿Ya tienes una cuenta? Ingresa{" "}
            <Link to="/login" className="underline text-blue-400">
              Aquí
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
