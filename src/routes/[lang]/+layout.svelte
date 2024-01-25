<script>
	import { onMount } from 'svelte';
	import pages from '$lib/pages.mjs';

	export const title = '37th Swiss Juggling Convention Winterthur';
	export let data;
	let lang, page, prev, next, pageTitle, htmlTitle;
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
</script>

<style>
	:root { --text_color:#444 }
	:global(html),:global(body) { height:100%; padding:0; margin:0; font-family: 'Open Sans', Helvetica, Arial, sans-serif; background:#f8f8f8; font-size:18px }
	:global(html) { overflow-y:scroll; }
	#container { margin:0 auto; max-width:70em; background:#fff; padding:0.5em }
	nav, .navlinks { background-color:#f0b045; padding:0.5em }
	nav a, .navlinks a { display:block; text-decoration:none; color:var(--text_color); padding:0.5em }
	nav .language a  { display:inline }
	nav a.active { background-color:rgba(255,255,255,0.6); font-weight:bold }
	nav a:hover, .navlinks a:active  { background-color:rgba(255,255,255,0.9) }

	.navbar {
		box-shadow: 1px 1px 5px 0px gray;
		position: sticky;
		top: 0;
		width: 100%;
	}

	.hamb {
		position:absolute;
		right: 0;
		cursor: pointer;
		float: right;
		padding: 36px 10px;
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
	#hamb-state:checked ~ nav { max-height: 100% }
	#hamb-state:checked ~ .hamb .hamb-line { background: transparent }
	#hamb-state:checked ~ .hamb .hamb-line::before { transform: rotate(-45deg); top:0 }
	#hamb-state:checked ~ .hamb .hamb-line::after { transform: rotate(45deg); top:0 }

	.logo { text-align: center }
	.logo img { width: 100%; max-width:14em }

	h1 { display: none }
	.arrow { display:none }

	@media (max-width:42em) { /* Small screens */
		.arrow.visible { display:block;  }
		.arrow { position:absolute; background:#f0b045; cursor:pointer }
		.arrow.left  { left: 0.5em }
		.arrow.right { right:0.5em }

		.arrow.left.fade  { left:  2.2em; background:linear-gradient(to right, rgba(240,176,69,1), rgba(240,176,69,0)) }
		.arrow.right.fade { right: 2.2em; background:linear-gradient(to left, rgba(240,176,69,1), rgba(240,176,69,0)) }

		#main { margin-bottom:5em }
		nav {
				overflow: hidden;
				max-height: 3em;
				transition: max-height .5s ease-out; /* TODO: fix this transition.. */
		}

		.navlinks { display:grid; grid-template-columns:1fr 1fr; margin-top: 2em }
		.navlinks a.prev { text-align:right }
		.navlinks a.next { grid-column-start:2 }

	}

	@media (min-width:42em) { /* wide screens */
		.logo, .navbar { position:absolute; width:14em }
		.hamb { display:none }
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

	<header class=navbar>
			<!-- Hamburger icon -->
			<input type="checkbox" id="hamb-state"/>
			<label class="hamb" for="hamb-state"><span class="hamb-line"></span></label>

			<nav>
				<p class=language>
					<a class:active={lang=='de'} href="{data.route.id.replace(/\[lang\]/, 'de')}">DE</a>
					<a class:active={lang=='en'} href="{data.route.id.replace(/\[lang\]/, 'en')}">EN</a>
				</p>
				{#each pages as p}
					<a class:active={page == p.page} href="/{lang}/{p.page}">{p[lang] ? p[lang] : p['de']}</a>
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
