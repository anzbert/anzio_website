<script lang="ts">
  import Card from "../components/card1.svelte";
  import Lazypicture from "../components/lazypicture.svelte";
  import { fade, fly } from "svelte/transition";
  import { fade1, flyLeft, defaultSwipeConfig } from "../stores";

  import useEmblaCarousel from "embla-carousel-svelte";
  import type { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";

  import type { SvelteComponent } from "svelte";
  // let SwipeComponent: SvelteComponent = $state(); // from swipe module. type unknown

  let {
    picPath = "",
    picNumber = 0,
    picCaptions = [],
    underConstruction = false,
    markdown,
    children,
  }: Props = $props();

  let paths: Array<string> = [];
  if (picPath !== "") {
    for (let i = 0; i < picNumber; i++) {
      let path = `${picPath}${i}`;
      paths.push(path);
    }
  }

  let emblaApi: EmblaCarouselType;
  let options: EmblaOptionsType = { loop: true };

  function onInit(event: CustomEvent<EmblaCarouselType>) {
    emblaApi = event.detail;
    // console.log("Embla is ready:", emblaApi.slideNodes());
  }

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  import Construction from "./construction.svelte";
  interface Props {
    picPath?: string;
    picNumber?: number;
    picCaptions?: Array<string>;
    underConstruction?: boolean;
    markdown?: import("svelte").Snippet;
    children?: import("svelte").Snippet;
  }
</script>

{#if underConstruction}
  <Construction />
{/if}
<div class="markdown" in:fly={flyLeft}>
  {#if picNumber != 0}
    <div class="card-wrapper">
      <Card width="fit-content">
        <div class="embla-holder" in:fade={fade1}>
          <div
            class="embla__viewport"
            onemblaInit={onInit}
            use:useEmblaCarousel={{ options, plugins: [] }}
          >
            <div class="embla__container">
              {#each paths as path, index}
                <div class="embla__slide">
                  <div class="image-container">
                    <Lazypicture
                      caption={picCaptions[index]}
                      lazy={false}
                      spinner={true}
                      sources={{
                        base: `${path}.jpg`,
                        webp: `${path}.webp`,
                        avif: `${path}.avif`,
                      }}
                    />
                  </div>
                </div>
              {/each}
            </div>
          </div>
          {#if picNumber > 1}
            <button class="embla-button" onclick={scrollPrev}>&lt;</button>
            <button class="embla-button" onclick={scrollNext}>&gt;</button>
          {/if}
        </div>
      </Card>
    </div>
  {/if}
  {@render markdown?.()}
  {@render children?.()}
</div>

<style>
  .card-wrapper {
    margin: 2rem auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .embla-holder {
    position: relative;
    --width: clamp(200px, 75vmin, 70vmax);
    height: calc(var(--width) / 4 * 3);
    width: var(--width);
    margin: auto;
  }

  .embla__viewport {
    overflow: hidden;
  }

  .embla__container {
    display: flex;
    /* touch-action: pan-y pinch-zoom; */
  }

  .embla__slide {
    flex: 0 0 100%;
    min-width: 0;
  }

  .image-container {
    height: calc(var(--width) / 4 * 3);
  }

  .embla-button {
    font-weight: bold;
    padding: 0;
    margin: 0;

    background-color: var(--gray3);
    color: var(--font1);
    border: none;
    box-shadow: none;
    text-shadow: 0 0 5px var(--gray1);

    border-radius: 50%;
    /* position: absolute; */
    z-index: 2;

    --size: min(3.5rem, 9vmin);
    bottom: calc(50% - calc(var(--size) / 2));
    font-size: calc(var(--size) / 2);
    width: var(--size);
    height: var(--size);

    filter: drop-shadow(2px 2px 2px var(--gray1));
    opacity: 0.7;
  }

  .embla-button:hover {
    background-color: hsla(0, 0%, 0%, 0.6);
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
    margin-bottom: 0.2em;
    text-align: end;
  }
</style>
