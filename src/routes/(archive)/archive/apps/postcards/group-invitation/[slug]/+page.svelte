<script>
    import Section from "$lib/components/layout/section.svelte";
    export let data;
    const { invitationId } = data;

</script>

<svelte:head>
    <title>Postcard Group Invitation</title>
</svelte:head>

<Section>
<h1>Group Invitation: {invitationId}</h1>
<p>To accept this invitation you must have the Postcards app installed on this device. Please refer to our Frequently Asked Questions for information about joining the Beta.</p>
<a href="/apps/postcards/frequently-asked-questions">View Frequently Asked Questions</a>

</Section>

<style>

a {
    font-size: 0.8em;
    text-decoration: none;
    border: none;
    margin-top: 2em;
    color: #fff;
    background-color: #2F86DD;
    border-radius: 2em;
    padding: 0.75em;
}

</style>