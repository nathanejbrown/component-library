// import { resolve } from "path";
// import { defineConfig } from "vite";

// export default defineConfig ({
//   build: {
//     lib: {
//       entry: resolve(__dirname, "src/index.ts"),
//       name: "component-library",
   		 
//       fileName: "index",
//     },
//     rollupOptions: {
//       external: ["react"],
//     },
//   },
// });

import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { peerDependencies } from "./package.json";

export default defineConfig({
  build: {
    lib: {
      entry: "./index.ts", // Specifies the entry point for building the library.
      name: "component-library", // Sets the name of the generated library.
      fileName: (format) => `index.${format}.js`, // Generates the output file name based on the format.
      formats: ["cjs", "es"], // Specifies the output formats (CommonJS and ES modules).
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)], // Defines external dependencies for Rollup bundling.
    },
    sourcemap: true, // Generates source maps for debugging.
    emptyOutDir: true, // Clears the output directory before building.
  },
  plugins: [dts()], // Uses the 'vite-plugin-dts' plugin for generating TypeScript declaration files (d.ts).
});