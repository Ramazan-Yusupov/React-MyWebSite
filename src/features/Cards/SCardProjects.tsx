import { CARDS_CONTENT } from "@/config";
import { Card, Skeleton } from "@/shared";
import { GoProjectRoadmap } from "react-icons/go";

export function SCardProjects() {
  return (
    <Card
      header
      title={CARDS_CONTENT.projects.title}
      className="flex flex-col px-5 pb-10 max-xl:items-center max-xl:justify-center"
      iconText={<GoProjectRoadmap />}
    >
      <div className="scrollHidden mt-2 grid h-76 grid-cols-1 gap-4 overflow-y-scroll md:grid-cols-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <Skeleton key={index} className="h-40 w-95 rounded-md" />
        ))}
      </div>
    </Card>
  );
}
