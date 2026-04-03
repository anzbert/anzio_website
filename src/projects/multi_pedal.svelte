<script lang="ts">
  import Markdown from "./multi_pedal.svx";
  const picPath: string = "img/projects/multi_pedal/multi_pedal";
  const picNumber: number = 6;
  const picCaptions: Array<string> = [
    "Two simple Buttons to do it all",
    "From a different angle",
    "A look inside (without the DIN5 output)",
    "Midi OUT / Footswitch IN",
    "NO and NC Switch / TRS OUT / USB",
    "Expression Pedal IN",
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
