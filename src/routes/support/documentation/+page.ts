export const load = async ({ fetch }) => {
	const response = await fetch(`/api/support/documentation`);
	const posts = await response.json();

	return {
		posts
	};
};