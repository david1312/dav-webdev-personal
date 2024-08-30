import { fadeAnimation } from "@/styles/animation";
import { breakpoints } from "@/utils/contants";
import styled from "@emotion/styled";

export const ProjectWrapper = styled.section`
  h2 {
    ${({}) => fadeAnimation("down", 0.7)};
  }
  ${({}) => fadeAnimation("up", 0.9)};
`;

export const ProjectGrid = styled.div`
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  display: grid;
  gap: 50px;
`;

export const ProjectCard = styled.div`
  background-color: var(--light-navy);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  }

  .actions {
    display: flex;
    justify-content: space-between;
    padding-bottom: 5px;
    color: var(--lightest-slate);

    a {
      font-weight: bold;

      &:hover {
        color: var(--green);
      }

      &.disabled {
        color: var(--slate);
        cursor: none;
        pointer-events: none;
        opacity: 0.3;
      }
    }

    .code-link {
      color: var(--green) !important;
    }
  }

  h3 {
    color: var(--lightest-slate);
    font-family: var(--font-sans);
    font-size: var(--fz-xxl);
  }

  p {
    flex-grow: 1;
  }

  .tags {
    margin-top: -20px;
    color: var(--slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    @media (min-width: ${breakpoints.mobile}px) {
      font-size: var(--fz-sm);
    }
  }
`;
