import { Card, Skeleton } from "@/shared";

export function SCardProfile() {
  return (
    <Card>
      <div className="relative flex flex-col gap-3 px-5 py-7.5">
        <div className="flex gap-3 max-md:mt-10 max-md:flex-col max-md:items-center">
          <Skeleton className="h-32.5 w-32.5 rounded-xl" />
          <div className="flex flex-col gap-4 max-md:items-center max-md:gap-3">
            <Skeleton className="h-9.5 w-50" />
            <div className="max-md:text-center">
              <Skeleton className="h-8 w-40 whitespace-nowrap sm:h-10 sm:w-60" />
              <Skeleton className="mt-2 h-5 w-30" />
            </div>
          </div>
        </div>
        <Skeleton className="absolute top-5 right-5 h-8 w-40 md:top-8" />

        <Card className="bg-slate-300 px-4.5 py-5">
          <div className="grid grid-cols-4 gap-4 gap-y-2 max-md:justify-center">
            {Array.from({ length: 6 }).map((_, index) => (
              <Skeleton key={index} className="h-7 w-full" />
            ))}
          </div>
        </Card>
        <div className="flex gap-3 max-sm:flex-col">
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
        </div>
      </div>
    </Card>
  );
}
