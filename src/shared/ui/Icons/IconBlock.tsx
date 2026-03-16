import { cn } from "@/lib";
import type { IconProps } from "@/types";

export function IconBlock({ icon, size = "xl" }: IconProps) {
  const sizeMap = {
    sm: "w-10.5 h-10.5",
    md: "w-11 h-11",
    xl: "w-12 h-12",
  };
  return (
    <div
      className={cn(
        "bg-grey-100 text-icon-100 flex shrink-0 items-center justify-center rounded-xl",
        sizeMap[size],
      )}
    >
      <div>{icon}</div>
    </div>
  );
}
