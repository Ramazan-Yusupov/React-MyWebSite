import type { ReactNode } from "react";
import { Card } from "../Cards/Card";
import { Skeleton } from "./Skeleton";

interface SkeletonCardProps {
  children: ReactNode;
  className?: string;
  maxWidth?: number;
}

interface SkeletonGroupProps {
  className: string;
  count: number;
  containerClassName?: string;
}

interface SkeletonTextBlockProps {
  lines: string[];
  containerClassName?: string;
}

interface SkeletonButtonRowProps {
  count?: number;
  className?: string;
  containerClassName?: string;
}

interface SkeletonPillsProps {
  count?: number;
  className?: string;
  containerClassName?: string;
}

interface SkeletonStatsGridProps {
  count?: number;
  className?: string;
  containerClassName?: string;
}

export function SkeletonCard({
  children,
  className,
  maxWidth,
}: SkeletonCardProps) {
  return (
    <Card maxWidth={maxWidth} className={className}>
      {children}
    </Card>
  );
}

export function SkeletonGroup({
  className,
  count,
  containerClassName,
}: SkeletonGroupProps) {
  return (
    <div className={containerClassName}>
      {Array.from({ length: count }).map((_, index) => (
        <Skeleton key={index} className={className} />
      ))}
    </div>
  );
}

export function SkeletonTextBlock({
  lines,
  containerClassName,
}: SkeletonTextBlockProps) {
  return (
    <div className={containerClassName}>
      {lines.map((lineClassName, index) => (
        <Skeleton key={index} className={lineClassName} />
      ))}
    </div>
  );
}

export function SkeletonButtonRow({
  count = 2,
  className = "h-12 w-full",
  containerClassName = "flex gap-3 max-sm:flex-col",
}: SkeletonButtonRowProps) {
  return (
    <SkeletonGroup
      count={count}
      className={className}
      containerClassName={containerClassName}
    />
  );
}

export function SkeletonPills({
  count = 5,
  className = "h-8 w-28 rounded-full",
  containerClassName = "flex flex-wrap gap-3",
}: SkeletonPillsProps) {
  return (
    <SkeletonGroup
      count={count}
      className={className}
      containerClassName={containerClassName}
    />
  );
}

export function SkeletonStatsGrid({
  count = 3,
  className = "h-24 w-full rounded-xl",
  containerClassName = "grid grid-cols-1 gap-4 md:grid-cols-3",
}: SkeletonStatsGridProps) {
  return (
    <SkeletonGroup
      count={count}
      className={className}
      containerClassName={containerClassName}
    />
  );
}
