<script lang="ts">
  import Markdown from "./clock.svx";
  const picPath: string = "img/projects/clock/clock";
  const picNumber: number = 4;
  const picCaptions: Array<string> = [
    "Ready to ring !",
    "",
    "The mess is nicely hidden",
    "The display is connected via cable",
  ];

  /////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////

  import Projectpage from "../components/projectpage.svelte";
</script>

<Projectpage {picPath} {picNumber} {picCaptions}>
  {#snippet markdown()}
    <div >
      <Markdown />
    </div>
  {/snippet}
</Projectpage>
