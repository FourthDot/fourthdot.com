<script>
    export let title;
    export let heading;
    export let detail1;
    export let detail2;
    export let subheading;
    export let paragraph = '';
    export let list = [];
</script>

<div class="container">

    <div class="columnA">

        <h2>{title}</h2>
        <h3>{heading}</h3>
        <h4>{detail1}<br>{detail2}</h4>

    </div>
    <div class="columnB">
        <h5>{subheading}</h5>
        {#if list.length > 0}
        <ul>
            {#each list as item}
                <li>{item}</li>
            {/each}
        </ul>
        {/if}
        {#if paragraph}
            <p>{paragraph}</p>
        {/if}
    </div>

</div>
<style>
    .container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 3em;
    }

    .columnA {
        display: flex;
        flex-direction: column;
        justify-content: left;
        align-items: left;
        justify-content: flex-start;
    }

    .columnB {
        display: flex;
        flex-direction: column;
        justify-content: left;
        align-items: left;
        width: 60%;
    }

    h2, h3, h4, h5 {
        font-weight: 400;
        margin: 0px 0px 5px 0px;
    }

    h2 {
        font-size: 1.5em;
        color: black;
    }

    h3 {
        font-size: 1.5em;
        color: grey;
    }

    h4 {
        font-size: 1em;
        color: grey;
        margin-top: 10px;
    }

    h5 {
        font-size: 1em;
        font-weight: 400;
    }

    p {
        font-size: 1em;
        font-weight: 400;
        margin-top: 10px;
        color: gray;
    }

    ul {
        padding: 0 1em;
        color: gray;
    }

    li {
        margin-bottom: 0.5em;
        font-weight: 400;
        font-size: 1em;
    }

    @media (max-width: 768px) {
        .container {
            flex-direction: column;
        }

        .columnA {
            width: 100%;
        }

        .columnB {
            width: 100%;
        }
    }

</style>