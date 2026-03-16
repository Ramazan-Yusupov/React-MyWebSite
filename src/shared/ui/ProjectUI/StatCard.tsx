import { Card } from "@/shared";
import type { ReactNode } from "react";

interface StatCardProps {
  label: string;
  value: string | ReactNode;
  color?: string;
  icon?: ReactNode;
}

export function StatCard({
  label,
  value,
  color = "text-gray-900",
  icon,
}: StatCardProps) {
  return (
    <Card className="flex flex-col items-center justify-center px-4 py-5 text-center">
      {icon && <div className="mb-2 flex justify-center">{icon}</div>}
      <p className={`text-xl font-bold xl:text-2xl ${color} mb-1`}>{value}</p>
      <p className="text-sm text-gray-600 dark:text-gray-400">{label}</p>
    </Card>
  );
}
