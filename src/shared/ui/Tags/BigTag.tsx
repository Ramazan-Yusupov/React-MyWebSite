interface TagProps {
  text: string;
  className?: string;
  icon?: React.ReactNode;
}

export function BigTag({ icon, text, className }: TagProps) {
  return (
    <div
      className={`flex justify-center items-center gap-2 bg-slate-300 h-9.5 rounded-xl border border-stroke ${className || ""}`}
    >
      <div className="text-icon text-md">{icon}</div>
      <div className="whitespace-nowrap">{text}</div>
    </div>
  );
}
