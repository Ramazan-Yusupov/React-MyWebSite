import { CARDS_CONTENT } from "@/config";
import { Card, SkeletonGroup } from "@/shared";
import Marquee from "react-fast-marquee";
import { IoGrid } from "react-icons/io5";

const marqueeRowClassName = "mt-2 flex gap-2 px-1";
const marqueeItemClassName = "h-16 w-50 rounded-md";

export function SCardServices() {
  return (
    <Card
      header
      iconText={<IoGrid />}
      className="card-section-padding pb-10"
      title={CARDS_CONTENT.services.title}
    >
      <Marquee
        direction="right"
        gradient={true}
        gradientColor="#101010"
        gradientWidth={100}
      >
        <SkeletonGroup
          count={8}
          className={marqueeItemClassName}
          containerClassName={marqueeRowClassName}
        />
      </Marquee>
      <Marquee gradient={true} gradientColor="#101010" gradientWidth={100}>
        <SkeletonGroup
          count={8}
          className={marqueeItemClassName}
          containerClassName="mt-4 flex gap-2 px-1"
        />
      </Marquee>
    </Card>
  );
}
