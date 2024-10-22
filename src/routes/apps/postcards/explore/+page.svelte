<script>
	import ProductHeader from "$lib/components/headers/productHeader.svelte";
	import Section from "$lib/components/layout/section.svelte";

	import mockup from '$lib/assets/apps/postcards/Hero.png';
</script>

<!-- <ProductHeader title="Postcards">
	
	<a href="/apps/postcards/explore">Explore</a>
	<a href="/apps/postcards/join-beta">Join the Beta</a>
	<a href="/apps/postcards/frequently-asked-questions">FAQs</a>

</ProductHeader> -->

<Section>
	
	<div class="productHero">
		<div>
			
			<h2>Postcards<span class="beta">Beta</span></h2>
			<h1>Share Monthly with Friends, Family, & Loved Ones</h1>
			<p>Postcards is the app designed to keep you in touch with those you love, without the noise and distraction of modern social media. Postcards allows you to share moments throughout the month that will be posted to your friends and family at the begining of each month. Think of it as a digital equivalent of mailing a collection of photos each month.</p>
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
	width: 50%;
	max-height: 80vh;
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

</style>