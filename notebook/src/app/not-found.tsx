import Link from "next/link";
import { ArrowLeft } from "@/components/icons";
export default function NotFound() {
  return (
    <div className="container not-found">
      <div className="eyebrow">404 / NOTHING AT THIS ADDRESS</div>
      <h1>
        A dead end<span>.</span>
      </h1>
      <p>Even a good rabbit hole has a few. This page doesn’t exist.</p>
      <Link className="button primary" href="/">
        <ArrowLeft size={17} /> Back to the notebook
      </Link>
    </div>
  );
}
