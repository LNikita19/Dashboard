const NextFederationPlugin = require("@module-federation/nextjs-mf");

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config: any, option: any) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "dashboard",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./DashboardPage": "./src/pages/index.tsx",
        },
        shared: {
          react: { singleton: true, requiredVersion: false },
          "react-dom": { singleton: true, requiredVersion: false },
        },
      })
    );
    return config;
  },
  experimental: {
    outputFileTracingRoot: __dirname, // 👈 fixes multiple lockfiles warning
  },
  generateBuildId: async () => {
    return "build-id";
  },

  staticPageGenerationTimeout: 300,
  output: "standalone",
};
module.exports = nextConfig;
