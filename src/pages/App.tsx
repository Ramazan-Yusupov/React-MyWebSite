import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { PAGES } from "@/config";
import { Layout } from "../Layout";
import { Home } from "./Home/Home";
import { SProjectDetails } from "@/features/ProjectDetails/SProjectDetails";

const ProjectDetails = lazy(() =>
  import("@/features/ProjectDetails/ProjectDetails").then((module) => ({
    default: module.ProjectDetails,
  })),
);

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={PAGES.HOME} element={<Home />} />
        <Route
          path={PAGES.PROJECTID}
          element={
            <Suspense fallback={<SProjectDetails />}>
              <ProjectDetails />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}
