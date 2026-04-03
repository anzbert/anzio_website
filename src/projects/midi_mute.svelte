<script lang="ts">
  import Markdown from "./midi_mute.svx";
  const picPath: string = "img/projects/midi_mute/midi_mute";
  const picNumber: number = 1;
  const picCaptions: Array<string> = ["The UI when used on desktop"];

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
