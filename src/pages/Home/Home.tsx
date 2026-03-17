import {
  CardFollow,
  CardProfile,
  CardProjects,
  CardServices,
  CardStack,
  CardStatContainer,
  CardWorkflow,
} from "@/features";
import { VisitCounter } from "@/shared";

export function Home() {
  return (
    <>
      <VisitCounter />

      <div className="grid grid-cols-[1fr_auto_auto] gap-5 max-2xl:hidden">
        <div className="column-gap-5 max-w-203">
          <CardProfile />
          <CardProjects />
        </div>
        <div className="column-gap-5 max-w-169">
          <CardStack />
          <CardServices />
          <CardFollow />
        </div>
        <div className="column-gap-5 w-90">
          <CardWorkflow />
          <CardStatContainer />
        </div>
      </div>

      <div className="grid gap-5 max-2xl:grid-cols-2 max-xl:grid-cols-1 2xl:hidden">
        <div className="column-gap-5">
          <CardProfile />
          <CardProjects />
        </div>
        <div className="column-gap-5">
          <CardStack />
          <CardServices />
          <CardFollow />
        </div>
        <div className="col-span-1 flex gap-5 max-xl:flex-col">
          <CardWorkflow />
          <div className="w-full shrink-0">
            <CardStatContainer />
          </div>
        </div>
      </div>
    </>
  );
}
