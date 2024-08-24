import styled from "@emotion/styled";
import { fadeInAnimation, fadeInUpAnimation } from "@/styles/animation";

interface IntroStylesProps {
  isMobile: boolean;
}

export const AboutWrapper = styled.section<IntroStylesProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  width: 100%;
  padding: 0;
  text-align: left;

  h3 {
    font-family: var(--font-sans);
    font-size: ${({ isMobile }) =>
      isMobile ? "var(--fz-xl)" : "var(--fz-heading)"};
    font-weight: 400;
    ${({}) => fadeInUpAnimation(0.8)}; /* Fade-in with no delay */
  }

  h4 {
    color: var(--green);
    font-family: var(--font-mono);
    font-size: ${({ isMobile }) =>
      isMobile ? "var(--fz-sm)" : "var(--fz-md)"};
    font-weight: 400;
    ${({}) => fadeInUpAnimation(0.8)}; /* Fade-in with no delay */
  }

  h1 {
    line-height: ${({ isMobile }) => (isMobile ? "1.5" : "1.1")};
    color: var(--lightest-slate);
    font-size: ${({ isMobile }) => (isMobile ? "var(--fz-heading)" : "72px")};
    font-family: var(--font-sans);
    ${({}) => fadeInUpAnimation(1)}; /* Fade-in with 0.2s delay */

    &.intro-desc {
      line-height: ${({ isMobile }) => (isMobile ? "1" : "0.9")};
      color: var(--slate);
    }
  }

  p {
    line-height: 1.5;
    font-size: ${({ isMobile }) =>
      isMobile ? "var(--fz-md)" : "var(--fz-xl)"};
    color: var(--slate);
    ${({}) => fadeInUpAnimation(1.2)}; /* Fade-in with 0.6s delay */
  }
`;
