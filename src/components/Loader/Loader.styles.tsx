import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = styled.div`
  width: max-content;
  max-width: 100px;
  margin: 0 auto;
  height: 100vh;
`;

export const svgStyles = css`
  width: 100%;
  height: 100%;
  display: block;
  margin: 0 auto;
  fill: none;
`;

export const textStyles = css`
  opacity: 0;
  fill: #64ffda;
  font-family: system-ui, Calibre-Medium, Calibre, sans-serif;
  font-size: 50px;
  font-weight: 400;
  letter-spacing: 4.16666603;
`;
