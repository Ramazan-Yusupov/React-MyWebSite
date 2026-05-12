interface SkeletonProps {
  className?: string;
  count?: number;
  width?: string;
  height?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className = "",
  count = 1,
  width = "",
  height = "h-4",
}) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className={`animate-pulse rounded-md bg-slate-100 ${width} ${height} ${className}`}
        />
      ))}
    </>
  );
};
