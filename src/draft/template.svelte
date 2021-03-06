<script lang="ts">
  export let markdownPath: string;
  export let picPrefixPath: string = "";
  export let pictures: number = 0;
  export let captions: Array<string> = [];

  /////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////

  import type { SvelteComponent } from "svelte";

  async function asyncImportSvx(path: string): Promise<SvelteComponent> {
    let comp = import(`./${path}.svx`).then((r) => r.default);
    return comp;
  }

  import Card from "../components/card1.svelte";
  import Lazypicture from "../components/lazypicture.svelte";
  import { fade, fly } from "svelte/transition";
  import { fade1, flyLeft, defaultSwipeConfig } from "../stores";
  import { Swipe, SwipeItem } from "svelte-swipe";
  let SwipeComponent: SvelteComponent; // from swipe module. type unknown

  let paths: Array<string> = [];
  if (picPrefixPath !== "") {
    for (let i = 0; i < pictures; i++) {
      let path = `${picPrefixPath}${i}`;
      paths.push(path);
    }
  }
</script>

<div class="markdown" in:fly={flyLeft}>
  <div class="card-wrapper">
    <Card width="fit-content">
      <div class="swipe-holder" in:fade={fade1}>
        <Swipe {...defaultSwipeConfig} bind:this={SwipeComponent}>
          {#each paths as path, index}
            <SwipeItem>
              <div class="image-container">
                <Lazypicture
                  caption={captions[index]}
                  lazy={false}
                  spinner={true}
                  sources={{
                    base: `${path}.jpg`,
                    webp: `${path}_comp.webp`,
                    avif: `${path}_comp.avif`,
                  }}
                />
              </div>
            </SwipeItem>
          {/each}
        </Swipe>
      </div>
    </Card>
    <div class="swipe-buttons">
      <button
        on:click={() => {
          SwipeComponent.prevItem();
        }}>Prev</button
      >
      <button
        on:click={() => {
          SwipeComponent.nextItem();
        }}>Next</button
      >
    </div>
  </div>
  {#await asyncImportSvx(markdownPath) then Markdown}
    <svelte:component this={Markdown} />
  {/await}
</div>

<style>
  .card-wrapper {
    margin: 2rem auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .swipe-holder {
    --width: clamp(200px, 75vmin, 70vmax);
    height: calc(var(--width) / 4 * 3);
    width: var(--width);
    margin: auto;
  }

  .image-container {
    height: calc(var(--width) / 4 * 3);
  }

  .swipe-buttons {
    margin-top: 0.3rem;
  }
  .swipe-buttons button {
    font-size: 0.8rem;
    padding: 0.2em 2.4em;
    margin: 0 1em;
  }

  .markdown {
    width: clamp(95vmin, 60%, 90vmax);
    margin: auto;
    margin-top: 1rem;

    background-color: var(--gray2);
    padding: 1em;
    border-radius: 0.4em;
  }

  div :global(h1) {
    margin-bottom: 1em;
    text-align: end;
  }
</style>
