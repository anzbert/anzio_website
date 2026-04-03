<script lang="ts">
  import Markdown from "./beatpads.svx";
  const picPath: string = "img/projects/beatpads/beatpads1";
  const picNumber: number = 0;
  const picCaptions: Array<string> = [];

  /////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////

  import Projectpage from "../components/projectpage.svelte";
</script>

<Projectpage {picPath} {picNumber} {picCaptions} underConstruction={false}>
  {#snippet markdown()}
    <div >
      <Markdown />
    </div>
  {/snippet}
</Projectpage>
