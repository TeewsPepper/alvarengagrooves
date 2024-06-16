import React from "react";
import { render, screen } from "@testing-library/react";
import FirstApp from "./FirstApp";
import { AuthProvider } from "./context/AuthContext"; // Asegúrate de importar AuthProvider correctamente
import { MemoryRouter } from "react-router-dom";
import Modal from "react-modal";

// Configurar el elemento raíz para react-modal
Modal.setAppElement(document.createElement("div"));

test("renders Portada component at the root route", () => {
  // Agregar el elemento root al documento
  const root = document.createElement("div");
  root.id = "root";
  document.body.appendChild(root);

  render(
    <AuthProvider>
      <FirstApp />
    </AuthProvider>,
    { container: document.getElementById("root") } // Especificar el contenedor
  );

  expect(screen.getByText(/AlvarengaGrooves/i)).toBeInTheDocument(); // Cambia el texto según el contenido de tu Portada
});

