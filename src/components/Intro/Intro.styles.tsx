import styled from "@emotion/styled";
import { fadeAnimation } from "@/styles/animation";

interface IntroStylesProps {
  isMobile: boolean;
}

export const IntroWrapper = styled.section<IntroStylesProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  width: 100%;
  padding: 0;
  text-align: left;

  h4 {
    ${({}) => fadeAnimation("up", 0.8)};
  }

  h1 {
    ${({}) => fadeAnimation("up", 1)};
  }

  p {
    ${({}) => fadeAnimation("up", 1.2)};
  }

  button {
    ${({}) => fadeAnimation("up", 1.4)};
    margin: 20px 0;
  }
`;
