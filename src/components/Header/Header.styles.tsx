import { fadeAnimation } from "@/styles/animation";
import { breakpoints } from "@/utils/contants";
import styled from "@emotion/styled";

interface HeaderWrapperProps {
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
  padding: 0 25px;
  @media (min-width: ${breakpoints.mobile}px) {
    padding: 0 40px;
  }
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

export const Nav = styled.nav`
  ul {
    display: none;
    @media (min-width: ${breakpoints.mobile}px) {
      display: flex;
    }
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin: 0 1rem;
    counter-increment: item 1;
    color: var(--lightest-slate);
    opacity: 0; /* Start hidden */

    &:nth-of-type(1) {
      ${({}) => fadeAnimation("down", 0.1)};
    }
    &:nth-of-type(2) {
      ${({}) => fadeAnimation("down", 0.3)};
    }
    &:nth-of-type(3) {
      ${({}) => fadeAnimation("down", 0.5)};
    }
    &:nth-of-type(4) {
      ${({}) => fadeAnimation("down", 0.7)};
    }

    a {
      &:hover {
        color: var(--green);
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
  }
  .link-btn {
    margin-left: 1rem;
  }
`;
