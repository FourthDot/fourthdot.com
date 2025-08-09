<script>
	import Centered from "$lib/components/centered.svelte"
	import { quintOut } from 'svelte/easing';
	import { fade, draw, fly } from 'svelte/transition';
	import { expand } from "$lib/animations/expand.ts"
	let visible = false;

	import { onMount } from 'svelte';

	let ready = false;
	onMount(() => visible = true);

	const terms = [
		'creatives',
		'architects',
		'inventors',
		'designers',
		'thinkers',
		'leaders',
		'makers',
		'engineers',
		'developers',
		'artists',
		'innovators',
	]

	let word = terms[0];

	let wordIndex = 0;
	let initial = true;

	setInterval(() => {
		if (initial == true) {
			wordIndex = 0;
			initial = false;
		} else if (wordIndex < terms.length - 1) {
			wordIndex++;
		} else {
			wordIndex = 0;
		}
		word = terms[wordIndex];
	}, 4000)

	

</script>


{#if visible}
<div class="hero">
	<h1 in:fade={{ delay: 0, duration: 1000 }}>Fourth Dot focuses on creating the tools for tomorrow's 
		<span class='terms-container'>
			{#each terms as term, i}
				{#if wordIndex == i}
					<span class="term" in:fade={{ delay: 1200, duration: 1000 }} out:fade={{ delay: 0, duration: 1000 }}>{term}.</span>
				{/if}
			{/each}
		</span>
	</h1>
</div>
{/if}

<style>
	svg {
		width: 5em;
		margin-bottom: 1em;
	}
	h1 {
		font-weight: 400;
		font-size: 2em;
		position: relative;
		
	}
	.terms-container {
		position: relative;
		margin-left: 0.3em;
	}
	.term {
	  position: absolute;
	  top: 0;
	  left: 0;
	}
	.hero {
		height: 100%;
	    padding: 0;
	    margin: var(--margin);
	    display: flex;
	    align-items: center;
	    justify-content: flex-start;
	}
</style>