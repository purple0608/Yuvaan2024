import React from "react";
import "./assets/global.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main_page from "./components/Home/Main_page";
import Events from "./components/Events/Events";
import Gallery from "./components/Gallery/Gallery";




const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main_page />} />
        <Route path="events" element={<Events />} />
        <Route path="gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
};
export default App;

