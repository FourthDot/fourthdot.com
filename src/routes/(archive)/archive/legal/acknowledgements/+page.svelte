<script>
	import DefaultHeader from "$lib/components/headers/defaultHeader.svelte";
	import Section from "$lib/components/layout/section.svelte";
	import DetailBlock from "$lib/components/layout/detailBlock.svelte";
    import DetailGrid from "$lib/components/layout/detailGrid.svelte";
</script>

<DefaultHeader title="Acknowledgements"/>

<Section>
	<DetailGrid>

	    <DetailBlock heading={"Copyright"}>
	        <p>
	            Unless otherwise noted, all images, text, and other files are
	            copyright Christopher Fridlington. Work showcased whilst working for
	            a company is copyright to said company. Please refrain from
	            reproducing materials without permission.
	        </p>
	    </DetailBlock>

	    <DetailBlock heading={"External Linking"}>
	        <p>
	            We encourage you to share links to this website wherever you feel it
	            may be appropriate. Please refrain from linking directly to site
	            resources, such as images, and instead link to the pages containing
	            those assets.
	        </p>
	    </DetailBlock>

	    <DetailBlock heading={"Forms"}>
	        <p>
	            Messages submitted through forms on this website will be sent by
	            using a <a
	                href="https://kit.svelte.dev/docs/form-actions"
	                target="_blank">form action</a
	            >
	            through
	            <a href="https://kit.svelte.dev" target="_blank">SvelteKit</a>. A
	            user's identity as a human will be verified using
	            <a href="https://www.hcaptcha.com" target="_blank">hCaptcha</a> before
	            the request is completed.
	        </p>
	    </DetailBlock>

	    <DetailBlock heading={"Markdown"}>
	        <p>
	            Each article on our <a href="/news">news page</a> and in our <a href="/support/documentation">support documentation</a> is written in <a href="https://daringfireball.net/projects/markdown/" target="_blank">Markdown</a>, the markup language created by <a href="https://daringfireball.net/colophon/" target="_blank">John Gruber</a>. The markdown preporcessor <a href="https://mdsvex.pngwn.io" target="_blank">mdsvex</a> is then used to create a representation that can be used in <a href="https://svelte.dev" target="_blank">Svelte</a> pages and components. 
	        </p>
	    </DetailBlock>

	    <DetailBlock heading={"Privacy"}>
	        <p>
	            Your privacy is of our upmost concern and as such this website does
	            not store or track any personal identifiers. Certain data, such as
	            browser environment, may be logged by <a
	                href="https://vercel.com"
	                target="_blank">Vercel</a
	            >
	            and <a href="https://www.hcaptcha.com" target="_blank">hCaptcha</a> for
	            debugging.
	        </p>
	    </DetailBlock>

	    <DetailBlock heading={"Typography"}>
	        <p>
	            All type on this website is set in <a
	                href="https://rsms.me/inter/"
	                target="_blank">Inter</a
	            >
	            created by
	            <a href="https://rsms.me" target="_blank">Rasmus Andersson</a>. The
	            font files are
	            <a href="https://rsms.me/inter/#faq-cdn" target="_blank"
	                >served from CloudFlare's CDN</a
	            >.
	        </p>
	    </DetailBlock>

	    <DetailBlock heading={"Web Crawling"}>
	        <p>
	            With the advent of LLMs, we kindly request that you respect the <a
	                href="/robots.txt"
	                target="_blank">robots.txt</a
	            > file at this site's root directory and not use my data as part of your
	            model's training. This site may be crawled for search indexing.
	        </p>
	    </DetailBlock>

	    <DetailBlock heading={"Web Technologies"}>
	        <p>
	            This website is built using <a
	                href="https://kit.svelte.dev"
	                target="_blank">SvelteKit</a
	            >, a web framework built on the UI framework
	            <a href="https://svelte.dev" target="_blank">Svelte</a>
	            and the build tool
	            <a href="https://vitejs.dev" target="_blank">Vite</a>. The website
	            is hosted on
	            <a href="https://vercel.com" target="_blank">Vercel</a>.
	        </p>
	    </DetailBlock>

	</DetailGrid>

</Section>