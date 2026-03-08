import type { SmallTagProps } from "@/types";
import { Link } from "react-router-dom";

export function SmallTag({ icon, title, className, href }: SmallTagProps) {
  return (
    <Link
      to={href}
      target="_blank"
      className={`inline-flex items-center gap-1 ps-2 pe-4 bg-slate-100 h-7 rounded-full ${className || ""}`}
    >
      <div className="text-icon">{icon}</div>
      <div className="whitespace-nowrap text-white-200 text-sm">{title}</div>
    </Link>
  );
}
