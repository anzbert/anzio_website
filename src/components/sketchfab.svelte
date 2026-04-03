<script lang="ts">
  interface Props {
    caption?: string;
    src: string; // embed link, such as: "https://sketchfab.com/models/21de728eda6e4cc795468fb3ccfe835b/embed?ui_theme=dark"
  }

  let { caption = "", src }: Props = $props();
</script>

<figure class="sketchfab-embed-wrapper">
  <iframe
    title="TH - Framing"
    frameborder="0"
    allowfullscreen
    allow="autoplay; fullscreen; xr-spatial-tracking"
    {src}
></iframe>
  {#if caption.length > 0}
    <figcaption>
      {caption}
    </figcaption>
  {/if}
</figure>

<style>
  iframe {
    display: block;
    width: min(100%, 500px);
    height: 180px;
  }
</style>
