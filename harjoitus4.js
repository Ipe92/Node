const fs = require('fs');
const chalk = require('chalk');

const filePath = 'olio.json';

try {
    const dataBuffer = fs.readFileSync(filePath);
    const dataJSON = dataBuffer.toString();
    const olio = JSON.parse(dataJSON);

    olioJSON = JSON.stringify(olio);

    olio.forEach(element => {
        console.log(element);
    });
} catch (err) {
    console.log(chalk.red('Tiedostoa ei löytynyt!'));
}