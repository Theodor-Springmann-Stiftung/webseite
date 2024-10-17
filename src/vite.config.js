import { resolve } from "path";
import { defineConfig } from "vite";
export default defineConfig({
  build: {
    root: resolve(__dirname, "src"),
    outDir: "./dist/",
    emptyOutDir: true,
  },
});
