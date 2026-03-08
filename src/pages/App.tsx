import { Route, Routes } from "react-router-dom";
import { Layout } from "../Layout";
import { Home } from "./Home/Home";
import { PAGES } from "@/config";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path={PAGES.HOME} element={<Home />} />
      </Routes>
    </Layout>
  );
}
