import React from "react";
import "./assets/global.css";
import { Route, Routes } from "react-router-dom";
import Main_page from "./components/Home/Main_page";
import Events from "./components/Events/Events";
import Gallery from "./components/Gallery/Gallery";
import Sponsors from "./components/Sponsors/Sponsors";
import Contact from "./components/Contact/Contact";





const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Main_page />} />
        <Route path="events" element={<Events />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="sponsors" element={<Sponsors />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
  );
};
export default App;

