<script>

	import { fade } from 'svelte/transition';

	export let content;
	export let desiredContent;
	export let height;

	let clientHeight;

	$: if (content == desiredContent && clientHeight != 0) {
		height = clientHeight;
	}

</script>

<div in:fade|global={{ delay: 250, duration: 250}} bind:clientHeight={clientHeight}>

	{#if content == desiredContent}
		<slot/>
	{/if}

</div>


<style>
 div {
 	display: flex;
    flex-direction: row;
    grid-gap: 4em;
    justify-content: center;
 }
</style>

