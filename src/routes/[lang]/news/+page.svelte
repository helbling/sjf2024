<script>
	export let data;
	let t, lang;
	$: t = data.t;
	$: lang = data.lang;
</script>

<style>
	@media (max-width:30em ) { /* very small screens */
		form { display:flex; gap:0.3em; flex-wrap:wrap }
		#email { flex-grow: 1 }
	}
</style>
<h1>News</h1>

<h2>{t('Newsletter abonnieren', 'Subscribe to the newsletter')}</h2>
<p>{t('Trage unten deine Mailadresse ein, um nichts zu verpassen', 'Enter your email address below so you don\'t miss anything')}:</p>

<form method="post" action="https://jongliertreff-winti.ch/mailman/subscribe/festival-info_jongliertreff-winti.ch" target=_blank>
	<input type="email" required="required" name="email" id="email" placeholder="{t('Deine Mailadresse', 'Your email address')}">
	<!-- <input name="pw" type="hidden"> -->
	<!-- <input name="pw-conf" type="hidden"> -->
	<input name="language" value={lang} type="hidden">
	<input name="digest" value="0" type="hidden">
	<input type="submit" class=button value={t('eintragen', 'subscribe')}>
</form>
<p>{t('Bitte vergiss nicht, deine Mailadresse zu bestätigen.', 'Don\'t forget to confirm your email address')}</p>
