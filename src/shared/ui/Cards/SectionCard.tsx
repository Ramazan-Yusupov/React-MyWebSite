import { Card } from "./Card";
import type { ReactNode } from "react";

interface SectionCardProps {
  title: string;
  icon: ReactNode;
  iconColor?: string;
  children: ReactNode;
  className?: string;
}

export function SectionCard({
  title,
  icon,
  iconColor = "text-gray-600",
  children,
  className = "",
}: SectionCardProps) {
  return (
    <Card className={`py-6 ${className}`}>
      <div className="mb-6 flex items-center gap-2">
        <div className={`${iconColor}`}>{icon}</div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          {title}
        </h2>
      </div>
      {children}
    </Card>
  );
}
