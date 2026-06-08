const skills = [
    "HTML",
    "CSS / SCSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "WordPress",
    "WooCommerce",
    "Git",
    "GitHub",
    "Figma",
    "Axios",
    "TanStack Query",
    "REST API",
    "VS Code",
    "Node.js",
  ];
  
  export default function Skills() {
    return (
      <section className="section skills-section" id="skills">
        <div className="container">
          <p className="section-label">My Skills</p>
          <h2 className="section-title">Skills & Technologies</h2>
  
          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill}>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }