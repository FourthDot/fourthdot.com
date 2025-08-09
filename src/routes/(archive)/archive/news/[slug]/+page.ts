import type { PageLoad } from './$types';

// Use a glob import to get all stories at build time.
// The path is relative to the file where this code is.
const storyModules = import.meta.glob('../stories/*.md');

export const load: PageLoad = async ({ params }) => {
	// Use the params.slug to construct the key for the glob map.
	// The key must match the path used in the glob.
	const storyPath = `../stories/${params.slug}.md`;

	// Check if the story exists in the map
	if (!storyModules[storyPath]) {
		// Handle 404 error if the file doesn't exist
		throw new Error('Story not found'); 
	}

	// Dynamically import the correct story from the map.
	const post = await storyModules[storyPath]();
	const { title, date, category, description } = post.metadata;
	const Content = post.default;

	return {
		Content,
		title,
		date,
        category,
        description
	};
};