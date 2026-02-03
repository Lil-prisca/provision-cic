// import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import AppRoutes from "./routes";

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return <AppRoutes />;
}

export default App;
