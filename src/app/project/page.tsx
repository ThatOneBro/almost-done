"use server";

import ProjectInfoCard from "~/components/project/ProjectInfoCard";
import { getProjects } from "~/app/actions";

export default async function ProjectIndexPage() {
  const projects = await getProjects();
  return (
    <div>
      {projects.length ? (
        projects.map((project) => (
          <ProjectInfoCard key={project.id} project={project} />
        ))
      ) : (
        <p>No projects to show!</p>
      )}
    </div>
  );
}
