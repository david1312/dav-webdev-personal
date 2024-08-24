/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";
import variables from "@/styles/variables";
import { breakpoints } from "@/utils/contants";

const GlobalStyles = () => (
  <Global
    styles={css`
      ${variables}

      scroll-behavior: smooth;

      :root {
        --foreground-rgb: var(--slate);
        --background-start-rgb: var(--light-navy);
        --background-end-rgb: var(--navy);
      }

      body {
        margin: 0;
        font-family: var(--font-sans);
        color: var(--foreground-rgb);
        background-color: var(--navy);
        line-height: 1.6;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      main {
        @media (min-width: ${breakpoints.mobile}px) {
          padding: 0 175px;
        }

        padding: 0 25px;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin: 0;
        font-weight: 600;
        color: var(--white);
      }

      a {
        text-decoration: none;
        color: inherit;
      }

      ul,
      ol {
        margin: 0;
        padding: 0;
        list-style: none;
      }

      .text-balance {
        text-wrap: balance;
      }

      .blur-overlay {
        height: 100vh;
        width: 100%;
        backdrop-filter: blur(5px);
        top: 0;
        left: 0;
        position: absolute;
        z-index: 999;
        display: none;
        transition: 0.5s var(--easing);
      }

      .blur-overlay.active {
        display: block;
      }

      .underline-animation {
        position: relative;
        color: var(--green);
        text-decoration: none;

        &::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0;
          height: 1px;
          background-color: var(--green);
          transition: width 0.3s var(--easing);
        }

        &:hover::after {
          width: 100%;
        }
      }
      .numbered-section {
        display: flex;
        align-items: center;
        position: relative;
        margin: 10px 0 40px;
        width: 100%;
        font-size: clamp(26px, 5vw, var(--fz-heading));
        white-space: nowrap;

        &:before {
          position: relative;
          counter-increment: section;
          content: "0" counter(section) ".";
          margin-right: 10px;
          color: var(--green);
          font-family: var(--font-mono);
          font-size: clamp(var(--fz-md), 3vw, var(--fz-xl));
          font-weight: 400;

          @media (max-width: 480px) {
            margin-bottom: -3px;
            margin-right: 5px;
          }
        }

        &:after {
          content: "";
          display: block;
          position: relative;
          width: 300px;
          height: 2px;
          margin-left: 20px;
          background-color: var(--lightest-navy);

          @media (max-width: 1080px) {
            width: 200px;
          }
          @media (max-width: 768px) {
            width: 100%;
          }
          @media (max-width: 600px) {
            margin-left: 10px;
          }
        }
      }
    `}
  />
);

export default GlobalStyles;
