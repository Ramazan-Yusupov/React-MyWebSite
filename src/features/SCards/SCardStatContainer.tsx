import { SkeletonGroup } from "@/shared";

export function SCardStatContainer() {
  return (
    <SkeletonGroup
      count={2}
      className="h-49.25 w-full"
      containerClassName="column-gap-5"
    />
  );
}
