import styled from "@emotion/styled";

interface HamburgerProps {
  isOpen: boolean;
}

export const HamburgerButton = styled.button<HamburgerProps>`
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
    transition: var(--transition);
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

export const Nav = styled.nav<HamburgerProps>`
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
    margin: 0 1rem;
    counter-increment: item 1;
    color: var(--white);

    a {
      &:hover {
        color: var(--green);
      }
    }

    &:before {
      content: "0" counter(item) ".";
      display: inline-block;
      width: 30px;
      margin-bottom: 15px;
      color: var(--green);
      font-size: var(--fz-sm);
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
    transition: var(--transition);

    &:hover {
      background-color: var(--green-tint);
      color: var(--dark-navy);
    }
  }
`;
