import styled from "@emotion/styled";

interface IntroStylesProps {
  isMobile: boolean;
}

export const IntroWrapper = styled.section<IntroStylesProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  width: 100%;
  padding: 0;
  text-align: left;

  h4 {
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;
  }

  h1 {
    line-height: 1.1;
    color: var(--lightest-slate);
    font-size: ${({ isMobile }) => (isMobile ? "var(--fz-heading)" : "72px")};
    font-family: var(--font-sans);

    &.intro-desc {
      line-height: 0.9;
      color: var(--slate);
    }
  }

  p {
    line-height: 1.5;
    font-size: var(--fz-lg);
    color: var(--slate);
  }
`;
