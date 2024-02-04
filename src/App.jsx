import React, { useEffect, lazy, Suspense } from "react";
import "./assets/global.css";
import { Route, Routes } from "react-router-dom";
import Main_page from "./components/Home/Main_page";
import Events from "./components/Events/Events";
import Preview from "./components/Gallery/Preview/Preview";
import Sponsors from "./components/Sponsors/Sponsors";
import Contact from "./components/Contact/Contact";
import Timeline from "./components/Gallery/Timeline/Timeline";
import NavBar from "./components/Navbar/Navbar";
import "./App.css";
import Fireflies from "./Firefly";
import Flipbook from "./components/Team/BookStack";

// Dynamic imports for team components
const Web_Cre = lazy(() => import("./components/Team/WebAndCreatives/team"));
const Mdia_Pub = lazy(() => import("./components/Team/MediaAndPublicity/team"));
const Spons = lazy(() => import("./components/Team/Sponsorship/team"));
const Fac_Adv = lazy(() => import("./components/Team/FacultyAdvisors/team"));
const SGC = lazy(() => import("./components/Team/SGC/team"));
const Evnt_Mngment = lazy(() => import("./components/Team/EventManagment/team"));
const PCR = lazy(() => import("./components/Team/PCR/team"));

const App = () => {
  useEffect(() => {
    Fireflies();
  }, []);

  return (
    <>
      <NavBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Main_page />} />
          <Route path="events" element={<Events />} />
          <Route path="timeline" element={<Timeline />} />
          <Route path="gallery" element={<Preview />} />
          <Route path="sponsors" element={<Sponsors />} />
          <Route path="contact" element={<Contact />} />
          <Route path="teams/*" element={<Flipbook />} />
          <Route path="teams/web-creatives" element={<Web_Cre />} />
          <Route path="teams/media-publicity" element={<Mdia_Pub />} />
          <Route path="teams/sponsorship" element={<Spons />} />
          <Route path="teams/faculty-advisors" element={<Fac_Adv />} />
          <Route path="teams/student-gymkhana-council" element={<SGC />} />
          <Route path="teams/event-management" element={<Evnt_Mngment />} />
          <Route path="teams/public-relation" element={<PCR />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
