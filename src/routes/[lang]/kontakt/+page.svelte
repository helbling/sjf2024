<script>
	export let data;
	let t, lang, t_contact_form;
	$: {
		t = data.t;
		lang = data.lang;
		t_contact_form = t('Kontaktformular', 'Contact form');
	}
	const beta = import.meta.env.PROD ? '' : '_beta';
</script>

<style>
	iframe { border: none; width:100%; max-width:30em; height:52em }
</style>
<h2>Verein “Swiss Juggling Convention 2024 Winterthur ”, Winterthur</h2>

<h3>{t_contact_form}</h3>

<iframe title="{t_contact_form}" src="https://www.jonglierfestival.ch/kontaktformular{beta}.php?lang={lang}"></iframe>
