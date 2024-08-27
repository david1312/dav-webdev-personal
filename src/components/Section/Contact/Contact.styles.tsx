import styled from "@emotion/styled";
import { fadeAnimation } from "@/styles/animation";
import { breakpoints } from "@/utils/contants";

export const ContactWrapper = styled.section`
  max-width: 600px;
  margin: 0 auto;

  text-align: center;

  @media (min-width: ${breakpoints.mobile}px) {
    margin: 0 auto 100px;
  }

  .overline {
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
    font-size: clamp(40px, 5vw, 60px);
    line-height: 1;
  }
`;

export const EmailButton = styled.div`
  margin-top: 50px;
`;
