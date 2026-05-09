interface TitleProps {
  title: string;
  iconText: React.ReactNode;
}

export function CardTitle({ title, iconText }: TitleProps) {
  return (
    <div className="flex flex-col items-center gap-0.5 py-5">
      <div className="flex items-center gap-1">
        <span className="text-icon text-xl">{iconText}</span>
        <p className="text-lg">{title}</p>
      </div>
    </div>
  );
}
