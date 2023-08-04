<script>
	export let data;
</script>

<main>
	<h1>{data.user.firstName} {data.user.lastName}</h1>
	<div class="box">
		<img src={data.user.avatar} alt={data.user.astName} />
		<ul>
			<li>Title: {data.user.title}</li>
			<li>Phone: {data.user.phone}</li>
			<li>Email: {data.user.email}</li>
		</ul>
	</div>
</main>

<style>
	main {
		margin: 4rem;
		padding: 2rem;
		color: gray;
		justify-content: center;
		box-shadow: 4px 5px 11px 10px lightgray;
	}
	h1 {
		color: salmon;
	}
	.box {
		display: flex;
		font-size: 1.5rem;
	}
	img {
		width: 15rem;
		object-fit: contain;
		margin-right: 2rem;
	}
	li {
		margin-bottom: 1rem;
	}
</style>
