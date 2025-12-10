import { Header } from "../widget";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>{children}</div>
    </div>
  );
}
