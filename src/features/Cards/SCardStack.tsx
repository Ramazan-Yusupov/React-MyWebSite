import { CARDS_CONTENT } from "@/config";
import { Card, Skeleton } from "@/shared";
import { RiToolsLine } from "react-icons/ri";

export function SCardStack() {
  return (
    <Card
      header
      title={CARDS_CONTENT.stack.title}
      className="card-section-padding"
      iconText={<RiToolsLine />}
    >
      <div className="grid grid-cols-1 gap-2 py-2.5 sm:grid-cols-2">
        <Skeleton className="h-16 w-full rounded-md" count={4} />
      </div>
    </Card>
  );
}
