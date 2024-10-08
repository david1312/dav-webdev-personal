import { ContactWrapper, EmailButton } from "./Contact.styles";
import Link from "next/link";
import Button from "@/components/Common/Button/Button";
import { email } from "@/utils/contants";

const Contact: React.FC = () => {
  return (
    <ContactWrapper id="contact">
      <h2 className="numbered-section overline">What’s Ahead?</h2>
      <h2 className="title">Get in touch</h2>
      <p>
        Some say the best journeys begin with a simple hello. If you’d like to
        connect or have something in mind, feel free to reach out—I’ll do my
        best to respond!
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
