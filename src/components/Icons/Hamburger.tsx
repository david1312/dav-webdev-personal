import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styled from "@emotion/styled";

interface HamburgerProps {
  isOpen: boolean;
}

const HamburgerButton = styled.button<HamburgerProps>`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: var(--hamburger-width);
  height: var(--hamburger-width);
  z-index: 1001; /* Ensure it's above the Nav */
  position: fixed; /* Fix it in place */
  top: 20px; /* Adjust positioning as necessary */
  right: 20px; /* Adjust positioning as necessary */
  outline: none;

  div {
    width: 100%;
    height: 2px;
    background-color: var(--green);
    transition: all 0.3s ease;
    position: relative;
    transform-origin: 1px;

    &:nth-of-type(1) {
      transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-of-type(2) {
      opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
      transform: ${({ isOpen }) =>
        isOpen ? "translateX(20px)" : "translateX(0)"};
    }

    &:nth-of-type(3) {
      transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Nav = styled.nav<HamburgerProps>`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  width: 75%;
  max-width: 300px;
  height: 100vh;
  background-color: var(--navy);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: right 0.3s var(--easing);
  z-index: 1000; /* Ensure it's below the HamburgerButton */

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin: 1rem 0;
    counter-increment: item 1;
    color: var(--white);
  }

  a {
    color: var(--green);
    text-decoration: none;
    font-size: var(--fz-lg);
    transition: color 0.3s ease;

    &:hover {
      text-decoration: underline;
      color: var(--blue);
    }
  }

  .resume-button {
    margin-top: 1rem;
    padding: 0.75rem 1.5rem;
    border: 1px solid var(--green);
    border-radius: var(--border-radius);
    color: var(--green);
    font-size: var(--fz-md);
    text-decoration: none;
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
      background-color: var(--green-tint);
      color: var(--dark-navy);
    }
  }
`;

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
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node) &&
        !event.target?.closest("button")
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
