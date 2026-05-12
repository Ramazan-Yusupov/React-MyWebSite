import { SCardFollow } from "@/features/Cards/SCardFollow";
import { SCardProfile } from "@/features/Cards/SCardProfile";
import { SCardProjects } from "@/features/Cards/SCardProjects";
import { SCardServices } from "@/features/Cards/SCardServices";
import { SCardStack } from "@/features/Cards/SCardStack";
import { SCardStatContainer } from "@/features/Cards/SCardStatContainer";
import { SCardWorkflow } from "@/features/Cards/SCardWorkflow";
import { lazy, Suspense } from "react";

const CardProfile = lazy(() =>
  import("@/features/Cards/CardProfile").then((module) => ({
    default: module.CardProfile,
  })),
);
const CardProjects = lazy(() =>
  import("@/features/Cards/CardProjects").then((module) => ({
    default: module.CardProjects,
  })),
);
const CardStack = lazy(() =>
  import("@/features/Cards/CardStack").then((module) => ({
    default: module.CardStack,
  })),
);
const CardServices = lazy(() =>
  import("@/features/Cards/CardServices").then((module) => ({
    default: module.CardServices,
  })),
);
const CardFollow = lazy(() =>
  import("@/features/Cards/CardFollow").then((module) => ({
    default: module.CardFollow,
  })),
);
const CardWorkflow = lazy(() =>
  import("@/features/Cards/CardWorkflow").then((module) => ({
    default: module.CardWorkflow,
  })),
);
const CardStatContainer = lazy(() =>
  import("@/features/Cards/CardStatContainer").then((module) => ({
    default: module.CardStatContainer,
  })),
);

export function Home() {
  return (
    <div className="px-5 py-5 lg:px-10">
      <div className="grid grid-cols-[1fr_auto_auto] gap-5 max-2xl:hidden">
        <div className="column-gap-5 max-w-203">
          <Suspense fallback={<SCardProfile />}>
            <CardProfile />
          </Suspense>
          <Suspense fallback={<SCardProjects />}>
            <CardProjects />
          </Suspense>
        </div>
        <div className="column-gap-5 max-w-169">
          <Suspense fallback={<SCardStack />}>
            <CardStack />
          </Suspense>
          <Suspense fallback={<SCardServices />}>
            <CardServices />
          </Suspense>
          <Suspense fallback={<SCardFollow />}>
            <CardFollow />
          </Suspense>
        </div>
        <div className="column-gap-5 w-90">
          <Suspense fallback={<SCardWorkflow />}>
            <CardWorkflow />
          </Suspense>
          <Suspense fallback={<SCardStatContainer />}>
            <CardStatContainer />
          </Suspense>
        </div>
      </div>

      <div className="grid gap-5 max-2xl:grid-cols-2 max-xl:grid-cols-1 2xl:hidden">
        <div className="column-gap-5">
          <Suspense fallback={<SCardProfile />}>
            <CardProfile />
          </Suspense>
          <Suspense fallback={<SCardProjects />}>
            <CardProjects />
          </Suspense>
        </div>
        <div className="column-gap-5">
          <Suspense fallback={<SCardStack />}>
            <CardStack />
          </Suspense>
          <Suspense fallback={<SCardServices />}>
            <CardServices />
          </Suspense>
          <Suspense fallback={<SCardFollow />}>
            <CardFollow />
          </Suspense>
        </div>
        <div className="col-span-1 flex gap-5 max-xl:flex-col">
          <Suspense fallback={<SCardWorkflow />}>
            <CardWorkflow />
          </Suspense>
          <div className="w-full shrink-0">
            <Suspense fallback={<SCardStatContainer />}>
              <CardStatContainer />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
