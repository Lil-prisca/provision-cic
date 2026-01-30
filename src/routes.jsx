import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Accomodation from "./pages/Accomodation/Accomodation";
import Support from "./pages/support/Support";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import TermsAndCondition from "./pages/TermsAndCondition/TermsAndCondition";
import Faq from "./pages/Faq/Faq";
import Event from "./pages/Events/Event";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/accomodation" element={<Accomodation />} />
      <Route path="/support" element={<Support />} />
      <Route path="/events" element={<Event />} />
      <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      <Route path="/termsandcondition" element={<TermsAndCondition />} />
      <Route path="/faq" element={<Faq />} />
    </Routes>
  );
};

export default AppRoutes;
