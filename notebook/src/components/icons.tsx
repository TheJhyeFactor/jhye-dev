export {
  ArrowUpRight,
  ArrowRight,
  ChevronRight,
  Terminal,
  Globe,
  Rss,
  Search,
  X,
  Menu,
  Check,
  Copy,
  Clock3,
  FlaskConical,
  Braces,
  FileText,
  FolderGit2,
  CornerDownRight,
  Hash,
  Command,
  ArrowLeft,
  Shield,
  Network,
  Code2,
  ExternalLink,
} from "lucide-react";

import type { SVGProps } from "react";
type IconProps = SVGProps<SVGSVGElement> & { size?: number };
export function Github({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M9 19c-4.3 1.3-4.3-2-6-2.5M15 22v-3.9c0-1.1-.1-1.7-.5-2.3 3.1-.4 6.3-1.5 6.3-6.5 0-1.4-.5-2.5-1.4-3.5.1-.4.6-1.9-.2-3.4 0 0-1.1-.4-3.6 1.3a12.7 12.7 0 0 0-6.6 0C6.5 2 5.4 2.4 5.4 2.4c-.8 1.5-.3 3-.2 3.4-.9 1-1.4 2.1-1.4 3.5 0 5 3.2 6.1 6.3 6.5-.4.5-.6 1.2-.6 2.3V22" />
    </svg>
  );
}
export function Linkedin({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7 10v7M11 17v-7m0 3a3 3 0 0 1 6 0v4" />
      <circle cx="7" cy="7" r=".7" fill="currentColor" stroke="none" />
    </svg>
  );
}
