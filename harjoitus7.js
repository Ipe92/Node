const fs = require("fs");
const filePath = "Liitteet/opiskelijat.json";

try {
    const dataBuffer = fs.readFileSync(filePath);
    const data = dataBuffer.toString();
    const opiskelijat = JSON.parse(data);
    const aikuiset = palautaAikuiset(opiskelijat);
    aikuiset.forEach((a) => console.log(a.nimi));
} catch (error) {
    console.log("Tiedostoa ei löytynyt");
}
function palautaAikuiset(array) {
    return array.filter((opiskelija) => opiskelija.ika >= 18);
}
