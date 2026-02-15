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

        <motion.div 
          className="about-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <p>
            I'm a <strong>B.Tech Computer Science Engineering</strong> student with a passion for building 
            full-stack applications and machine learning solutions. My focus lies in creating end-to-end 
            systems that transform raw data into deployable, user-friendly interfaces.
          </p>
          
          <p>
            I work with modern technologies including <strong>React, Node.js, Express, MongoDB, MySQL, 
            and Python</strong> with libraries like scikit-learn for machine learning. My expertise spans 
            from designing model pipelines and creating PCA/UMAP visualizations to building clean, 
            accessible user interfaces that prioritize user experience.
          </p>
          
          <p>
            I specialize in developing <strong>dashboards, recommendation systems, and data-driven tools </strong> 
            that combine powerful backend logic with intuitive frontend design. Whether it's implementing 
            complex ML algorithms or crafting responsive web applications, I'm committed to delivering 
            solutions that are both technically robust and visually appealing.
          </p>
        </motion.div>
      </Reveal>
    </section>
  );
}