export default function Resume() {
  return (
    <section id="resume" className="section">
      <h2>Resume</h2>
      <p className="muted">You can view or download my resume below.</p>

      <div className="btn-row">
        <a className="btn" href="/resume.pdf" target="_blank" rel="noreferrer">
          View Resume
        </a>
        <a className="btn primary" href="/resume.pdf" download>
          Download Resume
        </a>
      </div>
    </section>
  );
}