import styled from "@emotion/styled";

interface FooterWrapperProps {
  isMobile: boolean;
}

export const FooterWrapper = styled.footer<FooterWrapperProps>`
  min-height: 70px;
  padding: ${({ isMobile }) => (isMobile ? "20px 40px" : "30px 60px")};
  display: block;
`;
