import React from "react";
import {
  AboutWrapper,
  LanguageList,
  LeftSection,
  RightSection,
} from "./About.styles";
import Link from "next/link";
import profile from "@/assets/images/profile.webp";
import Image from "next/image";
import { techStacks } from "@/utils/contants";

const About: React.FC = () => {
  return (
    <AboutWrapper id="about">
      <h2 className="numbered-section">About Me</h2>
      <div className="inner">
        <LeftSection>
          <p>
            Hi! I’m David, and I love building apps that make life easier. My
            passion for software development began in 2017 during my university
            internship, where I created a program that replaced a local tire
            store’s manual invoicing system. Even though not too complex, being
            able solving the problem and seeing the business owner’s happiness
            brought me satisfaction. That’s when I knew this was what I wanted
            to do.
          </p>
          <p>
            And since then, I’ve gained about 5 years of professional experience
            building various applications. Currently at{" "}
            <Link
              href="https://www.ocbc.id/en"
              target="_blank"
              className="underline-animation"
            >
              OCBC
            </Link>
            , I’m handling RM Mobile, a web app that helps customers apply for
            bank products through relationship managers. The frontend is built
            with React and TypeScript, and the backend with Golang.
            Additionally, I have experience with Node.js, having used it to
            build a CMS with the{" "}
            <Link
              href="https://strapi.io/"
              target="_blank"
              className="underline-animation"
            >
              Strapi
            </Link>{" "}
            in a previous project.
          </p>
          <p>Here are a few of the tech stacks I enjoy working with:</p>
          {/* <h3>Programming Languages:</h3>
          <LanguageList>
            {programmingSkills.map((val, index) => (
              <React.Fragment key={index}>
                <span>{val}</span>
                {index < programmingSkills.length - 1 && (
                  <span className="separator">|</span>
                )}
              </React.Fragment>
            ))}
          </LanguageList> */}

          {techStacks.map((val, index) => (
            <React.Fragment key={index}>
              <h3>{val.title}:</h3>
              <LanguageList>
                {val.items.map((item, indexItem) => {
                  return (
                    <React.Fragment key={indexItem}>
                      <span>{item}</span>
                      {indexItem < val.items.length - 1 && (
                        <span className="separator">|</span>
                      )}
                    </React.Fragment>
                  );
                })}
              </LanguageList>
            </React.Fragment>
          ))}
        </LeftSection>
        <RightSection>
          <div className="wrapper">
            <Image
              src={profile.src}
              alt="test"
              width={300}
              height={300}
              className="img"
            />
          </div>
        </RightSection>
      </div>
    </AboutWrapper>
  );
};

export default About;
