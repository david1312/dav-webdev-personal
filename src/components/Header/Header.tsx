import { useEffect, useState } from "react";
import { HeaderLogo, HeaderWrapper, Nav } from "./Header.styles"; // Adjust the path as necessary
import Hamburger from "@/components/Icons/Hamburger"; // Adjust the path as necessary
import useMediaQuery from "@/hooks/useMediaQuery"; // Adjust the path as necessary
import Link from "next/link";
import Button from "../common/Button";
import Logo from "../Icons/Logo";

const Header: React.FC = () => {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const isMobile = useMediaQuery(769);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }
      lastScrollTop = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderWrapper className={isScrollingDown ? "hide" : "show"}>
      <HeaderLogo>
        <Logo />
      </HeaderLogo>

      {isMobile ? (
        <Hamburger />
      ) : (
        <Nav>
          <ul>
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#experience">Experience</Link>
            </li>
            <li>
              <Link href="#work">Work</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="link-btn"
            >
              <Button label="Resume" variant="small" />
            </a>
          </ul>
        </Nav>
      )}
    </HeaderWrapper>
  );
};

export default Header;
