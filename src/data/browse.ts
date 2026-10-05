import type { Contribution, ContributionFocus, WorkFocus, WorkStage } from "./portfolio";

export type BrowseArea<T extends string = string> = {
  value: T;
  label: string;
  description: string;
};

export const workAreas: BrowseArea<WorkFocus>[] = [
  { value: "ai", label: "AI & automation", description: "Local models, agent workflows and scan planning." },
  { value: "security", label: "Cybersecurity", description: "Tools for scoped investigation and security testing." },
  { value: "client", label: "Client delivery", description: "Websites and workflows built for real businesses." },
];

export const workStages: BrowseArea<WorkStage>[] = [
  { value: "local-tool", label: "Local tools", description: "Desktop software and independent operator tools." },
  { value: "prototype", label: "Prototypes", description: "Bounded experiments and proposed approaches." },
  { value: "client-work", label: "Client work", description: "Website and workflow delivery through SOVA." },
];

export const contributionAreas: BrowseArea<ContributionFocus>[] = [
  { value: "ai", label: "AI systems", description: "Runtime reliability, coding tools and adapter tests." },
  { value: "security", label: "Cybersecurity", description: "Scanner accuracy and reproducible investigations." },
  { value: "tooling", label: "Engineering tooling", description: "Discovery performance and cross-platform builds." },
];

export const contributionStatuses: BrowseArea<Contribution["status"]>[] = [
  { value: "Released", label: "Released", description: "Merged changes included in a linked stable release." },
  { value: "Merged", label: "Merged", description: "Accepted upstream changes without a recorded release." },
  { value: "Submitted for review", label: "Submitted for review", description: "Proposed changes awaiting upstream review." },
  { value: "Investigation documented", label: "Investigations", description: "Reproductions and explanations shared with maintainers." },
];
