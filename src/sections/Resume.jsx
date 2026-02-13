import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section id="resume" className="section">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Resume
      </motion.h2>
      <motion.p 
        className="muted"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        You can view or download my resume below.
      </motion.p>

      <motion.div 
        className="btn-row"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <motion.a
          className="btn"
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          whileHover={{ y: -2, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Resume
        </motion.a>
        <motion.a
          className="btn primary"
          href="/resume.pdf"
          download
          whileHover={{ y: -2, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Download Resume
        </motion.a>
      </motion.div>
    </section>
  );
}