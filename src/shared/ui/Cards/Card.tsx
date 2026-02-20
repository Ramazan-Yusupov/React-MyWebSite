import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";

interface CardProps {
  text?: string;
  href?: string;
  title?: string;
  maxWidth?: number;
  linkTitle?: string;
  classname?: string;
  iconText?: React.ReactNode;
  children: React.ReactNode;
}

export function Card({
  href,
  text,
  title,
  maxWidth,
  children,
  iconText,
  classname,
  linkTitle,
}: CardProps) {
  return (
    <div
      className={`bg-slate rounded-xl pt-5  w-full ${classname || ""}`}
      style={{
        maxWidth: maxWidth,
      }}
    >
      <div className="flex flex-col gap-0.5 items-center">
        <div className="flex items-start gap-1">
          {iconText}
          <p className="text-grey">{text}</p>
        </div>
        <div className="text-xl">{title}</div>
      </div>
      <div>{children}</div>
      <div className="flex justify-center items-center">
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
