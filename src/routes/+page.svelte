<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<h1 class="h1">Posts</h1>

Showing {data.posts.length} posts.

{#if data.posts.length === 0}
	<p>No posts to show.</p>
{/if}

{#each data.posts as post}
	<div class="post">
		<a href="posts/{post.slug}">{post.title}</a>
	</div>
{/each}
```
