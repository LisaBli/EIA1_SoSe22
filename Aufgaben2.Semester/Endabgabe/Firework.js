var Endabgabe;
(function (Endabgabe) {
    class Firework {
        x;
        y;
        hue;
        size;
        endSize;
        color;
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
            this.hue = Endabgabe.hue;
            this.size = Endabgabe.size;
            this.endSize = 100;
            this.color = Endabgabe.color;
        }
        draw() {
            if (this.size < this.endSize) {
                Endabgabe.crc2.beginPath();
                Endabgabe.crc2.globalAlpha = 0.3;
                Endabgabe.crc2.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                Endabgabe.crc2.fillStyle = this.color;
                Endabgabe.crc2.fill();
                Endabgabe.crc2.closePath();
            }
        }
        update() {
            Endabgabe.size = this.size + 15;
            console.log(this.size);
        }
        colorPicker() {
            let formData = new FormData(document.forms[0]);
            Endabgabe.color = formData.get("Picker");
        }
    }
    Endabgabe.Firework = Firework;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Firework.js.map