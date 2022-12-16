namespace a09_2_Vogelhaus {


    export class Snowflake {
        position: Vector;
        velocity: Vector;
        size: number;

        constructor(_size: number) {
            console.log("constructor Snowflakes");

            this.position = new Vector(0, 0);
            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 200);
            this.size = _size;
        }

        moveBy(_timeslice: number): void {
            console.log("move Snowflakes");

            let canvas: HTMLCanvasElement = document.querySelector("canvas");
            let crc2: CanvasRenderingContext2D = canvas.getContext("2d");

            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;

        }

        draw(): void {
            console.log("draw Snowflake");

            let canvas: HTMLCanvasElement = document.querySelector("canvas");
            let crc2: CanvasRenderingContext2D = canvas.getContext("2d");

           // let r1: number = 1;
            let r2: number = 2;

            // let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

            // gradient.addColorStop(0, "HSLA(0, 0%, 100%, 1)");
            // gradient.addColorStop(1, "HSLA(240, 50%, 90%, 0)");

            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size, this.size);
            crc2.fillStyle = "white";
            crc2.beginPath();
            crc2.arc(100, 10, r2, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.restore();

        }

        random(): void {

            let randomx: number = Math.floor(Math.random() * (1000 - 1) + 1);
            let randomy: number = Math.floor(Math.random() * (700 - 1) + 1);

        }
    }
}