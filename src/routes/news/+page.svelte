<script>
	import DefaultHeader from "$lib/components/headers/defaultHeader.svelte";
	import Section from "$lib/components/layout/section.svelte";
	import PostRow from "$lib/components/news/postRow.svelte";
    export let data;
</script>

<DefaultHeader title="News"/>

<Section>
	{#each data.posts as post}
    <PostRow post={post}/>
	{/each}
</Section>