/*
Aufgabe: 07
Name: Lisa Blindenhöfer
Matrikel Nr.: 271450
Datum: 26.11.2022
Quellen:
*/
var a08_generativeArt;
(function (a08_generativeArt) {
    window.addEventListener("load", handleload);
    function handleload(_event) {
        let canvas = document.querySelector("canvas");
        let crc2 = canvas.getContext("2d");
        circle(crc2);
        square();
        triangle();
    }
    function circle(crc2) {
        console.log("test");
        //let gradient: CanvasGradient = crc2.createRadialGradient()
        for (let index = 0; index < 70; index++) {
            let randomradius = Math.floor(Math.random() * (100 - 10) + 10);
            let randomx = Math.floor(Math.random() * (1450 - 0.5) + 0.5);
            let randomy = Math.floor(Math.random() * (750 - 0.5) + 0.5);
            let random = Math.floor(Math.random() * (4 - 1) + 1);
            Math.round(random);
            crc2.beginPath();
            //crc2.fillStyle = "white";
            crc2.arc(randomx, randomy, randomradius, 0, 2 * Math.PI);
            crc2.fill();
            //crc2.restore();
            if (random == 1) {
                crc2.fillStyle = "red";
            }
            if (random == 2) {
                crc2.fillStyle = "blue";
            }
            if (random == 3) {
                crc2.fillStyle = "pink";
            }
        }
    }
    function square() {
    }
    function triangle() {
    }
})(a08_generativeArt || (a08_generativeArt = {}));
//# sourceMappingURL=a07.js.map