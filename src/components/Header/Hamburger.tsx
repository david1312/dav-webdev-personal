import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { HamburgerButton, Nav } from "./Hamburger.styles";
import { navLinks } from "@/utils/contants";
import Button from "@/components/Common/Button/Button";
import useSmoothScroll from "@/hooks/useSmoothScroll";

const Hamburger: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const handleSmoothScroll = useSmoothScroll();

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

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    setIsOpen(false);
    handleSmoothScroll(e);
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
          {navLinks.map((val, index) => {
            return (
              <li key={index}>
                <Link href={val.href} onClick={handleLinkClick}>
                  {val.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="link-btn"
          onClick={handleLinkClick}
        >
          <Button label="Resume" variant="big" />
        </a>
      </Nav>
      <div className="blur-overlay" />
    </>
  );
};

export default Hamburger;
