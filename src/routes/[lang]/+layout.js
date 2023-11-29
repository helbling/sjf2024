export function load({ params, route}) {
	const lang = params.lang;
	const t = (de, en) => lang == 'de' ? de : en;
	return { lang, t, route };
}

