export default function TerminalWindow({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border border-blue-900 bg-[#0d1320] rounded-md overflow-hidden">
      <div className="flex items-center gap-2 px-3 py-2 border-b border-blue-900 bg-[#0a0e14]">
        <span className="w-2.5 h-2.5 rounded-full bg-blue-900" />
        <span className="w-2.5 h-2.5 rounded-full bg-blue-900" />
        <span className="w-2.5 h-2.5 rounded-full bg-blue-900" />
        <span className="ml-2 text-xs text-blue-600">{title}</span>
      </div>
      <div className="p-4 text-sm leading-relaxed">{children}</div>
    </div>
  );
}
