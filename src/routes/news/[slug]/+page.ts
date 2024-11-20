export async function load({ params }) {
	const post = await import(`../stories/${params.slug}.md`);
	const { title, date, category, description } = post.metadata;
	const Content = post.default;

	return {
		Content,
		title,
		date,
        category,
        description
	};
}