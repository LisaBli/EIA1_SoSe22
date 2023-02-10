/*
Aufgabe: Endabgabe
Name: Lisa Blindenhöfer
Matrikel Nr.: 271450
Datum: 11.02.2023
Quellen: In Zusammenarbeit mit Bastian Aberle und Amin Lakhal
*/
var Endabgabe;
(function (Endabgabe) {
    window.addEventListener("load", handleLoad);
    Endabgabe.hue = 0;
    let x;
    let y;
    let savedColor;
    Endabgabe.size = 0;
    let background;
    async function handleLoad() {
        let button = document.querySelector("button[id=but1]");
        let response = await fetch("https://webuser.hs-furtwangen.de/~blindenh/Database/index.php/?command=find&collection=data");
        let entry = await response.text();
        let data = JSON.parse(entry);
        button.addEventListener("click", sendData);
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Endabgabe.crc2 = canvas.getContext("2d");
        drawBackground();
        document.querySelector("canvas").addEventListener("click", click);
        let form = document.querySelector("#LauncherForm");
        form.addEventListener("change", handleChange);
        loadData(data);
    }
    Endabgabe.handleLoad = handleLoad;
    function loadData(_data) {
        let list = [];
        for (let num in _data.data) {
            list.push(num);
        }
        for (let index of list) {
            let name = _data.data[index].Name;
            let density = _data.data[index].Density;
            let picker = _data.data[index].Picker;
            let speed = _data.data[index].Speed;
            loadEntry(name, density, picker, speed, index);
        }
    }
    function drawBackground() {
        console.log("Background");
        let canvas = document.querySelector("canvas");
        let crc2 = canvas.getContext("2d");
        let golden = 0.62;
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "#00000d");
        gradient.addColorStop(golden, "#00001a");
        gradient.addColorStop(1, "#000026");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        background = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    //Fkt. für Change event der forms
    function handleChange(_event) {
        let speed = document.querySelector("#slider1");
        console.log(speed.value);
        Endabgabe.timecode = Number(speed.value);
        console.log(Endabgabe.timecode + "timecode");
        let particleDensity = document.querySelector("#slider2");
        console.log(particleDensity.value);
        Endabgabe.density = Number(particleDensity.value);
    }
    //Fkt. für MouseEvent, x-und y-Position des Mauszeigers
    function click(_event) {
        x = _event.x - 58;
        y = _event.y - 75;
        Endabgabe.interval = setInterval(generateRocket, Endabgabe.timecode);
    }
    function generateRocket() {
        if (Endabgabe.size < 100) {
            let firework = new Endabgabe.Firework(x, y);
            firework.colorPicker();
            firework.update();
            firework.draw();
        }
        else {
            clearInterval(Endabgabe.interval);
            Endabgabe.size = 0;
            Endabgabe.crc2.clearRect(0, 0, 800, 600);
            drawBackground();
        }
        console.log("generate Rocket");
    }
    async function sendData() {
        let formData = new FormData(document.forms[0]);
        let json = {};
        //Umwandlung FormData in Json FormData
        for (let key of formData.keys())
            if (!json[key]) {
                let values = formData.getAll(key);
                json[key] = values.length > 1 ? values : values[0];
            }
        let query = new URLSearchParams();
        let newJSON = JSON.stringify(json);
        query.set("command", "insert");
        query.set("collection", "data");
        query.set("data", newJSON);
        let response = await fetch("https://webuser.hs-furtwangen.de/~blindenh/Database/index.php?" + query.toString());
        console.log("data sent");
    }
    function loadEntry(_name, _density, _picker, _speed, _index) {
        let newDiv = document.createElement("div");
        let parent = document.querySelector("#savedRockets");
        newDiv.innerHTML = _name;
        newDiv.addEventListener("click", function () {
            editItem(newDiv, _name, _density, _picker, _speed);
            deleteItem(newDiv, _index);
        });
        parent.appendChild(newDiv);
    }
    function editItem(newDiv, _name, _density, _picker, _speed) {
        let name = document.querySelector("input#name");
        name.value = _name;
        let density = document.querySelector("#slider1");
        density.value = _density.toString();
        let picker = document.querySelector("#input2");
        picker.value = _picker;
        let speed = document.querySelector("#slider2");
        speed.value = _speed;
    }
    async function deleteItem(_newDiv, _index) {
        _newDiv.parentElement.removeChild(_newDiv);
        let query = new URLSearchParams();
        query.set("command", "delete");
        query.set("collection", "data");
        query.set("id", _index.toString());
        let response = await fetch("https://webuser.hs-furtwangen.de/~blindenh/Database/index.php?" + query.toString());
        console.log("deletet");
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=EndabgabeMain.js.map