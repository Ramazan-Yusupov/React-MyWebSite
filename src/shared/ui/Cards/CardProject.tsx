import { Link } from "react-router-dom";
import { Card } from "./Card";
import type { CardProjectProps } from "@/types";

const linkClasses = "flex flex-col justify-center";
const imageClasses = "h-40 md:h-31 object-cover rounded-xl";
const contentClasses = "mt-2";
const titleClasses = "font-bold text-lg";
const descriptionClasses = "text-sm text-gray-500";

export function CardProject({
  title,
  description,
  imageUrl,
  projectUrl,
}: CardProjectProps) {
  const isExternalLink = projectUrl.startsWith("http");

  const content = (
    <>
      <img src={imageUrl} alt={title} className={imageClasses} />
      <div className={contentClasses}>
        <h3 className={titleClasses}>{title}</h3>
        <p className={descriptionClasses}>{description}</p>
      </div>
    </>
  );

  return (
    <Card className="mt-4 bg-slate-100 p-3.5">
      {isExternalLink ? (
        <a
          href={projectUrl}
          target="_blank"
          rel="noreferrer"
          className={linkClasses}
        >
          {content}
        </a>
      ) : (
        <Link to={projectUrl} className={linkClasses}>
          {content}
        </Link>
      )}
    </Card>
  );
}
