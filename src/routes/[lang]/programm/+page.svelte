<script>
	export let data;
	let t, lang;
	$: t = data.t;
	$: lang = data.lang;
</script>

{#if lang == 'de'}
<h1>Programm</h1>

<h2>Freitag, 30.8. ab 15:00 Uhr</h2>
<ul>
	<li>Abwechslungsreiche Workshops</li>
	<li>Jongliermarkt</li>
</ul>

<h2>Samstag, 31.8.</h2>
<ul>
	<li>Abwechslungsreiche Workshops</li>
	<li>Jongliermarkt</li>
	<li>Spektakuläre Galashow</li>
	<li>Fire Space &amp; Light Night</li>
</ul>

<h2>Samstag, 1.9. bis xx:00 Uhr</h2>
<ul>
	<li>Abwechslungsreiche Workshops</li>
	<li>Jongliermarkt</li>
	<li>Jonglierspiel &amp; -wettbewerb</li>
	<li>Open Space</li>
</ul>

{:else}

<h1>Program</h1>

<h2>Friday, 30.8. from 3pm</h2>
<ul>
	<li>Workshops</li>
	<li>Juggling Market</li>
</ul>

<h2>Saturday, 31.8.</h2>
<ul>
	<li>Workshops</li>
	<li>Juggling Market</li>
	<li>Spectacular Galashow</li>
	<li>Fire Space &amp; Light Night</li>
</ul>

<h2>Sunday, 1.9. until x pm</h2>
<ul>
	<li>Workshops</li>
	<li>Juggling Market</li>
	<li>Juggling games and competition</li>
	<li>Open Space</li>
</ul>

{/if}
