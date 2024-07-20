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
		'makers',
		'engineers'
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


<Centered>
	{#if visible}
	<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100">
	  <defs>
	    <style>
	      .cls-1 {
	      	fill: #000;
	        stroke-width: 11px;
	      }

	      .cls-1, .cls-2 {
	        stroke-miterlimit: 10;
	      }

	      .cls-1, .cls-2, .cls-3 {
	        stroke: #000;
	      }

	      .cls-2, .cls-3 {
	        fill: none;
	        stroke-linecap: round;
	        stroke-width: 6px;
	      }

	      .cls-3 {
	        stroke-linejoin: round;
	      }
	    </style>
	  </defs>
	  <polyline in:draw={{ duration: 1000, delay: 600}} class="cls-3" points="28.49 32.07 9.24 56.9 66.6 56.9"/>
	  <line in:draw={{ duration: 600 }} class="cls-2" x1="42.08" y1="16.72" x2="42.08" y2="83.28"/>
	  <line in:draw={{ duration: 500, delay: 1600 }} class="cls-3" x1="66.6" y1="56.9" x2="57.41" y2="48.58"/>
	  <line in:draw={{ duration: 500, delay: 1600 }} class="cls-3" x1="66.6" y1="56.9" x2="57.41" y2="66.53"/>
	  <circle in:expand={{ duration: 1000, delay: 2500, easing: quintOut }} class="cls-1" cx="83.07" cy="56.9" r="4.98"/>

	</svg>
	<h1 in:fade={{ delay: 4500, duration: 1000 }}>Fourth Dot focuses on creating the tools for tomorrow's 
		<span class='terms-container'>
			{#each terms as term, i}
				{#if wordIndex == i}
					<span class="term" in:fade={{ delay: 1200, duration: 1000 }} out:fade={{ delay: 0, duration: 1000 }}>{term}.</span>
				{/if}
			{/each}
		</span>
	</h1>
	{/if}
	
</Centered>
<style>
	svg {
		width: 5em;
		margin-bottom: 1em;
	}
	h1 {
		font-weight: 400;
		font-size: 1.25em;
		position: relative;
		left: -3em;
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
</style>
