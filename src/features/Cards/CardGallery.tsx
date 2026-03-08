import { MdWork } from "react-icons/md";
import Marquee from "react-fast-marquee";
import { CARDS_CONTENT } from "@/config";
import { galleryItems } from "@/mockApi";
import { Card } from "@/shared";

export function CardGallery() {
  return (
    <Card
      header
      href="/"
      text={CARDS_CONTENT.gallery.text}
      title={CARDS_CONTENT.gallery.title}
      linkTitle={CARDS_CONTENT.gallery.linkTitle}
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
