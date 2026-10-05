import { ImageResponse } from "next/og";
export const dynamic = "force-static";

export function GET() {
  const title = "Security research, technical experiments & things worth breaking.";
  const kind = "A PERSONAL TECHNICAL NOTEBOOK";
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#ffffff",
        display: "flex",
        flexDirection: "column",
        padding: "64px 76px",
        color: "#252525",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 70,
        }}
      >
        <span style={{ fontSize: 32, fontWeight: 700 }}>Privileged</span>
        <span style={{ fontSize: 18, color: "#666666" }}>BY JHYE</span>
      </div>
      <span
        style={{
          color: "#245c93",
          fontSize: 16,
          letterSpacing: 3,
          marginBottom: 22,
        }}
      >
        {kind}
      </span>
      <div
        style={{
          fontSize: title.length > 80 ? 52 : 62,
          fontWeight: 700,
          lineHeight: 1.13,
          letterSpacing: -2,
          maxWidth: 1040,
        }}
      >
        {title}
      </div>
      <div
        style={{
          marginTop: "auto",
          display: "flex",
          fontSize: 19,
          color: "#666666",
        }}
      >
        Understand it. Test it. Write it down.
      </div>
    </div>,
    { width: 1200, height: 630 },
  );
}
