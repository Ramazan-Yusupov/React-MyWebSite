import { CardTitle } from "@/features/Cards/CardTitle";
import { cn } from "@/lib";
import type { CardProps } from "@/types";

export function Card({
  title,
  header,
  maxWidth,
  children,
  iconText,
  className,
}: CardProps) {
  return (
    <div
      className={cn("bg-slate w-full shrink-0 rounded-xl", className)}
      style={{
        maxWidth: maxWidth,
      }}
    >
      {header && <CardTitle title={title || ""} iconText={iconText} />}
      <div>{children}</div>
    </div>
  );
}
