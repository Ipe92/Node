const fs = require('fs');

try {
    fs.writeFile('uusitiedosto.txt', 'Moikka maailmaaaaaa!', function (err) {
        if (err) throw err;
        console.log('Tallennettu!');
    })
} catch (err) {
    console.log('Tiedostoa ei luotu!');
}