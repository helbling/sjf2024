<script>
	import { onMount } from 'svelte';
	import pages from '$lib/pages.mjs';

	export const title = '37th Swiss Juggling Convention Winterthur';
	export let data;
	let lang, page, prev, next, pageTitle, htmlTitle, hambState;
	const nPages = pages.length;
	$: lang = data.lang;
	$: page = data.route.id.replace(/\/\[lang\]\/?/, '');

	$: {
		const pageIdx = pages.findIndex((p) => p.page == page);
		prev = pageIdx > 0 ? pages[pageIdx - 1] : undefined;
		next = pageIdx < pages.length - 1 ? pages[pageIdx + 1] : undefined;
		pageTitle = '';
		if (pageIdx >= 0)
			pageTitle = pages[pageIdx][lang] ? pages[pageIdx][lang] : pages[pageIdx]['de'];
		htmlTitle = title + (pageTitle ? ' - ' + pageTitle : '');
	}

	function pageClick(e) {
		hambState.click();
	}
</script>

<style>
	:root { --text_color:#444; --signature_color:#f0b045; }
	:global(html),:global(body) { height:100%; padding:0; margin:0; font-family: 'Open Sans', Helvetica, Arial, sans-serif; background:#f8f8f8; font-size:18px }
	:global(html) { overflow-y:scroll; }
	:global(input:not([type='checkbox'])) {
		-webkit-appearance:none;
		-moz-appearance:none;
		appearance:none;
		line-height:2;
		font-size:1em;
		border:1px solid #888;
		border-radius:0.3em;
		-webkit-box-shadow: none;
		-moz-box-shadow: none;
		box-shadow: none;
		padding:0.5em 0.5em;
	}
	:global(input[type="submit"]) { background-color:var(--signature_color); color:var(--text_color); font-weight:bolder; font-family: 'Open Sans', Helvetica, Arial, sans-serif;  }
	:global(input[type="submit"]:hover) { background-color:#f9dfb5 }
	:global(input[type="checkbox"]) { height:1.5em; width:1.5em; padding:0.5em }

	#container { margin:0 auto; max-width:70em; background:#fff; padding:0.5em }
	nav, .navlinks { background-color:var(--signature_color); padding:0.5em }
	nav a, .navlinks a { display:block; text-decoration:none; color:var(--text_color); padding:0.5em }
	nav .language a  { display:inline }
	nav a.active { background-color:rgba(255,255,255,0.6); font-weight:bold }
	nav a:hover, .navlinks a:active  { background-color:rgba(255,255,255,0.9) }

	.navbar {
		box-shadow: 1px 1px 5px 0px gray;
		position: sticky;
		top: 0;
		width: 100%;
		z-index:1000;
	}

	.hamb {
		position:absolute;
		right: 0;
		cursor: pointer;
		float: right;
		padding: 1.6em 0.5em;
		width: 32px;
	}

	.hamb-line {
		background: var(--text_color);
		display: block;
		height: 2px;
		position: relative;
		width: 24px;
	}

	.hamb-line::before,
	.hamb-line::after {
		background: var(--text_color);
		content: '';
		display: block;
		height: 100%;
		position: absolute;
		transition: all .2s ease-out;
		width: 100%;
	}
	.hamb-line::before { top: 5px }
	.hamb-line::after  { top: -5px }

	#hamb-state { display: none }

	.logo { text-align: center }
	.logo img { width: 100%; max-width:14em }

	h1 { display: none }

	@media (max-width:42em) { /* Small screens */
		#main { margin-bottom:5em }
		nav {
				overflow: hidden;
				max-height: 2.4em;
				transition: all .2s ease-out; /* TODO: fix this transition.. */
		}
		nav .language { margin-top:0; margin-bottom: 1.2em }
		nav .language a  { display:inline-block }

		#hamb-state:checked ~ nav { max-height: calc(3em + var(--n-pages) * 2.5em) }

		#hamb-state:checked ~ .hamb .hamb-line { background: transparent }
		#hamb-state:checked ~ .hamb .hamb-line::before { transform: rotate(-45deg); top:0 }
		#hamb-state:checked ~ .hamb .hamb-line::after { transform: rotate(45deg); top:0 }

		.navlinks { display:grid; grid-template-columns:1fr 1fr; margin-top: 2em }
		.navlinks a.prev { text-align:right }
		.navlinks a.next { grid-column-start:2 }

	}

	@media (min-width:42em) { /* wide screens */
		.logo, .navbar { position:absolute; width:14em }
		.hamb { display:none }
		.logo { text-align: left }
		h1 { display: block; margin:auto; text-align:center; min-height:3em; background-color:var(--signature_color) }
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

	<header class=navbar>
			<!-- Hamburger icon -->
			<input type="checkbox" id="hamb-state" bind:this={hambState} />
			<label class="hamb" for="hamb-state"><span class="hamb-line"></span></label>

			<nav style="--n-pages: {nPages}">
				<p class=language>
					<a class:active={lang=='de'} href="{data.route.id.replace(/\[lang\]/, 'de')}">DE</a>
					<a class:active={lang=='en'} href="{data.route.id.replace(/\[lang\]/, 'en')}">EN</a>
				</p>
				{#each pages as p}
					<a class:active={page == p.page} href="/{lang}/{p.page}" on:click={pageClick}>{p[lang] ? p[lang] : p['de']}</a>
				{/each}
		</nav>

	</header>

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
