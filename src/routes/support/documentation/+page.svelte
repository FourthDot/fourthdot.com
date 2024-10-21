<script>
	import DefaultHeader from "$lib/components/headers/defaultHeader.svelte";
	import Section from "$lib/components/layout/section.svelte";
</script>

<DefaultHeader title="Documentation"/>

<Section>

	<p>
		There is currently no documentation available.<br><br>
	</p>

	<a href="product-guides/">View Product Guides Instead &rarr;</a>

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