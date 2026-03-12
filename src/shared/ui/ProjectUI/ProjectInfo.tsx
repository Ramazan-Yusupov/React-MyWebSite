import { Code2 } from "lucide-react";
import { Card } from "../Cards/Card";
import { SmallTag } from "../Tags/SmallTag";

interface Tag {
  icon: React.ReactNode;
  text: string;
  href: string;
}

interface ProjectInfoProps {
  title: string;
  description: string;
  tags: Tag[];
}

export function ProjectInfo({ title, description, tags }: ProjectInfoProps) {
  return (
    <div className="my-4 space-y-4">
      <div>
        <h1 className="mb-3 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
          {title}
        </h1>
        <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
          {description}
        </p>
      </div>

      <Card className="border-slate-200 bg-linear-to-br from-slate-50 to-slate-100 px-6 py-5 dark:border-slate-700 dark:from-slate-800/50 dark:to-slate-900/50">
        <div className="mb-4 flex items-center gap-2">
          <Code2 className="text-primary-600 h-5 w-5" />
          <h3 className="font-semibold text-gray-900 dark:text-white">
            Technologies Used
          </h3>
        </div>
        <div className="flex flex-wrap gap-3">
          {tags.map((tag, index) => (
            <SmallTag
              key={index}
              href={tag.href}
              icon={tag.icon}
              title={tag.text}
            />
          ))}
        </div>
      </Card>
    </div>
  );
}
