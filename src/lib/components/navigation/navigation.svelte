<script>
    
    import { quintOut } from 'svelte/easing';
    import { fade, draw, fly, slide } from 'svelte/transition';
    import { expand } from "$lib/animations/expand.ts"
    import { onMount } from 'svelte';

    import ButtonMenu from "$lib/components/navigation/buttonMenu.svelte"
    import NavDetailList from "$lib/components/navigation/navigationDetailList.svelte"
    import NavContent from "$lib/components/navigation/navigationContent.svelte"

    let content = '';
    let height = 0;

    // $: console.log(content);
    // $: console.log(height);

    function toggle() {
        content = '';
    }

    $: console.log(height);

</script>

<nav on:mouseleave={toggle}>

    <a href="/">
        <svg class="mainLogo" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100">
          <defs>
            <style>
              .cls-1 {
                fill: #000;
                stroke-width: 11px;
              }

              .cls-1, .cls-2 {
                stroke-miterlimit: 10;
              }

              .cls-1, .cls-2, .cls-3 {
                stroke: #000;
              }

              .cls-2, .cls-3 {
                fill: none;
                stroke-linecap: round;
                stroke-width: 6px;
              }

              .cls-3 {
                stroke-linejoin: round;
              }
            </style>
          </defs>
          <polyline in:draw={{ duration: 1000, delay: 600}} class="cls-3" points="28.49 32.07 9.24 56.9 66.6 56.9"/>
          <line in:draw={{ duration: 600 }} class="cls-2" x1="42.08" y1="16.72" x2="42.08" y2="83.28"/>
          <line in:draw={{ duration: 500, delay: 1600 }} class="cls-3" x1="66.6" y1="56.9" x2="57.41" y2="48.58"/>
          <line in:draw={{ duration: 500, delay: 1600 }} class="cls-3" x1="66.6" y1="56.9" x2="57.41" y2="66.53"/>
          <circle in:expand={{ duration: 1000, delay: 2500, easing: quintOut }} class="cls-1" cx="83.07" cy="56.9" r="4.98"/>

        </svg>
    </a>
    

    <div>

        <ButtonMenu title="Apps" href="/" bind:content={content}/>

        <ButtonMenu title="Support" href="/support" bind:content={content}/>

        <ButtonMenu title="Company" href="/" bind:content={content}/>

        <!-- <button on:click={() => height = 100}>Height = 100</button>
        <button on:click={() => height = 200}>Height = 200</button> -->

    </div>

    <div>

        <a>Search</a>

    </div>

    {#if content != ''}

<!-- in:slide={{ duration: animate ? 500 : 0}} out:slide={{ delay: 0, duration: animate ? 500 : 0}} -->

    <div class="expandingContainer" in:slide={{ duration: 500 }} out:slide={{ delay: 0, duration: 500 }} style="--expandingHeight: {height}">

        <NavContent bind:content={content} desiredContent="Apps" bind:height={height}>

            <NavDetailList title="Interleaf" tagline="A new way to note" beta={true}>
            <a>Explore Features</a>
            <a>Try for Free</a>
            <a>Product Guide</a>
            <a>FAQs</a>
            </NavDetailList>

            <NavDetailList title="Postcards" tagline="Share moments monthly" beta={true}>
                <a>Explore Features</a>
                <a>Download for Free</a>
                <a>Product Guide</a>
                <a>FAQs</a>
            </NavDetailList>

            <NavDetailList title="Lectern" tagline="Slideshows for art history" comingSoon={true}>
                <a>Explore Features</a>
                <a>Join the Beta</a>
                <a>FAQs</a>
            </NavDetailList>

            <NavDetailList title="Sandbox" tagline="AR made easy" comingSoon={true}>
                <a>Explore Features</a>
                <a>Join the Beta</a>
            </NavDetailList>
        
        </NavContent>

        <NavContent bind:content={content} desiredContent="Support" bind:height={height}>
            <a>Product Guides</a>
            <a>View FAQs</a>
            <a href="/support">Contact Us</a>
        </NavContent>
    
        <NavContent bind:content={content} desiredContent="Company" bind:height={height}>
            <a>About</a>
            <a>Newsroom</a>
        </NavContent>

    </div>

{/if}

</nav>

<style>

    .mainLogo {
        width: 55px;
    }

    nav div {
        display: flex;
        flex-direction: row;
        grid-gap: 2em;
        align-items: center;
    }

    nav button {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit;
    }

    nav {
        padding: var(--margin);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .expandingContainer {
        overflow: hidden;
        transition: height 0.5s ease;
        height: var(--expandingHeight);
        z-index: 10;
        width: calc(100% - 4em);
        padding: 8em 2em 4em 2em;
        position: absolute;
        top: 0px;
        left: 0px;
        background: #fff;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        justify-content: center;
    }

    a, button {
        z-index: 11;
        text-decoration: none;
        cursor: pointer;
        color: #000;
        transition: color 0.5s;
    }

</style>