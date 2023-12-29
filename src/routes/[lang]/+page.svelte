<script>
	export let data;
	let t, lang;
	$: t = data.t;
	$: lang = data.lang;
</script>

<style>
	div { text-align: center }
	ul { list-style-type:none; padding:0; margin:0 }
	.bold { font-weight:bold }
</style>

<div>

<p>
Eulachpark / Halle 710 / Neuhegi
</p>

{#if lang == 'de'}
<h2>Freitag 30.8. - Sonntag 1.9.2024</h2>

<ul>
	<li>Jonglieren &amp; Artistik rund um die Uhr</li>
	<li class=bold>Workshops für alle Niveaus</li>
	<li>Jonglierspiele</li>
	<li>&nbsp;</li>
</ul>
<ul>
	<li>Juggling Battles</li>
	<li class=bold>Galashow</li>
	<li>Fire Space &amp; Light Night</li>
</ul>

{:else}
<h2>Friday 30.8. until Sunday 1.9.2024</h2>

<ul>
	<li>Juggling &amp; Artistry around the clock</li>
	<li class=bold>Workshops für all skill-levels</li>
	<li>Juggling Games</li>
	<li>&nbsp;</li>
</ul>
<ul>
	<li>Juggling Battles</li>
	<li class=bold>Galashow</li>
	<li>Fire Space &amp; Light Night</li>
</ul>

{/if}
</div>
