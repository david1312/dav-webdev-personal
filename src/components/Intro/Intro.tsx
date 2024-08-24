import React from "react";
import { IntroWrapper, IntroContent } from "./Intro.styles";
import { useIsMobileContext } from "@/context/IsMobileContext";
import Link from "next/link";

const Intro: React.FC = () => {
  const { isMobile } = useIsMobileContext();
  return (
    <IntroWrapper isMobile={isMobile}>
      <IntroContent isMobile={isMobile}>
        <h4>My name is</h4>
        <h1>David Bernadi.</h1>
        <h1 className="intro-desc">Bringing digital ideas to life.</h1>
        <p>
          Experienced software engineer and frontend enthusiast, dedicated to
          crafting accessible, high-quality digital experiences. Currently
          working as a software engineer at{" "}
          <Link href={"xxx"} target="_blank" className="underline-animation">
            OCBC Indonesia
          </Link>
          .
        </p>
        <p>
          Hey there!👋 Welcome to my little corner of the web. Here, you can
          check out my projects, get to know a bit about my journey, and see
          what I’ve been up to.
        </p>
      </IntroContent>
    </IntroWrapper>
  );
};

export default Intro;
