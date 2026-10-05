"use client";
export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <div className="container not-found">
      <div className="eyebrow">SOMETHING WENT WRONG</div>
      <h1>
        A small interruption<span>.</span>
      </h1>
      <p>The notebook couldn’t load this page. Give it another try.</p>
      <button className="button primary" onClick={reset}>
        Try again
      </button>
    </div>
  );
}
