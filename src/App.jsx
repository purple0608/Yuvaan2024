import React from "react";
import "./assets/global.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main_page from "./components/Home/Main_page";
import Events from "./components/Events/Events";
import Gallery from "./components/Gallery/Gallery";
import Sponsors from "./components/Sponsors/Sponsors";


const App = () => {
  return (
    <Router basename="Yuvaan2024">
      <Routes>
        <Route path="Yuvaan2024/" element={<Main_page />} />
        <Route path="Yuvaan2024/sponsors" element={<Sponsors />} />
        <Route path="Yuvaan2024/events" element={<Events />} />
        <Route path="Yuvaan2024/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
};
export default App;

