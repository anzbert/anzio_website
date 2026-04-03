<script lang="ts">
  import Markdown from "./kolibri.svx";
  const picPath: string = "img/projects/kolibri/kolibri";
  const picNumber: number = 13;
  const picCaptions: Array<string> = [
    "The Kolibri K-1",
    "Making a stencil",
    "Seems to work",
    "I like the result!",
    "The original case layout",
    "Cut a new opening for the exhaust",
    "And a new PSU mount",
    "The basic layout",
    "All assembled...",
    "",
    "Angled power plug",
    "",
    "Nice finish with a grill",
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
