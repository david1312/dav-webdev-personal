import { FaGithub, FaLink } from "react-icons/fa";
import { ProjectWrapper, ProjectCard, ProjectGrid } from "./Project.styles";
import Link from "next/link";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import projectData from "@/data/projects.json";

interface Project {
  title: string;
  desc: string;
  source: string;
  url: string;
  stacks: string[];
  current?: boolean;
}

const Project: React.FC = () => {
  const projects: Project[] = projectData as Project[];
  return (
    <ProjectWrapper id="project">
      <h2 className="numbered-section">What I’ve Developed</h2>
      <p>
        Here’s some of my work that I can share, either both the code and the
        application URL or just one of them.
      </p>
      <ProjectGrid>
        {projects.map((val, index) => {
          return (
            <ProjectCard key={index}>
              <div className="actions">
                <Link
                  href={val.source}
                  target="_blank"
                  aria-label={"source code"}
                  className={!!val.source ? "" : "disabled"}
                >
                  <FaGithub size={24} />
                </Link>
                <a
                  href={val.url}
                  target={!val.current ? "_blank" : ""}
                  className={!!val.url ? "code-link" : "code-link disabled"}
                  aria-label={"application url"}
                >
                  <FaArrowUpRightFromSquare
                    size={24}
                    aria-label="application link"
                  />
                </a>
              </div>
              <h3>{val.title}</h3>
              <p>{val.desc}</p>
              <div className="tags">{val.stacks.join(", ")}</div>
            </ProjectCard>
          );
        })}
      </ProjectGrid>
    </ProjectWrapper>
  );
};

export default Project;
