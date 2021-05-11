const fs = require('fs');
const chalk = require('chalk');

const filePath = 'Liitteet/henkilo.json';

try {
    // luetaan JSON-tiedosto
    const dataBuffer = fs.readFileSync(filePath);

    // muutetaan buffer stringiksi
    const dataJSON = dataBuffer.toString();

    // muutetaan json-muodosta JavaScript objectiksi
    const olio = JSON.parse(dataJSON);

    olio.nimi = 'Matti';
    olio.ika = '66';

    // muutetaan Javascript object takaisin JSON-muotoon
    olioJSON = JSON.stringify(olio);

    // tallennetaan json-tiedostoon
    fs.writeFileSync(filePath, olioJSON);
} catch (err) {
    console.log(chalk.red('Tiedostoa ei löytynyt!'));
}