<script lang="ts">
  import Markdown from "./tiny.svx";
  const picPath: string = "img/projects/tiny/tiny";
  const picNumber: number = 1;
  const picCaptions: Array<string> = ["A cozy home", "", "", "", ""];

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
