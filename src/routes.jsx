import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Accomodation from "./pages/Accomodation/Accomodation";
import Support from "./pages/support/Support";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/accomodation" element={<Accomodation />} />
      <Route path="/support" element={<Support />} />
    </Routes>
  );
};

export default AppRoutes;
