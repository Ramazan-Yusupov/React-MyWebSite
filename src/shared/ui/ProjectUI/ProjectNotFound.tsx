import { Link } from "react-router-dom";
import { Card } from "@/shared";
import { PAGES } from "@/config";
import { AlertCircle, ArrowLeft } from "lucide-react";

export function ProjectNotFound() {
  return (
    <Card className="px-8 py-16 text-center">
      <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20">
        <AlertCircle className="h-8 w-8 text-red-600 dark:text-red-400" />
      </div>
      <h2 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
        Project not found
      </h2>
      <p className="mb-6 text-gray-600 dark:text-gray-400">
        The project you're looking for doesn't exist or has been removed.
      </p>
      <Link
        to={PAGES.HOME}
        className="bg-primary-600 hover:bg-primary-700 inline-flex items-center gap-2 rounded-lg px-6 py-3 font-medium text-white transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to home
      </Link>
    </Card>
  );
}
