ej.addCulture( "es-AR", {
	name: "es-AR",
	englishName: "Spanish (Argentina)",
	nativeName: "Español (Argentina)",
	language: "es",
	numberFormat: {
        pattern: ["-n"],
		decimals: 2,
		",": ".",
		".": ",",
        groupSizes: [3],
		"NaN": "NuN",
		negativeInfinity: "-Infinito",
		positiveInfinity: "Infinito",
		percent: {
			pattern: ["-n%","n%"],
			decimals: 2,
            groupSizes: [3],
			",": ".",
			".": ",",
            symbol: '%'
		},
		currency: {
			pattern: ["$-n","$ n"],
			decimals: 2,
            groupSizes: [3],
			",": ".",
			".": ",",
			symbol: "€"
		}
	},
	calendars: {
		standard: {
			'/': '/',
	        ':': ':',
			firstDay: 0,
			days: {
				names: ["domingo","lunes","martes","miércoles","jueves","viernes","sábado"],
				namesAbbr: ["dom","lun","mar","mié","jue","vie","sáb"],
				namesShort: ["do","lu","ma","mi","ju","vi","sá"]
			},
			months: {
				names: ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre",""],
				namesAbbr: ["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic",""]
			},
			AM: ["a.m.","a.m.","A.M."],
			PM: ["p.m.","p.m.","P.M."],
			eras: [{"name":"d.C.","start":null,"offset":0}],
			patterns: {
				d: "dd/MM/yyyy",
				D: "dddd, dd' de 'MMMM' de 'yyyy",
				t: "hh:mm tt",
				T: "hh:mm:ss tt",
				f: "dddd, dd' de 'MMMM' de 'yyyy hh:mm tt",
				F: "dddd, dd' de 'MMMM' de 'yyyy hh:mm:ss tt",
				M: "dd' de 'MMMM",
				Y: "MMMM' de 'yyyy"
			}
		}
	}
});