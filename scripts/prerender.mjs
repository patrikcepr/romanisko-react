// Prerenders the single-page app into dist/index.html, so crawlers (e.g. Seznam) and link previews
// get the full content without running JavaScript. Runs after the client and SSR builds (see package.json).
import { readFile, rm, writeFile } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const indexPath = `${root}dist/index.html`;
const ssrDir = `${root}dist-ssr`;

const { render } = await import(pathToFileURL(`${ssrDir}/entry-server.mjs`).href);
const template = await readFile(indexPath, "utf8");
const placeholder = '<div id="root"></div>';

if (!template.includes(placeholder)) throw new Error(`prerender: "${placeholder}" not found in dist/index.html`);

await writeFile(indexPath, template.replace(placeholder, `<div id="root">${render()}</div>`));
await rm(ssrDir, { recursive: true, force: true });
console.log("prerender: dist/index.html written");
