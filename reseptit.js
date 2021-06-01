const fs = require("fs");

const lisaaResepti = (nimi, raakaAineet) => {
    const reseptit = lataaReseptit();
    const onOlemassa = reseptit.find((resepti) => resepti.nimi === nimi && resepti.raakaAineet === raakaAineet);
    if (!onOlemassa) {
        reseptit.push({
            nimi,
            raakaAineet,
        });
        tallennaReseptit(reseptit);
        console.log("Resepti lisätty.");
    } else {
        console.log("Resepti on jo olemassa.");
    }
};

const poistaResepti = (nimi) => {
    const reseptit = lataaReseptit();
    const onOlemassa = reseptit.find((resepti) => resepti.nimi === nimi);
    if (!onOlemassa) {
        console.log("Reseptiä ei ole, joten sitä ei voi poistaa");
    } else {
        reseptit.splice(reseptit.indexOf(onOlemassa), 1);
        tallennaReseptit(reseptit);
        console.log(`Resepti nimeltään: ${onOlemassa.nimi} poistettu`);
    }
};

const haeResepti = (nimi) => {
    const reseptit = lataaReseptit();
    const onOlemassa = reseptit.find((resepti) => resepti.nimi === nimi);
    if (onOlemassa === "") {
        console.log("Reseptiä ei löytynyt");
    } else {
        console.log(`Resepti löytyi: ${onOlemassa.nimi}`);
        console.log("Raaka aineet ovat:");
        console.log(onOlemassa.raakaAineet);
    }
};

const haeAine = (raakaAineet) => {
    const reseptit = lataaReseptit();
    const onOlemassa = reseptit.filter((resepti) => resepti.raakaAineet.includes(raakaAineet));
    onOlemassa.forEach((resepti) => {
        console.log(resepti.raakaAineet);
    });
};

const tallennaReseptit = (reseptit) => {
    const reseptiJSON = JSON.stringify(reseptit);
    fs.writeFileSync("reseptit.json", reseptiJSON);
};

const lataaReseptit = () => {
    try {
        const dataBuffer = fs.readFileSync("reseptit.json");
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
};

module.exports = {
    lisaaResepti: lisaaResepti,
    poistaResepti: poistaResepti,
    haeResepti: haeResepti,
    haeAine: haeAine,
};
