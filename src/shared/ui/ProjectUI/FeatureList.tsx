import { CheckCircle2 } from "lucide-react";
import { SectionCard } from "../Cards/SectionCard";
import { IconBlock } from "../Icons/IconBlock";

interface FeatureListProps {
  features: {
    id?: number;
    text: string;
    icon: React.ReactNode;
  }[];
}

export function FeatureList({ features }: FeatureListProps) {
  return (
    <SectionCard
      title="Ключевые особенности"
      icon={<CheckCircle2 className="h-6 w-6 text-green-600" />}
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {features.map((feature, index) => {
          return (
            <div
              key={feature.id ?? `${feature.text}-${index}`}
              className="group flex items-center gap-4 rounded-xl bg-gray-50 p-4 transition-colors hover:bg-gray-100 dark:bg-slate-800/50 dark:hover:bg-slate-800"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-transform">
                <IconBlock icon={feature.icon} />
              </div>
              <p className="pt-1 leading-relaxed text-gray-700 dark:text-gray-300">
                {feature.text}
              </p>
            </div>
          );
        })}
      </div>
    </SectionCard>
  );
}
