<script lang="ts">
  import { fly } from "svelte/transition";
  import { flyLeft, flyRight } from "../stores";

  import BlogEntryBox from "../components/blogentrybox.svelte";
  import { allPosts, hashTags } from "../blog/!postindex";

  let showTag: string = $state("all"); // default is "all"

  function changeTag(tag: string) {
    showTag = tag;
  }
</script>

<div class="tags" in:fly={flyRight}>
  {#each hashTags as tag}
    {#if showTag === tag}
      <button
        class={tag === "all" ? "highlight all" : "highlight"}
        onclick={() => changeTag(tag)}>{tag}</button
      >
    {:else}
      <button class={tag === "all" ? "all" : ""} onclick={() => changeTag(tag)}
        >{tag}</button
      >
    {/if}
  {/each}
</div>

{#key showTag}
  <div class="wrapper">
    <div class="posts" in:fly={flyLeft}>
      {#each allPosts as post (post.title)}
        {#if post.tags.some((tag) => tag === showTag) || showTag === "all"}
          <div class="post" in:fly={flyLeft}>
            <BlogEntryBox
              title={post.title}
              date={post.date}
              tags={post.tags}
            >
              <post.post />
            </BlogEntryBox>
          </div>
        {/if}
      {/each}
    </div>
  </div>
{/key}

<style>
  .tags {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-wrap: wrap;
    gap: min(1.5vw, 1rem);
    margin: 0.5rem;

    width: 100%;
    margin: 0 auto;
    padding: 0.5em;

    z-index: 4;

    background: var(--gradient2);
    box-shadow: 0px 5px 3px var(--gray2);
  }
  .tags > button {
    font-size: 0.9rem;
    padding: 0.2em 0.6em;
  }
  .all {
    border-color: var(--gray5);
  }
  .highlight {
    border: 2px solid var(--blue1);
  }

  .wrapper {
    overflow-y: auto;
    overflow-x: hidden;
    padding-top: 2rem;
    padding-bottom: 4rem;
  }
</style>
