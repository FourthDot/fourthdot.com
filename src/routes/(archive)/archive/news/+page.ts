export const load = async ({ fetch }) => {
	console.log("Loading Stories")
	const response = await fetch(`/archive/api/news/stories`);
	const posts = await response.json();

	return {
		posts
	};
};