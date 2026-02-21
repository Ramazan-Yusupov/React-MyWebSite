import { Link } from "react-router-dom";
interface ButtonProps {
  title: string;
  href?: string;
  icon?: React.ReactNode;
}

export function Button({ title, icon, href }: ButtonProps) {
  return href ? (
    <Link
      to={href}
      className="flex gap-3 items-center justify-center bg-slate-100 h-12 w-full rounded-lg"
    >
      <span className="text-icon text-2xl">{icon}</span>
      <p className="text-white-200 text-[18px]">{title}</p>
    </Link>
  ) : (
    <button className="flex gap-3 items-center justify-center bg-slate-100 h-12 w-full rounded-lg">
      <span className="text-icon text-2xl">{icon}</span>
      <p className="text-white-200 text-[18px]">{title}</p>
    </button>
  );
}
