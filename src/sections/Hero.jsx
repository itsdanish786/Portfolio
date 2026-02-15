import { motion } from "framer-motion";
import TypingEffect from "../components/TypingEffect";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-row">
        <motion.img
          className="dp"
          src="/profile.jpg"
          alt="Fahad Hussain Danish"
          initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut",
            type: "spring",
            stiffness: 100
          }}
          whileHover={{ 
            scale: 1.08, 
            rotate: 5,
            transition: { duration: 0.3 }
          }}
        />

        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            Fahad Hussain Danish
          </motion.h1>

          <motion.p
            className="muted"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12, ease: "easeOut" }}
          >
            <TypingEffect 
              text="B.Tech CSE • Full Stack + ML Projects • React / Python / Java" 
              speed={50}
            />
          </motion.p>

          <motion.div
            className="btn-row"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.09, delayChildren: 0.18 } },
            }}
          >
            <motion.a
              className="btn"
              href="#projects"
              variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              View Projects
            </motion.a>

            <motion.a
              className="btn primary"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              View Resume
            </motion.a>

            <motion.a
              className="btn"
              href="/resume.pdf"
              download
              variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}