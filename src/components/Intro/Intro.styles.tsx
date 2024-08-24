import styled from "@emotion/styled";

interface IntroStylesProps {
  isMobile: boolean;
}

export const IntroWrapper = styled.section<IntroStylesProps>`
  padding-top: ${({ isMobile }) => (isMobile ? "0" : "40px")};
  margin-top: 100px;
  height: 100vh;
  text-align: left;
`;

export const IntroContent = styled.div<IntroStylesProps>`
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
  h4 {
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  p {
    font-size: 1.25rem;
    line-height: 1.5;
  }
`;
