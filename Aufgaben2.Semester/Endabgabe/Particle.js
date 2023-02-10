var Endabgabe;
(function (Endabgabe) {
    class Particle {
        x;
        y;
        hue;
        size;
        endSize;
        color;
        speed;
        angle;
        radian;
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
            this.hue = Endabgabe.hue;
            this.size = 10;
            this.endSize = 100;
            this.color = Endabgabe.color;
            this.speed = 30;
            this.angle = 36;
        }
        //this.size > 0
        draw() {
            if (this.size < this.endSize) {
                Endabgabe.crc2.beginPath();
                Endabgabe.crc2.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                Endabgabe.crc2.fillStyle = this.color;
                Endabgabe.crc2.fill();
                Endabgabe.crc2.closePath();
            }
        }
        update() {
            this.radian = (Math.PI / 180) * this.angle;
            this.x += this.speed * Math.sin(this.radian);
            this.y += this.speed * Math.cos(this.radian);
            this.size -= 0.05;
            //size = this.size + 15;
        }
        colorPicker() {
            let formData = new FormData(document.forms[0]);
            Endabgabe.color = formData.get("Picker");
        }
    }
    Endabgabe.Particle = Particle;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Particle.js.map