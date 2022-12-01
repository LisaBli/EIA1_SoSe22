/*
Aufgabe: 08
Name: Lisa Blindenhöfer
Matrikel Nr.: 271450
Datum: 03.12.2022
Quellen: W3schools, EIA-Videos Lektion 08, Bastian Aberle, Arthur Aguiar
*/
var a08_2_Vogelhaus;
(function (a08_2_Vogelhaus) {
    window.addEventListener("load", handleLoad);
    let crc2;
    let golden = 0.62;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        let horizon = crc2.canvas.height * golden;
        let mountains = { x: 0, y: horizon };
        drawBackground();
        drawSun({ x: 100, y: 75 });
        drawCloud({ x: 500, y: 125 }, { x: 250, y: 75 });
        drawmountains(mountains, 75, 200, "grey", "white");
        drawmountains(mountains, 50, 150, "grey", "lightgrey");
        drawtrees({ x: 200, y: 420 });
        drawsnowman({ x: 90, y: 620 });
        drawhouse({ x: 800, y: 540 });
        drawbird();
        drawsnowflakes();
    }
    function drawBackground() {
        console.log("Background");
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "white");
        gradient.addColorStop(1, "#b4c3d7");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawSun(_position) {
        console.log("sun", _position);
        let r1 = 40;
        let r2 = 150;
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(50, 100%, 40%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
    function drawCloud(_position, _size) {
        console.log("Cloud", _position, _size);
        let nParticles = 40;
        let rparticle = 60;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, rparticle);
        particle.arc(0, 0, rparticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawmountains(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("Mountains", _position, _min, _max);
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);
        crc2.lineTo(x, 0);
        crc2.closePath();
        let gradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();
    }
    function drawtrees(_position) {
        console.log("trees");
        crc2.save();
        crc2.shadowBlur = 3;
        crc2.shadowColor = "black";
        crc2.beginPath();
        crc2.translate(_position.x, _position.y);
        crc2.scale(2, 2);
        crc2.moveTo(20, 0);
        crc2.lineTo(-20, 0);
        crc2.lineTo(-15, -15);
        crc2.lineTo(-18, -15);
        crc2.lineTo(-10, -36);
        crc2.lineTo(-12, -36);
        crc2.lineTo(-5, -54);
        crc2.lineTo(-7, -54);
        crc2.lineTo(0, -73);
        crc2.lineTo(7, -54);
        crc2.lineTo(5, -54);
        crc2.lineTo(12, -36);
        crc2.lineTo(10, -36);
        crc2.lineTo(18, -15);
        crc2.lineTo(15, -15);
        crc2.fillStyle = "darkgreen";
        crc2.fill();
        crc2.closePath();
        crc2.restore();
        crc2.save();
        crc2.shadowBlur = 3;
        crc2.shadowColor = "black";
        crc2.beginPath();
        crc2.translate(_position.x, _position.y);
        crc2.moveTo(5, 0);
        crc2.lineTo(-5, 0);
        crc2.lineTo(-5, 19);
        crc2.lineTo(5, 19);
        crc2.fillStyle = "brown";
        crc2.fill();
        crc2.closePath();
        crc2.restore();
        for (let index = 0; index < 7; index++) {
            let randomx = Math.floor(Math.random() * (700 - 200) + 200);
            let randomy = Math.floor(Math.random() * (600 - 420) + 420);
            let randomscale = Math.floor(Math.random() * (3 - 1) + 1);
            crc2.save();
            crc2.shadowBlur = 3;
            crc2.shadowColor = "black";
            crc2.beginPath();
            crc2.translate(randomx, randomy);
            crc2.scale(randomscale, randomscale);
            crc2.moveTo(20, 0);
            crc2.lineTo(-20, 0);
            crc2.lineTo(-15, -15);
            crc2.lineTo(-18, -15);
            crc2.lineTo(-10, -36);
            crc2.lineTo(-12, -36);
            crc2.lineTo(-5, -54);
            crc2.lineTo(-7, -54);
            crc2.lineTo(0, -73);
            crc2.lineTo(7, -54);
            crc2.lineTo(5, -54);
            crc2.lineTo(12, -36);
            crc2.lineTo(10, -36);
            crc2.lineTo(18, -15);
            crc2.lineTo(15, -15);
            crc2.fillStyle = "darkgreen";
            crc2.fill();
            crc2.closePath();
            crc2.restore();
            crc2.save();
            crc2.shadowBlur = 3;
            crc2.shadowColor = "black";
            crc2.beginPath();
            crc2.translate(randomx, randomy);
            crc2.moveTo(5, 0);
            crc2.lineTo(-5, 0);
            crc2.lineTo(-5, 19);
            crc2.lineTo(5, 19);
            crc2.fillStyle = "brown";
            crc2.fill();
            crc2.closePath();
            crc2.restore();
        }
    }
    function drawsnowman(_position) {
        console.log("snowman", _position);
        let r1 = 60;
        let r2 = 80;
        let r3 = 40;
        let r4 = 60;
        let r5 = 30;
        let r6 = 50;
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        let gradient2 = crc2.createRadialGradient(0, 0, r3, 0, 0, r4);
        let gradient3 = crc2.createRadialGradient(0, 0, r5, 0, 0, r6);
        gradient.addColorStop(0, "HSLA(0, 0%, 100%, 1)");
        gradient.addColorStop(1, "HSLA(240, 50%, 90%, 0)");
        gradient2.addColorStop(0, "HSLA(0, 0%, 100%, 1)");
        gradient2.addColorStop(1, "HSLA(240, 50%, 95%, 0)");
        gradient3.addColorStop(0, "HSLA(0, 0%, 100%, 1)");
        gradient3.addColorStop(1, "HSLA(240, 50%, 94%, 0)");
        crc2.save();
        crc2.beginPath();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();
        crc2.restore();
        crc2.save();
        crc2.beginPath();
        crc2.translate(_position.x, 540);
        crc2.fillStyle = gradient2;
        crc2.arc(0, 0, r4, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();
        crc2.restore();
        crc2.save();
        crc2.beginPath();
        crc2.translate(_position.x, 480);
        crc2.fillStyle = gradient3;
        crc2.arc(0, 0, r6, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();
        crc2.restore();
        let rAuge = 4;
        crc2.save();
        crc2.beginPath();
        crc2.translate(_position.x, 480);
        crc2.fillStyle = "darkgrey";
        crc2.arc(11, -10, rAuge, 0, 2 * Math.PI);
        crc2.arc(-11, -10, rAuge, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();
        crc2.restore();
        crc2.save();
        crc2.beginPath();
        crc2.translate(_position.x, 480);
        crc2.moveTo(6, 0);
        crc2.lineTo(0, 22);
        crc2.lineTo(-6, 0);
        crc2.fillStyle = "orange";
        crc2.fill();
        crc2.closePath();
        crc2.restore();
        crc2.save();
        crc2.beginPath();
        crc2.translate(_position.x, 540);
        crc2.fillStyle = "darkgrey";
        crc2.arc(0, 5, rAuge, 0, 2 * Math.PI);
        crc2.arc(0, -14, rAuge, 0, 2 * Math.PI);
        crc2.arc(0, 24, rAuge, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();
        crc2.restore();
        crc2.save();
        crc2.beginPath();
        crc2.translate(_position.x, 480);
        crc2.moveTo(30, -32);
        crc2.lineTo(-30, -32);
        crc2.lineTo(-30, -44);
        crc2.lineTo(-20, -44);
        crc2.lineTo(-20, -58);
        crc2.lineTo(20, -58);
        crc2.lineTo(20, -44);
        crc2.lineTo(30, -44);
        crc2.fillStyle = "darkgrey";
        crc2.fill();
        crc2.closePath();
        crc2.restore();
    }
    function drawhouse(_position) {
        console.log("Vogelhaus");
        crc2.save();
        crc2.beginPath();
        crc2.translate(_position.x, _position.y);
        crc2.moveTo(-80, 0);
        crc2.lineTo(80, 0);
        crc2.lineTo(80, -120);
        crc2.lineTo(120, -120);
        crc2.lineTo(0, -180);
        crc2.lineTo(-120, -120);
        crc2.lineTo(-80, -120);
        crc2.fillStyle = "brown";
        crc2.fill();
        crc2.closePath();
        crc2.restore();
        crc2.save();
        crc2.beginPath();
        crc2.translate(_position.x, _position.y);
        crc2.moveTo(-8, 0);
        crc2.lineTo(8, 0);
        crc2.lineTo(8, 50);
        crc2.lineTo(30, 110);
        crc2.lineTo(26, 110);
        crc2.lineTo(8, 80);
        crc2.lineTo(5, 110);
        crc2.lineTo(-5, 110);
        crc2.lineTo(-8, 80);
        crc2.lineTo(-26, 110);
        crc2.lineTo(-30, 110);
        crc2.lineTo(-8, 50);
        crc2.fillStyle = "brown";
        crc2.fill();
        crc2.closePath();
        crc2.restore();
        let rhole = 32;
        crc2.save();
        crc2.beginPath();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = "wihite";
        crc2.arc(0, -60, rhole, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();
        crc2.restore();
    }
    function drawbird() {
        console.log("birds");
    }
    function drawsnowflakes() {
        console.log("snowflakes");
        for (let index = 0; index < 600; index++) {
            let randomx = Math.floor(Math.random() * (1000 - 1) + 1);
            let randomy = Math.floor(Math.random() * (700 - 1) + 1);
            let randomscale = Math.floor(Math.random() * (4 - 1) + 1);
            let r1 = 1;
            let r2 = 2;
            let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            gradient.addColorStop(0, "HSLA(0, 0%, 100%, 1)");
            gradient.addColorStop(1, "HSLA(240, 50%, 90%, 0)");
            crc2.save();
            crc2.scale(randomscale, randomscale);
            crc2.beginPath();
            crc2.translate(randomx, randomy);
            crc2.fillStyle = gradient;
            crc2.arc(0, 0, r2, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            crc2.restore();
        }
    }
})(a08_2_Vogelhaus || (a08_2_Vogelhaus = {}));
//# sourceMappingURL=a08.js.map