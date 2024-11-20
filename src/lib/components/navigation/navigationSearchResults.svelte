<script lang="ts">
	import { onMount } from 'svelte'
	import { createPostsIndex, searchPostsIndex } from '$lib/utilities/search'

	let search: 'loading' | 'ready' = 'loading'
	export let query = '';
	let results = []

	onMount(async () => {
    	// get the posts
		const news = await fetch('/api/news/stories').then((res) => res.json())
		const documentation = await fetch('/api/support/documentation').then((res) => res.json())
		
		const searchablePosts = news.concat(documentation)

		// create search index
	    createPostsIndex(searchablePosts)
		search = 'ready'
	})

	$: if (search === 'ready') {
    // runs each time `searchTerm` updates
		results = searchPostsIndex(query)
		console.log(results)
	}
</script>

{#if search === 'ready'}
	<div>
		{#if results}
			<ul>
				{#each results as result}
					<li>
						<a href="{result.path}">
							{@html result.meta.title}
							<p class="description">{@html result.meta.description}</p>
						</a>
					</li>
				{/each}
			</ul>
		{/if}
	</div>
{/if}

<style>

div {
	max-width: 200px;
	overflow: scroll;
}

a {
	text-decoration: none;
	color: black;
}

p {
	color: grey;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.description {
   overflow: hidden;
   display: -webkit-box;
   -webkit-line-clamp: 4; /* number of lines to show */
           line-clamp: 4; 
   -webkit-box-orient: vertical;
}


</style>
