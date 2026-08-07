import Link from "next/link";

export default function Nav() {
  return (
    <nav className="border-b border-blue-900">
      <div className="max-w-2xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="text-amber-400 tracking-widest text-sm font-bold"
        >
          EPEDEV
        </Link>
        <div className="flex gap-6 text-sm text-blue-400">
          <Link href="/" className="hover:text-amber-400">
            Home
          </Link>
          <Link href="/blog" className="hover:text-amber-400">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-amber-400">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
