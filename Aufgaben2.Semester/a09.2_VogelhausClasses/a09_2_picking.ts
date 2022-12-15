namespace a09_2_Vogelhaus {

    export class Picking {

        position: VectorBird;
        velocity: VectorBird;
        size: number;
        

        constructor(_size: number) {
            this.position = new VectorBird(0, 0);
            this.velocity = new VectorBird(0, 0);
            this.size = _size;
        }

        draw(): void {
            console.log("draw bird");
            let canvas: HTMLCanvasElement = document.querySelector("canvas");
            let crc2: CanvasRenderingContext2D = canvas.getContext("2d");
           
            let rhole: number = 15;
            crc2.save();
            crc2.beginPath();
            crc2.translate( 800, 466 );
            crc2.fillStyle = "#79553C";
            crc2.arc(0, 0, rhole, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            crc2.restore();
    
            crc2.save();
            crc2.beginPath();
            crc2.translate( 800, 466 );
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
            crc2.translate( 800, 466 );
            crc2.fillStyle = "black";
            crc2.arc(-4, -5, rAuge, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            crc2.restore();
    
            crc2.save();
            crc2.beginPath();
            crc2.translate( 800, 466 );
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
        }

        move(_timeslice: number): void {
            console.log("move bird");
        //     let canvas: HTMLCanvasElement = document.querySelector("canvas");
        //     let crc2: CanvasRenderingContext2D = canvas.getContext("2d");

        //     let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
        //     offset.scale(_timeslice);
        //     this.position.add(offset);

        //     if (this.position.x < 0)
        //         this.position.x += crc2.canvas.width;
        //     if (this.position.y < 0)
        //         this.position.y += 420;
        //     if (this.position.x > crc2.canvas.width)
        //         this.position.x -= crc2.canvas.width;
        //     if (this.position.y > crc2.canvas.height)
        //         this.position.y -= crc2.canvas.height;
        }

    }

}