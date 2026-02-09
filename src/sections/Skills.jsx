const skills = {
  Languages: ["C++", "JavaScript", "C", "Python", "Java", "Kotlin"],
  Frameworks: ["HTML", "CSS", "Selenium", "NumPy"],
  Tools: ["MySQL", "Android Studio", "Anaconda", "Git"],
  "Soft Skills": ["Problem-Solving", "Team Player", "Adaptability", "Time Management", "Leadership"],
};

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <div className="grid">
        {Object.entries(skills).map(([title, items]) => (
          <div className="card" key={title}>
            <h3>{title}</h3>
            <ul>
              {items.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}