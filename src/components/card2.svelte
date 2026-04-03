<script lang="ts">
  import { scale, fade } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  interface Props {
    square?: string;
    header?: import('svelte').Snippet;
    thumbnail?: import('svelte').Snippet;
    icons?: import('svelte').Snippet;
    children?: import('svelte').Snippet;
  }

  let {
    square = "min(35vmin, 280px)",
    header,
    thumbnail,
    icons,
    children
  }: Props = $props();
  const scaleSettings = {
    duration: 400,
    delay: 400,
    opacity: 0.5,
    start: 0.5,
    easing: quintOut,
  };
</script>

<div style="--square: {square}" class="wrapper">
  <div class="upper-box">
    <div class="card-header">
      {@render header?.()}
    </div>
    <div class="thumbnail">
      {@render thumbnail?.()}
    </div>
    <div class="icons">
      {@render icons?.()}
    </div>
    {@render children?.()}
  </div>
  <div class="lower-box" in:scale={scaleSettings}></div>
</div>

<style>
  .wrapper {
    --wrapper-fraction: 93%;
    --upper-color: var(--sepia1);
    --lower-color: hsla(6, 93%, 71%, 0.7);
    position: relative;
    width: var(--square);
    height: calc(var(--square) * 1.01);

    /* height: calc(var(--square) + 2rem); */
    margin: 0.3em;
  }

  .card-header {
    background-color: var(--green_transp);
    /* background-image: var(--gradient4); */
    padding: 0.3em;
    box-shadow: 1px 1px 3px var(--gray2);
    border-radius: 2px;
    text-shadow: 2px 2px 4px var(--gray1);
  }

  .thumbnail {
    overflow: hidden;
    max-width: 94%;
    margin: auto;
    box-shadow: 2px 2px 2px var(--gray1);
    position: relative;
    border-radius: 2px;
  }

  .upper-box {
    border-radius: 2px;
    z-index: 2;
    background-color: var(--green3);
    /* background-image: var(--gradient4); */
    width: var(--wrapper-fraction);
    height: calc(var(--wrapper-fraction) * 1);
    position: absolute;
    top: 0;
    left: 0;
    box-shadow: 1px 1px 3px var(--gray2);

    display: flex;
    flex-direction: column;
  }
  .lower-box {
    border-radius: 2px;
    z-index: 1;
    /* background-color: var(--lower-color); */
    background-image: var(--gradient2);
    width: var(--wrapper-fraction);
    height: calc(var(--wrapper-fraction) * 1);
    position: absolute;
    bottom: 0;
    right: 0;
    box-shadow: 1px 1px 3px var(--gray2);
  }
</style>
