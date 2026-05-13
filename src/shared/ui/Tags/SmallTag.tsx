import { cn } from "@/lib";
import type { SmallTagProps } from "@/types";
import { Link } from "react-router-dom";

export function SmallTag({ icon, title, className, href }: SmallTagProps) {
  const classes = cn(
    "inline-flex h-7 items-center gap-1 rounded-full bg-slate-100 ps-2 pe-4",
    className,
  );
  const classesHref = cn(
    "group group-hover:text-indigo inline-flex h-7 items-center gap-1 rounded-full bg-slate-100 ps-2 pe-4",
    className,
  );

  const content = (
    <>
      {icon && <div className="text-icon">{icon}</div>}
      <div className="text-white-200 text-sm whitespace-nowrap">{title}</div>
    </>
  );

  if (!href || href === "#") {
    return <div className={classes}>{content}</div>;
  }

  const isExternalLink = href.startsWith("http");

  if (isExternalLink) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classesHref}>
        {content}
      </a>
    );
  }

  return (
    <Link to={href} className={classesHref}>
      {content}
    </Link>
  );
}
