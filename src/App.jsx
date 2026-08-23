import Cursor from "./components/Cursor";
import Navigation from "./components/Navigation";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import WhatIDo from "./pages/WhatIDo";

const App = () => {
  return (
    <>
      <Navigation />
      <Cursor />

      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="whatido">
        <WhatIDo />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default App;