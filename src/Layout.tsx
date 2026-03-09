export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex place-content-center px-5 py-4 lg:px-10 lg:py-8">
      <main>{children}</main>
    </div>
  );
}
