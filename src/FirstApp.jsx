import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Musica from "./views/Musica";
import Portada from "./views/Portada";
import Luthier from "./views/Luthier";
import Register from "./views/Register";
import Blog from "./views/Blog";
import BlogPost from "./views/BlogPost";
import Login from "./views/Login";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";

const FirstApp = () => {
  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Portada />} />
              <Route path="musica" element={<Musica />} />
              <Route path="luthier" element={<Luthier />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="blog" element={<ProtectedRoute> <Blog /></ProtectedRoute>}/>
              <Route path="blog/:id"element={ <ProtectedRoute> <BlogPost /> </ProtectedRoute>} />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
};

export default FirstApp;
                
                
                  
                    
                  
                
             
