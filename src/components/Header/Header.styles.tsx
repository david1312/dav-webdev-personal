import styled from "@emotion/styled";

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--navy);
  color: var(--green);
  padding: 0 25px;
  height: var(--nav-height);
  box-sizing: border-box;
  transition: var(--transition);
  font-size: var(--fz-sm);
  &.hide {
    transform: translateY(-100%);
  }

  &.show {
    transform: translateY(0);
  }

  @media (min-width: 769px) {
    padding: 0 40px;
  }
`;

export const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin: 0 1rem;
    counter-increment: item 1;
    color: var(--white);

    &:before {
      content: "0" counter(item) ".";
      display: inline-block;
      width: 25px;
      margin-bottom: 5px;
      color: var(--green);
      font-size: var(--fz-sm);
    }
  }

  a {
    text-decoration: none;
    white-space: nowrap;

    &:hover {
      color: var(--green);
    }
  }
`;