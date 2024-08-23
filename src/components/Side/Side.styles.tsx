import styled from "@emotion/styled";

export const SideWrapper = styled.div<{
  position: "left" | "right";
  isMobile: boolean;
}>`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: ${({ position }) => (position === "left" ? "40px" : "auto")};
  right: ${({ position }) => (position === "right" ? "40px" : "auto")};
  display: ${({ isMobile }) => (isMobile ? "none" : "flex")};
  flex-direction: column;
  align-items: center;

  &::after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    background-color: var(--light-slate);
    margin-top: 20px;
  }

  a {
    color: var(--light-slate);
    margin: 20px auto;
    padding: 10px;
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    line-height: var(--fz-lg);
    letter-spacing: 0.1em;
    writing-mode: vertical-rl;
    transition: color 0.3s var(--easing), transform 0.3s var(--easing);

    &:hover,
    &:focus {
      color: var(--green);
      transform: translateY(-3px);
    }
  }
`;
