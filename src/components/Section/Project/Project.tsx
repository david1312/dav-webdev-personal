import { ProjectWrapper } from "./Project.styles";

const Project: React.FC = () => {
  return (
    <ProjectWrapper id="project">
      <h2 className="numbered-section">What I’ve Developed</h2>
      <p>
        Here’s some of my work that I can share, either both the code and the
        application URL or just one of them.
      </p>
      {/* put here */}
    </ProjectWrapper>
  );
};

export default Project;
