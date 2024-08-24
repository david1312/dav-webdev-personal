import styled from "@emotion/styled";

interface HeaderWrapperProps {
  isMobile: boolean;
  isScrolled: boolean;
}

export const HeaderWrapper = styled.header<HeaderWrapperProps>`
  z-index: 1003;
  font-family: var(--font-mono);
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--navy);
  color: var(--green);
  padding: 0 ${({ isMobile }) => (isMobile ? "25px" : "40px")};
  height: ${({ isScrolled }) =>
    isScrolled ? "var(--nav-scroll-height)" : "var(--nav-height)"};
  box-shadow: ${({ isScrolled }) =>
    isScrolled ? "0 10px 30px -10px var(--navy-shadow);" : "none"};
  box-sizing: border-box;
  transition: var(--transition);
  font-size: var(--fz-sm);

  &.hide {
    transform: translateY(-100%);
  }

  &.show {
    transform: translateY(0);
  }
`;

export const HeaderLogo = styled.div`
  height: 48px;
  width: 48px;
`;

export const Nav = styled.nav<HeaderWrapperProps>`
  ul {
    display: ${({ isMobile }) => (isMobile ? "none" : "flex")};
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin: 0 1rem;
    counter-increment: item 1;
    color: var(--white);
    opacity: 0; /* Start hidden */
    transform: translateY(-20px); /* Start slightly above */
    animation: fadeInUp 0.5s ease forwards;

    &:nth-of-type(1) {
      animation-delay: 0.1s;
    }
    &:nth-of-type(2) {
      animation-delay: 0.3s;
    }
    &:nth-of-type(3) {
      animation-delay: 0.5s;
    }
    &:nth-of-type(4) {
      animation-delay: 0.7s;
    }

    a {
      &:hover {
        color: var(--green);
      }
    }

    &:before {
      content: "0" counter(item) ".";
      display: inline-block;
      width: 30px;
      margin-bottom: 5px;
      color: var(--green);
      font-size: var(--fz-sm);
    }
  }
  .link-btn {
    margin-left: 1rem;
  }

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
