<script lang="ts">
  let showMenu: boolean = $state(false);

  // remove menu when screen width / orientation changes:
  const mq_width = window.matchMedia("(max-width: 500px)");
  mq_width.addEventListener("change", (e) => {
    if (!e.matches) showMenu = false;
  });
</script>

<menu>
  <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
  <h1
    onclick={() => (location.hash = "about")}
    onkeypress={() => (location.hash = "about")}
    class="title"
  >
    ANZ I/O
  </h1>
  <div class="buttons">
    <button
      class="menu-item text-button"
      onclick={() => (location.hash = "projects")}>Projects</button
    >
    <button
      class="menu-item text-button"
      onclick={() => (location.hash = "blog")}>Blog</button
    >
    <button
      class="menu-item text-button"
      onclick={() => (location.hash = "about")}>Home</button
    >
    <a class="logo-icon" href="https://github.com/anzbert/anzio_website">
      <img
        class="logo-icon text-button"
        src="img/logos/github.png"
        alt="GitHub Logo"
      />
    </a>
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
      class="menu-icon"
      onclick={() => {
        showMenu = true;
      }}
      onkeypress={() => {
        showMenu = true;
      }}
    >
      <div class="burger"></div>
      <div class="burger"></div>
      <div class="burger"></div>
    </div>
  </div>
</menu>

<!-- MENU ON SMALL DISPLAYS: -->
{#if showMenu === true}
  <menu class="popup-menu">
    <div class="row">
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <div
        class="menu-icon"
        onclick={() => {
          showMenu = false;
        }}
        onkeypress={() => {
          showMenu = false;
        }}
      >
        <div class="close-x"></div>
      </div>
    </div>

    <div class="row row2">
      <button
        class="menu-item"
        onclick={() => {
          showMenu = false;
          location.hash = "projects";
        }}>Projects</button
      >
      <button
        class="menu-item"
        onclick={() => {
          showMenu = false;
          location.hash = "blog";
        }}>Blog</button
      >
      <button
        class="menu-item"
        onclick={() => {
          showMenu = false;
          location.hash = "about";
        }}>About</button
      >
    </div>
  </menu>
{/if}

<style>
  menu {
    height: 4rem;
    width: 100%;
    flex-grow: 0;
    flex-shrink: 0;

    margin: 0;
    padding: 0.8rem;
    /* padding-left: max(2vw, 1rem); */

    z-index: 10;
    display: flex;
    align-items: center;
    background: var(--gradient4);
    box-shadow: 0px 5px 3px var(--gray1);
  }

  * {
    user-select: none;
  }

  .title {
    margin: 0 auto 0 0.2em;
    white-space: nowrap;
    /* height: 2rem; */
    line-height: 0.9;
    color: var(--brown);
    z-index: 100;
    font-weight: 100;
    font-size: 2.4rem;
    cursor: pointer;
    text-shadow: 0px 0px 5px var(--gray1);
    transition: 200ms;
  }
  .title:hover {
    text-shadow: 0px 0px 5px var(--gray3);
  }

  .buttons {
    gap: min(1.5vw, 1rem);

    display: flex;
    align-items: center;
  }

  .logo-icon {
    height: 2.3rem;
    transition: 200ms;
  }
  .logo-icon:hover {
    filter: drop-shadow(0px 0px 3px var(--gray1));
  }

  .menu-icon {
    display: none;
  }

  @media (max-width: 500px) {
    .popup-menu {
      position: fixed;
      top: 0;
      right: 0;
      z-index: 20;
      gap: 4vw;
      display: flex;
      flex-direction: column;
      height: max-content;
      /* flex-wrap: wrap; */
    }

    .row {
      width: 100%;
      display: flex;
      /* justify-content: flex-end; */
      align-items: center;
    }
    .row2 {
      justify-content: flex-end;
      gap: 3vw;
    }

    .text-button {
      display: none;
    }

    /* css icons: */
    .menu-icon {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 2rem;
      width: 2rem;
      margin-left: auto;
    }
    .burger {
      width: 32px;
      height: 6px;
      background-color: var(--gray2);
    }

    .close-x {
      width: 2rem;
      height: 2rem;
      background: linear-gradient(
          45deg,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 0) 43%,
          var(--gray2) 45%,
          var(--gray2) 55%,
          rgba(0, 0, 0, 0) 57%,
          rgba(0, 0, 0, 0) 100%
        ),
        linear-gradient(
          135deg,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 0) 43%,
          var(--gray2) 45%,
          var(--gray2) 55%,
          rgba(0, 0, 0, 0) 57%,
          rgba(0, 0, 0, 0) 100%
        );
    }
  }
</style>
