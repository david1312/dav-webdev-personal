import { useState } from "react";
import {
  ExperienceWrapper,
  TabList,
  TabButton,
  TabContent,
  ResponsibilityList,
  ResponsibilityItem,
} from "./Experience.styles";
import experienceData from "@/data/experiences.json";
import Link from "next/link";

interface Experience {
  title: string;
  company: string;
  companyAlias: string;
  url: string;
  range: string;
  responsibilities: string[];
}

const ExperienceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const experiences: Experience[] = experienceData as Experience[];

  return (
    <ExperienceWrapper id="experience">
      <h2 className="numbered-section">Professional Experience</h2>
      <div className="inner">
        <TabList role="tablist" aria-label="Job tabs">
          {experiences.map((experience, index) => (
            <TabButton
              key={index}
              isActive={activeTab === index}
              onClick={() => setActiveTab(index)}
              id={`tab-${index}`}
              role="tab"
              tabIndex={activeTab === index ? 0 : -1}
              aria-selected={activeTab === index ? true : false}
              aria-controls={`panel-${index}`}
            >
              {experience.company}
            </TabButton>
          ))}
        </TabList>
        <TabContent key={activeTab}>
          <h3>
            {experiences[activeTab].title} @{" "}
            <Link
              href={experiences[activeTab].url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-animation"
            >
              {experiences[activeTab].companyAlias}
            </Link>
          </h3>
          <p>{experiences[activeTab].range}</p>
          <ResponsibilityList>
            {experiences[activeTab].responsibilities.map(
              (responsibility, index) => (
                <ResponsibilityItem key={index}>
                  {responsibility}
                </ResponsibilityItem>
              )
            )}
          </ResponsibilityList>
        </TabContent>
      </div>
    </ExperienceWrapper>
  );
};

export default ExperienceSection;
