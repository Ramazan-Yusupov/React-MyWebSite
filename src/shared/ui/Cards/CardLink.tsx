import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { IconBlock } from "../Icons/IconBlock";
import type { CardLinkProps } from "@/types";
import { cn } from "@/lib";

export function CardLink({
  tag,
  icon,
  href,
  title,
  target,
  className = "",
  size = "xl",
  iconArrowRight,
}: CardLinkProps) {
  const baseClasses = `bg-slate-100 p-2 rounded-xl w-full flex justify-between group items-center h-fit gap-2 ${className}`;

  const Content = (
    <>
      <div className="flex min-w-0 items-center gap-2">
        <IconBlock icon={icon} size={size} />
        <div
          className={cn(
            "text-white-200 truncate text-base whitespace-nowrap",
            href ? "group-hover:text-indigo" : "",
          )}
        >
          {title}
        </div>
      </div>
      {tag && (
        <div className="text-grey-200 shrink-0 rounded-xl bg-slate-200 px-2.5 py-1.5">
          {tag}
        </div>
      )}
      {iconArrowRight && (
        <FaArrowRightLong size={29} className="text-grey me-3 shrink-0" />
      )}
    </>
  );

  const isExternalLink = href?.startsWith("http");

  if (href && isExternalLink) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noreferrer" : undefined}
        className={baseClasses}
      >
        {Content}
      </a>
    );
  }

  return href ? (
    <Link to={href} target={target} className={baseClasses}>
      {Content}
    </Link>
  ) : (
    <div className={baseClasses}>{Content}</div>
  );
}
