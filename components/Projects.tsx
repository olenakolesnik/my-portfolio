import Link from "next/link";

const projects = [
    {
      number: "01",
      title: "SKSport",
      description:
        "Custom WooCommerce store for combat sports equipment. Built from scratch with custom theme, product filtering, wishlist, cart and SEO optimization.",
      image: "/images/project-sksport.png",
      tags: ["WordPress", "WooCommerce", "PHP", "SEO"],
      link: "https://sksport.in.ua",
    },
    {
      number: "02",
      title: "FocusFrame — Photography Website",
      description:
        "Responsive photography website with image gallery, category filtering, adaptive layout and modern UI.",
      image: "/images/project-photograph.png",
      tags: ["JavaScript", "HTML", "SCSS", "Responsive Design", "UI/UX", "Adaptive Layout"],
      link: "https://olenakolesnik.github.io/FocusFrame/",
    },
    {
      number: "03",
      title: "NoteHub",
      description:
        "Notes application built with Next.js App Router, TanStack Query and cookie authentication. Full CRUD, responsive design and clean UI.",
      image: "/images/project-notehub.png",
      tags: ["Next.js", "TypeScript", "TanStack Query", "Axios"],
      link: "https://05-notehub-nine-sable.vercel.app",
    },
  ];
  
  export default function Projects() {
    return (
      <section className="section projects-section" id="projects">
        <div className="container">
          <div className="projects-heading">
            <div>
              <p className="section-label">Featured Projects</p>
              <h2 className="section-title">Featured Projects</h2>
            </div>
  
            <Link href="/projects" className="projects-link">
              View all projects →
            </Link>
          </div>
  
          <div className="projects-grid">
            {projects.map((project) => (
              <a href={project.link} className="project-card" key={project.title}>
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <span>{project.number}</span>
                </div>
  
                <div className="project-content">
                  <div className="project-title-row">
                    <h3>{project.title}</h3>
                    <span>↗</span>
                  </div>
  
                  <p>{project.description}</p>
  
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  }