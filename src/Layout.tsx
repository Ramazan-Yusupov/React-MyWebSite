export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="lg:py-8 py-4 lg:px-10 px-5 flex place-content-center">
      <main>{children}</main>
    </div>
  );
}
