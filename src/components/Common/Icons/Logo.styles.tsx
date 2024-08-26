import { css } from "@emotion/react";

export const svgStyles = css`
  width: 100%;
  height: 100%;
  display: block;
  margin: 0 auto;
  fill: none;
`;

interface TextStylesProps {
  isLoader: boolean;
}

export const textStyles = ({ isLoader }: TextStylesProps) => css`
  opacity: ${isLoader ? 0 : 1};
  fill: #64ffda;
  font-family: system-ui, Calibre-Medium, Calibre, sans-serif;
  font-size: 50px;
  font-weight: 400;
  letter-spacing: 4.16666603;
`;
