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
<div class="wave-top">
	<svg
		width="1600"
		height="198"
		id="wave1"
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 1200 120"
		preserveAspectRatio="none"
	>
		<animate
			id="anim1"
			attributeName="height"
			attributeType="XML"
			from="100"
			to="150"
			begin="0s; anim2.end"
			dur="7s"
			fill="freeze"
		/>
		<animate
			id="anim2"
			attributeName="height"
			attributeType="XML"
			from="150"
			to="100"
			begin="anim1.end"
			dur="7s"
			fill="freeze"
		/>

		<path
			id="wave1"
			d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
			class="shape-fill"
		/>
	</svg>

	<!-- <svg xmlns="http://www.w3.org/2000/svg" width="1600" height="198">
		<defs>
			<linearGradient id="a" x1="50%" x2="50%" y1="-10.959%" y2="100%">
				<stop stop-color="#57BBC1" stop-opacity=".25" offset="0%" />
				<stop stop-color="#015871" offset="100%" />
			</linearGradient>
		</defs>
		<path
			fill="url(#a)"
			fill-rule="evenodd"
			d="M.005 121C311 121 409.898-.25 811 0c400 0 500 121 789 121v77H0s.005-48 .005-77z"
			transform="matrix(-1 0 0 1 1600 0)"
		/>
	</svg> -->
</div>

<div class="wave-bottom">
	<svg
		width="1600"
		height="198"
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 1200 120"
		preserveAspectRatio="none"
	>
		<animate
			id="anim3"
			attributeName="height"
			attributeType="XML"
			from="150"
			to="100"
			begin="0s; anim4.end"
			dur="7s"
			fill="freeze"
		/>
		<animate
			id="anim4"
			attributeName="height"
			attributeType="XML"
			from="100"
			to="150"
			begin="anim3.end"
			dur="7s"
			fill="freeze"
		/>

		<!-- <pattern id="bg" patternUnits="userSpaceOnUse" width="130" height="24"> -->
		<path
			d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
			class="shape-fill"
		/>
		<!-- </pattern> -->
	</svg>

	<!-- <svg xmlns="http://www.w3.org/2000/svg" width="1600" height="198">
		<defs>
			<linearGradient id="a" x1="50%" x2="50%" y1="-10.959%" y2="100%">
				<stop stop-color="#57BBC1" stop-opacity=".25" offset="0%" />
				<stop stop-color="#015871" offset="100%" />
			</linearGradient>
		</defs>
		<path
			fill="url(#a)"
			fill-rule="evenodd"
			d="M.005 121C311 121 409.898-.25 811 0c400 0 500 121 789 121v77H0s.005-48 .005-77z"
			transform="matrix(-1 0 0 1 1600 0)"
			class="shape-fill"
		/>
	</svg> -->
</div>

<main class="container max-w-7xl mx-auto px-0 xl:mb-20 relative pt-6">
	<slot />
</main>

<!-- <Footer /> -->
