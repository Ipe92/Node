const fs = require("fs");

const lisaaKirja = (nimi, kirjoittaja, valinta) => {
    const kirjat = lataaKirjat();
    const onOlemassa = kirjat.find(
        (kirja) => kirja.nimi === nimi && kirja.kirjoittaja === kirjoittaja && kirja.valinta === valinta,
    );
    if (!onOlemassa) {
        kirjat.push({
            nimi,
            kirjoittaja,
            valinta,
        });
        tallennaKirjat(kirjat);
        console.log("Kirja lisätty kirjastoon.");
    } else {
        console.log("Kirja on jo olemassa, ei lisätty kirjastoon.");
    }
};

const poistaKirja = (nimi, kirjoittaja) => {
    const kirjat = lataaKirjat();
    const onOlemassa = kirjat.find((kirja) => kirja.nimi === nimi && kirja.kirjoittaja === kirjoittaja);
    if (!onOlemassa) {
        console.log("Kirjaa ei ole, joten sitä ei voi poistaa");
    } else {
        kirjat.splice(
            {
                nimi,
                kirjoittaja,
            },
            1,
        );
        tallennaKirjat(kirjat);
        console.log(`Kirja nimeltään: ${kirjat.nimi} poistettu kirjastosta`);
    }
};

const haeKirjoittaja = (kirjoittaja) => {
    const kirjat = lataaKirjat();
    const onOlemassa = kirjat.find((kirja) => kirja.nimi === nimi && kirja.kirjoittaja === kirjoittaja);
    if (onOlemassa === "") {
        console.log("Kirjoittajaa ei löytynyt");
    } else {
        console.log(`Kirjoittaja löytyi: ${onOlemassa}`);
    }
};

// valinnat pitäisi saada toimiaan (kaikki toimii)
const listaaKirja = (valinta) => {
    const kirjat = lataaKirjat();
    console.log(`Tässä lista ${valinta}`);

    if (valinta === "kaikki") {
        kirjat.forEach((valinta) => {
            console.log(valinta);
        });
    } else if (valinta === "Fantasia") {
        kirjat.forEach((valinta) => {
            if (valinta.includes(valinta)) {
                console.log(valinta);
            }
            console.log(valinta);
        });
    } else if (valinta === "Sota") {
        kirjat.forEach((valinta) => {
            console.log(valinta);
        });
    } else if (valinta === "Tiede") {
        kirjat.forEach((valinta) => {
            console.log(valinta);
        });
    }
};
const tallennaKirjat = (kirjat) => {
    const kirjatJSON = JSON.stringify(kirjat);
    fs.writeFileSync("kirjat.json", kirjatJSON);
};

const lataaKirjat = () => {
    try {
        const dataBuffer = fs.readFileSync("kirjat.json");
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
};

module.exports = {
    lisaaKirja: lisaaKirja,
    listaaKirja: listaaKirja,
    poistaKirja: poistaKirja,
    haeKirjoittaja: haeKirjoittaja,
};
