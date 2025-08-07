import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./components/Landing/Home";
import About from "./components/Landing/About";
import Works from "./components/Landing/Works";
import Contact from "./components/Landing/Contact";

function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default function Root() {
  return (
    <Router>
      <App />
    </Router>
  );
}
