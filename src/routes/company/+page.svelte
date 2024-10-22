<script>
	import DefaultHeader from "$lib/components/headers/defaultHeader.svelte";
	import Section from "$lib/components/layout/section.svelte";
	import Row from "$lib/components/layout/row.svelte"
	import { quintOut } from 'svelte/easing';
	import { fade, draw, fly } from 'svelte/transition';
	import { expand } from "$lib/animations/expand.ts"

	import { onMount } from 'svelte';

	import Christopher from '$lib/assets/company/team/CF.jpg';

	const terms = [
		'creatives',
		'architects',
		'inventors',
		'designers',
		'thinkers',
		'leaders',
		'makers',
		'engineers',
		'developers',
		'artists',
		'innovators',
	]

	let word = terms[0];

	let wordIndex = 0;
	let initial = true;

	setInterval(() => {
		if (initial == true) {
			wordIndex = 0;
			initial = false;
		} else if (wordIndex < terms.length - 1) {
			wordIndex++;
		} else {
			wordIndex = 0;
		}
		word = terms[wordIndex];
	}, 4000)

	

</script>

<header>

	<div class="hero">
		<h1 in:fade={{ delay: 0, duration: 1000 }}>Fourth Dot focuses on creating the tools for tomorrow's 
			<span class='terms-container'>
				{#each terms as term, i}
					{#if wordIndex == i}
						<span class="term" in:fade={{ delay: 1200, duration: 1000 }} out:fade={{ delay: 0, duration: 1000 }}>{term}.</span>
					{/if}
				{/each}
			</span>
		</h1>
	</div>

	<p>
		"You can't connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future."

		<br>
		<span class="quoteAttribution">—Steve Jobs</span>
		<br><br>
		
		Fourth Dot's name is a subtle reference to this famous quote from Jobs's 2005 Stanford's commencement. Fourth Dot is in many ways about embracing the unknown, and trusting that the dots will connect. Here's to creating something wonderful.
	</p>


</header>

<DefaultHeader title="Core Values"/>

<Section>

	<Row>
		
		<div class="oneThird">
			<h2>Design</h2>
			<p>The design of our apps is paramount as design is not just how something looks but how it works. We constantly strive to simplify actions to get to the essence of an action. The result are products that are more inentional and simple to use.</p>
		</div>

		<div class="oneThird">
			<h2>Engineering</h2>
			<p>The obsession with simplicy also informs our engineering practices, where we strive to write code that is clean, re-usable and performant. These efforts are key to making products feel responsive and reactive.</p>
		</div>

		<div class="oneThird">
			<h2>Privacy</h2>
			<p>Your data is your data. We don't want it and we certainly don't want to share it with other people. In all our products we strive to collect as little as possible and ensure that what we do collect remains private.</p>
		</div>

	</Row>
	
</Section>

<DefaultHeader title="Team"/>

<Section>

	<Row>
		
		<img src={Christopher} alt="Christopher Fridlington">

		<div class="team-text">
			<h2>Christopher Fridlington</h2>
			<h3>Founder</h3>
			<p>Christopher is the sole employee at Fourth Dot—at least for now. He began building and publishing applications for iOS when he was just 11 years old. His skillset matured along with Apple's platforms, moving from primarily programming in Objective-C and using .xibs to Swift and SwiftUI. He is passionate about design and beleives the best products exist at the intersection of the liberal arts and technology. He received his BA in Computer Science & Architecture from Middlebury College. Outside of his work at Fourth Dot, Christopher enjoys sailing, running, and skiing.</p>
		</div>

	</Row>
	
</Section>

<style>
	svg {
		width: 5em;
		margin-bottom: 1em;
	}
	h1 {
		font-weight: 400;
		font-size: 2em;
		position: relative;
		
	}

	header {
		display: flex;
		flex-direction: row;
		grid-gap: 4em;
		padding-top: 4em;
	    margin: var(--margin);
	}

	header p {
		width: 50%
	}

	.terms-container {
		position: relative;
		margin-left: 0.3em;
	}
	.term {
	  position: absolute;
	  top: 0;
	  left: 0;
	}
	.hero {
		width: 50%;
	    display: flex;
	    align-items: flex-start;
	    justify-content: flex-start;
	}

	.quoteAttribution {
		float: right;
		text-align: right;
	}

	.oneThird {
		flex: 1 1 0;
	}

	img {
		width: 30%;
		filter: brightness(1.3) grayscale(100%);
        object-fit: cover;
        object-position: 45% 50%;

	}

	.team-text {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.team-text h2, h3 {
		margin: 0.1em;
	}

	.team-text h3 {
		font-weight: 300;
	}


</style>