<script>
	import ProductHeader from "$lib/components/headers/productHeader.svelte";
	import Section from "$lib/components/layout/section.svelte";

	import mockup from '$lib/assets/apps/interleaf/Hero.png';
</script>

<!-- <ProductHeader title="Postcards">
	
	<a href="/apps/postcards/explore">Explore</a>
	<a href="/apps/postcards/join-beta">Join the Beta</a>
	<a href="/apps/postcards/frequently-asked-questions">FAQs</a>

</ProductHeader> -->

<Section>
	
	<div class="productHero">
		<div>
			
			<h2>Interleaf<span class="beta">Beta</span></h2>
			<h1>A new way to note just about anything</h1>
			<p>Interleaf is the app designed to simplify notetaking. Whilst digital notetaking offers many advantages, many apps lead to distractions and force you to focus on the act of formatting notes rather than the act of taking notes. Interleaf solves this problem by radically simplifying the interface only revealing contextual controls when you need them.</p>
		</div>

		<img src={mockup}>
	</div>

</Section>

<style>

h1 {
	font-size: 2em;
	margin-top: 0.5em;
}

h2 {
	display: flex;
	align-items: center;
	margin-bottom: 0.5em;
}

a {
	text-decoration: none;
	color: black;
}

a:active {
	color: blue;
}

.productHero {
	display: flex;
	flex-direction: row;
	align-items: center;
}

img {
	width: 40%;
	padding: 4em;
	object-fit: scale-down;
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


@media only screen and (max-width: 700px) {
	.productHero {
		flex-direction: column-reverse;
	}
	img {
		width: 100%;
		max-height: 300px;
	}
}

</style>