import { Suspense } from "react";
import {
  SCardFollow,
  SCardProfile,
  SCardProjects,
  SCardServices,
  SCardStack,
  SCardStatContainer,
  SCardWorkflow,
} from "@/features/SCards";
import {
  CardFollow,
  CardProfile,
  CardProjects,
  CardServices,
  CardStack,
  CardStatContainer,
  CardWorkflow,
} from "@/features/Cards/lazyCards";

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
