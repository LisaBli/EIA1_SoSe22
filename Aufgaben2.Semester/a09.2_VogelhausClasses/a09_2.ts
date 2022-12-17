/*
Aufgabe: 09.2
Name: Lisa Blindenhöfer
Matrikel Nr.: 271450
Datum: 17.12.2022
Quellen: W3schools, EIA-Videos Lektion 09, Bastian Aberle
*/


namespace a09_2_Vogelhaus {

    window.addEventListener("load", handleload);

    let crc2: CanvasRenderingContext2D;
    let golden: number = 0.62;

    interface Vector {
        x: number;
        y: number;
    }

    let background: ImageData;
    let snowflakes: Snowflake[] = [];
    let birds: Bird[] = [];

    export function handleload(): void {
        console.log("handleload");

        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        drawBackground();
        create();
        setInterval(update, 20);

    }

    function create(): void {
        console.log("create snowflakes");

        for (let index: number = 0; index < 200; index++) {

            let randomscale: number = Math.floor(Math.random() * (3 - 1) + 1);
            let snowflake: Snowflake = new Snowflake(randomscale);
            snowflakes.push(snowflake);
        }

        for (let indexbird: number = 0; indexbird < 17; indexbird++) {
            let randomscale2: number = Math.floor(Math.random() * (3 - 0.5) + 0.5);
            let bird: Bird = new Bird(randomscale2);
            birds.push(bird);
        }
    }

    function update(): void {
        console.log("Update");
        crc2.putImageData(background, 0, 0);

        for (let snowflake of snowflakes) {
            snowflake.moveBy(1 / 50);
            snowflake.draw();
        }

        for (let bird of birds) {
            bird.draw();
            bird.move(1 / 200);
        }
    }


    export function drawBackground(): void {
        console.log("Background");

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "white");
        gradient.addColorStop(1, "#b4c3d7");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);


        let horizon: number = crc2.canvas.height * golden;
        let mountains: Vector = { x: 0, y: horizon };


        drawSun({ x: 100, y: 75 });
        drawCloud({ x: 500, y: 125 }, { x: 250, y: 75 });

        drawmountains(mountains, 75, 200, "grey", "white");
        drawmountains(mountains, 50, 150, "grey", "lightgrey");
        drawtrees({ x: 200, y: 420 });
        drawsnowman({ x: 90, y: 620 });
        drawhouse({ x: 830, y: 540 });
        drawbird({ x: 500, y: 610 });
        drawbird2({ x: 800, y: 466 });

        background = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    function drawSun(_position: Vector): void {
        console.log("sun", _position);

        let r1: number = 40;
        let r2: number = 150;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(50, 100%, 40%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }


    function drawCloud(_position: Vector, _size: Vector): void {
        console.log("Cloud", _position, _size);

        let nParticles: number = 40;
        let rparticle: number = 60;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, rparticle);

        particle.arc(0, 0, rparticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }

    function drawmountains(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
        console.log("Mountains", _position, _min, _max);
        let stepMin: number = 50;
        let stepMax: number = 150;
        let x: number = 0;

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);

        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y: number = -_min - Math.random() * (_max - _min);

            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);

        crc2.lineTo(x, 0);
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);

        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();
    }

    function drawtrees(_position: Vector): void {
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

        for (let index: number = 0; index < 7; index++) {
            let randomx: number = Math.floor(Math.random() * (750 - 200) + 200);
            let randomy: number = Math.floor(Math.random() * (500 - 420) + 420);
            let randomscale: number = Math.floor(Math.random() * (3 - 1) + 1);

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

    function drawsnowman(_position: Vector): void {
        console.log("snowman", _position);

        let r1: number = 60;
        let r2: number = 80;
        let r3: number = 40;
        let r4: number = 60;
        let r5: number = 30;
        let r6: number = 50;

        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        let gradient2: CanvasGradient = crc2.createRadialGradient(0, 0, r3, 0, 0, r4);
        let gradient3: CanvasGradient = crc2.createRadialGradient(0, 0, r5, 0, 0, r6);

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

        let rAuge: number = 4;
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

    function drawhouse(_position: Vector): void {
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
        crc2.lineTo(-80, 0);
        crc2.lineWidth = 6;
        crc2.strokeStyle = "brown";
        crc2.stroke();
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
    }

    function drawbird(_position: Vector): void {
        console.log("birds");

        let rhole: number = 15;
        crc2.save();
        crc2.beginPath();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = "brown";
        crc2.arc(0, 0, rhole, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();
        crc2.restore();

        crc2.save();
        crc2.beginPath();
        crc2.translate(_position.x, _position.y);
        crc2.moveTo(15, -5);
        crc2.lineTo(15, 5);
        crc2.lineTo(30, 0);
        crc2.fillStyle = "orange";
        crc2.fill();
        crc2.closePath();
        crc2.restore();

        let rAuge: number = 2;
        crc2.save();
        crc2.beginPath();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = "black";
        crc2.arc(4, -5, rAuge, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();
        crc2.restore();

        crc2.save();
        crc2.beginPath();
        crc2.translate(_position.x, _position.y);
        crc2.moveTo(2, 10);
        crc2.bezierCurveTo(10, 30, 2, 45, -42, 55);
        crc2.lineTo(-42, 70);
        crc2.lineTo(-28, 70);
        crc2.lineTo(-28, 71);
        crc2.lineTo(-50, 71);
        crc2.lineTo(-40, 70);
        crc2.lineTo(-40, 55);

        crc2.lineTo(-44, 55);
        crc2.lineTo(-44, 67);
        crc2.lineTo(-30, 67);
        crc2.lineTo(-30, 67);
        crc2.lineTo(-30, 68);
        crc2.lineTo(-56, 67);
        crc2.lineTo(-46, 67);
        crc2.lineTo(-46, 55);

        crc2.lineTo(-90, 60);
        crc2.lineTo(-93, 55);
        crc2.lineTo(-56, 40);
        crc2.bezierCurveTo(-40, 30, -30, 10, -2, 10);
        crc2.fillStyle = "brown";
        crc2.fill();
        crc2.closePath();
        crc2.restore();

        for (let index: number = 0; index < 2; index++) {
            let randomx: number = Math.floor(Math.random() * (700 - 220) + 220);
            let randomy: number = Math.floor(Math.random() * (630 - 490) + 490);
            let randomcolor: number = Math.floor(Math.random() * (4 - 1) + 1);
            Math.round(randomcolor);

            if (randomcolor == 1) {
                crc2.fillStyle = "#b09a85";
            }
            if (randomcolor == 2) {
                crc2.fillStyle = "brown";
            }
            if (randomcolor == 3) {
                crc2.fillStyle = "#2c241c";
            }

            let rhole: number = 15;
            crc2.save();
            crc2.beginPath();
            crc2.translate(randomx, randomy);
            crc2.arc(0, 0, rhole, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            crc2.restore();

            crc2.save();
            crc2.beginPath();
            crc2.translate(randomx, randomy);
            crc2.moveTo(15, -5);
            crc2.lineTo(15, 5);
            crc2.lineTo(30, 0);
            crc2.fillStyle = "orange";
            crc2.fill();
            crc2.closePath();
            crc2.restore();

            let rAuge: number = 2;
            crc2.save();
            crc2.beginPath();
            crc2.translate(randomx, randomy);
            crc2.fillStyle = "black";
            crc2.arc(4, -5, rAuge, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            crc2.restore();

            crc2.save();
            crc2.beginPath();
            crc2.translate(randomx, randomy);
            crc2.moveTo(2, 10);
            crc2.bezierCurveTo(10, 30, 2, 45, -42, 55);
            crc2.lineTo(-42, 70);
            crc2.lineTo(-28, 70);
            crc2.lineTo(-28, 71);
            crc2.lineTo(-50, 71);
            crc2.lineTo(-40, 70);
            crc2.lineTo(-40, 55);

            crc2.lineTo(-44, 55);
            crc2.lineTo(-44, 67);
            crc2.lineTo(-30, 67);
            crc2.lineTo(-30, 67);
            crc2.lineTo(-30, 68);
            crc2.lineTo(-56, 67);
            crc2.lineTo(-46, 67);
            crc2.lineTo(-46, 55);

            crc2.lineTo(-90, 60);
            crc2.lineTo(-93, 55);
            crc2.lineTo(-56, 40);
            crc2.bezierCurveTo(-40, 30, -30, 10, -2, 10);
            crc2.fill();
            crc2.closePath();
            crc2.restore();
        }
    }


    function drawbird2(_position: Vector): void {
        console.log("bird2");

        let canvas: HTMLCanvasElement = document.querySelector("canvas");
        let crc2: CanvasRenderingContext2D = canvas.getContext("2d");

        let rhole: number = 15;
        crc2.save();
        crc2.beginPath();
        crc2.translate(800, 466);
        crc2.fillStyle = "#79553C";
        crc2.arc(0, 0, rhole, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();
        crc2.restore();

        crc2.save();
        crc2.beginPath();
        crc2.translate(800, 466);
        crc2.moveTo(-15, -5);
        crc2.lineTo(-15, 5);
        crc2.lineTo(-30, 0);
        crc2.fillStyle = "orange";
        crc2.fill();
        crc2.closePath();
        crc2.restore();

        let rAuge: number = 2;
        crc2.save();
        crc2.beginPath();
        crc2.translate(800, 466);
        crc2.fillStyle = "black";
        crc2.arc(-4, -5, rAuge, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();
        crc2.restore();

        crc2.save();
        crc2.beginPath();
        crc2.translate(800, 466);
        crc2.moveTo(2, 10);
        crc2.bezierCurveTo(-10, 30, -2, 45, 42, 55);
        crc2.lineTo(42, 70);
        crc2.lineTo(28, 70);
        crc2.lineTo(28, 71);
        crc2.lineTo(50, 71);
        crc2.lineTo(40, 70);
        crc2.lineTo(40, 55);

        crc2.lineTo(44, 55);
        crc2.lineTo(44, 67);
        crc2.lineTo(30, 67);
        crc2.lineTo(30, 67);
        crc2.lineTo(30, 68);
        crc2.lineTo(56, 67);
        crc2.lineTo(46, 67);
        crc2.lineTo(46, 55);

        crc2.lineTo(90, 60);
        crc2.lineTo(93, 55);
        crc2.lineTo(56, 40);
        crc2.bezierCurveTo(40, 30, 30, 10, 2, 10);
        crc2.fillStyle = "#79553C";
        crc2.fill();
        crc2.closePath();
        crc2.restore();


        for (let index: number = 0; index < 3; index++) {
            let randomx: number = Math.floor(Math.random() * (700 - 230) + 230);
            let randomy: number = Math.floor(Math.random() * (670 - 490) + 490);
            let randomcolor: number = Math.floor(Math.random() * (4 - 1) + 1);
            Math.round(randomcolor);

            if (randomcolor == 1) {
                crc2.fillStyle = "#79553C";
            }
            if (randomcolor == 2) {
                crc2.fillStyle = "#5B3A29";
            }
            if (randomcolor == 3) {
                crc2.fillStyle = "#2c241c";
            }

            let rhole: number = 15;
            crc2.save();
            crc2.beginPath();
            crc2.translate(randomx, randomy);
            crc2.scale(0.5, 0.5);
            crc2.arc(0, 0, rhole, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            crc2.restore();

            crc2.save();
            crc2.beginPath();
            crc2.translate(randomx, randomy);
            crc2.scale(0.5, 0.5);
            crc2.moveTo(-15, -5);
            crc2.lineTo(-15, 5);
            crc2.lineTo(-30, 0);
            crc2.fillStyle = "orange";
            crc2.fill();
            crc2.closePath();
            crc2.restore();

            let rAuge: number = 2;
            crc2.save();
            crc2.beginPath();
            crc2.translate(randomx, randomy);
            crc2.scale(0.5, 0.5);
            crc2.fillStyle = "black";
            crc2.arc(-4, -5, rAuge, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            crc2.restore();

            crc2.save();
            crc2.beginPath();
            crc2.translate(randomx, randomy);
            crc2.scale(0.5, 0.5);
            crc2.moveTo(2, 10);
            crc2.bezierCurveTo(-10, 30, -2, 45, 42, 55);
            crc2.lineTo(42, 70);
            crc2.lineTo(28, 70);
            crc2.lineTo(28, 71);
            crc2.lineTo(50, 71);
            crc2.lineTo(40, 70);
            crc2.lineTo(40, 55);

            crc2.lineTo(44, 55);
            crc2.lineTo(44, 67);
            crc2.lineTo(30, 67);
            crc2.lineTo(30, 67);
            crc2.lineTo(30, 68);
            crc2.lineTo(56, 67);
            crc2.lineTo(46, 67);
            crc2.lineTo(46, 55);

            crc2.lineTo(90, 60);
            crc2.lineTo(93, 55);
            crc2.lineTo(56, 40);
            crc2.bezierCurveTo(40, 30, 30, 10, 2, 10);
            crc2.fill();
            crc2.closePath();
            crc2.restore();
        }
    }


}