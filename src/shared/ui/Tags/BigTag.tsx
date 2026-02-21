interface TagProps {
  icon?: React.ReactNode;
  text: string;
}

export function BigTag({ icon, text }: TagProps) {
  return (
    <div className="flex justify-center items-center gap-2 bg-slate-300 h-9.5 rounded-xl border border-stroke">
      <div className="text-icon text-md">{icon}</div>
      <div className="">{text}</div>
    </div>
  );
}
