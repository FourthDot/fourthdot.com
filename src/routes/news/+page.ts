export const load = async ({ fetch }) => {
	const response = await fetch(`/api/news/stories`);
	const posts = await response.json();

	return {
		posts
	};
};