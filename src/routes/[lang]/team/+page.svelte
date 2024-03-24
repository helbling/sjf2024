<script>
const members = [
	{ name: 'Simon Monai',        role:'Präsident', img:'simon.png', text:`Seit dem Jonglierfestival 2016 in Uster bin ich begeistert von den tollen Stimmung an solchen Conventions und freue mich sehr, mit dem diesjährigen Festival in Winterthur auch wieder etwas an die Community zurückgeben zu können.` },
	{ name: 'Herbert (Herbi) Burren',     role:'Location / Sponsoring', img:'herbert.jpg', text:`Seit vielen Jahren engagierter Hobby-Jongleur. Verantwortlicher für den Winterthurer Jongliertreff (<a href='https://www.jongliertreff-winti.ch'>www.jongliertreff-winti.ch</a>) und langjähriger Mitarbeiter vom Sportamt Winterthur mit grossem Netzwerk in Sport und Wirtschaft. Und jetzt überzeugter Unterstützer des diesjährigen Schweizer Jonglierfestivals  . . . „immer mit dem Fokus, den vielen lokalen und nationalen jonglierbegeisterten Jugendlichen und Erwachsenen ein gut organisiertes, hochstehendes und spannendes Jonglierweekend zu bieten – also beste Werbung für unser cooles Hobby – als wertvolle Freizeitaktivität für Jung und Alt“.`},
	{ name: 'Dominique Druey',    role:'Beisitzer / Springer' },
	{ name: 'Kaspar Wohnlich',    role:'Zirkusjugend' },
	{ name: 'Christof Haller',   role:'Galashow / Workshops', img:'christof.jpg', text:`Mein Name ist Christof Haller und ich bin ein leidenschaftlicher Jongleur, der sich mit einer Vielzahl von Jonglierprops wie Keulen, Ringen, Bällen, Poi, Kendama usw. beschäftigt.

Jedes Jahr nehme ich an verschiedenen Jonglierkonventionen in der Schweiz und Deutschland teil und besuche regelmäßig die European Juggling Convention (EJC).

Durch meine Teilnahme an zahlreichen Jonglierkonventionen in der Schweiz und Deutschland wurde mein Wunsch geweckt, selbst eine solche Veranstaltung zu organisieren. Als Teil des Organisationskomitees (OKA) für das Schweizer Jonglier Convention (SJC) trage ich die Verantwortung für das Programm, einschliesslich Galashows, Firespaces, Jonglier-Battles usw. Es bereitet mir grosse Freude, meine Erfahrungen im Bereich Shows und Conventions in die Gestaltung des SJC einzubringen.` },
	{ name: 'Peter Oertle',       role:'FireSpace', img:'peter.jpg', text:`Ich bin seit vielen Jahren leidenschaftlicher Feuerspieler und freue mich darauf, Teil des Organisations-Teams zu sein. Mit meinem langjährigen Engagement und Talent für das Jonglieren möchte ich dazu beitragen, dass diese Veranstaltung ein voller Erfolg wird.`},
	{ name: 'Florian Tinner',     role:'Kassier', img:'florian.jpg', text:`Als Zahlenjongleur ist Florian Tinner für die Buchhaltung verantwortlich und findet auf fast jede Frage im Finanzbereich eine Antwort` },
	{ name: 'Werner Schüpbach',   role:'Revisionsstelle' },
	{ name: 'Reto Baliarda',      role:'Medien, Werbung, PR', img:'reto.jpg', text:`Jonglieren und Medien, beides begleitet mich seit über 20 Jahren. Für mich ist es daher eine doppelte Freude, die Medien mit der diesjährigen Swiss Juggling Convention vertraut zu machen.`},
	{ name: 'Tobias Meier',       role:'Berater'},
	{ name: 'Christian Helbling', role:'Webseite', img:'christian.jpg', text:`Als leidenschaftlicher Keulen-Passer, Einradfahrer und auch Programmierer bin ich verantworlich für die Webseite. Ich bin der Autor von <a href="https://passist.org">passist.org</a> - einem Passing-Simulator für Siteswaps. Ich freue mich, an der SJC Tipps und Workshops fürs Jonglieren und Einradfahren zu geben.`},
];
	const fillertext = ``;

	function text2html(text) {
		return text.split("\n\n").map(t => `<p>${t}</p>`).join("\n");
	}

</script>

<style>
	.container { text-align: center }
	.member { margin-bottom: 4em }
	.role { font-style:italic }
	.text { margin:0 2em }

	div.image {
		border-radius: 50%;
		display: inline-block;
		position: relative;
	}
	div.image img {
		border-radius: 50%;
		display: block;
		border:1px solid #fff;
		width: min(25em, 95vw);
		height:min(25em, 95vw);
	}
	div.image:after {
		content: "";
		display: block;
		width: 100%;
		height: 100%;
		border-radius: 50%;
		position: absolute;
		top: 0; left: 0;
		box-shadow: inset 10px 24px 10px 0px white,
			inset -10px -24px 10px 0px white,
			inset 20px -10px 10px 0px white,
			inset -20px 10px 10px 0px white;
	}


	@media (min-width:70em) { /* wide screens */
		.member { display:grid; align-items:center }
		.name  { grid-column:1; grid-row:1 }
		.image { grid-column:1; grid-row:2 }
		.role  { grid-column:1; grid-row:3 }
		.text  { grid-column:2; grid-row-start:2; grid-row-end:3 }

		.name, .image, .role {
			max-width:calc(25rem + 2px);
			max-height:calc(25rem + 2px);
		}
	}
</style>

<div class=container>
	<h1>Team</h1>

	{#each members as m }
	<div class=member>
		<h3 class=name>{m.name}</h3>
		<div class=image><img src="/img/team/{m.img ? m.img : 'juggler.jpg'}" alt="picture of {m.name}"/></div>
		<div class=role>{m.role}</div>
		<div class=text>{@html text2html(m.text ? m.text : fillertext)}</div>
	</div>

	{/each}

</div>
