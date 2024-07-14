import React from "react";
import "./styles/app.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Logement from "./pages/Logement";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<Logement />} />
        {/* id = paramètre de route dynamique, fonction de la valeur de l'URL */}
        <Route path="*" element={<NotFound />} />
        {/* * = toutes les routes non définies dans l'app */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
