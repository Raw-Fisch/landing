import { defineConfig } from 'vite'
import svgr from "vite-plugin-svgr"
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
      include: "**/*.tsx",
    }),
    tsconfigPaths(),
    svgr(),
    nodePolyfills({
      exclude: ["fs", "constants"],
      protocolImports: false,
    }),
  ],
})
