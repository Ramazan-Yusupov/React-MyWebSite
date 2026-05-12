import { Skeleton } from "@/shared";

export function SCardStatContainer() {
  return (
    <div className="column-gap-5">
      <Skeleton className="h-49.25 w-full" count={2} />
    </div>
  );
}
