
  import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ScrollToTopButton from "./ScrollToTopButton";

describe("ScrollToTopButton component", () => {
  test("se renderiza el botón cuando showScrollToTopButton es true", async () => {
    render(<ScrollToTopButton />);

      // Simular una posición de scroll mayor a 200
      window.scrollY = 250;
      fireEvent.scroll(window);

  await waitFor(() => {
      const button = screen.getByRole("button", { name: /Ir al inicio/i });
      expect(button).toBeInTheDocument();
    });
  });

  test("no se renderiza el botón cuando showScrollToTopButton es false", () => {
    render(<ScrollToTopButton />);
    // Simulamos una posición de scroll menor a 200
    window.scrollY = 100;
    fireEvent.scroll(window);
    const button = screen.queryByRole("button", { name: /Ir al inicio/i });
    expect(button).toBeNull();
  });

  test("llama a scrollToTop cuando se hace clic en el botón", () => {
    render(<ScrollToTopButton />);
    const scrollToTopMock = jest.fn();
    window.scrollTo = scrollToTopMock;
    
    // Simulamos una posición de scroll mayor a 200
    window.scrollY = 250;
    fireEvent.scroll(window);
    
    // Hacemos clic en el botón
    const button = screen.getByRole("button", { name: /Ir al inicio/i });
    fireEvent.click(button);

    // Verificamos que la función scrollToTop se haya llamado
    expect(scrollToTopMock).toHaveBeenCalledTimes(1);
  });
});



