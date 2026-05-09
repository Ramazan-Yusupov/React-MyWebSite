import { useParams } from "react-router-dom";
import { projectItems } from "@/mockApi";
import { Card } from "@/shared";

import {
  ProjectNotFound,
  ProjectHeader,
  ProjectHero,
  ProjectInfo,
  FeatureList,
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
      label: "",
      value: project.projectDetails.difficulty,
      color: "text-purple-600",
    },
    {
      label: "Продолжительность",
      value: project.projectDetails.duration,
      color: "text-blue-600",
    },
    {
      label: "Статус",
      value: project.projectDetails.status,
      color:
        project.projectDetails.status === "Завершено"
          ? "text-emerald-600"
          : "text-yellow-600",
    },
  ];

  return (
    <div className="mx-4">
      <Card maxWidth={1200} className="my-4 px-4 py-4 md:px-8 md:py-8">
        <ProjectHeader projectLink={project.link} />

        <ProjectHero imageUrl={project.imageUrl} alt={project.title} />

        <ProjectInfo
          title={project.title}
          description={project.description}
          tags={project.projectDetails.tags}
        />
        {project.projectDetails.features && (
          <FeatureList features={project.projectDetails.features} />
        )}
        <ProjectStats stats={stats} />

        <ProjectActions
          github={project.projectDetails.github}
          liveDemo={project.link}
        />
      </Card>
    </div>
  );
}
