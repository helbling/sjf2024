<script>
	export let data;
	let t, lang;
	$: {
		t = data.t;
		lang = data.lang;
	}
</script>

<h1>{t('Partnerorganisationen', 'Partner Organizations')}</h1>
