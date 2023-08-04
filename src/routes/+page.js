import { error } from '@sveltejs/kit';

export async function load({ fetch }) {
	const res = await fetch('/api');

	if (res.ok) return { users: await res.json() };
	throw error(500);
}
