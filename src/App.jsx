import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import Particles from "./components/Particles";
import CustomCursor from "./components/CustomCursor";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Resume from "./sections/Resume";
import Contact from "./sections/Contact";
import "./index.css";

export default function App() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Particles />
      <Navbar />
      <main className="container">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />

        <footer className="footer">
          <p>© {new Date().getFullYear()} Fahad Hussain Danish</p>
        </footer>
      </main>
    </>
  );
}
