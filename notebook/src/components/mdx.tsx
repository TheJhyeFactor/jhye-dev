import type { MDXComponents } from "mdx/types";
import { CodeBlock } from "@/components/code-block";
import { LabArt } from "@/components/lab-art";
export const mdxComponents: MDXComponents = {
  pre: CodeBlock,
  Callout: ({
    children,
    title = "A note from the lab",
    type = "note",
  }: {
    children: React.ReactNode;
    title?: string;
    type?: string;
  }) => (
    <aside className={`callout callout-${type}`}>
      <div className="callout-title">
        {type === "warning" ? "!" : "↳"} {title}
      </div>
      <div>{children}</div>
    </aside>
  ),
  RequestFlow: () => (
    <figure className="article-diagram">
      <LabArt />
      <figcaption>
        Authentication identifies the caller. Authorization checks which
        resources they can access.
      </figcaption>
    </figure>
  ),
  Figure: ({
    src,
    alt,
    caption,
  }: {
    src: string;
    alt: string;
    caption?: string;
  }) => (
    <figure className="article-figure">
      <img src={src} alt={alt} loading="lazy" />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  ),
  Video: ({
    src,
    title = "Embedded video",
  }: {
    src: string;
    title?: string;
  }) => (
    <div className="video-embed">
      <iframe
        src={src}
        title={title}
        loading="lazy"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  ),
  table: ({ children }) => (
    <div className="table-scroll">
      <table>{children}</table>
    </div>
  ),
};
