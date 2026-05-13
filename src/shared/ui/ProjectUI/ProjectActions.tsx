import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

interface ProjectActionsProps {
  github?: string;
  liveDemo: string;
}

export function ProjectActions({ github, liveDemo }: ProjectActionsProps) {
  return (
    <div className="mt-4 flex flex-col gap-4 sm:flex-row">
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gray-900 px-6 py-4 font-semibold text-white transition-opacity hover:opacity-90 dark:bg-white dark:text-gray-900"
        >
          <FaGithub className="h-5 w-5" />
          <p className="hidden sm:block">GitHub</p>
        </a>
      )}
      {liveDemo && (
        <a
          href={liveDemo}
          target="_blank"
          rel="noreferrer"
          className="hover:text-indigo flex flex-1 items-center justify-center gap-2 rounded-xl px-6 py-4 font-semibold text-white transition-colors"
        >
          <ExternalLink className="h-5 w-5" />
          <p>Посмотреть проект</p>
        </a>
      )}
    </div>
  );
}
