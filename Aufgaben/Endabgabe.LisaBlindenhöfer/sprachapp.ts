
//Interface für Objekt, um Sätze zu bilden
interface Satz {
    german: string;
    spanisch: string;
    single: string[];
}

//Objekt mit spanischen und deutschen Sätzen und ein array mit Unterteilung des spanischen Satzes in einzelne Wörter
var sentence: Satz[] = [
    { german: "Hallo, Ich heiße Lisa", spanisch: "Hola, me llamo Lisa", single: ["Hola, ", "me ", "llamo ", "Lisa"] },
    { german: "Ich bin x Jahre alt", spanisch: "Tengo x años", single: ["Tengo ", "x ", "años"] },
    { german: "Wie heißt du?", spanisch: "¿Cómo te llamas?", single: ["¿Cómo ", "te ", "llamas?"] },
    { german: "Woher kommst du?", spanisch: "¿De dónde eres?", single: ["¿De ", "dónde ", "eres?"] },
    { german: "Wie heißt das auf Spanisch?", spanisch: "¿Cómo se dice eso en español?", single: ["¿Cómo ", "se ", "dice ", "eso ", "en ", "español?"] },
    { german: "Ich spreche nicht viel Spanisch", spanisch: "No hablo mucho español", single: ["No ", "hablo ", "mucho ", "español"] },
    { german: "Ich mag Fußball spielen", spanisch: "Me gusta jugar al fútbol", single: ["Me ", "gusta ", "jugar ", "al ", "fútbol"] },
    { german: "Was kostet das?", spanisch: "¿Cuánto cuesta esto?", single: ["¿Cuánto ", "cuesta ", "esto?"] },
    { german: "Kannst du das bitte wiederholen?", spanisch: "¿Puedes repitirlo, por favor?", single: ["¿Puedes ", "repitirlo, ", "por ", "favor?"] },
    { german: "Wo ist die Toilette?", spanisch: "¿Dónde está el baño?", single: ["¿Dónde ", "está ", "el ", "baño?"] },
    { german: "Wie alt bist du?", spanisch: "¿Cuántos años tienes?", single: ["¿Cuántos ", "años ", "tienes?"] },
    { german: "Kannst du mir helfen?", spanisch: "¿Me puedes ayudar?", single: ["¿Me ", "puedes ", "ayudar?"] },
    { german: "Was machst du gerade?", spanisch: "¿Qué estás haciendo?", single: ["¿Qué ", "estás ", "haciendo?"] },
    { german: "Ich hätte gerne ein großes Bier", spanisch: "me encantaría una cerveza grande", single: ["me ", "encantaría ", "una ", "cerveza ", "grande"] },
    { german: "Die Rechnung bitte", spanisch: "La cuenta, por favor", single: ["La ", "cuenta, ", "por ", "favor"] }
];

// globale Variable: sucht random Satz/ Wörter aus Satz aus Objekt heraus
var random1: number;

//beim Laden der Seite soll Fkt. aufgerufen werden
window.onload = sentences;

//Funktion, die Sätze mit den einzelnen Wörtern random ausgibt
function sentences(): void {

    //random1 Variable, die random Sätze und Wörter berechnet
    random1 =  Math.floor(Math.random() * sentence.length);

    //test über console
    console.log(random1);

    //überschreibt html mit random generierten Sätzen
    document.querySelector("#german").innerHTML = sentence[random1].german;

    //for-Schleife , die den Wörtern eine Klasse zuordnet und div erstellt --> Wörter in random Reihenfolge ausgibt
    for (let index: number = 0; index < sentence[random1].single.length; index++) {
        
        //Variable erstellt neues div element
        var newelement: HTMLDivElement = document.createElement("div");

        //fügt Klasse "divisinglewords" hinzu 
        newelement.innerHTML = sentence[random1].single[index];
        newelement.classList.add("divsinglewords");

        //hängt neues Element an id "random" an 
        var getelement: HTMLElement = document.querySelector("#random");
        getelement.appendChild(newelement);

        //Es werden Elemente in random Reihenfolge ausgegeben
        for (let index: number = getelement.children.length; index >= 0; index--) {
            getelement.appendChild(getelement.children[Math.random() * index | 0]);
        }
    }

    
}

//ruft Funktion "zahler" auf bei click auf Wortbausteine
document.querySelector("#random").addEventListener('click', zaehler);

//globale Variable, die die Clicks zählt
var clickindex: number = 0;

//globale Variable, zählt die Aufgaben
var levelcount: number = 0;

//Fkt. zählt den Click auf ausgewähltes Wort --> vergleicht dannn den wert des gecklickten wortes mit dem an der Stelle des arrays
// & gibt dementsprechend wenn es richtig ist das Wort inner html aus + addiert Punkt / wenn es falsch ist nicht + es zieht Punkt ab + alert
function zaehler(): void {
    clickindex++;
    if (clickindex == 1) {
        var value1: string = document.querySelector(".divsinglewords:hover").innerHTML;
        var array1: string = sentence[random1].single[0];

        //Wenn der Wert des gehoverten Wortes mit dem des arrays an 1. Stelle übereinstimmt,
        //soll das Wort innerhtml an der stlle #right ausgegeben werden und ein Punkt wird addiert
        if (value1 == array1) {
            points();
            document.querySelector("#right").innerHTML = sentence[random1].single[0];
        }
        //ansonsten kommt alert und ein Punkt wird abgezogen
        else {
            clickindex--;
            pointsminus();
            alert("Das war das falsche Wort");
        }

    }
    if (clickindex == 2) {
        var value2: string = document.querySelector(".divsinglewords:hover").innerHTML;
        var array2: string = sentence[random1].single[1];

        if (value2 == array2) {
            points();
            document.querySelector("#right").innerHTML = sentence[random1].single[0] + sentence[random1].single[1];
        }
        else {
            clickindex--;
            pointsminus();
            alert("Das war das falsche Wort");
        }

    }

    if (clickindex == 3) {
        var value3: string = document.querySelector(".divsinglewords:hover").innerHTML;
        var array3: string = sentence[random1].single[2];

        if (value3 == array3) {
            points();
            document.querySelector("#right").innerHTML = sentence[random1].single[0] + sentence[random1].single[1] + sentence[random1].single[2];

            //Wenn das array single nur aus 3 Wörtern besteht: ist die Aufgabe abgeschlossen 
            //-->(erst ab clickindex == 3, da kürzestes array aus 3 Wörtern besteht)
            //löscht bestehende inhalte und läd funktionen neu
            //levelcount zählt bestandene Aufgabe mit
            if (3 == sentence[random1].single.length) {
                levelcount++;
                setTimeout(function (): void {
                    clearright();
                }, 700);
                clickindex = 0;
                document.querySelector("#random").innerHTML = "";
                sentences2();
                //zaehler();
                //document.querySelector("#random").addEventListener('click', zaehler);

                //sobald Levelcount bei >= 5: werden alle texte inner html ersetzt und überschrieben
                if (levelcount >= 5) {

                    document.querySelector("#german").innerHTML = "";
                    document.querySelector("#german").innerHTML = "Dein finaler Punktestand: " + counter;
                    document.querySelector("#right").innerHTML = "";
                    document.querySelector("#right").innerHTML = "Glückwunsch!";
                    document.querySelector("#random").innerHTML = "";
                    document.querySelector("#random").innerHTML = "Gehe zurück zur Startseite, um das nächste Level zu spielen";
                }
            }
        }
        else {
            clickindex--;
            pointsminus();
            alert("Das war das falsche Wort");
        }

    }

    if (sentence[random1].single[3]) {
        if (clickindex == 4) {
            var value4: string = document.querySelector(".divsinglewords:hover").innerHTML;
            var array4: string = sentence[random1].single[3];

            if (value4 == array4) {
                points();
                document.querySelector("#right").innerHTML = sentence[random1].single[0] + sentence[random1].single[1] +
                    sentence[random1].single[2] + sentence[random1].single[3];

                if (4 == sentence[random1].single.length) {
                    levelcount++;
                    setTimeout(function (): void {
                        clearright();
                    }, 700);
                    clickindex = 0;
                    document.querySelector("#random").innerHTML = "";
                    sentences2();
                    //zaehler();
                    //document.querySelector("#random").addEventListener('click', zaehler);
                    //sobald Levelcount bei >= 5: werden alle texte inner html ersetzt und überschrieben
                    if (levelcount >= 5) {

                        document.querySelector("#german").innerHTML = "";
                        document.querySelector("#german").innerHTML = "Dein finaler Punktestand: " + counter;
                        document.querySelector("#right").innerHTML = "";
                        document.querySelector("#right").innerHTML = "Glückwunsch!";
                        document.querySelector("#random").innerHTML = "";
                        document.querySelector("#random").innerHTML = "Gehe zurück zur Startseite, um das nächste Level zu spielen";
                    }
                }
            }
            else {
                clickindex--;
                pointsminus();
                alert("Das war das falsche Wort");
            }

        }
    }

    if (sentence[random1].single[4]) {
        if (clickindex == 5) {
            var value5: string = document.querySelector(".divsinglewords:hover").innerHTML;
            var array5: string = sentence[random1].single[4];

            if (value5 == array5) {
                points();
                document.querySelector("#right").innerHTML = sentence[random1].single[0] + sentence[random1].single[1] +
                    sentence[random1].single[2] + sentence[random1].single[3] + sentence[random1].single[4];

                if (5 == sentence[random1].single.length) {
                    levelcount++;
                    setTimeout(function (): void {
                        clearright();
                    }, 700);
                    clickindex = 0;
                    document.querySelector("#random").innerHTML = "";
                    sentences2();
                    //zaehler();
                    //document.querySelector("#random").addEventListener('click', zaehler);
                    //sobald Levelcount bei >= 5: werden alle texte inner html ersetzt und überschrieben
                    if (levelcount >= 5) {

                        document.querySelector("#german").innerHTML = "";
                        document.querySelector("#german").innerHTML = "Dein finaler Punktestand: " + counter;
                        document.querySelector("#right").innerHTML = "";
                        document.querySelector("#right").innerHTML = "Glückwunsch!";
                        document.querySelector("#random").innerHTML = "";
                        document.querySelector("#random").innerHTML = "Gehe zurück zur Startseite, um das nächste Level zu spielen";
                    }
                }
            }
            else {
                clickindex--;
                pointsminus();
                alert("Das war das falsche Wort");
            }

        }
    }

    if (sentence[random1].single[5]) {
        if (clickindex == 6) {
            var value6: string = document.querySelector(".divsinglewords:hover").innerHTML;
            var array6: string = sentence[random1].single[5];

            if (value6 == array6) {
                points();
                document.querySelector("#right").innerHTML = sentence[random1].single[0] + sentence[random1].single[1] +
                    sentence[random1].single[2] + sentence[random1].single[3] + sentence[random1].single[4] + sentence[random1].single[5];

                if (6 == sentence[random1].single.length) {
                    levelcount++;
                    setTimeout(function (): void {
                        clearright();
                    }, 700);
                    clickindex = 0;
                    document.querySelector("#random").innerHTML = "";
                    sentences2();
                    //zaehler();
                    //document.querySelector("#random").addEventListener('click', zaehler);
                    //sobald Levelcount bei >= 5: werden alle texte inner html ersetzt und überschrieben
                    if (levelcount >= 5) {

                        document.querySelector("#german").innerHTML = "";
                        document.querySelector("#german").innerHTML = "Dein finaler Punktestand: " + counter;
                        document.querySelector("#right").innerHTML = "";
                        document.querySelector("#right").innerHTML = "Glückwunsch!";
                        document.querySelector("#random").innerHTML = "";
                        document.querySelector("#random").innerHTML = "Gehe zurück zur Startseite, um das nächste Level zu spielen";
                    }
                }
            }
            else {
                clickindex--;
                pointsminus();
                alert("Das war das falsche Wort");
            }

        }
    }

    if (sentence[random1].single[6]) {
        if (clickindex == 7) {
            var value7: string = document.querySelector(".divsinglewords:hover").innerHTML;
            var array7: string = sentence[random1].single[6];

            if (value7 == array7) {
                points();
                document.querySelector("#right").innerHTML = sentence[random1].single[0] + sentence[random1].single[1] +
                    sentence[random1].single[2] + sentence[random1].single[3] + sentence[random1].single[4] + sentence[random1].single[5]
                    + sentence[random1].single[6];

                if (7 == sentence[random1].single.length) {
                    levelcount++;
                    setTimeout(function (): void {
                        clearright();
                    }, 500);
                    clickindex = 0;
                    document.querySelector("#random").innerHTML = "";
                    sentences2();
                    //zaehler();
                    //document.querySelector("#random").addEventListener('click', zaehler);
                    //sobald Levelcount bei >= 5: werden alle texte inner html ersetzt und überschrieben
                    if (levelcount >= 5) {

                        document.querySelector("#german").innerHTML = "";
                        document.querySelector("#german").innerHTML = "Dein finaler Punktestand: " + counter;
                        document.querySelector("#right").innerHTML = "";
                        document.querySelector("#right").innerHTML = "Glückwunsch!";
                        document.querySelector("#random").innerHTML = "";
                        document.querySelector("#random").innerHTML = "Gehe zurück zur Startseite, um das nächste Level zu spielen";
                    }
                }
            }
            else {
                clickindex--;
                pointsminus();
                alert("Das war das falsche Wort");
            }

        }
    }

}


//Variable für den Punktestand
var counter: number = 0;

//überschreibt Punkte und zählt hoch
function points(): void {
    counter++;
    document.querySelector("#points").innerHTML = "Punkte: " + counter;
}

//zieht Punkte ab, wird nicht kleiner als 0
function pointsminus(): void {
    counter--;
    if (counter <= 0) {
        counter = 0;
    }
    document.querySelector("#points").innerHTML = "Punkte: " + counter;

}


//Fkt. macht den Platz von letzem spanischem Satz wieder leer
function clearright(): void {
    var clearwords: HTMLElement = document.getElementById("right");
    document.querySelector("#right").innerHTML = "";
}

//zweite sentence Fkt., genau gleich um Wörter neu zu laden nach abschließen der Aufgabe
function sentences2(): void {

    random1 =  Math.floor(Math.random() * sentence.length);
    
    console.log(random1);
    document.querySelector("#german").innerHTML = sentence[random1].german;

    for (let index: number = 0; index < sentence[random1].single.length; index++) {
        var newelement: HTMLDivElement = document.createElement("div");

        newelement.innerHTML = sentence[random1].single[index];
        newelement.classList.add("divsinglewords");

        var getelement: HTMLElement = document.querySelector("#random");
        getelement.appendChild(newelement);

        for (let index: number = getelement.children.length; index >= 0; index--) {
            getelement.appendChild(getelement.children[Math.random() * index | 0]);
        }
    }

}
