<script lang="ts">
  import Markdown from "./midi_blows.svx";
  const picPath: string = "img/projects/midi_blows/midi_blows";
  const picNumber: number = 2;
  const picCaptions: Array<string> = [
    "It's not pretty, but does the job!",
    "Small mouth piece, tubing and pressure chamber",
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
