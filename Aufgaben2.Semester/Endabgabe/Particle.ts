
namespace Endabgabe {

    export class Particle {

        x: number;
        y: number;
        hue: number;
        size: number;
        endSize: number;
        color: string;
        speed: number;
        angle: number;
        radian: number;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
            this.hue = hue;
            this.size = 10;
            this.endSize = 100;
            this.color = color;
            this.speed = 30;
            this.angle = 36;
        }

        //this.size > 0
        draw(): void {
            if (this.size < this.endSize) {
                crc2.beginPath();
                crc2.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                crc2.fillStyle = this.color;
                crc2.fill();
                crc2.closePath();
            }
        }

        update(): void {
            this.radian = (Math.PI / 180) * this.angle;
            this.x += this.speed * Math.sin(this.radian);
            this.y += this.speed * Math.cos(this.radian);
            this.size -= 0.05;
            //size = this.size + 15;
        }

        colorPicker(): void {
            let formData: FormData = new FormData(document.forms[0]);
            color = <string>formData.get("Picker");
        }
    }
}