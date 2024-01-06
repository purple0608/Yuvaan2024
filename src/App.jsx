import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import Preview from "./components/Gallery/Preview/Preview";
import Timeline from "./components/Gallery/Timeline/Timeline";

const App = () => {
  return (
    <>
      <NavBar />;
      <Routes>
        <Route path="/gallery" element={<Preview />} />
        <Route path="/timeline" element={<Timeline />} />
      </Routes>
    </>
  );
};

export default App;
