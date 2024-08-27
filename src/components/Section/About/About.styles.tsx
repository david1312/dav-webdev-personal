import styled from "@emotion/styled";
import { fadeAnimation } from "@/styles/animation";
import { breakpoints } from "@/utils/contants";

export const AboutSectionWrapper = styled.section`
  h2 {
    ${({}) => fadeAnimation("up", 0.4)};
  }
  .inner {
    display: block;
    grid-template-columns: 3fr 1fr;
    grid-gap: 30px;

    @media (min-width: ${breakpoints.mobile}px) {
      display: grid;
    }
  }
`;

export const LeftSection = styled.div`
  p {
    ${({}) => fadeAnimation("up", 0.6)};
  }
  h3 {
    ${({}) => fadeAnimation("up", 0.8)};
  }
`;

export const RightSection = styled.div`
  ${({}) => fadeAnimation("up", 0.6)};
  position: relative;
  width: 227.5px;
  height: 227.5px;

  @media (min-width: ${breakpoints.mobile}px) {
    width: 200px;
    height: 200px;
  }
  @media (min-width: ${breakpoints.tablet}px) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 768px) {
    margin: 50px auto 0;
  }

  .wrapper {
    width: 227.5px;
    height: 227.5px;

    @media (min-width: ${breakpoints.mobile}px) {
      width: 200px;
      height: 200px;
    }
    @media (min-width: ${breakpoints.tablet}px) {
      width: 300px;
      height: 300px;
    }

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
      width: 227.5px;
      height: 227.5px;

      @media (min-width: ${breakpoints.mobile}px) {
        width: 200px;
        height: 200px;
      }
      @media (min-width: ${breakpoints.tablet}px) {
        width: 300px;
        height: 300px;
      }
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
  ${({}) => fadeAnimation("up", 0.8)};
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
