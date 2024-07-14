import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts", // Entrypoint file (registers other manifests)
      formats: ["es"],
      fileName: 'umbraco.community.manifestpeek',
    },
    outDir: '../Umbraco.Community.ManifestPeek/wwwroot', // your web component will be saved to the RCL project location and the RCL sets the path as App_Plugins/Umbraco.Community.ManifestPeek
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      external: [/^@umbraco/],
    },
  },
});
