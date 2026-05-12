import { CARDS_CONTENT } from "@/config";
import { Card, Skeleton } from "@/shared";
import Marquee from "react-fast-marquee";
import { IoGrid } from "react-icons/io5";

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
        <div className="mt-2 flex gap-2 px-1">
          {Array.from({ length: 8 }).map((_, index) => (
            <Skeleton key={index} className="h-16 w-50 rounded-md" />
          ))}
        </div>
      </Marquee>
      <Marquee gradient={true} gradientColor="#101010" gradientWidth={100}>
        <div className="mt-4 flex gap-2 px-1">
          {Array.from({ length: 8 }).map((_, index) => (
            <Skeleton key={index} className="h-16 w-50 rounded-md" />
          ))}
        </div>
      </Marquee>
    </Card>
  );
}
