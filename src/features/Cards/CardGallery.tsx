import { MdWork } from "react-icons/md";
import Marquee from "react-fast-marquee";
import { Card } from "@/shared/ui/Cards/Card";
import { items } from "@/mockApi/marqApi";

export function CardGallery() {
  return (
    <Card
      maxWidth={450}
      text="Projects"
      title="Works Gallery"
      linkTitle="View Works"
      iconText={<MdWork className="text-icon" size={20} />}
    >
      <Marquee>
        {items.map((item) => (
          <img
            alt="image"
            key={item.id}
            src={item.image}
            className="w-50 h-27.5 rounded-xl mx-1 object-cover mt-5"
          />
        ))}
      </Marquee>
    </Card>
  );
}
