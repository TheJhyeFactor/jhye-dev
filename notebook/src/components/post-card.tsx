import Link from "next/link";
import { formatDate, postUrl, type Post } from "@/lib/content-utils";

export function PostRow({ post }: { post: Post }) {
  return (
    <article className="post-row">
      <Link href={postUrl(post)} className="post-row-link">
        <div className="post-meta">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden="true">·</span>
          <span>{post.category}</span>
          {post.demo && <span className="demo-tag">Demo</span>}
        </div>
        <h3>{post.title}</h3>
        <p>{post.description}</p>
        <div className="post-row-bottom">
          <span className="reading-time">{post.readingTime} min read</span>
          <div className="tags">
            {post.tags.slice(0, 3).map((tag) => (
              <span key={tag}>#{tag}</span>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
}
