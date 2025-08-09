export const load = async ({ fetch }) => {
	const response = await fetch(`/archive/api/support/documentation`);
	const posts = await response.json();

	return {
		posts
	};
};