<script>

	import { fade, slide } from 'svelte/transition';
	import { tweened } from 'svelte/motion';
	import { quadInOut } from 'svelte/easing';
	export let title;
	export let links;

	let innerWidth = 0;
    let innerHeight = 0;

    var showLinks = false;
    var expanded = false;

    function toggleMenu() {
    	console.log("clicked")
    	// showLinks = !showLinks;
    	expanded = !expanded;
    	
    	if (expanded) {
            endPosition.set(12);
            centerPosition.set(6);
        } else {
            endPosition.set(6);
            centerPosition.set(12);
        }
    	
    }

    const endPosition = tweened(6, {
        duration: 400,
        easing: quadInOut
    });

    const centerPosition = tweened(12, {
        duration: 400,
        easing: quadInOut
    });

</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div class="expandingContainer">
	
    <p class="question" on:click={toggleMenu}>{title}
    	
		<svg style="width: 30px; height: 15px">
            <g>
      			<path class="chevron" d="M1 {$endPosition} L8 {$centerPosition} L16 {$endPosition}"/>ß
            </g>
    	</svg>
    	
    	<!-- <img src={chevron}> -->
    </p>
    
    
	{#if expanded}
		<div class="answerContainer" in:slide={{axis: 'y', duration: 400}} out:slide={{axis: 'y', duration: 400, delay: 100 }}>
		
		<slot/>	
		
		</div>
	{/if}

    <hr>


</div>

<style>

	.question {
		width: 100%;
		color: #000;
	    font-size: 1.3em;
	    font-weight: 400;
	    cursor: pointer;
	    display: flex;
	    flex-direction: row;
	    justify-content: space-between;
	    align-items: center;
	    margin: 0.5em 0em 0.5em 0em;
	}

	.expandingContainer {
		display: flex;
		flex-direction: column;
		transition: all 4s;
	}

	.answerContainer {
		display: flex;
		flex-direction: column;
		gap: 0.2em;
	}

	hr {
		margin-top: 1em;
		margin-bottom: 1em;
		width: 100%;
		border: 0.75px solid gainsboro;
	}

	a {
	    color: white;
	    text-decoration: none;
	    font-size: 14px;
	    line-height: 20px;
	    letter-spacing: .022em;
	    font-variation-settings: 'wght' 400;
	}

	svg {
		margin-left: 10px;
	}

	.chevron {
		fill: none;
        stroke: gainsboro;
        stroke-linecap: square;
        stroke-linejoin: round;
        stroke-width: 2px;
	}

</style>