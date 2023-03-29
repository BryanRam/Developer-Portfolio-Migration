<script lang="ts">
	import {onMount} from "svelte";
	import ProjectCard from '$lib/components/project-card.svelte';
	import type { PageData } from './$types';
	export let data: PageData;

	const { projects } = data.props;
	const { authors } = data.props;
	let projectContainer : any;
	
	onMount(() => {
		 projectContainer = document.getElementById("project-container");
		 console.log("Mounted PC");
		 console.log(projectContainer);
	});
	
	let sProject : any;
	let isDefault = true;
	let projectSelected = false;

	let projectScaled = "mr-6 individual-project-scale";
	let projectUnScaled = "mr-6 individual-project";

	const randomColor1 = "#"+((1<<24)*Math.random()|0).toString(16);
	const randomColor2 = "#"+((1<<24)*Math.random()|0).toString(16);

	onMount(() => {
		const root = document.querySelector(':root');
		console.log("root");
		console.log(root);

		var rootStyle = getComputedStyle(root as Element);
		//rootStyle.setProperty('--grad1', randomColor1);
		//rootStyle.setProperty('--grad2', randomColor2);

		console.log(rootStyle);

	});
	
	function selectProject(slug: any)
	{
		console.log(slug);

		console.log(projects);

		sProject = projects.find((arr: { slug: any; }) => arr.slug === slug);

		console.log("slug: " + slug + " SProject:");
		console.log(sProject);

		isDefault = false;
		projectContainer?.classList.add("individual-project-scale");
		//projectContainer?.classList.remove("individual-project-scale");
		//projectSelected = true;
	}

	function selectHome()
	{
		sProject = null;

		isDefault = true;
		//projectSelected = false;
	}
</script>

<svelte:head>
	<title>My Portfolio project</title>
</svelte:head>

<!-- <h1 class="font-bold text-center mb-20 text-5xl">Welcome to my Portfolio</h1> -->
<div style="/*max-height: 791px;*/">

	<div class="relative">
	<svg class="absolute" width="300" height="300" data-name="corner-top-left" xmlns="http://www.w3.org/2000/svg" style="pointer-events:none; top:0;left:0;transition:all ease-in-out;" data-inlinesvg=".inlineSvgFile-1"><defs><linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0" style="stop-color:{randomColor1};transition: all 0.3 ease-in-out;"></stop><stop offset=".5" style="stop-color:{randomColor2};transition: all 0.3 ease-in-out;"></stop><stop offset="1" style="stop-color:{randomColor1};transition: all 0.3 ease-in-out;"></stop></linearGradient></defs><path fill="url('#grad1')" d="M8 0h292l-20 20H25a5 5 0 0 0-5 5v255L0 300V8a8 8 0 0 1 8-8Z"></path></svg>
	</div>

	<div class="p-8">
		<div class="flex flex-col justify-items-center">
			<header class="mb-32 ml-4 mt-4 flex flex-row">
				<div class="w-4/5">
				<p on:click={selectHome}>Portfolio and Blog</p>
				</div>
				<div class="w-1/5">
					<ul class="flex gap-4"> 
						<li class="email"> <a aria-label="email" data-inlinesvg=".inlineSvgFile-7"><svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="857.333" height="620" viewBox="0 0 643 465"><path d="M39 3.4C31.6 5.1 27.5 7 21.4 11.6 11.2 19.3 5 29.2 3 41.1c-.8 4.5-1 61.4-.8 195.9.3 185.8.3 189.6 2.3 195 4.5 12.6 15.8 24.2 28.2 29.1 5 1.9 8.2 2.3 23.1 2.7l17.2.4V292.6c0-94.4.3-171.6.6-171.6.4 0 56.5 39.8 124.6 88.5l124 88.6 123.6-88.3c67.9-48.6 123.9-88.5 124.4-88.6.4-.2.8 76.8.8 171.2V464h15.3c16.2 0 21.9-1 30.3-5.1 11.3-5.6 21.7-19.2 24.3-31.7.8-3.8 1.1-59.8 1.1-194.5 0-166.8-.2-190-1.5-195.2-4.7-17.7-19.3-31.2-37.6-34.6-5.4-1-7-.9-9.2.2-1.4.8-62.9 44.7-136.6 97.6-73.7 53-134.5 96.3-135 96.3-.6 0-60.8-42.8-133.8-95.2C115.2 49.4 54 5.6 52.1 4.3c-3.8-2.6-5.2-2.7-13.1-.9z"></path></svg></a> </li> 
						<li class="github"> <a aria-label="github" data-inlinesvg=".inlineSvgFile-6"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120.78 117.79"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M60.39 0A60.39 60.39 0 0 0 41.3 117.69c3 .56 4.12-1.31 4.12-2.91 0-1.44-.05-6.19-.08-11.24C28.54 107.19 25 96.42 25 96.42c-2.75-7-6.71-8.84-6.71-8.84-5.48-3.75.41-3.67.41-3.67 6.07.43 9.26 6.22 9.26 6.22 5.39 9.23 14.13 6.57 17.57 5 .55-3.9 2.11-6.56 3.84-8.07C36 85.55 21.85 80.37 21.85 57.23A23.35 23.35 0 0 1 28.08 41c-.63-1.52-2.7-7.66.58-16 0 0 5.07-1.62 16.61 6.19a57.36 57.36 0 0 1 30.25 0C87 23.42 92.11 25 92.11 25c3.28 8.32 1.22 14.46.59 16a23.34 23.34 0 0 1 6.21 16.21c0 23.2-14.12 28.3-27.57 29.8 2.16 1.87 4.09 5.55 4.09 11.18 0 8.08-.06 14.59-.06 16.57 0 1.61 1.08 3.49 4.14 2.9A60.39 60.39 0 0 0 60.39 0Z"></path><path class="cls-2" d="M22.87 86.7c-.13.3-.6.39-1 .19s-.69-.61-.55-.91.61-.39 1-.19.69.61.54.91ZM25.32 89.43c-.29.27-.85.14-1.24-.28a.92.92 0 0 1-.17-1.25c.3-.27.84-.14 1.24.28s.47 1 .17 1.25ZM27.7 92.91c-.37.26-1 0-1.35-.52s-.37-1.18 0-1.44 1 0 1.35.51.37 1.19 0 1.45ZM31 96.27a1.13 1.13 0 0 1-1.59-.27c-.53-.49-.68-1.18-.34-1.54s1-.27 1.56.23.68 1.18.33 1.54ZM35.46 98.22c-.15.47-.82.69-1.51.49s-1.13-.76-1-1.24.82-.7 1.51-.49 1.13.76 1 1.24ZM40.4 98.58c0 .5-.56.91-1.28.92s-1.3-.38-1.31-.88.56-.91 1.29-.92 1.3.39 1.3.88ZM45 97.8c.09.49-.41 1-1.12 1.12s-1.35-.17-1.44-.66.42-1 1.12-1.12 1.35.17 1.44.66Z"></path></g></g></svg></a> </li> 
						<li class="linkedin"><a aria-label="linkedin" data-inlinesvg=".inlineSvgFile-3" href=""><svg height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
							viewBox="0 0 455 455" xml:space="preserve">
					   <g>
						   <path style="fill-rule:evenodd;clip-rule:evenodd;" d="M246.4,204.35v-0.665c-0.136,0.223-0.324,0.446-0.442,0.665H246.4z"/>
						   <path style="fill-rule:evenodd;clip-rule:evenodd;" d="M0,0v455h455V0H0z M141.522,378.002H74.016V174.906h67.506V378.002z
								M107.769,147.186h-0.446C84.678,147.186,70,131.585,70,112.085c0-19.928,15.107-35.087,38.211-35.087
							   c23.109,0,37.31,15.159,37.752,35.087C145.963,131.585,131.32,147.186,107.769,147.186z M385,378.002h-67.524V269.345
							   c0-27.291-9.756-45.92-34.195-45.92c-18.664,0-29.755,12.543-34.641,24.693c-1.776,4.34-2.24,10.373-2.24,16.459v113.426h-67.537
							   c0,0,0.905-184.043,0-203.096H246.4v28.779c8.973-13.807,24.986-33.547,60.856-33.547c44.437,0,77.744,29.02,77.744,91.398V378.002
							   z"/>
					   </g>
					   </svg></a></li>
					   <li class="resume"><a aria-label="resume" data-inlinesvg=".inlineSvgFile-3" href="https://media.graphassets.com/CsozvxWJSAuZ1KcQvGfg">
						<svg height="800px" width="800px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 231.306 231.306" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 231.306 231.306">
							<g>
							  <path d="M229.548,67.743L163.563,1.757C162.438,0.632,160.912,0,159.32,0H40.747C18.279,0,0,18.279,0,40.747v149.813   c0,22.468,18.279,40.747,40.747,40.747h149.813c22.468,0,40.747-18.279,40.747-40.747V71.985   C231.306,70.394,230.673,68.868,229.548,67.743z M164.32,19.485l47.5,47.5h-47.5V19.485z M190.559,219.306H40.747   C24.896,219.306,12,206.41,12,190.559V40.747C12,24.896,24.896,12,40.747,12H152.32v60.985c0,3.313,2.687,6,6,6h60.985v111.574   C219.306,206.41,206.41,219.306,190.559,219.306z"/>
							  <path d="m103.826,52.399c-5.867-5.867-13.667-9.098-21.964-9.098s-16.097,3.231-21.964,9.098c-5.867,5.867-9.098,13.667-9.098,21.964 0,8.297 3.231,16.097 9.098,21.964l61.536,61.536c7.957,7.956 20.9,7.954 28.855,0 7.955-7.956 7.955-20.899 0-28.855l-60.928-60.926c-2.343-2.343-6.143-2.343-8.485,0-2.343,2.343-2.343,6.142 0,8.485l60.927,60.927c3.276,3.276 3.276,8.608 0,11.884s-8.607,3.276-11.884,0l-61.536-61.535c-3.601-3.601-5.583-8.388-5.583-13.479 0-5.092 1.983-9.879 5.583-13.479 7.433-7.433 19.525-7.433 26.958,0l64.476,64.476c11.567,11.567 11.567,30.388 0,41.955-5.603,5.603-13.053,8.689-20.977,8.689s-15.374-3.086-20.977-8.689l-49.573-49.574c-2.343-2.343-6.143-2.343-8.485,0-2.343,2.343-2.343,6.142 0,8.485l49.573,49.573c7.87,7.87 18.333,12.204 29.462,12.204s21.593-4.334 29.462-12.204 12.204-18.333 12.204-29.463c0-11.129-4.334-21.593-12.204-29.462l-64.476-64.476z"/>
							</g>
						  </svg>
					   </a></li>
					</ul>
				</div>
			</header>

			<div class="flex flex-row mb-40 items-end pl-12 gap-15 mx-12">
				<div class="w-3/4">
					

					{#if (isDefault)}
					<!-- <p>Test</p> -->
					{#each authors as { name, intro, picture: { url } }}
						<div class="flex">
							<div class="{isDefault ? projectScaled : projectUnScaled }">
								<div id="welcome"> <svg id="welcome_svg" xmlns="http://www.w3.org/2000/svg" width="605.44" height="122.24" viewBox="0 0 1892 382" data-inlinesvg=".inlineSvgFile-7"><path id="welcome_path" style="stroke-dasharray: 9541.93, 9541.93; stroke-dashoffset: 7156; transition: fill 1s ease-in-out 0s; stroke: rgb(204, 204, 204); fill: rgb(204, 204, 204);" stroke="none" stroke-miterlimit="10" stroke-width="2" d="M673 52h13v286h-13V52ZM21 68h15l11.67 35 25.66 76 31.33 92L121 319c1.18-7.67 5.08-16.57 7.66-24l14.65-42 44.36-127 15.75-45c3.77-10.08 3.22-12.74 9.6-12.98 10.02-.39 8.61 1.39 13.32 14.98l15.33 44 40.99 117L309 319c1.13-7.32 8.11-26.23 10.95-34l14-41 10.74-32 29.98-87 14.66-43c4.29-12.86 3.55-13.88 10.67-14h8l-13.69 40-38.65 113-27.33 80L316 338h-7c-8.14-.05-7.4-.24-12.33-15l-15.34-44-39.99-114L214 87c-1.18 7.63-4.52 14.73-7 22l-15 43-30.31 87-15.27 44-12.75 37c-1.05 3.14-4.63 14.5-6.51 16.4-1.95 1.98-9.36 2.07-11.94 1.31-3.99-1.18-6.58-12.8-7.89-16.71l-16.66-49L21 68Zm570 230c2.38 2.41 7.16 6.17 5.83 10-.99 2.86-6.43 7.08-8.83 9.13-8.01 6.86-18.98 13.19-29 16.54-31.99 10.67-70.69 6.18-98-14.15-17.58-13.08-30.45-33.18-35.5-54.52-3.02-12.77-2.65-24.03-2.5-37 .31-26.02 14.43-53.95 34-70.7 29.18-24.98 77.82-27.22 110-6.76 15.48 9.85 25.23 22.2 33.24 38.46 8.78 17.81 9.76 31.68 9.76 51H457l-22 1 3.5 22c2.11 8.93 6.03 17.29 10.94 25 22.1 34.72 69.57 48.39 107.56 33.54 20.65-8.08 22.5-15.31 34-23.54Zm320-1c12.51 5.34 10.73 10.47 1.91 18.57-8.18 7.52-16.65 12.67-26.91 16.83-27.39 11.09-63.18 8.47-89-5.71-56.7-31.15-64.76-116.41-20.96-161.69 16.95-17.52 41.58-27.96 65.96-28h13c17.15.2 38.68 7.29 52 18.09 3.48 2.82 13.82 11.03 13.1 15.87-.31 2.1-2.54 3.96-4.12 5.19-1.79 1.39-2.96 1.94-4.98 2.85-16.12-22.52-41.49-30.31-68-30-13.46.16-31.78 6.35-43 13.7-48.27 31.58-51.35 106.37-9 144.13 32.26 28.76 94.69 27.83 120-9.83Zm130-159.58c31.95-3.9 65.11 6.25 86.83 30.58 14.22 15.93 24.14 40.56 24.17 62v17c-.32 26.84-16.35 57.76-38 73.41-21.5 15.54-41.23 18.89-67 18.59-7.87-.1-18.5-2.52-26-5-31.73-10.49-54.2-35.62-62.1-68-3.13-12.81-3.05-22.06-2.9-35 .18-14.98 5.27-32.93 12.51-46 12.61-22.75 33.41-38.61 58.49-45.25l14-2.33ZM1229 184c2.81-11.94 13.43-23.44 23-30.63 20.75-15.58 38.22-16.66 63-16.37 10.93.13 25.57 4.26 35 9.75 11.55 6.71 21.12 16.99 26.56 29.25l5.44 14c3.84-16.33 17.18-31.14 31-39.95 20.33-12.95 36.95-13.32 60-13.05 21.62.26 42.69 11.59 55.22 29 14.93 20.75 13.78 43.98 13.78 68v104h-13V215c-.03-18.87-8.14-40.46-23-52.53-21.85-17.76-59.06-17.22-83-3.96-7.55 4.19-14.03 9.9-19.56 16.49-19.32 23.02-18.44 47.97-18.44 76v87h-13V221c-.03-17.84-4.92-39.43-17.32-52.83-19.51-21.09-55.03-24.08-80.68-13.72-11.39 4.6-21.2 12.02-28.91 21.55-18.09 22.38-17.09 46.16-17.09 73v89h-13V138h13v29l1 17Zm542 114c2.39 2.42 7.16 6.17 5.83 10-.91 2.65-6.56 7.66-8.83 9.56-8.97 7.53-18.99 12.76-30 16.58-30.89 10.72-70.81 4.63-97-14.9-48.89-36.45-51.28-121.31-5-160.94 14.53-12.44 35.76-21.21 55-21.3h13c8.96.11 17.63 2.32 26 5.31 23.27 8.31 40.35 24.18 50.69 46.69 7.74 16.84 10.31 32.6 10.31 51h-175c.03 34.99 20.14 67.24 53 80.55 13.99 5.67 25.24 6.47 40 6.45 15.51-.02 33.42-5.67 46-14.78l16-14.22Zm7-69c-.24-26.58-16.1-55.62-39-69.24-24.94-14.85-59.06-14.85-84 0-18.23 10.85-30.98 29.82-36.11 50.24l-2.89 19h162Zm-1180 0c-2.27-28.02-15.25-54.79-40-69.55-29.57-17.64-72.11-13.53-96.96 10.64-15.37 14.94-24.57 37.54-25.04 58.91h162Zm445-79.7c-32.04 5.95-54.87 20.41-67.55 51.7-4.06 10.03-6.4 24.18-6.45 35-.18 39.89 18.04 74.6 58 86.98 5.76 1.78 15.05 3.95 21 4.02 18.01.21 32.87-1.63 49-10.51 49.02-27.01 55.84-102.96 18.71-142.4-18.76-19.93-46.02-27.44-72.71-24.79Zm799 165.55c4.74-1.3 9.69-1.39 13.67 1.95 7.18 6.01 5.14 18.08-3.67 21.46-14.63 5.61-25.63-14.82-10-23.41Z"></path></svg> </div>
								
								<span class="main-message">
									<h2 class="text-3xl mb-4 font-bold tracking-wider">{name}</h2>
									<p class="text-xl mb-4">{intro}</p>
								</span>
							</div>

							<!-- <img class="mask mask-squircle h-48" src={url} alt={name} /> -->
						</div>
					{/each}
					{:else}
						<div class="flex">
							{#each projects as { name, slug, sourceCode }}
							<div id="project-container" class="{sProject.slug === slug ? projectScaled : projectUnScaled}">
								
								
								<span class="main-message">
									<div class="">
										<h2 class="text-3xl mb-4 font-bold tracking-wider">{name}</h2>
										<!-- <p class="text-xl mb-4">{sProject.description}</p> -->
										<button class="project-link"><a href="/projects/{slug}"> View </a></button>

										<button class="project-link"><a href="{sourceCode}"> Source </a></button>
									</div>
								</span>
							</div>
							{/each}
							
						</div>
					{/if}
					
				</div>
				<div class="flex flex-col w-1/4 pr-12">
					<h2 class="my-8" style="font-size:30px;font-weight:100;">Projects</h2>
					<!-- <div class="project-wrapper before:bg-gradient-to-r before:from-[{randomColor1}] before:via-[{randomColor2}] before:to-[{randomColor1}]
					after:bg-gradient-to-r after:from-[{randomColor2}] after:via-[{randomColor1}] after:to-[{randomColor2}]"> -->
					<div class="project-wrapper">
						<div>
						{#each projects as { name, slug }}
						<!-- <a class="mb-3" href="/projects/{slug}"><p>{name}</p></a>		 -->
						<a class="mb-3" on:click={() => selectProject(slug)}><span>{name}</span></a>		
						{/each}
						</div>
					</div>
				</div>
			</div>

			<div class="absolute" style="bottom:70px;right:70px;">
				<p>
					Copyright &copy; {`${new Date().getFullYear()}`} - All right reserved by Robin Lee
				</p>
			</div>

		</div>

		<div class="relative"> <svg class="absolute" width="300" height="300" data-name="corner-bottom-right" xmlns="http://www.w3.org/2000/svg" style="pointer-events:none; right:0; bottom:0;" data-inlinesvg=".inlineSvgFile-6"><defs><linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0" style="stop-color:{randomColor1};transition: all 0.3 ease-in-out;"></stop><stop offset=".5" style="stop-color:{randomColor2};transition: all 0.3 ease-in-out;"></stop><stop offset="1" style="stop-color:{randomColor1};transition: all 0.3 ease-in-out;"></stop></linearGradient></defs><path fill="url('#grad2')" d="M292 300H0l20-20h255a5 5 0 0 0 5-5V20l20-20v292a8 8 0 0 1-8 8Z"></path></svg> </div>
	</div>

</div>




<!-- {#each authors as { name, intro, picture: { url } }}
	<div class="flex mb-40 items-end">
		<div class="mr-6">
			<h2 class="text-3xl mb-4 font-bold tracking-wider">{name}</h2>
			<p class="text-xl mb-4">{intro}</p>
		</div>

		<img class="mask mask-squircle h-48" src={url} alt={name} />
	</div>
{/each} -->

<!-- <div class="grid gap-10 md:grid-cols-4 md:px-10 lg:grid-cols-6 lg:-mx-52">
	{#each projects as { name, slug, description, image }}
		<ProjectCard {name} {description} url={image[0].url} {slug} />
	{/each}
</div> -->
