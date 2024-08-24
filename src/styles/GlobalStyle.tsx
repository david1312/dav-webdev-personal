/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";
import variables from "@/styles/variables";

const GlobalStyles = () => (
  <Global
    styles={css`
      ${variables}

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
        @media (min-width: 769px) {
          padding: 0 150px;
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
        text-decoration: none; /* Optional: remove default underline */

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
    `}
  />
);

export default GlobalStyles;
