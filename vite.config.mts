import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            assets: fileURLToPath(new URL("./src/assets", import.meta.url)),
            components: fileURLToPath(new URL("./src/components", import.meta.url)),
            layout: fileURLToPath(new URL("./src/components/Layout", import.meta.url)),
            styles: fileURLToPath(new URL("./src/styles", import.meta.url)),
            UI: fileURLToPath(new URL("./src/components/UI", import.meta.url)),
        },
    },
    css: {
        preprocessorOptions: {
            sass: {
                loadPaths: ["./src"],
            },
            scss: {
                loadPaths: ["./src"],
            },
        },
    },
});
