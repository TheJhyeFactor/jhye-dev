import type { NextConfig } from "next";
const basePath = process.env.PRIVILEGED_BASE_PATH || "";
const nextConfig: NextConfig = {
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  output: "export",
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "DENY" },
        ],
      },
    ];
  },
};
export default nextConfig;
