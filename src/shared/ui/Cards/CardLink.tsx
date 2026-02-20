import { Link } from "react-router-dom";
import { IconBlock } from "../Icons/IconBlock";
import { FaArrowRightLong } from "react-icons/fa6";

type Height = "xl" | "md" | "sm";

interface CardLinkProps {
  tag?: string;
  href?: string;
  title: string;
  target?: string;
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
  height = "xl",
  iconArrowRight,
}: CardLinkProps) {
  return href ? (
    <Link
      to={href}
      target={target}
      className="bg-slate-100 p-2 rounded-xl w-full flex justify-between items-center h-fit"
    >
      <div className="flex items-center gap-2">
        <IconBlock icon={icon} height={height} />
        <div className="text-base text-white-200">{title}</div>
      </div>
      {tag && (
        <div className="bg-slate-200 text-grey-200 py-1.5 px-2.5 rounded-xl">
          {tag}
        </div>
      )}
      {iconArrowRight && (
        <FaArrowRightLong size={29} className="text-grey mr-4" />
      )}
    </Link>
  ) : (
    <div className="bg-slate-100 p-2 rounded-xl w-full flex justify-between items-center h-fit">
      <div className="flex items-center gap-2">
        <IconBlock icon={icon} height={height} />
        <div className="text-base text-white-200">{title}</div>
      </div>
      {tag && (
        <div className="bg-slate-200 text-grey-200 py-1.5 px-2.5 rounded-xl">
          {tag}
        </div>
      )}
      {iconArrowRight && (
        <FaArrowRightLong size={29} className="text-grey mr-4" />
      )}
    </div>
  );
}
