import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tsconfigPath from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tsconfigPath(), react()],
  resolve: {
    alias: {
      "@/*": path.resolve(__dirname, "./src"),
    },
  },
});
