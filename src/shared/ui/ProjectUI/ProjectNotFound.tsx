import { Link } from "react-router-dom";
import { PAGES } from "@/config";
import { AlertCircle, ArrowLeft } from "lucide-react";
import { Card } from "../Cards/Card";

export function ProjectNotFound() {
  return (
    <Card className="px-8 py-16 text-center">
      <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20">
        <AlertCircle className="h-8 w-8 text-red-600 dark:text-red-400" />
      </div>
      <h2 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
        Проект не найден
      </h2>
      <p className="mb-6 text-gray-600 dark:text-gray-400">
        Проект, который вы ищете, не существует или был удален.
      </p>
      <Link
        to={PAGES.HOME}
        className="hover:text-indigo inline-flex items-center gap-2 rounded-lg px-6 py-3 font-medium text-white transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Назад на главную
      </Link>
    </Card>
  );
}
