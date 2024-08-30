import { fadeAnimation } from "@/styles/animation";
import { breakpoints } from "@/utils/contants";
import styled from "@emotion/styled";

export const FooterWrapper = styled.footer`
  ${({}) => fadeAnimation("up", 0.7)};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 35px 30px 15px;

  @media (min-width: ${breakpoints.smallDevice}px) {
    padding: 70px 30px 15px;
  }

  @media (min-width: ${breakpoints.mobile}px) {
    padding: 100px 30px 15px;
  }
  text-align: center;
`;

export const Credit = styled.div`
  max-width: 480px;
  color: var(--light-slate);
  font-size: 10px;
  font-family: var(--font-mono);
  line-height: 1.5;
  a {
    padding: 10px;
  }

  @media (min-width: ${breakpoints.smallDevice}px) {
    font-size: var(--fz-xxs);
  }
`;

export const SocialLinks = styled.div`
  display: block;
  width: 100%;
  max-width: 270px;
  margin: 0 auto 10px;
  color: var(--light-slate);

  @media (min-width: ${breakpoints.mobile}px) {
    display: none;
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;

    a {
      padding: 10px;
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;
