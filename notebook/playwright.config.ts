import { defineConfig, devices } from "@playwright/test";
export default defineConfig({
  testDir: "./tests",
  fullyParallel: false,
  workers: 1,
  retries: 0,
  timeout: 30_000,
  use: {
    baseURL: "http://127.0.0.1:4317",
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
  },
  projects: [
    {
      name: "desktop",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1440, height: 1000 },
        permissions: ["clipboard-read", "clipboard-write"],
      },
    },
    {
      name: "mobile",
      use: {
        ...devices["iPhone 13"],
        defaultBrowserType: "chromium",
        permissions: ["clipboard-read", "clipboard-write"],
      },
    },
  ],
  webServer: {
    command: "npm start",
    url: "http://127.0.0.1:4317",
    reuseExistingServer: false,
    timeout: 30_000,
  },
});
