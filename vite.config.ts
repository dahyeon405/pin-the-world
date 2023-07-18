import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import ObjFileImport from "unplugin-obj/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ObjFileImport()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    include: ["**/*.obj"],
  },
});
