import { site } from "@/lib/site";
import { publisherOrigin } from "@/lib/publisher";
export function Footer() {
  const profiles = [
    { name: "GitHub", url: site.profiles.github },
    { name: "LinkedIn", url: site.profiles.linkedin },
    { name: "Website", url: site.profiles.personal },
  ].filter((profile) => profile.url);
  return (
    <footer className="site-footer container">
      <span>© {new Date().getFullYear()} Jhye</span>
      <div className="footer-links">
        {profiles.map((profile) => (
          <a
            key={profile.name}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {profile.name}
          </a>
        ))}
        <a href={`${publisherOrigin}/api/rss`}>RSS</a>
        <a href="/privileged/login/">Login</a>
      </div>
    </footer>
  );
}
