import { error } from '@sveltejs/kit';

export async function load({ fetch, params }) {
	const { lastName } = params;
	const res = await fetch(`/api/${lastName}`);

	if (res.ok) return { user: await res.json() };
	throw error(500, 'Could not load data');
}
