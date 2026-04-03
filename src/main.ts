import "./css/normalize801.css";
import "./css/global.css";

import App from "./app.svelte";
import { mount } from "svelte";

const app = mount(App, {
  target: document.body,
  intro: true, // show animations on load
});

export default app;
