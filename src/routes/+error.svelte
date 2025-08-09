<script>
	import Centered from "$lib/components/centered.svelte";
	import { quintOut } from 'svelte/easing';
	import { fade, draw, fly, slide } from 'svelte/transition';
    import { expand } from "$lib/animations/expand.ts"
    import { onMount } from 'svelte';
	let visible = false;
    onMount(() => visible = true);
    import '$lib/styles/main.css';
</script>
<Centered>
	
	{#if visible}
	<svg class="mainLogo" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100">
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
	{/if}

	<h1>404 Page Not Found</h1>

	<p>This website has been archived following the conclusion of projects at Fourth Dot. If you are looking for a page you can view it by looking at the archive site.</p>

	<p><a href="/archive">View Archived Site -></a><p>

</Centered>

<style>

	.mainLogo {
        width: 60px;
    }

    h1 {
    	font-size: 1.75em;
    	font-weight: 450;
    	margin-bottom: 0.5em;
    }

    p {
    	margin-top: 0.5em;
    	max-width: 445px;
    	font-weight: 400;
    	margin-inline: 1em;
    }

    p 

</style>
