import Image from "next/image";

export default function Hero() {
    return (
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__content">
            <p className="hero__label">Frontend Developer</p>
  
            <h1 className="hero__title">
              Hi, I&apos;m Olena
              <span> I build modern websites and e-commerce solutions.</span>
            </h1>
  
            <p className="hero__text">
              I create responsive web interfaces with React, Next.js, TypeScript,
              WordPress and WooCommerce.
            </p>
  
            <div className="hero__actions">
              <a href="#projects" className="btn btn--primary">
                View Projects
              </a>
  
              <a href="#contact" className="btn btn--secondary">
                Contact Me
              </a>
            </div>
          </div>
  
          <div className="hero__visual">
  <div className="hero-image-wrapper">
    <Image
      src="/images/hero-laptop.png"
      alt="Portfolio Laptop"
      fill
      priority
      className="hero-image"
    />
                    </div>
                    </div>
</div>
      </section>
    );
}