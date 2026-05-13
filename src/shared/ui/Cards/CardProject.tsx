import { Link } from "react-router-dom";
import { Card } from "./Card";
import type { CardProjectProps } from "@/types";
import { SmallTag } from "../Tags/SmallTag";
import { cn } from "@/lib";

const contentClasses = "mt-2";
const titleClasses = "font-bold text-lg";
const linkClasses = "flex flex-col justify-center";
const imageClasses = "h-40 md:h-31 object-cover rounded-xl";
const descriptionClasses = "text-sm text-gray-500 truncate";

export function CardProject({
  id,
  title,
  imageUrl,
  typeProject,
  description,
}: CardProjectProps) {
  const content = (
    <>
      <img src={imageUrl} alt={title} className={imageClasses} />
      <div className={contentClasses}>
        <h3 className={titleClasses}>{title}</h3>
        <p className={descriptionClasses}>{description}</p>
      </div>
      <SmallTag
        icon={null}
        title={typeProject}
        className="absolute top-2 right-2"
      />
    </>
  );

  return (
    <Card className="mt-4 bg-slate-100 p-3.5">
      <Link to={`/project/${id}`} className={cn(linkClasses, "group relative")}>
        {content}
      </Link>
    </Card>
  );
}
