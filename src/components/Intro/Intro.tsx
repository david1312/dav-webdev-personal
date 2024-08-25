import React from "react";
import { IntroWrapper } from "./Intro.styles";
import Link from "next/link";
import Button from "../Common/Button/Button";
import useSmoothScroll from "@/hooks/useSmoothScroll";

const Intro: React.FC = () => {
  const handleClickSectionLink = useSmoothScroll();

  return (
    <IntroWrapper>
      <h4>Hello, My name is</h4>
      <h1>David Bernadi.</h1>
      <h1 className="intro-desc">I build digital ideas into reality.</h1>
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
        Hey there!👋 Welcome to my little corner of the web. Here, you can get
        to know a bit about my journey, check out my projects, and see what I’ve
        been up to.
      </p>
      <Link href={"#about"} onClick={handleClickSectionLink}>
        <Button variant="big" label="Let's Dive In" />
      </Link>
    </IntroWrapper>
  );
};

export default Intro;
