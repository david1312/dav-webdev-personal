import styled from "@emotion/styled";

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;
`;

export const StyledCredit = styled.div`
  max-width: 480px;
  color: var(--light-slate);
  font-family: var(--font-mono);
  font-size: var(--fz-xxs);
  line-height: 1.5;

  a {
    padding: 10px;
  }
`;
