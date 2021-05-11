const fs = require('fs');
const chalk = require('chalk');
const validator = require("email-validator");

const sahkoPosti = process.argv[2];
const filePath = 'Liitteet/nimet.json';
try {
    const data = fs.readFileSync(filePath);

    if (validator.validate(sahkoPosti)) {
        console.log(chalk.green(('Kelvollinen sähköpostiosoite!!')));
    } else {
        console.log(chalk.red('Epäkelpo sähköpostiosoite!'))
    }
} catch (err) {
    console.log(chalk.red('Tiedostoa ei löytynyt!'))
}