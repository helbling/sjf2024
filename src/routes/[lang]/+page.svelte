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
	/*footer { position:absolute; bottom:0; text-align:center;  } */
	.further_info { margin-top:2em }
	footer { margin-top:3em; text-align:center;  }
	footer a { color:gray }
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

<p class=further_info>{t('Weitere Infos folgen..', 'Further information will follow..')}</p>

</div>
<footer><a href="https://jonglierfestival.ch/2016/">2016 Uster</a></footer>
