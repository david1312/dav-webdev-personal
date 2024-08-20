/** @jsxImportSource @emotion/react */
import Link from "next/link";
import { HeaderWrapper, Logo, Nav } from "./Header.styles";

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Logo>
        <Link href="/">My Portfolio</Link>
      </Logo>
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
