import { motion } from "framer-motion";
import Reveal from "../components/Reveal";

export default function About() {
  return (
    <section id="about" className="section">
      <Reveal>
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About
        </motion.h2>

        <motion.ul 
          className="about-list"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
        >
          {[
            { label: "Focus", text: "Full‑stack & applied ML — from dataset to deployable UI." },
            { label: "Stack", text: "React, Node/Express, MongoDB/MySQL, Python (scikit‑learn)." },
            { label: "Strengths", text: "Model pipelines, PCA/UMAP visualizations, clean & accessible UI." },
            { label: "What I build", text: "Dashboards, recommendation systems, and data tools with clear UX." }
          ].map((item, i) => (
            <motion.li
              key={i}
              variants={{
                hidden: { opacity: 0, x: -20 },
                show: { opacity: 1, x: 0 }
              }}
            >
              <strong>{item.label}:</strong> {item.text}
            </motion.li>
          ))}
        </motion.ul>
      </Reveal>
    </section>
  );
}