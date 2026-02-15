import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import Particles from "./components/Particles";
import CustomCursor from "./components/CustomCursor";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import ResumeAnchor from "./sections/ResumeAnchor";
import Contact from "./sections/Contact";
import "./index.css";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen 
            key="loading"
            onLoadingComplete={() => setIsLoading(false)} 
          />
        ) : (
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
              <ResumeAnchor />
              <Contact />

              <footer className="footer">
                <p>© {new Date().getFullYear()} Fahad Hussain Danish</p>
              </footer>
            </main>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
