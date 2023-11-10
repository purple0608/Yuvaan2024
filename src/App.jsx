import React from "react";
import "./assets/global.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main_page from "./components/Home/Main_page";
import Events from "./components/Events/Events";
import Gallery from "./components/Gallery/Gallery";
import Sponsors from "./components/Sponsors/Sponsors";





const App = () => {
  return (
    <Router >
      <Routes>
        <Route path="/" element={<Main_page />} />
        <Route path="events" element={<Events />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="sponsors" element={<Sponsors />} />
      </Routes>
    </Router>
  );
};
export default App;

