// Tee ohjelma, jossa pystyt lisäämään, poistamaan sekä hakemaan reseptejä.
// Reseptistä tallennetaan nimi (string) sekä raakaAineet (array).
// Reseptejä voi hakea sekä nimen että raaka-aineen perusteella.
// Samannimisiä reseptejä ei voi olla useampia.

const yargs = require("yargs");
const reseptit = require("./reseptit");

yargs.command({
    command: "lisaa",
    description: "Lisää uusi resepti",
    builder: {
        nimi: {
            type: "string",
            demandOption: true,
            describe: "Reseptin nimi",
        },
        raakaAineet: {
            type: "array",
            demandOption: true,
            describe: "Reseptin raaka-aineet",
        },
    },
    handler(argv) {
        reseptit.lisaaResepti(argv.nimi, argv.raakaAineet);
    },
});

yargs.command({
    command: "poista",
    description: "Poista resepti",
    builder: {
        nimi: {
            type: "string",
            demandOption: true,
            describe: "Reseptin nimi",
        },
    },
    handler(argv) {
        reseptit.poistaResepti(argv.nimi);
    },
});

yargs.command({
    command: "hae",
    description: "Hae reseptiä nimellä",
    builder: {
        nimi: {
            type: "string",
            demandOption: true,
            describe: "Hae reseptiä nimellä",
        },
    },
    handler(argv) {
        reseptit.haeResepti(argv.nimi);
    },
});

yargs.command({
    command: "haeAine",
    description: "Hae reseptiä raaka-aineella",
    builder: {
        raakaAineet: {
            type: "string",
            demandOption: true,
            describe: "Reseptin raaka-aineet",
        },
    },
    handler(argv) {
        reseptit.haeAine(argv.raakaAineet);
    },
});

yargs.parse();
