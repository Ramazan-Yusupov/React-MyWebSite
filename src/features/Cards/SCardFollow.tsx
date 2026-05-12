import { CARDS_CONTENT } from "@/config";
import { Card, Skeleton } from "@/shared";
import { IoShareSocial } from "react-icons/io5";

export function SCardFollow() {
  return (
    <Card
      header
      title={CARDS_CONTENT.follow.title}
      className="card-section-padding pb-10"
      iconText={<IoShareSocial />}
    >
      <div className="grid grid-cols-1 gap-2 pt-2.5 sm:grid-cols-2">
        {Array.from({ length: 3 }).map((_, index) => (
          <Skeleton key={index} className="h-16 w-full rounded-lg" />
        ))}
      </div>
    </Card>
  );
}
