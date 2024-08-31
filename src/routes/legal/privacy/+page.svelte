<script>
	import Centered from "$lib/components/centered.svelte";
</script>

<Centered>
	<h1>Privacy</h1>
	<p>Privacy is a core value at Fourth Dot. 
		As such this website and our applications do not store or track any personal identifiers. Data shared within the Postcards app is saved to Google's Firebase. Certain data, such as browser environment, may be logged by Vercel for debugging. Our products will not sell or share your data with external companies, unless noted above. Usage and other analytical data will not be collected unless it is authorized by the user.</p>

	<div class="links-container">

		<a href="mailto:legal@fourthdot.com?Subject=Privacy Inquiry">Questions? Contact Us &rarr;</a>

	</div>

</Centered>

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
	max-width: 600px;
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