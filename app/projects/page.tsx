
import Image from "next/image";
import Link from "next/link";

const showcaseProjects = [
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
    id: "02",
    title: "Campers Booking Platform",
    description:
      "TravelTrucks is a modern camper rental web application built with Next.js, TypeScript, and React Query.",
    image: "/images/project-campers.png",
    tags: ["Next.js (App Router)", "React", "TypeScript", "TanStack React Query", "Swiper", "CSS Modules", "React Icons", "Axios"],
    link: "https://travel-trucks-delta-three.vercel.app",
  },
  {
    id: "03",
    title: "SKSport",
    description:
      "Custom WooCommerce store for combat sports equipment. Built from scratch with custom theme, wishlist, cart, filtering and SEO optimization.",
    image: "/images/project-sksport.png",
    tags: ["WordPress", "WooCommerce", "PHP", "SEO"],
    link: "https://sksport.in.ua",
  },
  {
    id: "04",
    title: "NoteHub",
    description:
      "Notes application built with Next.js App Router, TanStack Query and cookie authentication. Full CRUD and responsive UI.",
    image: "/images/project-notehub.png",
    tags: ["Next.js", "TypeScript", "TanStack Query", "Axios"],
    link: "https://05-notehub-nine-sable.vercel.app",
  },
  {
    id: "05",
    title: "Online Store",
    description:
      "E-commerce application with filtering, search, wishlist and cart functionality.",
    image: "/images/project-store.png",
    tags: ["JavaScript", "HTML", "SCSS", "REST API"],
    link: "https://olenakolesnik.github.io/onlineStore/index.html",
  },
  {
    id: "06",
    title: "FocusFrame — Photography Website",
    description:
      "Responsive photography website with image gallery, category filtering, adaptive layout and modern UI.",
    image: "/images/project-photograph.png",
    tags: ["JavaScript", "HTML", "SCSS", "Responsive Design", "UI/UX", "Adaptive Layout"],
    link: "https://olenakolesnik.github.io/FocusFrame/",
  },
];

export default function Showcase() {
  return (
    <section className="section showcase-section" id="projects">
      <div className="container">

        <div className="showcase-header">
                  <div>
                  <Link href="/" className="back-home">
      ← Back to Home
    </Link>
            <p className="section-label">Featured Projects</p>
            <h2 className="section-title">Featured Projects</h2>
          </div>

        </div>

        <div className="showcase-grid">
          {showcaseProjects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              className="showcase-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="showcase-image">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="showcase-img"
                />

                <div className="showcase-number">
                  {project.id}
                </div>

              </div>

              <div className="showcase-content">

                <div className="showcase-title-row">
                  <h3>{project.title}</h3>
                  <span>↗</span>
                </div>

                <p className="showcase-description">
                  {project.description}
                </p>

                <div className="showcase-tags">
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