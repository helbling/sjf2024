<script>
	export let data;
	let t, lang;
	$: t = data.t;
	$: lang = data.lang;

	const infopointAddress = "Winterthur, Barbara-Reinhart-Strasse 25";

	let routeToInfopointFrom;
	$: routeToInfopointFrom = {de:'Route zum Infopoint ab', en:'Route to Infopoint from'}[lang];

</script>

<style>
	input{ line-height:2; font-size:1em }
</style>

<h1>{t('Anfahrt', 'Getting there')}</h1>

Infopoint / Halle 710:
<b>{infopointAddress}</b>

<h2>{t('ÖV', 'Public transportation')}</h2>

<ul>
	<li>Bus: Winterthur, Else Züblin - 350m</li>
	<li>Postauto: Winterthur, Hegifeld - 420m</li>
	<li>{t('Zug', 'Train')}: Oberwinterthur - 620m</li>
	<li>{t('Zug', 'Train')}: Winterthur Hegi - 820m</li>
</ul>

<form action="https://search.ch/oev/" target=_blank>
	<p>
		{routeToInfopointFrom}
		<input type=hidden name=to value={infopointAddress}>
		<input type=text   name=from value="">
		<input type=submit value="suchen">
	</p>
</form>

<h2>{t('Velo', 'Bicycle')}</h2>

<form action="https://search.ch/map/" target=_blank>
	<p>
		{routeToInfopointFrom}
		<input type=hidden name=mode value=bicycle>
		<input type=hidden name=layer value=veloland>
		<input type=hidden name=to value={infopointAddress}>
		<input type=text   name=from value="">
		<input type=submit value="suchen">
	</p>
</form>
<p></p>



<h2>{t('Auto', 'Car')}</h2>

<p>
	{t('Parkplätze sind noch in Abklärung. Weitere Infos folgen.', 'Parking situation not fixed yet. More Information will follow.')}
</p>

<b>{t('Achtung', 'Attention')}</b>: {t('Die Ida Sträuli Strasse muss autofrei bleiben', 'Do not drive on Ida Sträuli Strasse')}

