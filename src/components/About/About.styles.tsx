import styled from "@emotion/styled";
import { fadeInUpAnimation } from "@/styles/animation";

interface IntroStylesProps {
  isMobile: boolean;
}

export const AboutWrapper = styled.section<IntroStylesProps>`
  .inner {

    display: grid;
    grid-template-columns: 4fr 2fr;
    grid-gap: 30px;

    @media (max-width: 768px) {
      display: block;
    }
`;

export const LeftSection = styled.div<IntroStylesProps>`
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
  }
`;

export const RightSection = styled.div<IntroStylesProps>`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
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
      width: 100%;
      height: 100%;
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
  display: flex;
  flex-wrap: wrap;
  font-family: var(--font-mono);
  font-size: var(--fz-sm);
  color: var(--light-slate);
  margin-top: 10px;
  .separator {
    margin: 0 6px;
    color: var(--green);
  }

  span {
    margin-bottom: 2px;
  }
`;
