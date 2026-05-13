import type { ButtonProps } from "@/types";
import { Link } from "react-router-dom";

export function Button({
  title,
  icon,
  href,
  target,
  type = "button",
  onClick,
  disabled = false,
  className = "",
}: ButtonProps) {
  const classes = `flex gap-3 items-center justify-center bg-slate-100 group h-12 w-full rounded-lg ${className}`;
  const isExternalLink = href?.startsWith("http");

  const content = (
    <>
      <span className="text-icon text-2xl">{icon}</span>
      <p className="text-white-200 group-hover:text-indigo text-md">{title}</p>
    </>
  );

  if (href && isExternalLink) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noreferrer" : undefined}
        className={classes}
      >
        {content}
      </a>
    );
  }

  if (href) {
    return (
      <Link to={href} target={target} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {content}
    </button>
  );
}
