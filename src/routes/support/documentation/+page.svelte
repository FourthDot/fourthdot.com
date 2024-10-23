<script>
	import DefaultHeader from "$lib/components/headers/defaultHeader.svelte";
	import Section from "$lib/components/layout/section.svelte";
	import PostRow from "$lib/components/support/articleRow.svelte";
	export let data;
</script>

<DefaultHeader title="Documentation"/>

<Section>

	<p>
		There is currently no documentation available.<br><br>
	</p>

	<a href="product-guides/">View Product Guides Instead &rarr;</a>

</Section>

<Section>
	{#each data.posts as post}
    <PostRow post={post}/>
	{/each}
</Section>

<style>

a {
	cursor: pointer;
	color: grey;
	text-decoration: none;
}

a:hover {
	color: black;
}

strong {
	font-weight: 450;
	font-size: 1.2em;
	line-height: 2.25em;
}


</style>