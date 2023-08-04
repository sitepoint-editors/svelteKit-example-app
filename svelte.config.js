import node from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
export default {
	kit: {
		// By default, `npm run build` will create a standard Node app.
		// You can create optimized builds for different platforms by
		// specifying a different adapter
		adapter: node()
	}
};
