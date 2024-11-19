<script>
    
    import { quintOut, quadInOut } from 'svelte/easing';
    import { fade, draw, fly, slide } from 'svelte/transition';
    import { expand } from "$lib/animations/expand.ts"
    import { onMount } from 'svelte';
    import { tweened } from 'svelte/motion';

    import ButtonMenu from "$lib/components/navigation/buttonMenu.svelte"
    import NavLink from "$lib/components/navigation/navigationLink.svelte"
    import NavSection from "$lib/components/navigation/navigationSection.svelte"

    let searchQuery = '';
    let showingMenu = false;

    const menuPosition = tweened(2, {
        duration: 400,
        easing: quadInOut
    });

    function toggleMenu () {
        showingMenu = !showingMenu;

        if (showingMenu) {
            menuPosition.set(18);
        } else {
            menuPosition.set(2);
        }
        
    }

</script>

<nav>

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
    

    <!-- <div>

        <ButtonMenu title="Apps" href="/" bind:content={content}/>

        <ButtonMenu title="Support" href="/support" bind:content={content}/>

        <ButtonMenu title="Company" href="/company" bind:content={content}/> -->

        <!-- <button on:click={() => height = 100}>Height = 100</button>
        <button on:click={() => height = 200}>Height = 200</button> -->

    <!-- </div> -->

    <!-- <div class="search">

        <a>Search</a>

    </div> -->

    <button class="compactMenuButton" on:click={ () => toggleMenu() }>
        <svg style="width: 28px; height: 20px">
            <g>
                <line class="menu-line" x1={showingMenu ? "6" : "2"} y1="2" x2={showingMenu ? "22" : "26"} y2={$menuPosition}/>
                {#if !showingMenu}
                <line in:draw={{ duration: 500 }} out:fade={{duration: 200}} class="menu-line" x1="2" y1="10" x2="20" y2="10"/>
                {/if}
                <line class="menu-line" x1={showingMenu ? "6" : "2"} y1="18" x2={showingMenu ? "22" : "26"} y2={20 - $menuPosition}/>
            </g>
        </svg>
    </button>

    {#if showingMenu}

<!-- in:slide={{ duration: animate ? 500 : 0}} out:slide={{ delay: 0, duration: animate ? 500 : 0}} -->

    <div class="expandingContainer" in:slide={{axis:'x', duration: 500 }} out:slide={{ axis:'x', duration: 500 }}>

        <div class="search-bar-container">
            <input placeholder="Search" bind:value={searchQuery}>
        </div>

        {#if searchQuery == ''}

        <NavSection title="Apps">

            <NavLink title="Postcards" tagline="Share moments monthly" beta={true} href="/apps/postcards/explore">
            <!-- <a href="/apps/postcards/explore">Explore Features</a>
            <a href="/apps/postcards/join-beta">Join the Beta</a> -->
            <!-- <a>Product Guide</a> -->
            <!-- <a href="/apps/postcards/frequently-asked-questions">FAQs</a> -->
            </NavLink>

            <NavLink title="Interleaf" tagline="A new way to note" beta={true} href="/apps/interleaf/explore">
                <!-- <a href="/apps/interleaf/explore">Explore Features</a>
                <a href="/apps/interleaf/join-beta">Join the Beta</a> -->
            </NavLink>

        </NavSection>

        <NavSection title="Support">
            <NavLink title="Product Guides" href="/support/product-guides"/>
            <NavLink title="Documentation" href="/support/documentation"/>
            <NavLink title="Contact Us" href="/support/contact"/>
        </NavSection>

        <NavSection title="Company">
            <NavLink title="About" href="/company"/>
            <NavLink title="News" href="/news"/>
        </NavSection>

        {:else}

        <p>Search results will show up here</p>

        {/if}

    </div>

{/if}

</nav>

<style>

    .mainLogo {
        width: 55px;
    }

    .search {
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
        display: flex;
        flex-direction: column;
        overflow: hidden;
        z-index: 10;
        position: fixed;
/*        min-width: 200px;*/
        top: 0px;
        bottom: 0px;
        right: 0;
        background: #fff;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        justify-content: flex-start;
        align-items: flex-start;
        padding: 6em 4em 4em 4em;
    }

    a, button {
        z-index: 11;
        text-decoration: none;
        cursor: pointer;
        color: #000;
        transition: color 0.5s;
    }

    .menu-line {
        fill: none;
        stroke: #000;
        stroke-linecap: square;
        stroke-linejoin: round;
        stroke-width: 2px;
    }

    .search-bar-container {
        
    }

    .search-bar-container input {
        font-size: 1em;
        padding: 1em;
        border: solid 1px #D9D9D9;
        border-radius: 10px;
    }

</style>