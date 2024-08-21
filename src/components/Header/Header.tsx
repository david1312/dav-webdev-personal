import Link from "next/link";
import { HeaderWrapper, Nav } from "./Header.styles";
import Image from "next/image";
import icon from "@/assets/images/icon.png";
import { useEffect, useState } from "react";

const Header: React.FC = () => {
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

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
      <Image src={icon.src} width={64} height={64} alt="dav webdev icon" />
      <Nav>
        <ul>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/about">Experience</Link>
          </li>
          <li>
            <Link href="/contact">Work</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
