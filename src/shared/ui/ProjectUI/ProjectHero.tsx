import type { ProjectHeroProps } from "@/types";

const heightMap = {
  sm: "h-48 md:h-64",
  md: "h-72 md:h-96",
  lg: "h-96 md:h-[500px]",
};

export function ProjectHero({
  imageUrl,
  alt,
  height = "md",
}: ProjectHeroProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl">
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <img
        src={imageUrl}
        alt={alt}
        className={`${heightMap[height]} w-full object-cover transition-transform duration-500 group-hover:scale-105`}
      />
    </div>
  );
}
