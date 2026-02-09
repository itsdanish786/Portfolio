const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <a className="brand" href="#top">#topDanish</a>
        <nav className="nav-links">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`}>{l.label}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}