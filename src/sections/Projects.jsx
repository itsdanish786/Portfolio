const projects = [
  {
    title: "Student Career Recommendation System",
    desc: "Full-stack ML career recommendation using RIASEC, PCA/UMAP visualizations and clustering.",
    tech: ["React", "Express", "MongoDB", "Python", "Scikit-learn"],
    github: "https://github.com/itsdanish786/Student-Career-Recommendation-System",
    live: "https://student-career-recommendation-system.vercel.app/",
  },
  {
    title: "Census Of Groundwater Structure",
    desc: "ML prediction system on 15,000+ records with pipelines and risk classification.",
    tech: ["Python", "SQL", "Pandas", "NumPy", "Scikit-learn"],
    github: "https://github.com/itsdanish786/CENSUS-OF-GROUNDWATER-STRUCTURE",
    live: "https://drive.google.com/drive/u/2/folders/1H4tsVJs4Bn2PZdOajkV4rFKE9gzM-LKZ",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="grid">
        {projects.map((p) => (
          <div className="card" key={p.title}>
            <h3>{p.title}</h3>
            <p className="muted">{p.desc}</p>

            <div className="tags">
              {p.tech.map((t) => <span className="tag" key={t}>{t}</span>)}
            </div>

            <div className="btn-row">
              <a className="btn" href={p.github} target="_blank" rel="noreferrer">GitHub</a>
              <a className="btn primary" href={p.live} target="_blank" rel="noreferrer">Live</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}