const fs = require('fs');
const chalk = require('chalk');

const onkoNimi = process.argv[2];
const filePath = 'Liitteet/nimet.json';
try {
    const data = fs.readFileSync(filePath);

    if (data.includes(onkoNimi)) {
        console.log(chalk.green(('Löytyi!')));
    } else {
        console.log(chalk.red('Ei löytynyt!'))
    }
} catch (err) {
    console.log(chalk.red('Tiedostoa ei löytynyt!'))
}