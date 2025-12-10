import { Route, Routes } from "react-router-dom";
import { Home } from "./Home/Home";
import { LevelPage } from "./Level/LevelPage";
import { ProfilePage } from "./Profile/ProfilePage";
import { NotFound } from "./NotFound";
import { Layout } from "../layout/layout";

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/level" element={<LevelPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};
