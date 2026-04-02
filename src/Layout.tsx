import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <Outlet />
    </main>
  );
}
