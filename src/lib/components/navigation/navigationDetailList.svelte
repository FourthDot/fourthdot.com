<script>
import { fade, slide } from 'svelte/transition';
export let title;
export let tagline;
export let beta = false;
export let comingSoon = false;

</script>

<div class="navDetailContainer" in:fade|global={{ delay: 250, duration: 250}}>
	
	<div>
		<a>{title}

			{#if beta}

			<span class="beta">Beta</span>

			{/if}

			{#if comingSoon}

			<span class="comingSoon">Coming Soon</span>

			{/if}

		</a>
		<p>{tagline}</p>
	</div>

	<slot/>


</div>

<style>
	
	a {
		display: flex;
		flex-direction: row;
		align-items: center;
		font-size: 1.75em;
	}

	p {
		margin-top: 0.25em;
		color: grey;
		font-size: 0.8em;
	}

	.navDetailContainer {
		display: flex;
		flex-direction: column;
		grid-gap: 1em;
	}

	.beta {
		margin-left: 1.4em;
		padding: 0.5em;
		color: #FF8900;
		border: solid 1px #FF8900;
		border-radius: 0.4em;
		font-size: 0.15em;
		text-transform: uppercase;
	}

	.comingSoon {
		margin-left: 1.4em;
		padding: 0.5em;
		color: #B9B9B9;
		border: solid 1px #B9B9B9;
		border-radius: 0.4em;
		font-size: 0.15em;
		text-transform: uppercase;
	}

</style>