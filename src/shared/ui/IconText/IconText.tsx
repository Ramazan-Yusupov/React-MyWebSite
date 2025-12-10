import { Link } from "react-router-dom";

interface IconTextProps {
  key: string;
  text: string;
  href: string;
  icon: React.ReactNode;
}

export function IconText({ text, icon, href }: IconTextProps) {
  return (
    <Link to={href} target="_blank" className="flex items-center gap-2">
      <div className="">{icon}</div>
      <div className="text-xl  font-bold ">{text}</div>
    </Link>
  );
}
