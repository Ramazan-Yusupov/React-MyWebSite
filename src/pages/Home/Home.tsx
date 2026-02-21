import { CardGallery } from "@/features/Cards/CardGallery";
import { CardProfile } from "@/features/Cards/CardProfile";
import { CardServices } from "@/features/Cards/CardServices";
import { CardStack } from "@/features/Cards/CardStack";
import { CardStatContainer } from "@/features/Cards/CardStatContainer";
export function Home() {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col gap-5 max-w-112.5">
        <CardStack />
        <CardGallery />
        <CardServices />
      </div>
      <div className="flex flex-col gap-5 max-w-155">
        <CardStatContainer />
        <CardProfile />
      </div>
    </div>
  );
}
