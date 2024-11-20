<script>
	export let title;
</script>

<header>
	
	<h1>{title}</h1>

	<div>
		<slot/>
	</div>

</header>

<style>

header {
	margin-top: 3em;
	margin-inline: var(--margin);
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-content: center;
}

div {
	display: flex;
	flex-direction: row;
	grid-gap: 1em;
	align-items: center;
}

</style>