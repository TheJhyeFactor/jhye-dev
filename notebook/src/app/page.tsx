import Link from "next/link";
import { getAllPosts } from "@/lib/content";
import { HomePosts } from "@/components/home-posts";
export default function Home() {
  const posts = getAllPosts().map((p) => ({ ...p, content: "", headings: [] }));
  return <div className="container home-page">
    <section className="home-intro"><h1>Welcome to my notebook</h1><p>I’m Jhye, a software engineer and security enthusiast. This is where I write about what I’m building, investigating, and learning.</p><Link href="/about" className="plain-link">About me</Link></section>
    <HomePosts initialPosts={posts} />
  </div>;
}
