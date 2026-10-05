import { Shield, Braces, Network, Terminal } from "@/components/icons";
export function LabArt({
  variant = "api",
  compact = false,
}: {
  variant?: "api" | "binary" | "linux" | "network";
  compact?: boolean;
}) {
  if (compact) {
    const Icon =
      variant === "binary"
        ? Braces
        : variant === "linux"
          ? Terminal
          : variant === "network"
            ? Network
            : Shield;
    return (
      <div className={`mini-art mini-art-${variant}`} aria-hidden="true">
        <div className="mini-art-grid" />
        <Icon strokeWidth={1.2} size={29} />
        <span>
          0
          {variant === "api"
            ? "1"
            : variant === "binary"
              ? "2"
              : variant === "linux"
                ? "3"
                : "4"}
        </span>
      </div>
    );
  }
  return (
    <div
      className="lab-art"
      aria-label="Illustration of a request crossing an API trust boundary"
      role="img"
    >
      <div className="art-top">
        <span>REQUEST / RESPONSE</span>
        <span>FIG. 01</span>
      </div>
      <svg viewBox="0 0 540 245" fill="none" aria-hidden="true">
        <defs>
          <pattern
            id="dotgrid"
            width="16"
            height="16"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r=".7" fill="#475049" />
          </pattern>
          <linearGradient id="boundary" x1="295" y1="0" x2="295" y2="245">
            <stop stopColor="#c2e98a" stopOpacity="0" />
            <stop offset=".5" stopColor="#c2e98a" stopOpacity=".22" />
            <stop offset="1" stopColor="#c2e98a" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect width="540" height="245" fill="url(#dotgrid)" />
        <rect
          x="270"
          y="15"
          width="210"
          height="213"
          rx="10"
          fill="url(#boundary)"
          stroke="#b9dd88"
          strokeOpacity=".2"
          strokeDasharray="4 5"
        />
        <path d="M139 111H341" stroke="#92ab77" strokeWidth="1.5" />
        <path d="m331 106 10 5-10 5" stroke="#b8df86" strokeWidth="1.5" />
        <path
          d="M341 155H139"
          stroke="#586c47"
          strokeWidth="1.5"
          strokeDasharray="4 5"
        />
        <path d="m149 150-10 5 10 5" stroke="#7d925e" strokeWidth="1.5" />
        <rect
          x="52"
          y="83"
          width="88"
          height="100"
          rx="7"
          fill="#161d16"
          stroke="#526046"
        />
        <path
          d="m76 116 10 8-10 8M92 135h22"
          stroke="#c7dfab"
          strokeWidth="2"
        />
        <rect
          x="341"
          y="83"
          width="88"
          height="100"
          rx="7"
          fill="#1d281a"
          stroke="#86a966"
        />
        <path
          d="m371 108 14-6 14 6v17c0 14-14 21-14 21s-14-7-14-21v-17Z"
          stroke="#c4e998"
          strokeWidth="1.5"
        />
        <path d="m377 123 5 5 10-11" stroke="#c4e998" strokeWidth="1.5" />
        <text
          x="174"
          y="98"
          fill="#afc691"
          fontSize="10"
          fontFamily="monospace"
        >
          GET /api/users/:id
        </text>
        <text
          x="174"
          y="175"
          fill="#81936f"
          fontSize="10"
          fontFamily="monospace"
        >
          200 OK · user data
        </text>
        <text
          x="68"
          y="204"
          fill="#b5bdb0"
          fontSize="10"
          fontFamily="monospace"
        >
          CLIENT
        </text>
        <text
          x="349"
          y="204"
          fill="#b5bdb0"
          fontSize="10"
          fontFamily="monospace"
        >
          API SERVER
        </text>
        <text x="282" y="35" fill="#a1bb81" fontSize="9" fontFamily="monospace">
          TRUST BOUNDARY
        </text>
        <circle cx="269" cy="111" r="5" fill="#c4e998" />
        <circle cx="269" cy="111" r="12" stroke="#c4e998" strokeOpacity=".3" />
        <path d="M268 188v-22" stroke="#829866" strokeDasharray="3 3" />
        <text
          x="218"
          y="219"
          fill="#c4e998"
          fontSize="9"
          fontFamily="monospace"
        >
          WHO CHECKS THE ID?
        </text>
      </svg>
      <div className="art-bottom">
        <span>
          <i /> Authorization, not just authentication.
        </span>
        <span>→</span>
      </div>
    </div>
  );
}
