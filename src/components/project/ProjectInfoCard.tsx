import type { Project } from "~/types/project";

const ProjectInfoCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div>
      <p>{project.id}</p>
      <p>{project.name}</p>
      <p>{project.targetEndDate.toISOString()}</p>
    </div>
  );
};

export default ProjectInfoCard;
