<script lang="ts">
  import Markdown from "./pedal.svx";
  const picPath: string = "img/projects/pedal/footp";
  const picNumber: number = 9;
  const picCaptions: Array<string> = [
    "The finished product",
    "Starting to build...",
    "...until late at night",
    "Tricky to fit the parts into the box",
    "Program switch and extension ports",
    "A neat-ish fit!",
    "",
    "Almost done!",
    "First test run with external pedals attached",
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
