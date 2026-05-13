import { CARDS_CONTENT } from "@/config";
import { Card, SkeletonGroup } from "@/shared";
import { RiToolsLine } from "react-icons/ri";

export function SCardStack() {
  return (
    <Card
      header
      title={CARDS_CONTENT.stack.title}
      className="card-section-padding"
      iconText={<RiToolsLine />}
    >
      <SkeletonGroup
        count={4}
        className="h-16 w-full rounded-md"
        containerClassName="grid grid-cols-1 gap-2 py-2.5 sm:grid-cols-2"
      />
    </Card>
  );
}
