import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import BlogPost from "./BlogPost";
import blogPosts from "../data/blogData";

const renderWithRouter = (ui, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);
  return render(
    <MemoryRouter initialEntries={[route]}>
      <Routes>
        <Route path="/blog/:id" element={ui} />
      </Routes>
    </MemoryRouter>
  );
};

describe("BlogPost component", () => {
  test("renderiza el post existente correctamente", () => {
    const post = blogPosts[0];
    renderWithRouter(<BlogPost />, { route: `/blog/${post.id}` });

    expect(screen.getByText(post.title)).toBeInTheDocument();
    expect(screen.getByText(post.description)).toBeInTheDocument();
    expect(screen.getByAltText(post.title)).toBeInTheDocument();
    expect(screen.getByText(post.content)).toBeInTheDocument();
  });

  test("muestra 'Post no encontrado' cuando el post no existe", () => {
    renderWithRouter(<BlogPost />, { route: `/blog/999` });

    expect(screen.getByText(/Post no encontrado/i)).toBeInTheDocument();
  });
});
