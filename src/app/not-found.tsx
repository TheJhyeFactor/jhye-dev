import Link from "next/link";
export default function NotFound() {
  return (
    <section className="shell page-intro">
      <p className="eyebrow">404 / Page not found</p>
      <h1>
        Let’s find
        <br />
        <em>the right path.</em>
      </h1>
      <p className="lead">
        That page is not here. Explore the work or follow the career timeline.
      </p>
      <div className="hero-actions">
        <Link className="button" href="/work">
          Selected work ↗
        </Link>
        <Link className="text-link" href="/career">
          Career timeline ↗
        </Link>
      </div>
    </section>
  );
}
