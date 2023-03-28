<script>
	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/components/footer.svelte';
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';
	import '../app.postcss';

	onMount(async () => {
		themeChange(false);
	});
</script>

<Navbar />

<main class="container max-w-7xl mx-auto px-4 mb-20 relative">
	<slot />
</main>

<Footer />
