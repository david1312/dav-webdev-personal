import styled from "@emotion/styled";
import { fadeAnimation } from "@/styles/animation";

interface IntroStylesProps {
  isMobile: boolean;
}

export const AboutWrapper = styled.section<IntroStylesProps>`
  h2 {
    ${({}) => fadeAnimation("up", 0.6)};
  }
  .inner {
    display: ${({ isMobile }) => (isMobile ? "block" : "grid")};
    grid-template-columns: 4fr 2fr;
    grid-gap: 30px;
  }
`;

export const LeftSection = styled.div<IntroStylesProps>`
  ${({}) => fadeAnimation("up", 0.8)};
  p {
    font-size: ${({ isMobile }) =>
      isMobile ? "var(--fz-md)" : "var(--fz-xl)"};
    color: var(--slate);
    font-family: var(--font-sans);
  }

  h3 {
    font-size: ${({ isMobile }) =>
      isMobile ? "var(--fz-md)" : "var(--fz-xl)"};
    color: var(--blue);
    font-family: var(--font-mono);
    font-weight: 600;
    padding-top: 10px;
  }
`;

export const RightSection = styled.div<IntroStylesProps>`
  ${({}) => fadeAnimation("up", 1)};
  position: relative;
  width: ${({ isMobile }) => (isMobile ? "227.5px" : "300px")};
  height: ${({ isMobile }) => (isMobile ? "227.5px" : "300px")};

  @media (max-width: 768px) {
    margin: 50px auto 0;
  }

  .wrapper {
    width: ${({ isMobile }) => (isMobile ? "227.5px" : "300px")};
    height: ${({ isMobile }) => (isMobile ? "227.5px" : "300px")};
    font-size: ${({ isMobile }) =>
      isMobile ? "var(--fz-md)" : "var(--fz-xl)"};
    box-shadow: 0 10px 30px -15px var(--navy-shadow);
    transition: var(--transition);

    &:hover,
    &:focus-visible {
      box-shadow: 0 20px 30px -15px var(--navy-shadow);
    }
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
      width: ${({ isMobile }) => (isMobile ? "227.5px" : "300px")};
      height: ${({ isMobile }) => (isMobile ? "227.5px" : "300px")};
    }

    &:before,
    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

export const LanguageList = styled.div`
  ${({}) => fadeAnimation("up", 1.2)};
  display: flex;
  flex-wrap: wrap;
  font-family: var(--font-mono);
  font-size: var(--fz-sm);
  color: var(--light-slate);
  .separator {
    margin: 0 6px;
    color: var(--green);
  }

  span {
    margin-bottom: 2px;
  }
`;
