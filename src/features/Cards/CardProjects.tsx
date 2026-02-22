import { CardProject } from "@/shared/ui/Cards/CardProject";
import { Card } from "../../shared/ui/Cards/Card";

import { GoProjectRoadmap } from "react-icons/go";
import { projectItems } from "@/mockApi/projectItems";

export function CardProjects() {
  return (
    <Card
      header
      text="My Works"
      title="Проекты"
      className="pb-7 px-5 flex flex-col justify-center items-center"
      iconText={<GoProjectRoadmap />}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 overflow-y-scroll h-79 scrollHidden mt-2">
        {projectItems.map((project) => (
          <CardProject
            key={project.id}
            title={project.title}
            imageUrl={project.imageUrl}
            description={project.description}
            projectUrl={project.projectUrl}
          />
        ))}
      </div>
    </Card>
  );
}
