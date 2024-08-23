import styled from "@emotion/styled";


interface FooterWrapperProps {
    isMobile: boolean;
}

export const FooterWrapper = styled.footer<FooterWrapperProps>`
    min-height: 70px;
    padding: 0 ${({ isMobile }) => (isMobile ? "40px" : "60px")};
    display:flex;
`;