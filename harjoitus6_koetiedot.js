const fs = require("fs");
const chalk = require("chalk");

const filePath = "Liitteet/person.json";

try {
    if (fs.existsSync(filePath)) {
        console.log(chalk.yellow("luetaan..."));
        const dataBuffer = fs.readFileSync(filePath);
        const dataJSON = dataBuffer.toString();
        const henkilot = JSON.parse(dataJSON);
        tallennaHenkilo();
    } else {
        console.log(chalk.blue("luodaan..."));
        tallennaHenkilo();
    }
} catch (error) {
    console.log(chalk.red("Tiedostoa ei pystytty lukemaan/luomaan"));
}

function tallennaHenkilo() {
    const henkilot = [
        { nimi: "Liisa", oppiaine: "Antiikintutkimus", koenumero: 5 },
        { nimi: "Kalle", oppiaine: "Sosioekonomia", koenumero: 2 },
        { nimi: "Hanna", oppiaine: "Nuorisotyö", koenumero: 3 },
        { nimi: "Tuukka", oppiaine: "Fysiikka", koenumero: 4 },
    ];
    const henkilotJSON = JSON.stringify(henkilot);
    fs.writeFileSync(filePath, henkilotJSON);

    henkilot.forEach((henkilot) => {
        console.log(`Nimi:${henkilot.nimi}\nOppiaine:${henkilot.oppiaine}\nKoetulos:${henkilot.koenumero}`);
    });
}
