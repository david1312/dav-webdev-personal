import styled from "@emotion/styled";
import { fadeAnimation } from "@/styles/animation";
import { breakpoints } from "@/utils/contants";

export const ExperienceWrapper = styled.section`
  ${({}) => fadeAnimation("down", 0.8)};
  margin: 0px auto;
  max-width: 960px;
  .inner {
    display: flex;
    flex-direction: column;
    flex: 1;

    @media (min-width: ${breakpoints.tablet}px) {
      flex-direction: row;
    }
  }
`;

export const TabList = styled.div`
  ${({}) => fadeAnimation("down", 1)};
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  margin-bottom: 20px;

  @media (min-width: ${breakpoints.tablet}px) {
    flex-direction: column;
    overflow-x: visible;
    border-bottom: none;
    margin-bottom: 0;
  }
`;

export const TabButton = styled.button<{ isActive: boolean }>`
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  padding: 15px 5px 15px 10px;
  text-align: center;
  border: none;
  background: transparent;
  color: ${(props) => (props.isActive ? "var(--green)" : "var(--slate)")};
  cursor: pointer;
  transition: var(--transition), background 0.5s, color 0.5s, border-left 0.25s;
  white-space: nowrap;
  transform: ${(props) =>
    props.isActive ? "translateY(0)" : "translateY(-2px)"};

  border-bottom: 2px solid var(--lightest-navy);

  ${(props) =>
    props.isActive &&
    `
    border-bottom-color: var(--green);
  `}

  &:hover,
  &:focus {
    color: var(--green);
    background-color: var(--light-navy);
  }

  @media (min-width: ${breakpoints.tablet}px) {
    text-align: left;
    transform: ${(props) =>
      props.isActive ? "translateX(2px)" : "translateX(0)"};
    border-bottom: none;
    border-left: 2px solid var(--lightest-navy);

    ${(props) =>
      props.isActive &&
      `
      border-left-color: var(--green);
    `}
  }
`;

interface TabContentProps {
  key: number;
}

export const TabContent = styled.div<TabContentProps>`
  ${({ key }) => fadeAnimation("left", 0.1)};
  color: var(--light-slate);
  h3 {
    font-family: var(--font-sans);
    font-size: var(--fz-lg);
    color: var(--lightest-slate);
    @media (min-width: ${breakpoints.mobile}px) {
      font-size: var(--fz-xl);
    }
    @media (min-width: ${breakpoints.tablet}px) {
      font-size: var(--fz-xxl);
    }
  }

  p {
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    @media (min-width: ${breakpoints.mobile}px) {
      font-size: var(--fz-sm);
    }
  }
  li {
    font-family: var(--font-sans);
    font-size: var(--fz-sm);
    @media (min-width: ${breakpoints.mobile}px) {
      font-size: var(--fz-md);
    }
    @media (min-width: ${breakpoints.tablet}px) {
      font-size: var(--fz-lg);
    }
  }
  flex: 3;
  padding: 0 20px 20px 20px;
  color: #fff;
`;

export const ResponsibilityList = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

export const ResponsibilityItem = styled.li`
  color: var(--slate);
  margin-bottom: 10px;

  &::before {
    content: "▹";
    color: var(--green);
    padding-right: 5px;
  }
`;
