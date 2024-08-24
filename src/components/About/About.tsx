import { useEffect } from "react";
import { AboutWrapper } from "./About.styles";
import { useIsMobileContext } from "@/context/IsMobileContext";
import Link from "next/link";

const About: React.FC = () => {
  const { isMobile } = useIsMobileContext();

  return (
    <AboutWrapper isMobile={isMobile} id="about">
      <h3 className="numbered-section">About Me</h3>
      <h1>David Bernadi.</h1>
      <h1 className="intro-desc">Bringing digital ideas to life.</h1>
      <p>
        Experienced software engineer and frontend enthusiast, dedicated to
        crafting accessible, high-quality digital experiences. Currently working
        as a software engineer at{" "}
        <Link
          href="https://www.ocbc.id/en"
          target="_blank"
          className="underline-animation"
        >
          Bank OCBC Indonesia
        </Link>
        .
      </p>
      <p>
        Hey there!👋 Welcome to my little corner of the web. Here, you can check
        out my projects, get to know a bit about my journey, and see what I’ve
        been up to.
      </p>
    </AboutWrapper>
  );
};

export default About;
