import {
  Skeleton,
  SkeletonButtonRow,
  SkeletonCard,
  SkeletonPills,
  SkeletonStatsGrid,
  SkeletonTextBlock,
} from "@/shared";

export const SProjectDetails = () => (
  <div className="mx-4 flex w-full justify-center">
    <SkeletonCard maxWidth={1200} className="my-4 px-4 py-4 md:px-8 md:py-8">
      <div className="space-y-6">
        <div className="flex items-center justify-between gap-4">
          <Skeleton className="h-10 w-32" />
          <Skeleton className="h-10 w-40" />
        </div>

        <Skeleton className="h-64 w-full rounded-2xl md:h-96" />

        <SkeletonTextBlock
          lines={["h-10 w-2/5", "h-5 w-full", "h-5 w-11/12", "h-5 w-4/5"]}
          containerClassName="space-y-4"
        />

        <SkeletonPills />
        <SkeletonStatsGrid />
        <SkeletonButtonRow
          className="h-14 w-full rounded-xl"
          containerClassName="flex flex-col gap-4 sm:flex-row"
        />
      </div>
    </SkeletonCard>
  </div>
);
