import { CardFollow } from "@/features/Cards/CardFollow";
import { CardProfile } from "@/features/Cards/CardProfile";
import { CardProjects } from "@/features/Cards/CardProjects";
import { CardServices } from "@/features/Cards/CardServices";
import { CardStack } from "@/features/Cards/CardStack";
import { CardStatContainer } from "@/features/Cards/CardStatContainer";
import { CardWorkflow } from "@/features/Cards/CardWorkflow";
export function Home() {
  return (
    <>
      <div className="grid grid-cols-[1fr_auto_auto] gap-5 max-[1700px]:hidden">
        <div className="flex flex-col gap-5 max-w-203">
          <CardProfile />
          <CardProjects />
        </div>
        <div className="flex flex-col gap-5 max-w-169">
          <CardStack />
          <CardServices />
          <CardFollow />
        </div>
        <div className="flex flex-col gap-5 w-90">
          <CardWorkflow />
          <CardStatContainer />
        </div>
      </div>

      <div className="grid max-xl:grid-cols-1 max-[1700px]:grid-cols-2 gap-5 min-[1700px]:hidden">
        <div className="flex flex-col gap-5">
          <CardProfile />
          <CardProjects />
        </div>
        <div className="flex flex-col gap-5">
          <CardStack />
          <CardServices />
          <CardFollow />
        </div>
        <div className="flex max-xl:flex-col gap-5 col-span-1">
          <CardWorkflow />
          <div className="w-full shrink-0">
            <CardStatContainer />
          </div>
        </div>
      </div>
    </>
  );
}
