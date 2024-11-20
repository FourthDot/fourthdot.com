<script>

export let title;

</script>

<div>

	<h3>{title}</h3>

	<slot/>

</div>

<style>

div {
	display: flex;
	flex-direction: column;
	grid-gap: 1em;
	margin-bottom: 1em;
}

h3 {
	color: grey;
	font-size: 0.9em;
	margin-bottom: 0.5em;
}

</style>