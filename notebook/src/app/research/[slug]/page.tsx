import { ArticlePage, articleMetadata } from "@/components/article-page";
import { getPosts } from "@/lib/content";
export function generateStaticParams() {
  return getPosts("research").map((post) => ({ slug: post.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return articleMetadata("research", (await params).slug);
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return <ArticlePage kind="research" slug={(await params).slug} />;
}
