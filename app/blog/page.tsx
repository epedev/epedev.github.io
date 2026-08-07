import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getAllPosts } from "@/lib/posts";

export const metadata = { title: "Blog — epedev" };

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-[#0a0e14] text-blue-200 font-mono">
      <Nav />
      <div className="max-w-2xl mx-auto px-4 py-16">
        <h1 className="text-xl text-amber-400 mb-8">$ ls ./posts</h1>
        <ul className="space-y-6">
          {posts.map((post) => (
            <li key={post.slug} className="border-b border-blue-900 pb-4">
              <Link
                href={`/blog/${post.slug}`}
                className="text-blue-300 hover:text-amber-400"
              >
                {post.title}
              </Link>
              <div className="text-sm text-blue-600">{post.date}</div>
              {post.excerpt && (
                <p className="text-sm text-blue-200 mt-1">{post.excerpt}</p>
              )}
            </li>
          ))}
          {posts.length === 0 && (
            <li className="text-blue-600"># no posts yet</li>
          )}
        </ul>
      </div>
      <Footer />
    </main>
  );
}
