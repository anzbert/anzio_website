<script lang="ts">
  import Markdown from "./feed.svx";
  const picPath: string = "img/projects/feed/feed";
  const picNumber: number = 12;
  const picCaptions: Array<string> = [
    "Splash screen on startup featuring Doggo",
    "The full timer setup with external feeder",
    "Ready to dispense...",
    "... and dropping the left treat!",
    "At the workshop",
    "",
    "The display connection and USB debug port",
    "Upgrading the feeder with a Raspberry Pi",
    "With webcam connected",
    "Still controlling the external feeder as well",
    "Switch between Timer and Webcam Remote Control",
    "The web interface for remote feeding",
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
