import styled from "@emotion/styled";
import { fadeAnimation } from "@/styles/animation";
import { breakpoints } from "@/utils/contants";

export const ExperienceWrapper = styled.section`
  ${({}) => fadeAnimation("down", 0.8)};
  margin: 0px auto;
  max-width: 960px;
  .inner {
    display: flex;
    flex-direction: row;
    flex: 1;

    @media (min-width: ${breakpoints.mobile}) {
      flex-direction: column;
    }
  }
`;

export const TabList = styled.div`
  ${({}) => fadeAnimation("down", 1)};
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  border-bottom: 2px solid #333;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    flex-direction: column;

    border-bottom: none;
    margin-bottom: 0;
    overflow-x: visible;
  }
`;

export const TabButton = styled.button<{ isActive: boolean }>`
  padding: 15px;
  text-align: left;
  border: none;
  border-left: 2px solid var(--lightest-navy);
  background: ${(props) => (props.isActive ? "#1c1c1c" : "transparent")};
  color: ${(props) => (props.isActive ? "var(--green)" : "#fff")};
  cursor: pointer;
  transition: background 0.5s, color 0.5s,
    border-left 0.25s cubic-bezier(0.645, 0.045, 0.355, 1), transform 0.3s;
  white-space: nowrap;
  transform: ${(props) =>
    props.isActive ? "translateX(2px)" : "translateX(0)"};

  &:hover {
    background: #333;
  }

  ${(props) =>
    props.isActive &&
    `
    border-left-color: #4ca3ff;
  `}

  @media (min-width: 768px) {
    text-align: left;
  }
`;

interface TabContentProps {
  key: number;
}

export const TabContent = styled.div<TabContentProps>`
  ${({ key }) => fadeAnimation("left", 0.1)};
  color: var(--light-slate);

  flex: 3;
  padding: 0 20px 20px 20px;
  color: #fff;
`;

export const CompanyLink = styled.a`
  color: #4ca3ff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
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
    color: #4ca3ff;
    padding-right: 5px;
  }
`;
