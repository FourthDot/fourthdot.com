<script>
    import { formattedDate, categoryFormatted, formattedNumber } from '$lib/utilities/postFormatting';
    export let post;
</script>

<a href={post.path}>
    <div class="post-container">
        <div class="post-meta-row">
            <h2>{post.meta.title}</h2>
            <div class="post-meta-data">
                <p>{formattedDate(post.meta.date)}</p>
                <p>{categoryFormatted(post.meta.category)}</p>
            </div>
        </div>
        <p class="post-description">{post.meta.description}</p>
    </div>
</a>

<style>
    h2 {
        font-weight: 400;
    }
    a {
        display: flex;
        flex-direction: row;
        justify-content: left;
        align-items: left;
        text-decoration: none;
        color: black;
        margin-top: 3em;
        width: 100%;
    }

    .post-container {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .post-number {
        width: 6em;
        font-size: 1em;
        font-weight: 400;
        margin: 0em;
        margin-top: 0.1em;
    }

    .post-meta-row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .post-meta-data {
        display: flex;
        flex-direction: row;
    }

    .post-meta-data p {
        font-size: 1em;
        font-weight: 400;
        margin: 0em;
        margin-left: 3em;
    }

    a h2 {
        margin: 0em;
    }

    .post-description {
        color: grey;
    }
</style>