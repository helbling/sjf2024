<script>
	export let data;
	let t, lang, t_workshops, t_juggling_market;
	$: {
		t = data.t;
		lang = data.lang;
		t_workshops = t('Abwechslungsreiche Workshops', 'Workshops');
		t_juggling_market = t('Jongliermarkt', 'Juggling Market');
	}
</script>

<style>

@media (max-width:34em) {
	.outer { text-align:center }
	.inner { display:inline-block; text-align:left }
}
</style>

<div class=outer>
<div class=inner>

<h1>{t('Programm', 'Schedule')}</h1>

<h2>{t('Freitag, 30.8. ab 15:00 Uhr', 'Friday, 30.8. from 3pm')}</h2>
<ul>
	<li>{t_workshops}</li>
	<li>{t_juggling_market}</li>
</ul>

<h2>{t('Samstag', 'Saturday')}, 31.8.</h2>
<ul>
	<li>{t_workshops}</li>
	<li>{t_juggling_market}</li>
	<li>14:00 {t('Ende Anmeldung Juggling-Battles', 'Juggling-Battles end of subscription')}</li>
	<li>15:00 Juggling-Battles {t('Qualifikation', 'Qualifications')}</li>
	<li>19:30 {t('Spektakuläre', 'Spectacular')} Galashow</li>
	<li>Fire Space &amp; Light Night</li>
</ul>

<h2>{t('Sonntag, 1.9.', 'Sunday, 1.9.')}</h2>
	<!-- TODO: bis wann? -->
<ul>
	<li>{t_workshops}</li>
	<li>{t_juggling_market}</li>
	<li>13:00 {t('Jonglierspiel & -wettbewerb', 'Juggling games and competition')}</li>
	<li>14:00 Juggling-Battles</li>
	<!-- <li>Open Space</li> -->
</ul>

</div>
</div>
