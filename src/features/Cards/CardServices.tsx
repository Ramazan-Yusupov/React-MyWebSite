import Marquee from "react-fast-marquee";
import { IoGrid } from "react-icons/io5";
import { CARDS_CONTENT } from "@/config";
import { servicesItems } from "@/mockApi";
import { Card, CardLink } from "@/shared";

export function CardServices() {
  return (
    <Card
      header
      iconText={<IoGrid />}
      className="card-section-padding pb-10"
      text={CARDS_CONTENT.services.text}
      title={CARDS_CONTENT.services.title}
    >
      <Marquee
        direction="right"
        gradient={true}
        gradientColor="#101010"
        gradientWidth={100}
      >
        <div className="mt-4 flex gap-2 px-1">
          {servicesItems.map((item) => (
            <CardLink
              size="md"
              key={item.id}
              icon={item.icon}
              title={item.title}
            />
          ))}
        </div>
      </Marquee>
      <Marquee gradient={true} gradientColor="#101010" gradientWidth={100}>
        <div className="mt-4 flex gap-2 px-1">
          {servicesItems.map((item) => (
            <CardLink
              size="md"
              key={item.id}
              icon={item.icon}
              title={item.title}
            />
          ))}
        </div>
      </Marquee>
    </Card>
  );
}
