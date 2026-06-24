import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    outDir: "../dist/",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        impressum: resolve(__dirname, "impressum", "index.html"),
        ohne: resolve(__dirname, "ohne.html"),
        bild: resolve(__dirname, "bild.html"),
        below: resolve(__dirname, "below.html"),
      },
    },
  },
});
