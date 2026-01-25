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

      {/* Scroll container */}
      <main className="main">
        <Hero />
        <About />
        <Skills />
        <Education />
        {/* Divider between Projects & Education */}
        <div className="section-divider" />

        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default App;
