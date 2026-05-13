import { StatCard } from "./StatCard";

interface Stat {
  id?: number;
  label: string;
  value: string;
  color?: string;
}

interface ProjectStatsProps {
  stats: Stat[];
}

export function ProjectStats({ stats }: ProjectStatsProps) {
  return (
    <div className="grid grid-cols-1 gap-4 rounded-lg bg-slate-100 p-4 md:grid-cols-3">
      {stats.map((stat, index) => (
        <StatCard
          key={stat.id ?? `${stat.label}-${stat.value}-${index}`}
          label={stat.label}
          value={stat.value}
          color={stat.color}
        />
      ))}
    </div>
  );
}
