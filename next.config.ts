const NextFederationPlugin = require("@module-federation/nextjs-mf");

module.exports = {
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

  generateBuildId: async () => {
    return "build-id";
  },

  staticPageGenerationTimeout: 300,
  output: "standalone",
};
