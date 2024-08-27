import { socialAccounts } from "@/utils/contants";
import { Credit, FooterWrapper, SocialLinks } from "./Footer.styles";
import iconMap from "@/utils/iconMap";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <SocialLinks>
        <ul>
          {socialAccounts.map((val, index) => {
            const IconComponent = iconMap[val.icon];
            return (
              <li key={index}>
                <Link
                  href={val.url}
                  aria-label={val.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconComponent size={24} />
                </Link>
              </li>
            );
          })}
        </ul>
      </SocialLinks>
      <Credit>
        Built with Next.js, TypeScript, Emotion, and anime.js, deployed with
        Vercel. Crafted by David Bernadi.
      </Credit>
    </FooterWrapper>
  );
};

export default Footer;
