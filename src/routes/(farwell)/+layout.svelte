<script>

    import { quintOut } from 'svelte/easing';
    import { fade, draw, fly, slide } from 'svelte/transition';
    import { expand } from "$lib/animations/expand.ts"
    import { onMount } from 'svelte';

    import '$lib/styles/main.css';

    let visible = false;
    onMount(() => visible = true);

</script>

<main>
    <slot/>
</main>

<style>
	:root {
    font-family: Inter, sans-serif;
    font-feature-settings: 'liga' 1, 'calt' 1; /* fix for Chrome */
    }
    @supports (font-variation-settings: normal) {
    :root { font-family: InterVariable, sans-serif; }
    }

    html, body {
    	height: 100%;
	}
	body {
    	margin: 0;
	}

    div {
        font-family: Inter;
    }

    main {
        flex-grow: 1;
    }

    footer {
        padding: var(--margin);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    hr {
        margin-top: var(--margin);
        margin-inline: var(--margin);
        min-height: 1px;
        color: #EBEBEB;
        background: #EBEBEB;
        border: 0;

    }

    .footerCompactText {
        font-size: 0.75em;
    }

    .footerLinks {
        display: flex;
        flex-direction: row;
        grid-gap: 1em;
        align-items: flex-end;
    }

    .footerLinks a {
        text-decoration: none;
        cursor: pointer;
        color: #000;
        transition: color 0.5s;
    }

    .footerLinks a:hover {
        color: gray;
    }

    @media only screen and (max-width: 800px) {
        footer {
            flex-direction: column-reverse;
            grid-gap: 1em;
        }
    }

    @media only screen and (max-width: 500px) {
        .footerLinks {
            flex-direction: column;
            align-items: flex-start;
        }
    }
    
</style>