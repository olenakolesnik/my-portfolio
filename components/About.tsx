import { FaShoppingCart, FaTools } from "react-icons/fa";

export default function About() {
    return (
      <section className="section about-section" id="about">
        <div className="container">
          <div className="section-heading">
            <p className="section-label">About Me</p>
            <h2 className="section-title">About Me</h2>
          </div>
  
          <div className="about-layout">
            <div className="about-text">
              <p>
                Frontend developer who loves building user-friendly interfaces and
                e-commerce solutions.
              </p>
  
              <p>
                I create responsive websites, optimize performance and improve user
                experience.
              </p>
  
              <p>
                Currently focused on Next.js, TypeScript and backend fundamentals.
              </p>
            </div>
  
            <div className="about-cards">
              <div className="info-card">
                <div className="info-card__icon">{"</>"}</div>
                <h3>Frontend</h3>
                <p>HTML, CSS, JavaScript, TypeScript, React, Next.js</p>
              </div>
  
              <div className="info-card">
                <div className="info-card__icon"><FaShoppingCart /></div>
                <h3>CMS & E-commerce</h3>
                <p>WordPress, WooCommerce, Product optimization, SEO, UX/UI</p>
              </div>
  
              <div className="info-card">
                <div className="info-card__icon"><FaTools /></div>
                <h3>Tools</h3>
                <p>Git, GitHub, Figma, Axios, TanStack Query, VS Code</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }