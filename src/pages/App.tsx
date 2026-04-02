import { Route, Routes } from "react-router-dom";
import { Layout } from "../Layout";
import { Home } from "./Home/Home";
import { PAGES } from "@/config";
import { ProjectDetails } from "@/features/ProjectDetails/ProjectDetails";
import { AdminStats } from "./AdminStats";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={PAGES.HOME} element={<Home />} />
        <Route path={PAGES.PROJECTID} element={<ProjectDetails />} />
      </Route>
      <Route path={PAGES.ADMIN_STATS} element={<AdminStats />} />
    </Routes>
  );
}
