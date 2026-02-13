import { motion } from "framer-motion";

const skills = {
  Languages: ["C++", "JavaScript", "C", "Python", "Java", "Kotlin"],
  Frameworks: ["HTML", "CSS", "Selenium", "NumPy"],
  Tools: ["MySQL", "Android Studio", "Anaconda", "Git"],
  "Soft Skills": ["Problem-Solving", "Team Player", "Adaptability", "Time Management", "Leadership"],
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    }
  },
};

export default function Skills() {
  return (
    <section id="skills" className="section">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h2>
      <motion.div 
        className="grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {Object.entries(skills).map(([title, items]) => (
          <motion.div 
            className="card skill-card" 
            key={title}
            variants={cardVariants}
            whileHover={{ 
              y: -8, 
              scale: 1.03,
              transition: { duration: 0.2 }
            }}
          >
            <h3>{title}</h3>
            <ul>
              {items.map((i, idx) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                >
                  {i}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}