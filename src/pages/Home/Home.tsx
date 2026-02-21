import { CardGallery } from "@/features/Cards/CardGallery";
import { CardServices } from "@/features/Cards/CardServices";
import { CardStack } from "@/features/Cards/CardStack";
export function Home() {
  return (
    <div className="flex flex-col gap-5">
      <CardStack />
      <CardGallery />
      <CardServices />
    </div>
  );
}
