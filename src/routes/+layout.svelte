<script>
	import "../app.css";
</script>

<svelte:head>
	<title>UltiDo</title>
</svelte:head>

<div class="w-full h-20 bg-blue-100 flex items-center justify-center">
	<div class="flex flex-row justify-around w-60">
		<div> <a href="/auth">Auth</a></div>
		<div> <a href="/app">Main Page</a></div>
		<div> <a href="/">Home</a></div>
	</div>
</div>

<slot />
