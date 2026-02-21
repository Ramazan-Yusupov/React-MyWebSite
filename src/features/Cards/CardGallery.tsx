import { MdWork } from "react-icons/md";
import Marquee from "react-fast-marquee";
import { Card } from "@/shared/ui/Cards/Card";
import { galleryItems } from "@/mockApi/galleryItems";

export function CardGallery() {
  return (
    <Card
      header
      href="/"
      maxWidth={450}
      text="Projects"
      title="Works Gallery"
      linkTitle="View Works"
      iconText={<MdWork />}
    >
      <Marquee>
        {galleryItems.map((item) => (
          <img
            alt="image"
            key={item.id}
            src={item.image}
            className="w-50 h-27.5 rounded-2xl mx-1 object-cover mt-4"
          />
        ))}
      </Marquee>
    </Card>
  );
}
