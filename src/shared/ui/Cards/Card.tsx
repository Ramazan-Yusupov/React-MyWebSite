import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";

interface CardProps {
  text?: string;
  href?: string;
  title?: string;
  header?: boolean;
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
  header,
  maxWidth,
  children,
  iconText,
  classname,
  linkTitle,
}: CardProps) {
  return (
    <div
      className={`bg-slate rounded-xl w-full ${classname || ""}`}
      style={{
        maxWidth: maxWidth,
      }}
    >
      {header && (
        <div className="flex flex-col gap-0.5 items-center pt-5">
          <div className="flex items-start gap-1">
            <span className="text-icon text-xl">{iconText}</span>
            <p className="text-grey">{text}</p>
          </div>
          <div className="text-xl">{title}</div>
        </div>
      )}
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
