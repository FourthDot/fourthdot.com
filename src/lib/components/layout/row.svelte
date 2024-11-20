<script>

export let alignment = "flex-start";

</script>


<div style="--alignment:{alignment}">

<slot/>

</div>

<style>

 div {
 	display: flex;
	flex-direction: row;
	grid-gap: 4em;
    justify-content: var(--alignment);
    align-content: space-between;
 }

 @media only screen and (max-width: 700px) {
	div {
		flex-direction: column;
		grid-gap: 1em;
 	}
 }

</style>