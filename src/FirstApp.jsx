

import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";

const Layout = lazy(() => import("./components/layout/Layout"));
const Musica = lazy(() => import("./views/Musica"));
const Portada = lazy(() => import("./views/Portada"));
const Luthier = lazy(() => import("./views/Luthier"));
const Register = lazy(() => import("./views/Register"));
const Blog = lazy(() => import("./views/Blog"));
const BlogPost = lazy(() => import("./views/BlogPost"));
const Login = lazy(() => import("./views/Login"));

const FirstApp = () => {
  return (
    <>
      <AuthProvider>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Portada />} />
                <Route path="musica" element={<Musica />} />
                <Route path="luthier" element={<Luthier />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="blog" element={<ProtectedRoute><Blog /></ProtectedRoute>} />
                <Route path="blog/:id" element={<ProtectedRoute><BlogPost /></ProtectedRoute>} />
              </Route>
            </Routes>
          </Suspense>
        </Router>
      </AuthProvider>
    </>
  );
};

export default FirstApp;

                
                
                  
                    
                  
                
             
