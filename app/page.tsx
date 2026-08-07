import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import TerminalWindow from "@/components/TerminalWindow";
import { getAllPosts } from "@/lib/posts";

const PROJECT = {
  name: "Honeypot Intelligence Platform",
  tag: "flagship",
  desc: "Decoy infrastructure and threat-classification pipeline: Flask decoy on Azure, structured JSON logging, Postgres ingestion, Grafana visualization. Built to collect and categorize live attack traffic at a scale relevant to CERT-level operations.",
  stack: ["Flask", "Postgres", "Docker", "Grafana", "psycopg2"],
  href: "https://github.com/epedev/honeypot-intel-platform",
};

export default function Home() {
  const posts = getAllPosts().slice(0, 2);

  return (
    <main className="min-h-screen bg-[#0a0e14] text-blue-200 font-mono">
      <Nav />

      {/* HERO */}
      <section className="max-w-2xl mx-auto px-4 pt-16 pb-12">
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-10">
          <div className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 rounded-full overflow-hidden border-2 border-amber-400/60">
            <Image
              src="/avatar.jpg"
              alt="epedev"
              width={224}
              height={224}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div>
            <h1 className="text-xl md:text-2xl text-blue-50">
              epedev <span className="text-blue-600">|</span>{" "}
              <span className="text-amber-400">
                Offensive Security Researcher
              </span>
            </h1>
            <p className="text-sm text-blue-400 mt-1">
              Addis Ababa — web app security, recon, decoy infrastructure
            </p>
          </div>
        </div>

        <TerminalWindow title="epedev@insa:~">
          <div className="text-blue-500">$ whoami</div>
          <div className="text-blue-100 mb-3">
            Aspiring red teamer, web application security researcher.
          </div>
          <div className="text-blue-500">$ ls</div>
          <div className="text-blue-300 mb-1">total 16</div>
          <div className="text-blue-300">drwxr-xr-x 2 epedev epedev 4096 projects/</div>
          <div className="text-blue-300">drwxr-xr-x 2 epedev epedev 4096 homelab/</div>
          <div className="text-blue-300">drwxr-xr-x 2 epedev epedev 4096 blog/</div>
          <div className="text-blue-300 mb-3">-rw-r--r-- 1 epedev epedev  512 goals.txt   # INSA, Ethio-CERT</div>
          <div className="text-blue-500">$ _</div>
        </TerminalWindow>

        <div className="mt-6 flex gap-4 text-sm">
          <Link href="/blog" className="text-blue-400 hover:text-amber-400">
            ./blog
          </Link>
          <a
            href="https://github.com/epedev"
            className="text-blue-400 hover:text-amber-400"
          >
            ./github
          </a>
        </div>
      </section>

      {/* PROJECT */}
      <section className="max-w-2xl mx-auto px-4 py-16 border-t border-blue-900">
        <div className="text-blue-500 text-sm mb-6">$ cat ./project</div>
        <article className="group">
          <div className="flex items-baseline gap-3 mb-1">
            <h2 className="text-blue-100 group-hover:text-amber-400 transition-colors">
              {PROJECT.name}
            </h2>
            <span className="text-xs text-blue-600">[{PROJECT.tag}]</span>
          </div>
          <p className="text-sm text-blue-300 leading-relaxed mb-3">
            {PROJECT.desc}
          </p>
          <div className="flex flex-wrap gap-2 mb-3">
            {PROJECT.stack.map((s) => (
              <span
                key={s}
                className="text-xs text-blue-500 border border-blue-800 px-2 py-0.5"
              >
                {s}
              </span>
            ))}
          </div>
          <a
            href={PROJECT.href}
            className="text-xs text-blue-500 hover:text-amber-400"
          >
            → repo
          </a>
        </article>
      </section>

      {/* FEATURED BLOGS */}
      <section className="max-w-2xl mx-auto px-4 py-16 border-t border-blue-900">
        <div className="text-blue-500 text-sm mb-6">$ ls ./blog --featured</div>
        {posts.length === 0 ? (
          <p className="text-sm text-blue-600"># no posts yet</p>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block group"
              >
                <h3 className="text-blue-100 group-hover:text-amber-400 transition-colors">
                  {post.title}
                </h3>
                <div className="text-xs text-blue-600 mb-1">{post.date}</div>
                {post.excerpt && (
                  <p className="text-sm text-blue-300">{post.excerpt}</p>
                )}
                <span className="text-xs text-blue-500 group-hover:text-amber-400">
                  Read full analysis →
                </span>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* QUICK CONTACT */}
      <section className="max-w-2xl mx-auto px-4 py-16 border-t border-blue-900">
        <div className="text-blue-500 text-sm mb-4">$ cat ./contact</div>
        <p className="text-sm text-blue-300 mb-5">
          Open to conversations on offensive security, threat intel tooling,
          and anything CERT-adjacent.
        </p>
        <Link
          href="/contact"
          className="inline-block text-sm border border-amber-400/60 text-amber-400 px-4 py-2 hover:bg-amber-400/10 transition-colors"
        >
          Execute →
        </Link>
      </section>

      <Footer />
    </main>
  );
}
