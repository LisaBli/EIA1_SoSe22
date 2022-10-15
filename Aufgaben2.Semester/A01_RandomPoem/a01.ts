/*
Aufgabe: 01
Name: Lisa Blindenhöfer
Matrikel Nr.: 271450
Datum: 13.10.2022
*/

namespace Zufallsgedicht{

let subjekte: string[] = ["Die Katze", "Der Hund", "Jeder", "Anna", "Hans-Peter", "Der Prof"];
let praedikate: string[] = ["schlägt", "sammelt", "bewundert", "hasst", "liebt", "pflegt"];
let objekte: string[] = ["Löwen", "Pilze", "Oliven", "Pferde", "Bäume", "Nilpferde"];

//gibt Zufallsgedicht aus
for (let _index: number = subjekte.length; _index > 0; _index--) {
    getVerse(subjekte, praedikate, objekte);
}

//Funktion holt random Wörter aus Array und hängt sie aneinander 
function getVerse(_subjekte: string[], _praedikate: string[], _objekte: string[]):string {
    
    let getsubjekt: number = Math.floor(Math.random() * subjekte.length);
    let getpraedikat: number = Math.floor(Math.random() * praedikate.length);
    let getobjekt: number = Math.floor(Math.random() * praedikate.length);

    let s: string[] = _subjekte.splice(getsubjekt, 1);
    let p: string[] = _praedikate.splice(getpraedikat, 1);
    let o: string[] = _objekte.splice(getobjekt, 1);

    let zeile: string = s + " " + p + " " + o + ".";
    console.log(zeile)

    return;
}}
