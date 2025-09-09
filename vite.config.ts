// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import path from "path";
// import { fileURLToPath } from "url";
// import tsconfigPaths from "vite-tsconfig-paths";

// const __dirname = path.dirname(fileURLToPath(import.meta.url));
// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react(), tsconfigPaths()],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//       "@assets": path.resolve(__dirname, "./src/assets"),
//       "@components": path.resolve(__dirname, "./src/components"),
//     },
//   },
// });
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
});
