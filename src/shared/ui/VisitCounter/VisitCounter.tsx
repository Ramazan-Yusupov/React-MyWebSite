import { useVisitCounter } from "@/hooks/useVisitCounter"; // Проверьте путь
import { useEffect, useState } from "react";

export const VisitCounter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { count, loading, error } = useVisitCounter("home");

  useEffect(() => {
    // Проверяем, есть ли в URL параметр ?show_stats=true
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      // Можно усложнить проверку, добавив секретный ключ, например &secret=hr2026
      const showStats = params.get("count") === "true";
      // const secret = params.get('secret');

      if (showStats) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsVisible(true);
      }
    }
  }, []);

  if (!isVisible) {
    return null; // Полностью скрыто для обычных пользователей
  }

  if (loading) {
    return (
      <div className="fixed right-4 bottom-4 z-50">
        <div className="h-8 w-24 animate-pulse rounded bg-gray-800/50"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="fixed right-4 bottom-4 z-50 rounded bg-red-900 px-3 py-1 text-xs text-white shadow-lg">
        Stats Error
      </div>
    );
  }

  return (
    <div className="fixed right-4 bottom-4 z-50 flex items-center gap-2 rounded-lg border border-blue-500/30 bg-blue-900/90 px-4 py-2 text-sm font-medium text-blue-100 shadow-xl backdrop-blur-sm">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
      </span>
      <span> {count.toLocaleString()}</span>
    </div>
  );
};
