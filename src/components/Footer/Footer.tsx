import { FooterWrapper, StyledCredit } from "./Footer.styles";

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <StyledCredit>
        Built with Next.js, TypeScript, Emotion, and anime.js, deployed with
        Vercel. Crafted by David Bernadi.
      </StyledCredit>
    </FooterWrapper>
  );
};

export default Footer;
