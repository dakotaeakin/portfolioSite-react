import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages";
import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </>
  );
}

export default App;
