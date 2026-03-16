import { useVisitCounter } from "@/hooks";

export const VisitCounter = () => {
  const { count, loading, error } = useVisitCounter("home");

  if (loading) {
    return (
      <div className="h-6 w-32 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
    );
  }

  if (error) {
    return <span className="text-xs text-red-500">Stats unavailable</span>;
  }

  return (
    <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 dark:border-blue-800 dark:bg-blue-900/30">
      <span className="relative mr-2 flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
        <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
      </span>
      <span className="text-xs font-medium text-blue-700 dark:text-blue-300">
        👁 {count.toLocaleString()} просмотров
      </span>
    </div>
  );
};
