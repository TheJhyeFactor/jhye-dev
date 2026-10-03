import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export default function ContactBand() {
  return (
    <section className="contact-band" id="contact">
      <div className="shell">
        <p className="eyebrow">The next chapter</p>
        <div className="contact-band-content">
          <h2>
            Good work starts
            <br />
            with a conversation.
          </h2>
          <div>
            <p>
              Engineering opportunities, thoughtful teams, and useful problems
              in software, AI and cybersecurity.
            </p>
            <Link className="button button-light" href="/contact">
              Get in touch <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
