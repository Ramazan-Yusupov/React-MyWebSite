import { lazy } from "react";

export const CardProfile = lazy(() =>
  import("@/features/Cards/CardProfile").then((module) => ({
    default: module.CardProfile,
  })),
);
export const CardProjects = lazy(() =>
  import("@/features/Cards/CardProjects").then((module) => ({
    default: module.CardProjects,
  })),
);
export const CardStack = lazy(() =>
  import("@/features/Cards/CardStack").then((module) => ({
    default: module.CardStack,
  })),
);
export const CardServices = lazy(() =>
  import("@/features/Cards/CardServices").then((module) => ({
    default: module.CardServices,
  })),
);
export const CardFollow = lazy(() =>
  import("@/features/Cards/CardFollow").then((module) => ({
    default: module.CardFollow,
  })),
);
export const CardWorkflow = lazy(() =>
  import("@/features/Cards/CardWorkflow").then((module) => ({
    default: module.CardWorkflow,
  })),
);
export const CardStatContainer = lazy(() =>
  import("@/features/Cards/CardStatContainer").then((module) => ({
    default: module.CardStatContainer,
  })),
);
