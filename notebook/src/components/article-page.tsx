import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import { mdxComponents } from "@/components/mdx";
import {
  getPost,
  getPosts,
  formatDate,
  postUrl,
  type ContentKind,
} from "@/lib/content";
import { site, absoluteUrl } from "@/lib/site";
import { PostRow } from "@/components/post-card";
export function articleMetadata(kind: ContentKind, slug: string): Metadata {
  const post = getPost(kind, slug);
  if (!post) return {};
  const url = absoluteUrl(postUrl(post));
  const image = `/og?title=${encodeURIComponent(post.title)}&kind=${kind}`;
  return {
    title: post.title,
    description: post.description,
    authors: [{ name: site.author }],
    keywords: post.tags,
    alternates: { canonical: url },
    robots: post.demo ? { index: false, follow: true } : undefined,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url,
      publishedTime: `${post.date}T00:00:00Z`,
      authors: [site.author],
      tags: post.tags,
      images: [{ url: image, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [image],
    },
  };
}
export async function ArticlePage({
  kind,
  slug,
}: {
  kind: ContentKind;
  slug: string;
}) {
  const post = getPost(kind, slug);
  if (!post) notFound();
  const related = getPosts(kind)
    .filter((p) => p.slug !== slug)
    .slice(0, 2);
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: site.author,
      url: absoluteUrl("/about"),
    },
    image: absoluteUrl(`/og?title=${encodeURIComponent(post.title)}`),
    mainEntityOfPage: absoluteUrl(postUrl(post)),
    keywords: post.tags.join(", "),
  };
  return (
    <div className="container article-page">
      <Link href={`/${kind}`} className="back-link">
        ← Back to {kind}
      </Link>
      <header className="article-header">
        <div className="post-meta">
          <span className="category">{post.category}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden="true">·</span>
          <span>{post.readingTime} min read</span>
        </div>
        <h1>{post.title}</h1>
        <p className="article-description">{post.description}</p>
        <div className="article-author">
          <span>
            Written by <Link href="/about">Jhye</Link>
          </span>
          <div className="tags">
            {post.tags.map((tag) => (
              <Link key={tag} href={`/${kind}?q=${encodeURIComponent(tag)}`}>
                #{tag}
              </Link>
            ))}
          </div>
        </div>
      </header>
      {post.demo && (
        <div className="article-demo">
          <span className="demo-tag">Demo write-up</span>
          <p>
            This is fictional sample content for the notebook. It describes a
            lab scenario, not a real finding or a project Jhye has released.
          </p>
        </div>
      )}
      {post.headings.length > 0 && (
        <details className="article-contents">
          <summary>On this page</summary>
          <nav aria-label="Table of contents" className="table-of-contents">
            {post.headings.map((heading) => (
              <a href={`#${heading.id}`} key={heading.id}>
                {heading.text}
              </a>
            ))}
          </nav>
        </details>
      )}
      <div className="article-layout">
        <article className="prose">
          <MDXRemote
            source={post.content}
            components={mdxComponents}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [
                  rehypeSlug,
                  [
                    rehypePrettyCode,
                    {
                      theme: "github-light",
                      keepBackground: false,
                      defaultLang: "plaintext",
                    },
                  ],
                ],
              },
            }}
          />
          <div className="article-signoff">
            <span>— Jhye</span>
          </div>
        </article>
      </div>
      {related.length > 0 && (
        <section className="related-posts">
          <div className="section-heading">
            <h2>More {kind}</h2>
            <Link className="section-link" href={`/${kind}`}>
              All {kind}
            </Link>
          </div>
          {related.map((p) => (
            <PostRow key={p.slug} post={p} />
          ))}
        </section>
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
    </div>
  );
}
