import { featureIcons } from "@/config";
import type { FeatureIconKey } from "@/config/features-icons";
import { CheckCircle2 } from "lucide-react";
import { SectionCard } from "../Cards/SectionCard";

interface FeatureListProps {
  features: string[];
}

export function FeatureList({ features }: FeatureListProps) {
  if (features.length === 0) return null;

  const iconKeys = Object.keys(featureIcons) as FeatureIconKey[];

  return (
    <SectionCard
      title="Key Features"
      icon={<CheckCircle2 className="h-6 w-6 text-green-600" />}
    >
      <div className="grid gap-4 md:grid-cols-2">
        {features.map((feature, index) => {
          const iconKey = iconKeys[index % iconKeys.length];
          const Icon = featureIcons[iconKey];

          return (
            <div
              key={index}
              className="group flex items-start gap-4 rounded-xl bg-gray-50 p-4 transition-colors hover:bg-gray-100 dark:bg-slate-800/50 dark:hover:bg-slate-800"
            >
              <div className="bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-transform group-hover:scale-110">
                <Icon className="h-5 w-5" />
              </div>
              <p className="pt-1 leading-relaxed text-gray-700 dark:text-gray-300">
                {feature}
              </p>
            </div>
          );
        })}
      </div>
    </SectionCard>
  );
}
