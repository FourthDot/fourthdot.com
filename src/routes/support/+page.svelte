<script>
	import DefaultHeader from "$lib/components/headers/defaultHeader.svelte";
	import Section from "$lib/components/layout/section.svelte";
</script>

<DefaultHeader title="Support"/>

<Section>
	<p>Whether you need help with a technical issue, have questions about our services, or require guidance on using our offerings, we are here to help. Browse the guides below to get started. If you still have questions, please contact us using the button below.</p>

	<div class="links-container">

		<a href="support/product-guides/postcards">Getting Started with Postcards &rarr;</a>

		<a href="support/contact">Contact Us &rarr;</a>

	</div>

</Section>

<style>

h1 {
	font-weight: 400;
	font-size: 1.5em;
}

h2 {
	font-weight: 400;
	font-size: 1.25em;
	margin-bottom: 0px;
}

p {
	
	font-weight: 300;
}

a {
	cursor: pointer;
	color: grey;
	text-decoration: none;
}

a:hover {
	color: black;
}

strong {
	font-weight: 500;
	font-size: 1.1em;
	line-height: 1.75em;
}

span {
	font-feature-settings: 'calt' on;
}

.links-container {
	display: flex;
	flex-direction: column;
	grid-gap: 1em;
	align-items: center;
}
</style>