<script>
	import { onMount } from 'svelte';
	import pages from '$lib/pages.mjs';

	export const title = '37th Swiss Juggling Convention Winterthur';
	export let data;
	let lang, page, nav, prev, next, pageTitle,htmlTitle;
	$: lang = data.lang;
	$: page = data.route.id.replace(/\/\[lang\]\/?/, '');
	let arrow_left_visible = false;
	let arrow_right_visible = false;

	$: {
		const pageIdx = pages.findIndex((p) => p.page == page);
		prev = pageIdx > 0 ? pages[pageIdx - 1] : undefined;
		next = pageIdx < pages.length - 1 ? pages[pageIdx + 1] : undefined;
		pageTitle = '';
		if (pageIdx >= 0)
			pageTitle = pages[pageIdx][lang] ? pages[pageIdx][lang] : pages[pageIdx]['de'];
		htmlTitle = title + (pageTitle ? ' - ' + pageTitle : '');
	}

	function navscroll(e) {
		arrow_left_visible = nav.scrollLeft > 0;
		arrow_right_visible = nav.scrollLeft < nav.scrollWidth - nav.clientWidth;
	}
	onMount(() => {
		navscroll();
	});
</script>

<style>
	:global(html),:global(body) { height:100%; padding:0; margin:0; font-family: 'Open Sans', Helvetica, Arial, sans-serif; background:#f8f8f8; font-size:18px }
	:global(html) { overflow-y:scroll; }
	#container { margin:0 auto; max-width:70em; background:#fff; padding:0.5em }
	nav, .navlinks { background-color:#f0b045; padding:0.5em }
	nav a, .navlinks a { display:block; text-decoration:none; color:#444; padding:0.5em }
	nav .language a  { display:inline }
	nav a.active { background-color:rgba(255,255,255,0.6); font-weight:bold }
	nav a:hover, .navlinks a:active  { background-color:rgba(255,255,255,0.9) }

	.logo { text-align: center }
	.logo img { width: 100%; max-width:14em }

	h1 { display: none }
	.arrow { display:none }

	@media (max-width:42em) {
		.arrow.visible { display:block;  }
		.arrow { position:absolute; background:#f0b045; cursor:pointer }
		.arrow.left  { left: 0.5em }
		.arrow.right { right:0.5em }

		.arrow.left.fade  { left:  2.2em; background:linear-gradient(to right, rgba(240,176,69,1), rgba(240,176,69,0)) }
		.arrow.right.fade { right: 2.2em; background:linear-gradient(to left, rgba(240,176,69,1), rgba(240,176,69,0)) }

		nav { overflow-x:auto; display:flex; padding:0.5em; white-space: nowrap }
		nav p { display:flex; padding:0; margin:0; margin-right:1em }

		/* TODO: on small screens we should add arrows to indicate more content if we have more pages */

		/*
		nav { position:fixed; bottom:0; width:100%; margin:-0.5em; line-height:2 }
		#main { margin-bottom:5em }
		 */

		.navlinks { display:grid; grid-template-columns:1fr 1fr; margin-top: 3em }
		.navlinks a.prev { text-align:right }
		.navlinks a.next { grid-column-start:2 }
	}

	@media (min-width:42em) {
		.logo, nav { position:absolute; width:14em }
		.logo { text-align: left }
		h1 { display: block; margin:auto; text-align:center; min-height:3em; background-color:#f0b045 }
		nav { position:absolute; top:14em; margin-left:2em; width:9em }
		#main { margin-left:14em; padding-left:1em; min-height:35em }
		.navlinks { display:none }
	}
</style>

<svelte:head>
	<meta http-equiv="Language" content="de">

	<title>{htmlTitle}</title>
	<meta name="description" content="{htmlTitle}" />

	<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Open+Sans">
</svelte:head>

<div id="container" class="index">

	<div class=logo>
		<a href="/{lang}" class=logo><img src="/img/logo504.png" alt="Logo {title}"></a>
	</div>

	<nav bind:this={nav} on:scroll={navscroll}>
		<a
			class="arrow left"
			class:visible={arrow_left_visible}
			on:click|preventDefault={() => { nav.scrollLeft -= nav.clientWidth / 2}}
			href={null}
		>&nbsp;&lt;</a>
		<a
			class="arrow left fade"
			class:visible={arrow_left_visible}
			href={null}
		>&nbsp;</a>
		<a
			class="arrow right fade"
			class:visible={arrow_right_visible}
			href={null}
		>&nbsp;</a>
		<a
			class="arrow right"
			class:visible={arrow_right_visible}
			on:click|preventDefault={() => { nav.scrollLeft += nav.clientWidth / 2}}
			href={null}
		>&gt;&nbsp;</a>

		<p class=language>
			<a class:active={lang=='de'} href="{data.route.id.replace(/\[lang\]/, 'de')}">DE</a>
			<a class:active={lang=='en'} href="{data.route.id.replace(/\[lang\]/, 'en')}">EN</a>
		</p>
		{#each pages as p}
			<a class:active={page == p.page} href="/{lang}/{p.page}">{p[lang] ? p[lang] : p['de']}</a>
		{/each}
	</nav>

	<div id="main">
		<h1>{title}</h1>
		<slot></slot>

		<p class=navlinks>
			{#if prev}
				<a class=prev href="/{lang}/{prev.page}">
					&lt; {prev[lang] ? prev[lang] : prev['de']}
				</a>
			{/if}
			{#if next}
				<a class=next href="/{lang}/{next.page}">
					{next[lang] ? next[lang] : next['de']} &gt;
				</a>
			{/if}
		</p>
	</div>

</div>
