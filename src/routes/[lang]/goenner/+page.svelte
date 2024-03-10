<script>
	export let data;
	let t, lang;
	$: {
		t = data.t;
		lang = data.lang;
	}
	const sponsors = [
		{
			name: 'Migros-Kulturprozent',
			url: 'https://www.migros-kulturprozent.ch',
			img: 'migros_kulturprozent.png',
		},
		{
			name: 'Jugglux Winterthur',
			url: 'https://www.jugglux.ch',
			img: 'jugglux.png',
		},
	];
</script>

<style>
	a.logo { float:right; margin-bottom:2em }
	a.logo img { max-width:18em }
	li { clear:right }
	ul { max-width: 45em }
</style>

<h1>{t('Gönner', 'Sponsors')}</h1>


<ul>
	{#each sponsors as s }
	<li>
		{s.name}, <a href={s.url}>{s.url.replace(/^https?:\/\/(www\.)?/, '')}</a>
		<a class=logo href={s.url} >
			<img alt="{s.name} logo" src="/img/sponsors/{s.img}" />
		</a>
	</li>
	{/each}
</ul>
