import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-row">
        <motion.img
          className="dp"
          src="/profile.jpg"
          alt="Fahad Hussain Danish"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          whileHover={{ scale: 1.04, rotate: -1 }}
        />

        <div>
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
            B.Tech CSE • Full Stack + ML Projects • React / Python / Java
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
              className="btn"
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
              className="btn primary"
              href="/resume.pdf"
              download
              variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Download Resume
            </motion.a>
          </motion.div>

          <motion.div
            className="link-row"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.5 }}
          >
            <a href="mailto:fahad.12325061@lpu.in">fahad.12325061@lpu.in</a>
            <a href="https://www.linkedin.com/in/itsdanish786/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/itsdanish786/" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}