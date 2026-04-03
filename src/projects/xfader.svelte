<script lang="ts">
  import Markdown from "./xfader.svx";
  const picPath: string = "img/projects/xfader/fader";
  const picNumber: number = 3;
  const picCaptions: Array<string> = [
    "Compact and sturdy design",
    "Unapologetically 'Crossfader'...",
    "...from any angle 😝",
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
