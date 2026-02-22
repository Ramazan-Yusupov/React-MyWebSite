import { Card } from "@/shared/ui/Cards/Card";
import { BigTag } from "@/shared/ui/Tags/BigTag";

interface CardStatProps {
  num: number;
  text: string;
  icon: React.ReactNode;
}

export function CardStatistick({ num, text, icon }: CardStatProps) {
  return (
    <Card className="pb-5.5 px-2.5 h-49.5 flex flex-col items-center justify-center gap-2">
      <div className="text-[64px] flex items-center justify-center">
        <p className="bg-linear-to-b from-gray-300/90 to-black bg-clip-text text-transparent">
          {num}
        </p>{" "}
        <span className="text-[40px] text-indigo">+</span>
      </div>
      <div className="w-full">
        <BigTag text={text} icon={icon} />
      </div>
    </Card>
  );
}
