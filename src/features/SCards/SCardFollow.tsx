import { CARDS_CONTENT } from "@/config";
import { Card, SkeletonGroup } from "@/shared";
import { IoShareSocial } from "react-icons/io5";

export function SCardFollow() {
  return (
    <Card
      header
      title={CARDS_CONTENT.follow.title}
      className="card-section-padding pb-10"
      iconText={<IoShareSocial />}
    >
      <SkeletonGroup
        count={3}
        className="h-16 w-full rounded-lg"
        containerClassName="grid grid-cols-1 gap-2 pt-2.5 sm:grid-cols-2"
      />
    </Card>
  );
}
