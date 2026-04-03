<script lang="ts">
  import Markdown from "./rusty_link.svx";
  const picPath: string = "img/projects/rusty_link/rusty_link";
  const picNumber: number = 1;
  const picCaptions: Array<string> = [];

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
