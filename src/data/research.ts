export type ResearchStory = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  sourceHref: string;
  sourceLabel: string;
};

export const researchStories: ResearchStory[] = [
  {
    slug: "ollama-download-stall",
    title: "When a Download Can Connect but Never Start",
    description:
      "Tracing an upstream Ollama download stall to the first-byte boundary, then fixing the timeout path with focused regression coverage.",
    date: "5 October 2026",
    category: "Systems",
    tags: ["Go", "Ollama", "Reliability"],
    sourceHref: "https://github.com/ollama/ollama/pull/17259",
    sourceLabel: "Ollama pull request #17259",
  },
];

export function getResearchStory(slug: string) {
  return researchStories.find((story) => story.slug === slug);
}
