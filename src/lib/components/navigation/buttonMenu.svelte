<script>
	import { tweened } from 'svelte/motion';
	import { quadInOut } from 'svelte/easing';
	import { fade, slide } from 'svelte/transition';
	export let title;
	export let href;

	export let content;

	function toggle() {
    	if (content != title) {
            content = title;
        }
    }

    $: if (content == title) {
    	endPosition.set(11);
        centerPosition.set(7);
    } else {
    	endPosition.set(7);
        centerPosition.set(11);
    }

    const endPosition = tweened(7, {
        duration: 400,
        easing: quadInOut
    });

    const centerPosition = tweened(11, {
        duration: 400,
        easing: quadInOut
    });

</script>

<div class="buttonContainer" on:mouseenter={toggle} > 

	<a href={href}>{title}

		<svg style="width: 15px; height: 15px">
            <g>
      			<path class="chevron" d="M2 {$endPosition} L7 {$centerPosition} L13 {$endPosition}"/>
            </g>
    	</svg>



	</a>

</div>

<style>

	a {
		z-index: 11;
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit;
    }

    .buttonContainer {
    	display: flex;
    	flex-direction: column;
    	justify-content: flex-start;
    }

    .linksContainer {
    	z-index: 10;
    	width: calc(100% - 4em);
    	display: flex;
    	flex-direction: row;
    	padding: 8em 2em 4em 2em;
    	position: absolute;
    	top: 0px;
    	left: 0px;
    	background: #fff;
    	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    	grid-gap: 1em;
    	justify-content: center;
    	grid-gap: 4em;
    }

    .arrow {
    	background-color: rgba(0, 0, 0, 0.125);
		border-radius: 0 3px 0 0;
		border-width: 1px 1px 0 0;
		clip-path: polygon(0 0,100% 0,100% 100%);
		display: block;
		height: 16px;
		position: absolute;
		right: var(--arrowRight);
		top: -8px;
		transform: rotate(-45deg);
		width: 16px;
    }

    .chevron {
		fill: none;
        stroke: gainsboro;
        stroke-linecap: square;
        stroke-linejoin: round;
        stroke-width: 2px;
	}

</style>