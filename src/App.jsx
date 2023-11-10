// import "./assets/global.css";
// import Main_page from "./components/Home/Main_page"; function App() {
//   return (
//     <>
//     <Main_page/>40ead0330fb5c53d9cd33bca49f0b2288b72:src/App.tsx
//     </>
//   )
// }

// export default App;
// App.jsx
// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Main_page from "./components/Home/Main_page";
import Events from "./components/Events/Events";
import Gallery from "./components/Gallery/Gallery";
import { data } from "./assets/utils/NavbarData";




const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main_page />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
};
export default App;

