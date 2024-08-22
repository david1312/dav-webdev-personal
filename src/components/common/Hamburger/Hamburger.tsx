import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { HamburgerButton, Nav } from "./Hamburger.styles";

const Hamburger: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const body = document.body;

    if (isOpen) {
      body.style.overflow = "hidden";
      document.querySelector(".blur-overlay")?.classList.add("active");
    } else {
      body.style.overflow = "auto";
      document.querySelector(".blur-overlay")?.classList.remove("active");
    }

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;

      if (
        navRef.current &&
        !navRef.current.contains(target) &&
        !target.closest("button")
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <HamburgerButton isOpen={isOpen} onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </HamburgerButton>
      <Nav ref={navRef} isOpen={isOpen}>
        <ul>
          <li>
            <Link href="#about" onClick={handleLinkClick}>
              About
            </Link>
          </li>
          <li>
            <Link href="#experience" onClick={handleLinkClick}>
              Experience
            </Link>
          </li>
          <li>
            <Link href="#work" onClick={handleLinkClick}>
              Work
            </Link>
          </li>
          <li>
            <Link href="#contact" onClick={handleLinkClick}>
              Contact
            </Link>
          </li>
        </ul>
        <a
          href="/resume.pdf"
          className="resume-button"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleLinkClick}
        >
          Resume
        </a>
      </Nav>
      <div className="blur-overlay" />
    </>
  );
};

export default Hamburger;
