namespace Endabgabe {

    export class Firework {
        x: number;
        y: number;
        hue: number;
        size: number;
        endSize: number;
        color: string;


        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
            this.hue = hue;
            this.size = size;
            this.endSize = 100;
            this.color = color;
        }

        draw(): void {
            
            if (this.size < this.endSize) {
                crc2.beginPath();
                crc2.globalAlpha = 0.3;
                crc2.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                crc2.fillStyle = this.color;
                crc2.fill();
                crc2.closePath();
            }
        }
        
        update(): void {
            size = this.size + 15;
            console.log(this.size);
        }

        colorPicker(): void {
            let formData: FormData = new FormData(document.forms[0]);
            color = <string>formData.get("Picker");
        }
    }
}