<script lang="ts">
  import Markdown from "./bell.svx";
  const picPath: string = "img/projects/bell/bell";
  const picNumber: number = 3;
  const picCaptions: Array<string> = [
    "The finished door bell",
    "Chunky cast iron body with solenoid",
    "Arduino, transformer and RF receiver",
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
