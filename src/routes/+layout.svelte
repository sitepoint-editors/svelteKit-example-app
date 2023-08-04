<script>
	import '../app.css';
</script>

<svelte:head>
	<meta name="robots" content="noindex" />
</svelte:head>

<nav>
	<a href=".">HOME</a>
	<a href="/about">ABOUT</a>
</nav>
<slot />

<style>
	nav {
		padding: 1rem;
		box-shadow: -1px 1px 11px 4px #898989;
	}
	a {
		text-decoration: none;
		color: gray;
		margin-right: 1rem;
	}
</style>
