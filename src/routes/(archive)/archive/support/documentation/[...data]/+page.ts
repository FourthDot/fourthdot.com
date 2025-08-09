export async function load({ params }) {
	
	const modules = import.meta.glob('../articles/*/*.md');

	for (const path in modules) {

		const article = await modules[path]();

	    if (path == `../articles/${params.data}.md`) {

	    	// const post = await import(`../stories/${params.slug}.md`);

	    	const { title, date, category, description } = article.metadata;
			const Content = article.default;

			return {
				Content,
				title,
				date,
		        category,
		        description
			};
	    }

	}

	
}