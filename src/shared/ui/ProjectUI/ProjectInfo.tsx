import { Card } from "../Cards/Card";
import { SmallTag } from "../Tags/SmallTag";
import { IconBlock } from "../Icons/IconBlock";
import { BiCode } from "react-icons/bi";

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
        <h1 className="mb-3 text-3xl font-bold text-gray-900 max-md:text-center md:text-4xl dark:text-white">
          {title}
        </h1>
        <p className="leading-relaxed text-gray-600 max-md:text-center md:text-lg dark:text-gray-300">
          {description}
        </p>
      </div>

      <Card className="border-slate-200 bg-linear-to-br from-slate-50 to-slate-100 px-6 py-5 dark:border-slate-700 dark:from-slate-800/50 dark:to-slate-900/50">
        <div className="mb-4 flex items-center gap-2">
          <IconBlock icon={<BiCode size={25} />} />
          <h3 className="font-semibold text-gray-900 dark:text-white">
            Frameworks
          </h3>
        </div>
        <div className="flex flex-wrap gap-3 max-md:justify-center">
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
