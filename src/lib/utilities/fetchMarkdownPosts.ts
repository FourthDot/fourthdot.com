export const fetchNewsStories = async () => {
	const allPostFiles = import.meta.glob('/src/routes/*/archive/news/stories/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);
	// console.log(iterablePostFiles);
	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata }: any = await resolver();
			const postPath = path.replace('/src/routes/(archive)/archive/news/stories/', '/archive/news/').replace('.md', '');

			return {
				meta: metadata,
				path: postPath,
                number: 0
			};
		})
	);

    // remove unpublished posts
    const publishedPosts = allPosts.filter(post => post.meta.published == 'true');
    console.log(publishedPosts);
	return publishedPosts;
};

export const fetchSupportDocumentation = async () => {
	const allPostFiles = import.meta.glob('/src/routes/*/archive/support/documentation/articles/*/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);
	console.log(iterablePostFiles);
	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata }: any = await resolver();
			const postPath = path.replace('/src/routes/(archive)/archive/support/documentation/articles/', '/archive/support/documentation/').replace('.md', '');
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