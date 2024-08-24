import React from "react";
import { IntroWrapper, IntroContent } from "./About.styles";

const About: React.FC = () => {
  return (
    <IntroWrapper>
      <IntroContent>
        <h1>{`Hello, I'm David Bernadi`}</h1>
        <p>
          I’m a passionate Software Engineer focused on Frontend Development.
          Welcome to my personal website where you can explore my projects,
          experience, and more.
        </p>
      </IntroContent>
    </IntroWrapper>
  );
};

export default About;
