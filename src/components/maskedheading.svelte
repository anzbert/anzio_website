<script lang="ts">
  interface Props {
    fontSize?: string;
    background?: string;
    children?: import('svelte').Snippet;
  }

  let { fontSize = "4rem", background = "var(--gradient3)", children }: Props = $props();
</script>

<div class="wrapper">
  <h2 style="font-size:{fontSize}; background-image: {background}" class="text">
    {@render children?.()}
  </h2>
</div>

<style>
  .text {
    display: inline;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    padding-bottom: 0.2em;
  }
</style>
