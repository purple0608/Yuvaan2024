import React from "react";
import "./assets/global.css";
import { Route, Routes } from "react-router-dom";
import Main_page from "./components/Home/Main_page";
import Events from "./components/Events/Events";
import Preview from "./components/Gallery/Preview/Preview";
import Sponsors from "./components/Sponsors/Sponsors";
import Contact from "./components/Contact/Contact";
import Timeline from "./components/Gallery/Timeline/Timeline";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Main_page />} />
        <Route path="events" element={<Events />} />
        <Route path="/timeline" element={ <Timeline />} />  
      <Route path="/gallery" element={ <Preview /> } />
        <Route path="sponsors" element={<Sponsors />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
  );
};
export default App;