// components/Hamburger.tsx
import { useState } from "react";
import Link from "next/link";
import styled from "@emotion/styled";

interface HamburgerProps {
  isOpen: boolean;
}

const HamburgerButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: var(--hamburger-width);
  height: var(--hamburger-width);
  z-index: 1001;
  position: relative;
  outline: none;

  div {
    width: 100%;
    height: 2px;
    background-color: var(--green);
    transition: all 0.3s ease;
    position: relative;
    transform-origin: 1px;

    &:nth-of-type(1) {
      transform: ${({ isOpen }: HamburgerProps) =>
        isOpen ? "rotate(45deg)" : "rotate(0)"};
    }

    &:nth-of-type(2) {
      opacity: ${({ isOpen }: HamburgerProps) => (isOpen ? "0" : "1")};
      transform: ${({ isOpen }: HamburgerProps) =>
        isOpen ? "translateX(20px)" : "translateX(0)"};
    }

    &:nth-of-type(3) {
      transform: ${({ isOpen }: HamburgerProps) =>
        isOpen ? "rotate(-45deg)" : "rotate(0)"};
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
  z-index: 1000;

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

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Hamburger: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <HamburgerButton isOpen={isOpen} onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </HamburgerButton>
      <Nav isOpen={isOpen}>
        <ul>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/about">Experience</Link>
          </li>
          <li>
            <Link href="/work">Work</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </Nav>
    </>
  );
};

export default Hamburger;
