import "./App.css";
import Fireflies from "./Firefly";
import { useEffect } from "react";
import { Route,Routes } from "react-router-dom";
import Timeline from "./components/Gallery/Timeline/Timeline";
import Preview from "./components/Gallery/Preview/Preview";
import Navbar from "./components/Navbar/Navbar";

function App() {

  useEffect(() => {
    Fireflies();
  }, []);
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/timeline" element={ <Timeline />} />  
      <Route path="/gallery" element={ <Preview /> } />
    </Routes>
    </>
  );
}

export default App;
