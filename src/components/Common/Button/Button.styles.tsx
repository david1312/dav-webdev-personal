import { css } from "@emotion/react";

export const smallButton = css`
  color: var(--green);
  background-color: transparent;
  border: 1px solid var(--green);
  border-radius: var(--border-radius);
  padding: 0.75rem 1rem;
  font-size: var(--fz-sm);
  font-family: var(--font-mono);
  line-height: 1;
  text-decoration: none;
  transition: var(--transition);

  &:hover,
  &:focus-visible {
    outline: none;
    box-shadow: 3px 3px 0 0 var(--green);
    transform: translate(-4px, -4px);
  }

  &:after {
    display: none !important;
  }
`;

export const bigButton = css`
  color: var(--green);
  background-color: transparent;
  border: 1px solid var(--green);
  border-radius: var(--border-radius);
  padding: 1.25rem 1.75rem;
  font-size: var(--fz-sm);
  font-family: var(--font-mono);
  line-height: 1;
  text-decoration: none;
  transition: var(--transition);

  &:hover,
  &:focus-visible {
    outline: none;
    box-shadow: 4px 4px 0 0 var(--green);
    transform: translate(-5px, -5px);
  }

  &:after {
    display: none !important;
  }
`;
