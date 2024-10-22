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

</style>