import { Link } from "react-router-dom";
import { PAGES } from "@/config";
import { ArrowLeft, ExternalLink } from "lucide-react";
import type { ProjectHeaderProps } from "@/types";

export function ProjectHeader({ projectLink }: ProjectHeaderProps) {
  return (
    <div className="mb-4 flex items-center justify-between">
      <Link
        to={PAGES.HOME}
        className="hover:text-indigo group inline-flex items-center gap-2 font-medium text-gray-600 transition-colors dark:text-gray-400"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        Назад на главную
      </Link>
      <a
        href={projectLink}
        target="_blank"
        rel="noreferrer"
        className="hover:text-indigo inline-flex items-center gap-2 rounded-lg px-5 py-2.5 font-medium text-white shadow-lg transition-all max-sm:hidden"
      >
        <ExternalLink className="h-4 w-4" />
        Посмотреть проект
      </a>
    </div>
  );
}
