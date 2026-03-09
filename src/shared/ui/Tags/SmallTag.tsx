import { cn } from "@/lib";
import type { SmallTagProps } from "@/types";
import { Link } from "react-router-dom";

export function SmallTag({ icon, title, className, href }: SmallTagProps) {
  return (
    <Link
      to={href}
      target="_blank"
      className={cn(
        "inline-flex h-7 items-center gap-1 rounded-full bg-slate-100 ps-2 pe-4",
        className,
      )}
    >
      <div className="text-icon">{icon}</div>
      <div className="text-white-200 text-sm whitespace-nowrap">{title}</div>
    </Link>
  );
}
