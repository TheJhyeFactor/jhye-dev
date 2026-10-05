import { Suspense } from "react";
import { Archive } from "@/components/archive";
import { getPosts, type ContentKind } from "@/lib/content";
export function ArchivePage({
  kind,
  title,
  description,
}: {
  kind: ContentKind;
  title: string;
  description: string;
}) {
  const posts = getPosts(kind).map(({ content, headings, ...post }) => {
    void content;
    void headings;
    return post;
  });
  return (
    <div className="container page-content">
      <div className="page-intro">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <Suspense fallback={<p>Loading posts…</p>}>
        <Archive posts={posts} kind={kind} />
      </Suspense>
      {posts.some((post) => post.demo) && (
        <p className="archive-end">Posts marked Demo are fictional examples.</p>
      )}
    </div>
  );
}
