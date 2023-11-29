<script>
	export const title = '37th Swiss Juggling Convention Winterthur';
	export let data;
	let lang, logo, page;
	$: lang = data.lang;
	$: page = data.route.id.replace(/\/\[lang\]/, '');
	logo = 1;
</script>

<style>
	:global(html),:global(body) { height:100%; padding:0; margin:0; font-family: 'Open Sans', Helvetica, Arial, sans-serif; background:#f8f8f8; }
	:global(html) { overflow-y:scroll; }
	#container { margin:0 auto; max-width:70em; background:#fff; padding:0.5em }
	nav        { float:left; width:14em}
	#logo      { width:14em }
	#main      { margin-left:14em; padding-left:1em; min-height:35em }
	h1 { margin:auto; text-align:center; min-height:3.5em; background-color:#efb043 }
	.right { float:right }
	.nav_begin { margin-bottom:0 }
	.nav_end { clear:both }
	nav a        { display:block; text-decoration:none; color:#444; padding:0.5em }
	nav .logo a, nav .language a  { display:inline }
	nav a:hover, nav a.active  { background-color:#eee }
	nav a.active { font-weight:bold }
	nav .logo { margin-top:-1em; margin-bottom:2em }

	table { margin-top:1em }
	td    { vertical-align:top }

	#mapcontainer { width:100%; height:800px;border:1px solid #888 }
	table.ok th { text-align:left; padding-right:1em}
	.gelaende table th { text-align:left; padding-right:1em}

	table.workshops th { text-align:left; padding-right:1em}
	table.workshops td { padding-right:1em}
	table.workshops td.time { white-space:nowrap }

	#content_index img { width:24em }

	#content_partner li, #content_goenner li { margin-bottom:1em; clear:right }
	#content_partner li div.logo, #content_goenner li div.logo { float:right; margin-bottom:2em }

	#container.fotos table td { padding:0.5em; text-align:center; vertical-align:middle }

	@media (max-width:600px) {
		img.right { display:none }
	}
</style>

<svelte:head>
	<meta http-equiv="Language" content="de">

	<title>{title}</title>
	<meta name="description" content="{title}" />

	<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Open+Sans">
</svelte:head>

<div id="container" class="index">
	<nav>
		<a href="/{lang}"><img id="logo" src="/img/logo{logo}_transparent.png" alt="Logo {title}"></a>
		<p class=logo>
			Logo:
			<a class:active={logo==1} on:click={() => {logo=1}}>1</a>
			<a class:active={logo==2} on:click={() => {logo=2}}>2</a>
			<a class:active={logo==3} on:click={() => {logo=3}}>3</a>
		</p>

		<p class=language>
			<a class:active={lang=='de'} href="{data.route.id.replace(/\[lang\]/, 'de')}">DE</a>
			<a class:active={lang=='en'} href="{data.route.id.replace(/\[lang\]/, 'en')}">EN</a>
		</p>

		<a class:active={page==''}          href="/{lang}/">Home</a>
		<a class:active={page=='/programm'} href="/{lang}/programm">Programm</a>
	</nav>
	<div id="main">
		<h1>{title}</h1>
		<slot></slot>
	</div>
</div>
