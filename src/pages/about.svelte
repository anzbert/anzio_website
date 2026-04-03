<script lang="ts">
  import { fly } from "svelte/transition";
  import { flyLeft } from "../stores";

  import Textbox1 from "../components/textbox1.svelte";
  import AboutMe from "./about.svx";

  import Card from "../components/card1.svelte";
  import Logo from "../components/logo.svelte";

  import MaskedHeading from "../components/maskedheading.svelte";
</script>

<div class="wrapper">
  <div class="content" in:fly={flyLeft}>
    <Textbox1>
      <div class="header">
        <h1>
          <MaskedHeading fontSize="5rem" background="var(--gradient3)"
            >Hi!</MaskedHeading
          >
        </h1>
        <img class="anzio" src="img/icons/anzio.svg" alt="" />
      </div>

      <AboutMe />
      <div class="buttons">
        <p>Click to get started:</p>
        <button
          class="menu-item text-button"
          onclick={() => (location.hash = "projects")}>My Projects</button
        >
        <button
          class="menu-item text-button"
          onclick={() => (location.hash = "blog")}>Blog</button
        >
      </div>
      <hr />
    </Textbox1>
  </div>
  <div class="card-wrapper" in:fly={flyLeft}>
    <Card width="fit-content">
      <div class="links">
        <h2>Links</h2>
        <hr />

        <div class="inside-card">
          <div class="card-elements">
            <h3>Site made with:</h3>
            <ul>
              <li>
                <Logo logo="ts" name={true} link={true} />
              </li>
              <li>
                <Logo logo="svelte" name={true} link={true} />
              </li>
              <li>
                <Logo logo="vite" name={true} link={true} />
              </li>
              <li>
                <Logo logo="mdsvex" name={true} link={true} />
              </li>
            </ul>
            <h3>Images from:</h3>
            <ul>
              <li>
                <Logo logo="unsplash" name={true} link={true} />
              </li>
            </ul>
            <h3>My repos:</h3>
            <ul>
              <li>
                <Logo logo="github" name={true} link={true} />
              </li>
            </ul>
          </div>

          <div class="card-elements">
            <h3>I like to use:</h3>
            <ul>
              <li>
                <Logo logo="vscode" name={true} link={true} />
              </li>
              <li>
                <Logo logo="dart" name={true} link={true} />
              </li>
              <li>
                <Logo logo="flutter" name={true} link={true} />
              </li>
              <li>
                <Logo logo="ts" name={true} link={true} />
              </li>
              <li>
                <Logo logo="svelte" name={true} link={true} />
              </li>
              <li>
                <Logo logo="node" name={true} link={true} />
              </li>
              <li>
                <Logo logo="arduino" name={true} link={true} />
              </li>
              <li>
                <Logo logo="rpi" name={true} link={true} />
              </li>
              <li>
                <Logo logo="rust" name={true} link={true} />
              </li>
              <li>
                <Logo logo="c" name={true} link={true} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Card>
  </div>
</div>

<style>
  .wrapper {
    overflow-y: auto;
    overflow-x: hidden;

    display: flex;
    align-items: center;
    flex-direction: column;

    padding: 3em 0;
  }

  .content {
    margin-bottom: 5rem;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h1 {
    height: 5rem;
    margin: 0;
  }
  .anzio {
    height: 6rem;
  }

  .buttons {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .card-wrapper {
    margin-top: 3rem;
    max-width: 70%;
  }

  .inside-card {
    display: flex;
    flex-wrap: wrap;
    text-align: left;
    justify-content: center;
  }

  .links {
    display: flex;
    flex-direction: column;
  }

  hr {
    width: 100%;
  }

  h2 {
    margin: 0.1em 0.4em;
  }

  .card-elements {
    margin: 0em 0.6em;
    white-space: nowrap;
    width: 9rem;
  }

  li {
    list-style-type: none;
  }
  ul {
    padding-left: 0;
  }
</style>
