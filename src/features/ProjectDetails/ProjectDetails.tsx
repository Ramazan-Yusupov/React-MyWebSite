import { useParams } from "react-router-dom";
import { projectItems } from "@/mockApi";
import { Card } from "@/shared";

import {
  ProjectNotFound,
  ProjectHeader,
  ProjectHero,
  ProjectInfo,
  FeatureList,
  ChallengesList,
  ProjectStats,
  ProjectActions,
} from "@/shared";

export function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const project = projectItems.find((item) => item.id === id);

  if (!project) {
    return <ProjectNotFound />;
  }

  const stats = [
    {
      label: "Difficulty",
      value: project.projectDetails.difficulty,
      color: "text-purple-600",
    },
    {
      label: "Duration",
      value: project.projectDetails.duration,
      color: "text-blue-600",
    },
    {
      label: "Role",
      value: project.projectDetails.role,
      color: "text-green-600",
    },
    {
      label: "Status",
      value: project.projectDetails.status,
      color:
        project.projectDetails.status === "Completed"
          ? "text-emerald-600"
          : "text-yellow-600",
    },
  ];

  return (
    <Card className="px-4 py-4 md:px-8 md:py-8">
      <ProjectHeader projectLink={project.link} />

      <ProjectHero imageUrl={project.imageUrl} alt={project.title} />

      <ProjectInfo
        title={project.title}
        description={project.description}
        tags={project.projectDetails.tags}
      />

      <FeatureList features={project.projectDetails.features} />

      <ChallengesList challenges={project.projectDetails.challenges} />

      <ProjectStats stats={stats} />

      <ProjectActions
        github={project.projectDetails.github}
        liveDemo={project.link}
      />
    </Card>
  );
}
