<script lang="ts" module>
  export const logos: { [key: string]: logo } = {
    reaktor: {
      name: "Reaktor",
      path: "img/logos/reaktor_black.svg",
      url: "https://www.native-instruments.com/en/products/komplete/synths/reaktor-6/",
    },
    reaktor_white: {
      name: "Reaktor",
      path: "img/logos/reaktor_white.svg",
      url: "https://www.native-instruments.com/en/products/komplete/synths/reaktor-6/",
    },
    dart: {
      name: "Dart",
      path: "img/logos/dart.svg",
      url: "https://dart.dev",
    },
    flutter: {
      name: "Flutter",
      path: "img/logos/flutter.svg",
      url: "https://flutter.dev",
    },
    mdsvex: {
      name: "mdsvex",
      path: "img/logos/mdsvex.png",
      url: "https://mdsvex.com",
    },
    vscode: {
      name: "VSCode",
      path: "img/logos/vscode.svg",
      url: "https://code.visualstudio.com",
    },
    vite: {
      name: "Vite",
      path: "img/logos/vite.svg",
      url: "https://vitejs.dev",
    },
    arduino: {
      name: "Arduino",
      path: "img/logos/arduino.svg",
      url: "https://www.arduino.cc",
    },
    c: {
      name: "C",
      path: "img/logos/C_lang.svg",
      url: "https://en.wikipedia.org/wiki/C_(programming_language)",
    },
    js: {
      name: "Javascript",
      path: "img/logos/js.svg",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    cpp: {
      name: "C++",
      path: "img/logos/cpp_lang.svg",
      url: "https://en.wikipedia.org/wiki/C%2B%2B",
    },
    md: {
      name: "Markdown",
      path: "img/logos/markdown_white.svg",
      url: "https://en.wikipedia.org/wiki/Markdown",
    },
    node: {
      name: "NodeJS",
      path: "img/logos/nodejs_white_bg.svg",
      url: "https://nodejs.org",
    },
    rpi: {
      name: "Raspberry Pi",
      path: "img/logos/rpi.svg",
      url: "https://www.raspberrypi.com",
    },
    rust: {
      name: "Rust",
      path: "img/logos/rust_lang_color.png",
      url: "https://www.rust-lang.org",
    },
    ts: {
      name: "Typescript",
      path: "img/logos/typescript.svg",
      url: "https://www.typescriptlang.org/",
    },
    svelte: {
      name: "Svelte",
      path: "img/logos/svelte.svg",
      url: "https://svelte.dev",
    },
    github: {
      name: "Github",
      path: "img/logos/github.png",
      url: "https://github.com/anzbert",
    },
    unsplash: {
      name: "Unsplash",
      path: "img/logos/unsplash.svg",
      url: "https://unsplash.com",
    },
    tools: {
      name: "Tools",
      path: "img/logos/hammer_white_bg.svg",
      url: "https://en.wikipedia.org/wiki/Tool",
    },
  };
</script>

<script lang="ts">
  interface Props {
    logo?: string;
    link?: boolean;
    name?: boolean;
    height?: string;
  }

  let {
    logo = "tools",
    link = false,
    name = false,
    height = "1em",
  }: Props = $props();

  const getLogo = () => logo;
  let req_logo = logos[getLogo()];
</script>

<div class="wrapper">
  {#if link}
    <a href={req_logo.url}>
      <img
        src={req_logo.path}
        alt="{req_logo.name} logo"
        style="height: {height};"
      />
      {#if name}
        <span class="name">{req_logo.name}</span>
      {/if}
    </a>
  {:else}
    <img
      src={req_logo.path}
      alt="{req_logo.name} logo"
      style="height: {height};"
    />
    {#if name}
      <span class="name">{req_logo.name}</span>
    {/if}
  {/if}
</div>

<style>
  .name {
    color: var(--blue1);
  }
  img {
    width: 1.4em;
    object-fit: contain;
  }
</style>
