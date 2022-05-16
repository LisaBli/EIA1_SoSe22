var frankreich_einwohner = 65.3;
var deutschland_einwohner = 83.2;
var italien_einwohner = 59.58;
var portugal_einwohner = 10.29;
var de = "Deutschland: ";
var fr = "Frankreich: ";
var it = "Italien: ";
var port = "Portugal: ";
var before = "Einwohner*innen in ";
var mio = " Mio";
console.log(before + de + deutschland_einwohner + mio);
console.log(before + fr + frankreich_einwohner + mio);
console.log(before + it + frankreich_einwohner + mio);
console.log(before + port + portugal_einwohner + mio);
var beforerel = "Relation zur Gesamtzahl der Einwohner*innen  in der EU ";
var eueinwohner = 447.01;
var hundert = 100;
var prozent = "%";
console.log(beforerel + de + deutschland_einwohner / eueinwohner * hundert + prozent);
console.log(beforerel + fr + frankreich_einwohner / eueinwohner * hundert + prozent);
console.log(beforerel + it + italien_einwohner / eueinwohner * hundert + prozent);
console.log(beforerel + port + portugal_einwohner / eueinwohner * hundert + prozent);
var beforerate = "Wachstumsrate seit 2008 ";
var de2008 = 82.0;
var fr2008 = 62.14;
var it2008 = 59.0;
var port2008 = 10.56;
console.log(beforerate + de + ((deutschland_einwohner - de2008) / de2008) * hundert + prozent);
console.log(beforerate + fr + ((frankreich_einwohner - fr2008) / fr2008) * hundert + prozent);
console.log(beforerate + it + ((italien_einwohner - it2008) / it2008) * hundert + prozent);
console.log(beforerate + port + ((portugal_einwohner - port2008) / port2008) * hundert + prozent);
var beforeges = "Wachstumsrate gesamt zwischen 2008 and 2021 ";
console.log(beforeges + de + (deutschland_einwohner - de2008) + mio);
console.log(beforeges + fr + (frankreich_einwohner - fr2008) + mio);
console.log(beforeges + it + (italien_einwohner - it2008) + mio);
console.log(beforeges + port + (portugal_einwohner - port2008) + mio);
window.addEventListener('load', function () {
    document.querySelector(".germany").addEventListener('click', clickde);
    document.querySelector(".france").addEventListener('click', clickfr);
    document.querySelector(".italy").addEventListener('click', clickit);
    document.querySelector(".portugal").addEventListener('click', clickport);
    document.querySelector(".stars").addEventListener('click', clickeu);
});
function clickde() {
    document.querySelector(".chart").setAttribute("style", "height: 18.61%");
    document.querySelector(".titel").innerHTML = "Einwohnerzahl in Deutschland";
    document.querySelector(".einwohnerges").innerHTML = "Gesamtzahl Einwohner*Innen in Deutschland 2021";
    document.querySelector(".number1").innerHTML = String(deutschland_einwohner);
    document.querySelector(".number2").innerHTML = String((deutschland_einwohner / eueinwohner * hundert).toFixed(2) + prozent);
    document.querySelector(".number3").innerHTML = String((((deutschland_einwohner - de2008) / de2008) * hundert).toFixed(2) + prozent);
    document.querySelector(".number4").innerHTML = String(((deutschland_einwohner - de2008)).toFixed(2) + mio);
}
function clickfr() {
    document.querySelector(".chart").setAttribute("style", "height: 14.61%");
    document.querySelector(".titel").innerHTML = "Einwohnerzahl in Frankreich";
    document.querySelector(".einwohnerges").innerHTML = "Gesamtzahl Einwohner*Innen in Frankreich 2021";
    document.querySelector(".number1").innerHTML = String(frankreich_einwohner);
    document.querySelector(".number2").innerHTML = String((frankreich_einwohner / eueinwohner * hundert).toFixed(2) + prozent);
    document.querySelector(".number3").innerHTML = String((((frankreich_einwohner - fr2008) / fr2008) * hundert).toFixed(2) + prozent);
    document.querySelector(".number4").innerHTML = String(((frankreich_einwohner - fr2008)).toFixed(2) + mio);
}
function clickit() {
    document.querySelector(".chart").setAttribute("style", "height: 13.33%");
    document.querySelector(".titel").innerHTML = "Einwohnerzahl in Italien";
    document.querySelector(".einwohnerges").innerHTML = "Gesamtzahl Einwohner*Innen in Italien 2021";
    document.querySelector(".number1").innerHTML = String(italien_einwohner);
    document.querySelector(".number2").innerHTML = String((italien_einwohner / eueinwohner * hundert).toFixed(2) + prozent);
    document.querySelector(".number3").innerHTML = String((((italien_einwohner - it2008) / it2008) * hundert).toFixed(2) + prozent);
    document.querySelector(".number4").innerHTML = String(((italien_einwohner - it2008)).toFixed(2) + mio);
}
function clickport() {
    document.querySelector(".chart").setAttribute("style", "height: 2.30%");
    document.querySelector(".titel").innerHTML = "Einwohnerzahl in Portugal";
    document.querySelector(".einwohnerges").innerHTML = "Gesamtzahl Einwohner*Innen in Portugal 2021";
    document.querySelector(".number1").innerHTML = String(portugal_einwohner);
    document.querySelector(".number2").innerHTML = String((portugal_einwohner / eueinwohner * hundert).toFixed(2) + prozent);
    document.querySelector(".number3").innerHTML = String((((portugal_einwohner - port2008) / port2008) * hundert).toFixed(2) + prozent);
    document.querySelector(".number4").innerHTML = String(((portugal_einwohner - port2008)).toFixed(2) + mio);
}
function clickeu() {
    document.querySelector(".chart").setAttribute("style", "height: 100%");
    document.querySelector(".number1").innerHTML = String(eueinwohner);
    document.querySelector(".number2").innerHTML = "-";
    document.querySelector(".number3").innerHTML = String((((eueinwohner - eufrüher) / eufrüher) * hundert).toFixed(2) + prozent);
    document.querySelector(".number4").innerHTML = String(((eueinwohner - eufrüher)).toFixed(2) + mio);
    document.querySelector(".einwohnerges").innerHTML = "Gesamtzahl Einwohner*Innen in der EU";
    document.querySelector(".titel").innerHTML = "Einwohnerzahl in der EU";
}
var eufrüher = 497.7;
//# sourceMappingURL=aufgabe7.js.map