import { CARDS_CONTENT } from "@/config";
import { Card, SkeletonGroup } from "@/shared";
import { GoProjectRoadmap } from "react-icons/go";

export function SCardProjects() {
  return (
    <Card
      header
      title={CARDS_CONTENT.projects.title}
      className="flex flex-col px-5 pb-10 max-xl:items-center max-xl:justify-center"
      iconText={<GoProjectRoadmap />}
    >
      <SkeletonGroup
        count={4}
        className="h-40 w-95 rounded-md"
        containerClassName="scrollHidden mt-2 grid h-76 grid-cols-1 gap-4 overflow-y-scroll md:grid-cols-2"
      />
    </Card>
  );
}
