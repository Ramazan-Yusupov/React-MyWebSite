import { cn } from "@/lib";
import type { CardProps } from "@/types";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";

export function Card({
  href,
  text,
  title,
  header,
  maxWidth,
  children,
  iconText,
  className,
  linkTitle,
}: CardProps) {
  return (
    <div
      className={cn("bg-slate w-full shrink-0 rounded-xl", className)}
      style={{
        maxWidth: maxWidth,
      }}
    >
      {header && (
        <div className="flex flex-col items-center gap-0.5 pt-5">
          <div className="flex items-start gap-1">
            <span className="text-icon text-xl">{iconText}</span>
            <p className="text-grey">{text}</p>
          </div>
          <div className="text-xl">{title}</div>
        </div>
      )}
      <div>{children}</div>
      <div className="flex items-center justify-center">
        {linkTitle && (
          <Link
            to={href || "/"}
            className="text-icon flex items-center gap-1 p-3.5"
          >
            {linkTitle}
            <span>
              <FiExternalLink />
            </span>
          </Link>
        )}
      </div>
    </div>
  );
}
