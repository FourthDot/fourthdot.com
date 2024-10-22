import { fetchMarkdownPosts } from '$lib/utilities/fetchMarkdownPosts';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const allPosts = await fetchMarkdownPosts();

    const sortedPosts = allPosts.sort((a, b) => {
    
        const dateA = new Date(a.meta.date).getTime();
        const dateB = new Date(b.meta.date).getTime();
    
        return dateB - dateA;
    });

    for (let i = 0; i < sortedPosts.length; i++) {
        sortedPosts[i].number = sortedPosts.length - i;
    }

	return json(sortedPosts);
};