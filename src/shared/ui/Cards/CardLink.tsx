import { Link } from "react-router-dom";
import { IconBlock } from "../Icons/IconBlock";
import { FaArrowRightLong } from "react-icons/fa6";

type Height = "xl" | "md" | "sm";

interface CardLinkProps {
  tag?: string;
  href?: string;
  title: string;
  target?: string;
  className?: string;
  height?: Height;
  icon: React.ReactNode;
  iconArrowRight?: React.ReactNode;
}

export function CardLink({
  tag,
  icon,
  href,
  title,
  target,
  className = "",
  height = "xl",
  iconArrowRight,
}: CardLinkProps) {
  const baseClasses = `bg-slate-100 p-2 rounded-xl w-full flex justify-between items-center h-fit gap-2 ${className}`;

  const Content = (
    <>
      <div className="flex items-center gap-2 min-w-0">
        <IconBlock icon={icon} height={height} />
        <div className="text-base text-white-200 whitespace-nowrap truncate">
          {title}
        </div>
      </div>
      {tag && (
        <div className="bg-slate-200 text-grey-200 py-1.5 px-2.5 rounded-xl shrink-0">
          {tag}
        </div>
      )}
      {iconArrowRight && (
        <FaArrowRightLong size={29} className="text-grey shrink-0 me-3" />
      )}
    </>
  );

  return href ? (
    <Link to={href} target={target} className={baseClasses}>
      {Content}
    </Link>
  ) : (
    <div className={baseClasses}>{Content}</div>
  );
}
