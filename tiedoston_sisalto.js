const fs = require('fs');
const chalk = require('chalk');

const uusiTiedosto = process.argv[2];

try {
    const dataBuffer = fs.readFileSync(uusiTiedosto);
    const data = dataBuffer.toString();
    console.log(data);
    console.log('Tallennettu');
} catch (err) {
    console.log(chalk.red('Tiedostoa ei löytynyt!'))
}