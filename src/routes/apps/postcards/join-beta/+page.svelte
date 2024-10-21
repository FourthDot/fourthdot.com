<script>
	import DefaultHeader from "$lib/components/headers/defaultHeader.svelte";
	import Section from "$lib/components/layout/section.svelte";

	import HCaptcha from "svelte-hcaptcha";

	let name = "";
    let email = "";
    let source = "";
    let answer = "";

    let captcha;
    let hCaptchaSiteId = "23ba012c-1136-4060-9be2-c980f9763d10";

    const handleError = () => {
        captcha.reset();
    };

</script>

<DefaultHeader title="Join the Beta"/>

<Section>

	<form method="POST">


		<label>Name</label>
		<input
            bind:value={name}
            type="text"
            name="name"
            placeholder="How would you like to be addressed?"
            required
        />
        <label>Email</label>
        <input
            bind:value={email}
            type="email"
            name="email"
            placeholder="name@example.com"
            required
        />

        <label>Have Beta tested an app before?</label>
        <div class="radioRow">
            <input class="radio" type="radio" id="yes" name="beta" value="yes">
            <label class="radioLabel" for="yes">Yes</label>
        </div>
        <div class="radioRow">
            <input class="radio" type="radio" id="no" name="beta" value="no">
            <label class="" for="no">No</label>
        </div><br>

        <label>How did you hear about Postcards?</label>
        <input
            bind:value={source}
            type="text"
            name="source"
            placeholder="A friend or family"
            required
        />

		<label>Why would you like to beta test Postcards?</label>
        <textarea
            bind:value={answer}
            name="answer"
            placeholder="Enter your response"
            required
        ></textarea>

        <label>Verify you're a Human</label>
		<div id="buttonContainer">
            <HCaptcha
                sitekey={hCaptchaSiteId}
                bind:this={captcha}
                on:error={handleError}
            ></HCaptcha>

            <button type="submit">Submit</button>
        </div>

	</form>

</Section>

<style>

form {
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	
}

input, textarea, label, #buttonContainer {
	min-width: 50%;
	max-width: 600px;
	padding-inline: 0.75em;
}

input, textarea, button {
	border: solid 1px #EFEFEF;
	font-size: 1em;
	padding: 0.75em;
	background-color: #FDFDFD;
	border-radius: 0.75em;
	margin-top: 0.5em;
	margin-bottom: 2em;
}

input::placeholder, textarea::placeholder {
  font-weight: 250;
}

textarea {
	min-height: 150px;
}

button {
	border: none;
	margin-top: 1em;
	color: #fff;
	background-color: #2F86DD;
	border-radius: 2em;
}

#buttonContainer {
	margin-top: 0.5em;
	position: relative;
	right: 0.75em;
}

.radioRow {
    min-width: 50%;
    max-width: 600px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}

.radio {
    margin-bottom: 0.5em;
    min-width: auto;
}

</style>