import { css, keyframes } from "@emotion/react";

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const fadeInAnimation = (delay = 0) => css`
  opacity: 0;
  animation: ${fadeIn} 0.5s ease forwards;
  animation-delay: ${delay}s;
`;
