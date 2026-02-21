type Height = "xl" | "md" | "sm";

interface IconProps {
  height: Height;
  icon: React.ReactNode;
}

export function IconBlock({ icon, height = "xl" }: IconProps) {
  const heightMap = {
    sm: "w-10.5 h-10.5",
    md: "w-11 h-11",
    xl: "w-12 h-12",
  };
  return (
    <div
      className={`bg-grey-100 rounded-xl flex justify-center items-center text-icon-100 shrink-0 ${heightMap[height]}`}
    >
      <div>{icon}</div>
    </div>
  );
}
