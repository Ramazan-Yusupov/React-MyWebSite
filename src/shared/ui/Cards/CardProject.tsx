import { Link } from "react-router-dom";
import { Card } from "./Card";
import type { CardProjectProps } from "@/types";

export function CardProject({
  title,
  description,
  imageUrl,
  projectUrl,
}: CardProjectProps) {
  const isExternalLink = projectUrl.startsWith("http");

  return (
    <Card className="p-3.5 bg-slate-100 mt-4">
      {isExternalLink ? (
        <a
          href={projectUrl}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col justify-center"
        >
          <img
            src={imageUrl}
            alt={title}
            className=" h-40 md:h-31 object-cover rounded-xl"
          />
          <div className="mt-2 ">
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="text-sm text-gray-500">{description}</p>
          </div>
        </a>
      ) : (
        <Link to={projectUrl} className="flex flex-col justify-center">
          <img
            src={imageUrl}
            alt={title}
            className=" h-40 md:h-31 object-cover rounded-xl"
          />
          <div className="mt-2 ">
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="text-sm text-gray-500">{description}</p>
          </div>
        </Link>
      )}
    </Card>
  );
}
