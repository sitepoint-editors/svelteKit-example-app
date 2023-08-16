<script>
	export let data;
</script>

<main>
	{#each data.users as { avatar, lastName }}
		<a data-sveltekit-preload-data="hover" href={`/${lastName}`} class="box">
			<img src={avatar} alt={lastName} />
			<h2>{lastName}</h2>
		</a>
	{/each}
</main>

<style>
	main {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
	.box {
		padding: 0.25rem;
		margin: 1.5rem;
		color: salmon;
		box-shadow: 4px 5px 11px 2px lightgray;
	}
	.box:hover {
		box-shadow: 4px 5px 11px 10px lightgray;
	}
	img {
		width: 15rem;
		object-fit: contain;
	}
</style>
