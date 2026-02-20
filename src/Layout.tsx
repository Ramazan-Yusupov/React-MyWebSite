interface Props {
  children: React.ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <div className="py-8 mx-auto px-10">
      <main className="">{children}</main>
    </div>
  );
}
