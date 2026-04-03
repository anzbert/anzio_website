<script lang="ts">
  interface Props {
    // export let bg_image = "adrien-olichon-X8o-P23flgI-unsplash";
    bg_image?: string;
  }

  let { bg_image = "dejan-zakic-LDciXr1ynFk-unsplash" }: Props = $props();

  let bg_path = "img/background/" + bg_image;

  let imgVisible = $state(false);
</script>

<picture>
  <source srcset="{bg_path}.avif" type="image/avif" />
  <source srcset="{bg_path}.webp" type="image/webp" />
  <img
    onload={() => (imgVisible = true)}
    class:imgVisible
    srcset="{bg_path}.jpg"
    alt="Background"
  />
</picture>

<style>
  img {
    position: fixed;
    background-position: center;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
    z-index: -99;

    opacity: 0;
    transition: 2s;
  }
  .imgVisible {
    opacity: 1;
  }
</style>
