<script>
	export const title = '37th Swiss Juggling Convention Winterthur';
	export let data;
	let lang, page;
	$: lang = data.lang;
	$: page = data.route.id.replace(/\/\[lang\]/, '');
</script>

<style>
	:global(html),:global(body) { height:100%; padding:0; margin:0; font-family: 'Open Sans', Helvetica, Arial, sans-serif; background:#f8f8f8; font-size:18px }
	:global(html) { overflow-y:scroll; }
	#container { margin:0 auto; max-width:70em; background:#fff; padding:0.5em }
	nav { background-color:#f0b045; padding:0.5em }
	nav a { display:block; text-decoration:none; color:#444; padding:0.5em }
	nav .language a  { display:inline }
	nav a:hover, nav a.active  { background-color:#fff }
	nav a.active { font-weight:bold }

	.logo { text-align: center }
	.logo img { width: 100%; max-width:14em }

	h1 { display: none }

	@media (max-width:34em) {
		nav { margin-top:2em; padding:1em }
		nav a, nav p { display:inline }
	}

	@media (min-width:34em) {
		.logo, nav { width:14em }
		h1 { display: block; margin:auto; text-align:center; min-height:3em; background-color:#f0b045 }
		nav { position:absolute; top:14em; margin-left:2em; width:9em }
		#main { position:relative; top:-14em; margin-left:14em; padding-left:1em; min-height:35em }
	}
</style>

<svelte:head>
	<meta http-equiv="Language" content="de">

	<title>{title}</title>
	<meta name="description" content="{title}" />

	<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Open+Sans">
</svelte:head>

<div id="container" class="index">
	<div class=logo>
		<a href="/{lang}" class=logo><img src="/img/logo504.png" alt="Logo {title}"></a>
	</div>
	<div id="main">
		<h1>{title}</h1>
		<slot></slot>
	</div>
	<nav>
		<div class=bar>
			<p class=language>
				<a class:active={lang=='de'} href="{data.route.id.replace(/\[lang\]/, 'de')}">DE</a>
				<a class:active={lang=='en'} href="{data.route.id.replace(/\[lang\]/, 'en')}">EN</a>
			</p>

			<a class:active={page==''}          href="/{lang}/">Home</a>
			<a class:active={page=='/programm'} href="/{lang}/programm">Programm</a>
		</div>
	</nav>
</div>
