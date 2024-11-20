export const fetchNewsStories = async () => {
	const allPostFiles = import.meta.glob('/src/routes/news/stories/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata }: any = await resolver();
			const postPath = path.replace('/src/routes/news/stories/', '/news/').replace('.md', '');

			return {
				meta: metadata,
				path: postPath,
                number: 0
			};
		})
	);

    // remove unpublished posts
    const publishedPosts = allPosts.filter(post => post.meta.published == 'true');
	return publishedPosts;
};

export const fetchSupportDocumentation = async () => {
	const allPostFiles = import.meta.glob('/src/routes/support/documentation/articles/*/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata }: any = await resolver();
			const postPath = path.replace('/src/routes/support/documentation/articles/', '/support/documentation/').replace('.md', '');
			return {
				meta: metadata,
				path: postPath,
                number: 0
			};
		})
	);

    // remove unpublished posts
    const publishedPosts = allPosts.filter(post => post.meta.published == 'true');
	return publishedPosts;
};