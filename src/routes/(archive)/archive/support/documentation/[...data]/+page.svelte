<script lang="ts">
    import Section from "$lib/components/layout/section.svelte";
    import '$lib/styles/news.css';
    import { formattedDate, categoryFormatted} from '$lib/utilities/postFormatting';
    export let data;
    const { title, date, category, description, Content } = data;

</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>

<Section>
<h1>{title}</h1>
<div class="meta-data">
    <p>{formattedDate(date)}</p>
    <p>{categoryFormatted(category)}</p>
</div>
</Section>

<Section>
    <Content/>
</Section>

<style>

    img {
        width: 100%;
    }

    hr {
        margin-top: 4em;
        margin-bottom: 1em;
    }
    h1 {
        font-size: 2em;
        margin-top: 3em;
        margin-bottom: 0.25em;
    }
    .meta-data {
        display: flex;
        flex-direction: column;
    }
    .meta-data p {
        font-size: 1em;
        font-weight: 400;
        margin: 0px 0px 0.25em 0px;
    }
</style>