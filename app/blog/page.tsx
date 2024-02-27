import Link from "next/link";

export default function BlogPage() {
  return (
    <main>
      <h1>Blog</h1>
      <Link href="/blog/first-post">First Post</Link>
    </main>
  );
}