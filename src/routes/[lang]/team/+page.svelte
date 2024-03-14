<script>
const members = [
	{ name: 'Simon Monai',        role:'Präsident', img:'simon.png' },
	{ name: 'Herbi Burren',       role:'Location / Sponsoring' },
	{ name: 'Dominique Druey',    role:'Beisitzer / Springer' },
	{ name: 'Kaspar Wohnlich',    role:'Zirkusjugend' },
	{ name: 'Christopf Haller',   role:'Galashow / Workshops', text:`Mein Name ist Christof Haller und ich bin ein leidenschaftlicher Jongleur, der sich mit einer Vielzahl von Jonglierprops wie Keulen, Ringen, Bällen, Poi, Kendama usw. beschäftigt.

Jedes Jahr nehme ich an verschiedenen Jonglierkonventionen in der Schweiz und Deutschland teil und besuche regelmäßig die European Juggling Convention (EJC).

Durch meine Teilnahme an zahlreichen Jonglierkonventionen in der Schweiz und Deutschland wurde mein Wunsch geweckt, selbst eine solche Veranstaltung zu organisieren. Als Teil des Organisationskomitees (OKA) für das Schweizer Jonglier Convention (SJC) trage ich die Verantwortung für das Programm, einschliesslich Galashows, Firespaces, Jonglier-Battles usw. Es bereitet mir grosse Freude, meine Erfahrungen im Bereich Shows und Conventions in die Gestaltung des SJC einzubringen.` },
	{ name: 'Peter Oertle',       role:'FireSpace', text:` Ich bin seit vielen Jahren leidenschaftlicher Feuerspieler und freue mich darauf, Teil des Organisations-Teams zu sein. Mit meinem langjährigen Engagement und Talent für das Jonglieren möchte ich dazu beitragen, dass diese Veranstaltung ein voller Erfolg wird. Ich bin seit vielen Jahren leidenschaftlicher Feuerspieler und freue mich darauf, Teil des Organisations-Teams zu sein. Mit meinem langjährigen Engagement und Talent für das Jonglieren möchte ich dazu beitragen, dass diese Veranstaltung ein voller Erfolg wird.`},
	{ name: 'Florian Tinner',     role:'Kassier', text:`Als Zahlenjongleur ist Florian Tinner für die Buchhaltung verantwortlich und findet auf fast jede Frage im Finanzbereich eine Antwort` },
	{ name: 'Werner Schüpbach',   role:'Revisionsstelle' },
	{ name: 'Reto Baliarda',      role:'Medien, Werbung, PR', text:`Jonglieren und Medien, beides begleitet mich seit über 20 Jahren. Für mich ist es daher eine doppelte Freude, die Medien mit der diesjährigen Swiss Juggling Convention vertraut zu machen.`},
	{ name: 'Tobias Meier',       role:'Berater'},
	{ name: 'Christian Helbling', role:'Webseite' },
];
	const fillertext = `How much wood would a woodchuck chuck,
If a woodchuck could chuck wood?
A woodchuck would chuck all the wood he could chuck
If a woodchuck would chuck wood.

Peter Piper picked a peck of pickled peppers.
A peck of pickled peppers Peter Piper picked.
If Peter Piper picked a peck of pickled peppers,
Where's the peck of pickled peppers Peter Piper picked?`;

	function text2html(text) {
		return text.split("\n\n").map(t => `<p>${t}</p>`).join("\n");
	}

</script>

<style>
	.container { text-align: center }
	.member { margin-bottom: 4em }
	.role { font-style:italic }

	div.image {
		border-radius: 50%;
		display: inline-block;
		position: relative;
	}
	div.image img {
		border-radius: 50%;
		display: block;
		border:1px solid #fff;
		width:25em;
		height:25em;
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
