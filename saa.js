const { BADFAMILY } = require("dns");
const request = require("postman-request");

const avain = "fe33d55f1df86864eb88ef02b4e2b839";
const paikka = process.argv[2];

const url = "http://api.weatherstack.com/current?access_key=" + avain + "&query=" + paikka;

request({ url: url, json: true }, (error, response, body) => {
    if (error) {
        console.log("Ei yhteyttä sääpalveluun.");
    } else if (body.error) {
        console.log("Ei hakutuloksia");
    } else {
        console.log(
            "Ulkona on " +
                body.current.temperature +
                "astetta lämmintä, tuntuu kuin " +
                body.current.feelslike +
                " asteelta.",
        );
    }
});
