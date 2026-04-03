import { mdsvex } from "mdsvex";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import mdsvexConfig from "./mdsvex.config.js";
// import sveltePreprocess from "svelte-preprocess";

/** @type {import("@sveltejs/vite-plugin-svelte").SvelteConfig} */
export default {
  extensions: [".svelte", ...mdsvexConfig.extensions],

  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)],
};
