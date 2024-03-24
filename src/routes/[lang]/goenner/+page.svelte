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
		{
			name: 'Stadt Winterthur',
			url: 'https://stadt.winterthur.ch/',
			img: 'stadt_winterthur.png',
		},
	];
</script>

<style>
	.logo img { max-width:14em; margin:1em }
	li {
		display:flex;
		align-items:center;
		justify-content:space-between;
		flex-wrap:wrap;
	}
	ul { max-width:40em; padding-left:0 }
</style>

<h1>{t('Gönner', 'Sponsors')}</h1>


<ul>
	{#each sponsors as s }
	<li>
		<div class=name>
			{s.name}, <a href={s.url}>{s.url.replace(/^https?:\/\/(www\.)?/, '')}</a>
		</div>
		<div class=logo>
			<a href={s.url} >
				<img alt="{s.name} logo" src="/img/sponsors/{s.img}" />
			</a>
		</div>
	</li>
	{/each}
</ul>
