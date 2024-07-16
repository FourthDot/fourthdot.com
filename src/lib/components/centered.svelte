
<div class="centeredContainer">
	<div class="centeredItem">
		<slot/>
	</div>
</div>

<style>

	.centeredContainer {
	    height: 100%;
	    padding: 0;
	    margin: 0;
	    display: flex;
	    align-items: center;
	    justify-content: center;
	}
	.centeredItem {
	    width: auto;
	    display: flex;
	    flex-direction: column;
	    align-items: center;
	}

</style>