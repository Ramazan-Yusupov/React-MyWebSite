import { GoProjectRoadmap } from "react-icons/go";
import { CARDS_CONTENT } from "@/config";
import { projectItems } from "@/mockApi";
import { Card, CardProject } from "@/shared";

export function CardProjects() {
  return (
    <Card
      header
      text={CARDS_CONTENT.projects.text}
      title={CARDS_CONTENT.projects.title}
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
