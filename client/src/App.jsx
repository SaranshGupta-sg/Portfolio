import React from "react";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Projects />
      <Contact />
      <About />
    </div>
  );
};

export default App;
