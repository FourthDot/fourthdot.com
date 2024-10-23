<script>
    export let heading;
</script>
<div class="container">
    <h2>{heading}</h2>
    <slot></slot>
</div>
<style>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: left;
        align-items: left;
        justify-content: flex-start;
    }

    h2 {
        font-weight: 400;
        margin: 0px 0px 5px 0px;
    }

    h2 {
        font-size: 1.25em;
        color: black;
        margin-bottom: 0.5em;
    }
    div :global(p) {
        margin: 0px 0px 5px 0px;
    }
</style>