import Marquee from "react-fast-marquee";
import { Card } from "@/shared/ui/Cards/Card";
import { CardLink } from "@/shared/ui/Cards/CardLink";
import { servicesItems } from "@/mockApi/ServicesItems";
import { IoGrid } from "react-icons/io5";

export function CardServices() {
  return (
    <Card
      header
      href="/"
      maxWidth={450}
      text="Services"
      title="Solutions Suite"
      linkTitle="View All Services"
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
