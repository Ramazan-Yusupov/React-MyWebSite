interface TagProps {
  text: string;
  className?: string;
  icon?: React.ReactNode;
}

export function SmallTag({ icon, text, className }: TagProps) {
  return (
    <div
      className={`inline-flex items-center gap-1 ps-2 pe-4 bg-slate-100 h-7 rounded-full ${className || ""}`}
    >
      <div className="text-icon">{icon}</div>
      <div className="whitespace-nowrap text-white-200 text-sm">{text}</div>
    </div>
  );
}
