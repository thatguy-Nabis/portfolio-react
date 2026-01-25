import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import useScrollReveal from "./hooks/useScrollReveal";

const App = () => {
  useScrollReveal();

  return (
    <>
      <Navbar />

      <main className="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default App;
