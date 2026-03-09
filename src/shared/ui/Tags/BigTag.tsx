import { cn } from "@/lib";
import type { BigTagProps } from "@/types";

export function BigTag({ icon, text, className }: BigTagProps) {
  return (
    <div
      className={cn(
        "border-stroke flex h-9.5 items-center justify-center gap-2 rounded-xl border bg-slate-300 px-5",
        className,
      )}
    >
      <div className="text-icon">{icon}</div>
      <div className="whitespace-nowrap">{text}</div>
    </div>
  );
}
