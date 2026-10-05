export const site = {
  name: "Privileged",
  author: "Jhye",
  description:
    "Jhye’s personal space for security research, technical experiments, software, and things worth breaking.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(
    /\/$/,
    "",
  ),
  profiles: {
    github:
      process.env.NEXT_PUBLIC_GITHUB_URL ?? "https://github.com/TheJhyeFactor",
    linkedin:
      process.env.NEXT_PUBLIC_LINKEDIN_URL ??
      "https://www.linkedin.com/in/jhye-o-meley-583223420/",
    personal: process.env.NEXT_PUBLIC_PERSONAL_URL ?? "https://jhye.dev",
  },
};
export const absoluteUrl = (path = "/") => new URL(path.replace(/^\/+/, ""), `${site.url}/`).toString();
