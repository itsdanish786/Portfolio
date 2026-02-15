import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const links = [
  { id: "top", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header 
      className="nav"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,.5)" : "0 4px 30px rgba(0,0,0,.3)",
      }}
    >
      <div className="nav-inner">
        <motion.a 
          className="brand" 
          href="#top"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Back to Top
        </motion.a>
        <nav className="nav-links">
          {links.map((l, i) => (
            <motion.a
              key={l.id}
              href={`#${l.id}`}
              className="animated-link"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 + 0.3 }}
              whileHover={{ y: -2 }}
            >
              {l.label}
            </motion.a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}