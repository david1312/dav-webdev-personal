import styled from "@emotion/styled";
import { fadeAnimation } from "@/styles/animation";

export const ContactWrapper = styled.section`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;

  .overline {
    ${({}) => fadeAnimation("down", 0.7)};
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    ${({}) => fadeAnimation("right", 0.9)};
    font-size: clamp(40px, 5vw, 60px);
    line-height: 1;
  }
  p {
    ${({}) => fadeAnimation("left", 1.1)};
  }
`;

export const EmailButton = styled.div`
  ${({}) => fadeAnimation("up", 1.3)};
  margin-top: 50px;
`;
