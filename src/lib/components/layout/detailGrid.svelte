<script>

</script>

<grid>

    <slot></slot>

    
</grid>

<style>
    grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 6em;
        row-gap: 3em;
        margin-top: 2em;
    }

    @media (max-width: 768px) {
        grid {
            grid-template-columns: 1fr;
            gap: 1em;
            row-gap: 1.75em;
        }
    }
</style>