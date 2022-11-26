/*
Aufgabe: 07
Name: Lisa Blindenhöfer
Matrikel Nr.: 271450
Datum: 26.11.2022
Quellen: W3schools
*/


namespace a08_generativeArt {

    window.addEventListener("load", handleload);


    function handleload(_event: Event): void {
        let canvas: HTMLCanvasElement = document.querySelector("canvas");
        let crc2: CanvasRenderingContext2D = canvas.getContext("2d");
        lines(crc2);
        circle(crc2);
        triangle(crc2);
        document.querySelector("#button1").addEventListener("click", button);
    }

    function lines(crc2: CanvasRenderingContext2D): void {
        for (let index: number = 0; index < 40; index++) {
            let randomx: number = Math.floor(Math.random() * (1450 - 0.5) + 0.5);
            let randomy: number = Math.floor(Math.random() * (750 - 0.5) + 0.5);
            let randoma: number = Math.floor(Math.random() * (1450 - 0.5) + 0.5);
            let randomb: number = Math.floor(Math.random() * (750 - 0.5) + 0.5);
            let random: number = Math.floor(Math.random() * (4 - 1) + 1);
            Math.round(random);
          
            crc2.beginPath();
            crc2.moveTo(randomx, randomy);
            crc2.lineTo(randoma, randomb);
            crc2.stroke();

            if (random == 1) {
                crc2.strokeStyle = "#008ECC";
            }
            if (random == 2) {
                crc2.strokeStyle = "blue";
            }
            if (random == 3) {
                crc2.strokeStyle = "#F5FF00";
            }

            crc2.shadowBlur = 20;
            
        }
    }

    function circle(crc2: CanvasRenderingContext2D): void {
        console.log("test");

        for (let index: number = 0; index < 70; index++) {
            let randomradius: number = Math.floor(Math.random() * (100 - 10) + 10);
            let randomx: number = Math.floor(Math.random() * (1450 - 0.5) + 0.5);
            let randomy: number = Math.floor(Math.random() * (750 - 0.5) + 0.5);
            let random: number = Math.floor(Math.random() * (4 - 1) + 1);
            Math.round(random);

            crc2.beginPath();
            crc2.arc(randomx, randomy, randomradius, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();

            if (random == 1) {
                let gradient: CanvasGradient = crc2.createLinearGradient(randomx, randomy, randomx, 50);
                gradient.addColorStop(0, "#0F52BA");
                gradient.addColorStop(1, "#89CFF0");
                crc2.fillStyle = gradient;
            }
            if (random == 2) {
                crc2.fillStyle = "#57A0D3";
            }
            if (random == 3) {
                crc2.fillStyle = "blue";
            }
        }
    }

    function triangle(crc2: CanvasRenderingContext2D): void {
       
        for (let index: number = 0; index < 40; index++) {
            let randomx: number = Math.floor(Math.random() * (1450 - 0.5) + 0.5);
            let randomy: number = Math.floor(Math.random() * (750 - 0.5) + 0.5);
            let one: number = randomx - 100;
            let two: number = randomy + 130;
            let randomz: number = Math.random() * (10 - 1) + 1;

            crc2.beginPath();
            crc2.moveTo(randomx, randomy);
            crc2.lineTo(one, randomy);
            crc2.lineTo(one, two);
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.closePath();
            crc2.rotate(randomz);
        }
    }

    function button(): void {
        location.reload();
    }
}