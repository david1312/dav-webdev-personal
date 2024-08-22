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

      @media (prefers-color-scheme: dark) {
        :root {
          --foreground-rgb: var(--lightest-slate);
          --background-start-rgb: var(--dark-navy);
          --background-end-rgb: var(--navy-shadow);
        }
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
        background-color: ;
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

      button {
        cursor: pointer;
        background: none;
        border: none;
      }

      /* Add other global styles here */

      .text-balance {
        text-wrap: balance;
      }

      .intro {
        width: max-content;
        max-width: 100px;
      }

      .svg-intro {
        width: 100%;
        height: 100%;
        display: block;
        margin: 0 auto;
        fill: none;
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
        transition: 0.5s ease;
      }

      .blur-overlay.active {
        display: block;
      }
    `}
  />
);

export default GlobalStyles;
