/** @jsxImportSource @emotion/react */
import Link from "next/link";
import { HeaderWrapper, Logo, Nav } from "./Header.styles";
import Image from "next/image";
import icon from "@/assets/images/icon.png";

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Image src={icon.src} width={48} height={48} alt="dav webdev icon" />
      <Nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
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
