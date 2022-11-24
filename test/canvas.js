var canvas;
(function (canvas_1) {
    window.addEventListener("load", handleload);
    function handleload(_event) {
        let canvas = document.querySelector("canvas");
        let crc2 = canvas.getContext("2d");
        console.log(canvas);
        console.log(crc2);
        crc2.beginPath();
        crc2.arc(100, 100, 20, 0, 1.5 * Math.PI);
        crc2.closePath();
        crc2.stroke();
        crc2.translate(100, 100);
        crc2.rotate(0.1 * Math.PI);
        crc2.scale(2, 2);
        crc2.beginPath();
        crc2.moveTo(-25, 25);
        crc2.lineTo(0, -25);
        crc2.scale(3, 3);
        crc2.closePath();
    }
})(canvas || (canvas = {}));
//# sourceMappingURL=canvas.js.map