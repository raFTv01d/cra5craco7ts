import path from "path";
import { CracoConfig } from "@craco/types";

module.exports = {
  webpack: {
    alias: {
      /* ... */
      "@kit": path.resolve(__dirname, "src/long/long"),
    },
    plugins: {
      add: [],
      remove: [],
    },
    // configure: {},
    configure: (webpackConfig, { env, paths }) => {
      return webpackConfig;
    },
  },
} as CracoConfig;
