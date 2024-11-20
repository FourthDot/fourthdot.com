<script>
	import DefaultHeader from "$lib/components/headers/defaultHeader.svelte";
	import Section from "$lib/components/layout/section.svelte";
</script>

<DefaultHeader title="Privacy"/>

<Section>
	<p>Privacy is a core value at Fourth Dot. As such this website and our applications do not store or track any personal identifiers. Data shared within the Postcards app is saved to Google's Firebase. Certain data, such as
	browser environment, may be logged by 
	<a href="https://vercel.com"
	                target="_blank">Vercel</a
	            >
	            and <a href="https://www.hcaptcha.com" target="_blank">hCaptcha</a> for
	            debugging. Our products will not sell or share your data with external companies, unless noted above. Usage and other analytical data will not be collected unless it is authorized by the user.

	</p>

	<div class="links-container">

		<a href="/support/contact">Questions? Contact Us &rarr;</a>

	</div>

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

span {
	font-feature-settings: 'calt' on;
}

.links-container {
	display: flex;
	flex-direction: column;
	grid-gap: 1em;
	align-items: flex-start;
}
</style>