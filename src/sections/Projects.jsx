import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "Student Career Recommendation System",
    desc: "Full-stack ML career recommendation using RIASEC, PCA/UMAP visualizations and clustering.",
    tech: ["React", "Express", "MongoDB", "Python", "Scikit-learn"],
    github: "https://github.com/itsdanish786/Student-Career-Recommendation-System",
    live: "https://student-career-recommendation-system.vercel.app/",
    image: "/projects/career.png",
  },
  {
    title: "Census Of Groundwater Structure",
    desc: "ML prediction system on 15,000+ records with pipelines and risk classification.",
    tech: ["Python", "SQL", "Pandas", "NumPy", "Scikit-learn"],
    github: "https://github.com/itsdanish786/CENSUS-OF-GROUNDWATER-STRUCTURE",
    live: "https://drive.google.com/drive/u/2/folders/1H4tsVJs4Bn2PZdOajkV4rFKE9gzM-LKZ",
    image: "/projects/groundwater.png",
  },
];

function ProjectCard({ project, index }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 20;
    const y = (e.clientY - rect.top - rect.height / 2) / 20;
    setMousePosition({ x, y });
  };

  return (
    <motion.div
      className="card project-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      style={{
        transform: isHovering
          ? `perspective(1000px) rotateX(${-mousePosition.y}deg) rotateY(${mousePosition.x}deg) translateZ(10px)`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg)",
        transition: "transform 0.1s ease-out",
      }}
    >
      {project.image && (
        <motion.img
          className="project-img"
          src={project.image}
          alt={project.title}
          loading="lazy"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      )}

      <h3>{project.title}</h3>
      <p className="muted">{project.desc}</p>

      <div className="tags">
        {project.tech.map((t, i) => (
          <motion.span
            className="tag"
            key={t}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.05 }}
            whileHover={{ scale: 1.1, y: -2 }}
          >
            {t}
          </motion.span>
        ))}
      </div>

      <div className="btn-row">
        <motion.a
          className="btn"
          href={project.github}
          target="_blank"
          rel="noreferrer"
          whileHover={{ y: -2, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          GitHub
        </motion.a>
        <motion.a
          className="btn primary"
          href={project.live}
          target="_blank"
          rel="noreferrer"
          whileHover={{ y: -2, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Live
        </motion.a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>

      <div className="grid">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}