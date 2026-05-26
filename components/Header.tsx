import Link from "next/dist/client/link";

export default function Header() {
    return (
      <header className="header">
        <div className="container header__inner">
          <a href="#" className="logo">
            Olena<span>.</span>
          </a>
  
          <nav className="nav">
            <Link href="#about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="#skills">Skills</Link>
            <Link href="#contact">Contact</Link>
          </nav>

          <Link href="#contact" className="header__btn">
            Let&apos;s Talk
          </Link>
        </div>
      </header>
    );
  }