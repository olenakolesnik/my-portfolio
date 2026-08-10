import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: "01",
    title: "Barbershop Website",
    description:
      "Modern barbershop website with online booking and service information.",
    image: "/images/project-barbershop.webp",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Swiper", "React Icons"],
    link: "https://barbershop-next-eight.vercel.app",
  },
  {
    number: "02",
    title: "Campers Booking Platform",
    description:
      "TravelTrucks is a modern camper rental web application built with Next.js, TypeScript, and React Query.",
    image: "/images/project-campers.png",
    tags: ["Next.js (App Router)", "React", "TypeScript", "TanStack React Query", "Swiper", "CSS Modules", "React Icons", "Axios"],
    link: "https://travel-trucks-delta-three.vercel.app",
  },
  {
      number: "03",
      title: "SKSport",
      description:
        "Custom WooCommerce store for combat sports equipment. Built from scratch with custom theme, product filtering, wishlist, cart and SEO optimization.",
      image: "/images/project-sksport.png",
      tags: ["WordPress", "WooCommerce", "PHP", "SEO", "HTML", "CSS"],
      link: "https://sksport.in.ua",
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
                  <Image src={project.image}
                    fill
                    alt={project.title} />
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