import { dev } from '$app/environment';
import { redirect, type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	if (dev && event.url.pathname.startsWith('/api')) {
		redirect(301, 'http://127.0.0.1:8000' + event.url.pathname);
	}

	return resolve(event);
};
