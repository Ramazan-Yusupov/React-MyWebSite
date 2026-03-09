import type { CardStatProps } from "@/types";
import { BigTag } from "../Tags/BigTag";
import { Card } from "./Card";

export function CardStatistick({ num, text, icon }: CardStatProps) {
  return (
    <Card className="flex h-49.5 flex-col items-center justify-center gap-2 px-2.5 pb-5.5">
      <div className="flex items-center justify-center text-5xl">
        <p className="bg-linear-to-b from-gray-300/90 to-black bg-clip-text text-transparent">
          {num}
        </p>{" "}
        <span className="text-indigo text-4xl">+</span>
      </div>
      <div className="w-full">
        <BigTag text={text} icon={icon} />
      </div>
    </Card>
  );
}
