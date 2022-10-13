let subjekte = ["Die Katze", "Der Hund", "Jeder", "Anna", "Hans-Peter", "Der Prof"];
let praedikate = ["schlägt", "sammelt", "bewundert", "hasst", "liebt", "pflegt"];
let objekte = ["Löwen", "Pilze", "Oliven", "Pferde", "Bäume", "Nilpferde"];
console.log(subjekte);
console.log(praedikate);
console.log(objekte);
//gibt Zufallsgedicht aus
for (let _index = subjekte.length; _index > 0; _index--) {
    getVerse(subjekte, praedikate, objekte);
}
//Funktion holt random Wörter aus Array und hängt sie aneinander 
function getVerse(_subjekte, _praedikate, _objekte) {
    let getsubjekt = Math.floor(Math.random() * subjekte.length);
    let getpraedikat = Math.floor(Math.random() * praedikate.length);
    let getobjekt = Math.floor(Math.random() * praedikate.length);
    let s = _subjekte.splice(getsubjekt, 1);
    let p = _praedikate.splice(getpraedikat, 1);
    let o = _objekte.splice(getobjekt, 1);
    let zeile = s + " " + p + " " + o + ".";
    console.log(zeile);
    return;
}
//# sourceMappingURL=a01.js.map