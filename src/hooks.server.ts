import { redirect } from '@sveltejs/kit';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {

	// Your general redirect logic
	if (event.url.pathname !== '/' && !event.url.pathname.startsWith('/archive')) {
		const newPath = '/archive' + event.url.pathname;
		throw redirect(301, newPath);
	}

	return resolve(event);
};