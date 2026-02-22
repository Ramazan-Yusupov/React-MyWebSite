import { Link } from "react-router-dom";
import { Card } from "./Card";

interface CardProjectProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

export function CardProject({
  title,
  description,
  imageUrl,
  projectUrl,
}: CardProjectProps) {
  return (
    <Card className="p-3.5 bg-slate-100 mt-4">
      <Link
        to={projectUrl}
        target="_blank"
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
      </Link>
    </Card>
  );
}
