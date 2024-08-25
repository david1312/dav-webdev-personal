import { useEffect, useState } from "react";
import { HeaderLogo, HeaderWrapper, Nav } from "./Header.styles";
import Hamburger from "./Hamburger";
import Link from "next/link";
import Button from "@/components/Common/Button/Button";
import Logo from "@/components/Common/Icons/Logo";
import { navLinks } from "@/utils/contants";
import { useIsMobileContext } from "@/context/IsMobileContext";
import useSmoothScroll from "@/hooks/useSmoothScroll";

const Header: React.FC = () => {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isMobile } = useIsMobileContext();
  const handleClickSectionLink = useSmoothScroll();

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

      // Check if the scroll position is not at the top
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="blur-overlay" />
      <HeaderWrapper
        className={isScrollingDown ? "hide" : "show"}
        isScrolled={isScrolled}
      >
        <HeaderLogo>
          <Logo />
        </HeaderLogo>
        {isMobile ? (
          <Hamburger />
        ) : (
          <Nav>
            <ul>
              {navLinks.map((val, index) => {
                return (
                  <li key={index}>
                    <Link href={val.href} onClick={handleClickSectionLink}>
                      {val.name}
                    </Link>
                  </li>
                );
              })}

              <a
                href="/DavidBernadi-Resume.pdf"
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
    </>
  );
};

export default Header;
