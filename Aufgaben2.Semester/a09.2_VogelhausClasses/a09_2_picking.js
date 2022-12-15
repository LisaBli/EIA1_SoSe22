var a09_2_Vogelhaus;
(function (a09_2_Vogelhaus) {
    class Picking {
        position;
        velocity;
        size;
        constructor(_size) {
            this.position = new a09_2_Vogelhaus.VectorBird(0, 0);
            this.velocity = new a09_2_Vogelhaus.VectorBird(0, 0);
            this.size = _size;
        }
        draw() {
            console.log("draw bird");
            let canvas = document.querySelector("canvas");
            let crc2 = canvas.getContext("2d");
            let rhole = 15;
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
            let rAuge = 2;
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
        }
        move(_timeslice) {
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
    a09_2_Vogelhaus.Picking = Picking;
})(a09_2_Vogelhaus || (a09_2_Vogelhaus = {}));
//# sourceMappingURL=a09_2_picking.js.map