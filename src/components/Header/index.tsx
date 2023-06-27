"client-server";

type THeader = {
  children: React.ReactNode;
};

export default function HeaderComponent({ children }: THeader) {
  return (
    <header className="fixed h-3 w-full border-y-2 border-gray-900 bg-slate-400">
      {children}
    </header>
  );
}
