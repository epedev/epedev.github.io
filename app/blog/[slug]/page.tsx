import { getPost, getPostSlugs } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const post = getPost(params.slug);
    return { title: `${post.title} — epedev` };
  } catch {
    return { title: "Not found — epedev" };
  }
}

export default function PostPage({ params }: { params: { slug: string } }) {
  let post;
  try {
    post = getPost(params.slug);
  } catch {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0a0e14] text-blue-200 font-mono">
      <Nav />
      <div className="max-w-2xl mx-auto px-4 py-16">
        <h1 className="text-xl text-amber-400 mb-2">{post!.title}</h1>
        <div className="text-sm text-blue-600 mb-8">{post!.date}</div>
        <article
          className="prose prose-invert max-w-none text-blue-200 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post!.html }}
        />
        <Link
          href="/blog"
          className="inline-block mt-10 text-xs text-blue-600 hover:text-amber-400"
        >
          ← back
        </Link>
      </div>
      <Footer />
    </main>
  );
}
