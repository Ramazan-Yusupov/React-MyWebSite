import type { BigTagProps } from "@/types";

export function BigTag({ icon, text, className }: BigTagProps) {
  return (
    <div
      className={`flex justify-center items-center gap-2 px-5 bg-slate-300 h-9.5 rounded-xl border border-stroke ${className || ""}`}
    >
      <div className="text-icon text-md">{icon}</div>
      <div className="whitespace-nowrap">{text}</div>
    </div>
  );
}
