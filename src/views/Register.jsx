/* import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviar los datos a un servidor
    console.log('Email:', email);
    console.log('Username:', username);
    console.log('Password:', password);
  };
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
      <div className="register-container  rounded-md text-white font-semibold">
        <h1 className="mb-3 title-register">Registro</h1>
        <form className="formulario" onSubmit={handleSubmit}>
          <div className="flex items-center gap-2">
            <label htmlFor="email" className="block  font-medium ml-3">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="p-2 border text-black border-gray-300 rounded ml-1"
              required
            />
          </div>
          <div className="flex items-center gap-2">
            <label
              htmlFor="username"
              className="block font-medium "
            >
              Nombre:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="p-2 border text-black border-gray-300 rounded"
              required
            />
          </div>
          <div className="flex items-center gap-2">
            <label
              htmlFor="password"
              className="block  font-medium ml-4"
            >
              Clave:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="p-2 border text-black border-gray-300 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="btn-form"
          >
            Enviar
          </button>
        </form>
        <div>
          <p className="mt-4 parrafo-register">
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

export default Register;
 */
/* import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validateForm = () => {
    let formErrors = {};
    if (!validateEmail(email)) {
      formErrors.email = "Email no es válido";
    }
    if (username.length < 3) {
      formErrors.username =
        "El nombre de usuario debe tener al menos 3 caracteres";
    }
    if (password.length < 6) {
      formErrors.password = "La contraseña debe tener al menos 6 caracteres";
    }
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Aquí puedes manejar el envío del formulario, por ejemplo, enviar los datos a un servidor
      console.log("Email:", email);
      console.log("Username:", username);
      console.log("Password:", password);
    }
  };

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
      <div className="register-container rounded-md text-white font-semibold">
        <h1 className="mb-3 title-register">Registro</h1>
        <div className="errores">
            {errors.email && <p>{errors.email}</p>}
            {errors.username && (
              <p>{errors.username}</p>
            )}
            {errors.password && (
              <p>{errors.password}</p>
            )}
          </div>
        <form className="formulario" onSubmit={handleSubmit}>
          <div className="flex items-center gap-2">
            <label htmlFor="email" className="block font-medium ml-3">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="p-2 border text-black border-gray-300 rounded ml-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="username" className="block font-medium">
              Nombre:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="p-2 border text-black border-gray-300 rounded"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="password" className="block font-medium ml-4">
              Clave:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="p-2 border text-black border-gray-300 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
         
          <button type="submit" className="btn-form">
            Enviar
          </button>
        </form>
        <div>
          <p className="mt-4 parrafo-register">
            ¿Ya tienes una cuenta? Ingresa{" "}
            <Link to="/login" className="underline text-blue-400">
              aquí
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register; */

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
      <div className="register-container rounded-md text-white font-semibold">
        <h1 className="register-title">Registro</h1>
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
