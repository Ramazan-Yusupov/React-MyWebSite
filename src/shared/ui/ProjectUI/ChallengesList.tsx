import { AlertCircle } from "lucide-react";
import { SectionCard } from "../Cards/SectionCard";

interface ChallengesListProps {
  challenges: string[];
}

export function ChallengesList({ challenges }: ChallengesListProps) {
  if (challenges.length === 0) return null;

  return (
    <SectionCard
      title="Challenges & Solutions"
      icon={<AlertCircle className="h-6 w-6 text-amber-600" />}
    >
      <div className="space-y-4">
        {challenges.map((challenge, index) => (
          <div
            key={index}
            className="flex gap-4 rounded-xl border-l-4 border-amber-500 bg-amber-50/50 p-4 dark:bg-amber-900/10"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-200 text-sm font-bold text-amber-800 dark:bg-amber-800 dark:text-amber-200">
              {index + 1}
            </div>
            <p className="pt-1 leading-relaxed text-gray-700 dark:text-gray-300">
              {challenge}
            </p>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
