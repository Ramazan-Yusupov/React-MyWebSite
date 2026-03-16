import { Link } from "react-router-dom";
import { PAGES } from "@/config";
import { ArrowLeft, ExternalLink } from "lucide-react";
import type { ProjectHeaderProps } from "@/types";

export function ProjectHeader({ projectLink }: ProjectHeaderProps) {
  return (
    <div className="mb-4 flex items-center justify-between">
      <Link
        to={PAGES.HOME}
        className="hover:text-primary-600 dark:hover:text-primary-400 group inline-flex items-center gap-2 font-medium text-gray-600 transition-colors dark:text-gray-400"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        Back to home
      </Link>
      <a
        href={projectLink}
        target="_blank"
        rel="noreferrer"
        className="bg-primary-600 hover:bg-primary-700 shadow-primary-600/20 hover:shadow-primary-600/30 inline-flex items-center gap-2 rounded-lg px-5 py-2.5 font-medium text-white shadow-lg transition-all hover:-translate-y-0.5 max-sm:hidden"
      >
        <ExternalLink className="h-4 w-4" />
        Visit project
      </a>
    </div>
  );
}
