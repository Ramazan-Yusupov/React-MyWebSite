import type { ProjectHeroProps } from "@/types";
import { SmallTag } from "../Tags/SmallTag";

const heightMap = {
  sm: "h-48 md:h-64",
  md: "h-72 md:h-96",
  lg: "h-96 md:h-[500px]",
};

export function ProjectHero({
  imageUrl,
  alt,
  typeProject,
  height = "md",
}: ProjectHeroProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl">
      <img
        src={imageUrl}
        alt={alt}
        className={`${heightMap[height]} w-full object-cover transition-transform duration-500`}
      />

      <SmallTag
        icon={null}
        title={typeProject}
        className="absolute top-2 right-2"
      />
    </div>
  );
}
