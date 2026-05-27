// import Link from "next/dist/client/link";

// export default function Header() {
//     return (
//       <header className="header">
//         <div className="container header__inner">
//           <a href="#" className="logo">
//             Olena<span>.</span>
//           </a>
  
//           <nav className="nav">
//             <Link href="#about">About</Link>
//             <Link href="/projects">Projects</Link>
//             <Link href="#skills">Skills</Link>
//             <Link href="#contact">Contact</Link>
//           </nav>

//           <Link href="#contact" className="header__btn">
//             Let&apos;s Talk
//           </Link>
//         </div>
//       </header>
//     );
//   }
"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container header__inner">

        <Link
          href="/"
          className="logo"
          onClick={closeMenu}
        >
          Olena<span>.</span>
        </Link>

        <nav className={`nav ${isMenuOpen ? "nav--open" : ""}`}>

          <Link href="#about" onClick={closeMenu}>
            About
          </Link>

          <Link href="/projects" onClick={closeMenu}>
            Projects
          </Link>

          <Link href="#skills" onClick={closeMenu}>
            Skills
          </Link>

          <Link href="#contact" onClick={closeMenu}>
            Contact
          </Link>

        </nav>

        <Link
          href="#contact"
          className="header__btn"
        >
          Let&apos;s Talk
        </Link>

        <button
          className={`burger ${isMenuOpen ? "burger--open" : ""}`}
          type="button"
          aria-label="Toggle menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
}