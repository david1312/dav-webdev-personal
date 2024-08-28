import { ContactWrapper, EmailButton } from "./Contact.styles";
import Link from "next/link";
import Button from "@/components/Common/Button/Button";
import useSmoothScroll from "@/hooks/useSmoothScroll";
import { useIsMobileContext } from "@/context/IsMobileContext";
import { email } from "@/utils/contants";

const Contact: React.FC = () => {
  return (
    <ContactWrapper id="contact">
      <h2 className="numbered-section overline">What’s Ahead?</h2>
      <h2 className="title">Get in touch</h2>
      <p>
        While I’m happy in my current role, I’m open to new opportunities,
        particularly remote work. If relocation is involved, I’d be especially
        excited about opportunities in Japan, a country I love. Whether you have
        something in mind or just want to connect, feel free to reach out—I’ll
        do my best to respond!
      </p>

      <EmailButton>
        <Link
          href={`mailto:${email}`}
          target="_blank"
          rel="noopener noreferrer"
          className="link-btn"
        >
          <Button label="Message Me" variant="big" />
        </Link>
      </EmailButton>
    </ContactWrapper>
  );
};

export default Contact;