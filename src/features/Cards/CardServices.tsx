import Marquee from "react-fast-marquee";
import { IoGrid } from "react-icons/io5";
import { CARDS_CONTENT } from "@/config";
import { servicesItems } from "@/mockApi";
import { Card, CardLink } from "@/shared";

export function CardServices() {
  return (
    <Card
      header
      href="/"
      text={CARDS_CONTENT.services.text}
      title={CARDS_CONTENT.services.title}
      linkTitle={CARDS_CONTENT.services.linkTitle}
      iconText={<IoGrid />}
    >
      <Marquee
        direction="right"
        gradient={true}
        gradientColor="#101010"
        gradientWidth={100}
      >
        <div className="flex gap-2 px-1 mt-4">
          {servicesItems.map((item) => (
            <CardLink
              height="md"
              key={item.id}
              icon={item.icon}
              title={item.title}
            />
          ))}
        </div>
      </Marquee>
      <Marquee gradient={true} gradientColor="#101010" gradientWidth={100}>
        <div className="flex gap-2 mt-4 px-1">
          {servicesItems.map((item) => (
            <CardLink
              height="md"
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
