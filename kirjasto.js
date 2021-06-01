const yargs = require("yargs");
const kirjat = require("./kirjat");

yargs.command({
    command: "lisaa",
    description: "Lisää uusi kirja",
    builder: {
        nimi: {
            type: "string",
            demandOption: true,
            describe: "Kirjan nimi",
        },
        kirjoittaja: {
            type: "array",
            demandOption: true,
            describe: "Kirjan kirjoittajat",
        },
        valinta: {
            demandOption: true,
            choices: ["kaikki", "fantasia", "sota", "tiede"],
            describe: "Listataan kirjat valinnan perusteella",
        },
    },
    handler(argv) {
        kirjat.lisaaKirja(argv.nimi, argv.kirjoittaja, argv.valinta);
    },
});

yargs.command({
    command: "listaa",
    description: "Listaa kirjat",
    builder: {
        valinta: {
            demandOption: true,
            choices: ["kaikki", "fantasia", "sota", "tiede"],
            describe: "Listataan kirjat valinnan perusteella",
        },
    },
    handler(argv) {
        kirjat.listaaKirja(argv.valinta);
    },
});

yargs.command({
    command: "poista",
    description: "Poista kirja",
    builder: {
        nimi: {
            type: "string",
            demandOption: true,
            describe: "Kirjan nimi",
        },
        kirjoittaja: {
            type: "string",
            demandOption: true,
            describe: "Kirjan kirjoittaja",
        },
    },
    handler(argv) {
        kirjat.poistaKirja(argv.nimi, argv.kirjoittaja);
    },
});

yargs.command({
    command: "hae",
    description: "Hae kirjoittajaa",
    builder: {
        kirjoittaja: {
            type: "string",
            demandOption: true,
            describe: "Hae kirjoittajaa nimellä",
        },
    },
    handler(argv) {
        kirjat.haeKirjoittaja(argv.kirjoittaja);
    },
});

yargs.parse();
