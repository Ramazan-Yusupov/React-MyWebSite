import { GoProjectRoadmap } from "react-icons/go";
import { CARDS_CONTENT } from "@/config";
import { projectItems } from "@/mockApi";
import { Card } from "@/shared/ui/Cards/Card";
import { CardProject } from "@/shared/ui/Cards/CardProject";

export function CardProjects() {
  return (
    <Card
      header
      title={CARDS_CONTENT.projects.title}
      className="flex flex-col items-center justify-center px-5 pb-10"
      iconText={<GoProjectRoadmap />}
    >
      <div className="scrollHidden mt-2 grid h-76 grid-cols-1 gap-4 overflow-y-scroll md:grid-cols-2">
        {projectItems.map((project) => (
          <CardProject
            typeProject={project.typeProject}
            id={project.id}
            key={project.id}
            title={project.title}
            imageUrl={project.imageUrl}
            description={project.description}
          />
        ))}
      </div>
    </Card>
  );
}
