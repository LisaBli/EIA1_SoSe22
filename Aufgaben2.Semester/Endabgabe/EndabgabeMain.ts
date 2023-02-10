/*
Aufgabe: Endabgabe
Name: Lisa Blindenhöfer
Matrikel Nr.: 271450
Datum: 11.02.2023
Quellen: In Zusammenarbeit mit Bastian Aberle und Amin Lakhal
*/

namespace Endabgabe {

    window.addEventListener("load", handleLoad);

    export let alpha: number;
    export let hue: number = 0;
    let x: number;
    let y: number;
    let savedColor: string;
    export let size: number = 0;
    export let interval: number;
    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    export let speed: string;
    export let timecode: number;
    export let color: string;
    export let density: number;
    let background: ImageData;

    interface Item {
        Name: string;
        Density: string;
        Picker: string;
        Speed: string;
    }

    interface FormDataJSON {
        [key: string]: FormDataEntryValue | FormDataEntryValue[];
    }

    interface Entrys {
        [category: string]: Item[];
    }

    export async function handleLoad(): Promise<void> {

        let button: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button[id=but1]");
        let response: Response = await fetch("https://webuser.hs-furtwangen.de/~blindenh/Database/index.php/?command=find&collection=data");
        let entry: string = await response.text();
        let data: Entrys = JSON.parse(entry);
        button.addEventListener("click", sendData);

        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        drawBackground();
        document.querySelector("canvas").addEventListener("click", click);
        

        let form: HTMLFormElement = document.querySelector("#LauncherForm");
        form.addEventListener("change", handleChange);
        

        loadData(data);
    }

    function loadData(_data: Entrys): void {
    
        let list: string[] = [];
        for (let num in _data.data) {
            list.push(num);
        }

        for (let index of list) {
            let name: string = _data.data[index].Name;
            let density: number = _data.data[index].Density;
            let picker: string = _data.data[index].Picker;
            let speed: string = _data.data[index].Speed;
            loadEntry(name, density, picker, speed, index);
        }
    }


    function drawBackground(): void {

        console.log("Background");
        let canvas: HTMLCanvasElement = document.querySelector("canvas");
        let crc2: CanvasRenderingContext2D = canvas.getContext("2d");

        let golden: number = 0.62;

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "#00000d");
        gradient.addColorStop(golden, "#00001a");
        gradient.addColorStop(1, "#000026");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        background = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    //Fkt. für Change event der forms
    function handleChange(_event: Event): void {
        let speed: HTMLInputElement = <HTMLInputElement>document.querySelector("#slider1");
        console.log(speed.value);
        timecode = Number(speed.value);
        console.log(timecode + "timecode");

        let particleDensity: HTMLInputElement = <HTMLInputElement>document.querySelector("#slider2");
        console.log(particleDensity.value);
        density = Number(particleDensity.value);
    }
    

    //Fkt. für MouseEvent, x-und y-Position des Mauszeigers
    function click(_event: MouseEvent): void {
        x = _event.x - 58;
        y = _event.y - 75;
        interval = setInterval(generateRocket, timecode);
    }

    function generateRocket(): void {
        
        if (size < 100) {
            let firework: Firework = new Firework(x, y);
            firework.colorPicker();
            firework.update();
            firework.draw();

        } else {
            clearInterval(interval);
            size = 0;
            crc2.clearRect(0, 0, 800, 600);
            drawBackground();
        }
        console.log("generate Rocket");

    }

    async function sendData(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let json: FormDataJSON = {};

        //Umwandlung FormData in Json FormData
        for (let key of formData.keys())
        if (!json[key]) {
            let values: FormDataEntryValue[] = formData.getAll(key);
            json[key] = values.length > 1 ? values : values[0];
        }
    
        let query: URLSearchParams = new URLSearchParams();
        let newJSON: string = JSON.stringify(json);

        query.set("command", "insert");
        query.set("collection", "data");
        query.set("data", newJSON);  
        let response: Response = await fetch("https://webuser.hs-furtwangen.de/~blindenh/Database/index.php?" + query.toString());
        console.log("data sent");
    
    }

    function loadEntry(_name: string, _density: number, _picker: string, _speed: string, _index: string): void {
        let newDiv: HTMLDivElement = document.createElement("div");
        let parent: Element = document.querySelector("#savedRockets");
        newDiv.innerHTML = _name;
        newDiv.addEventListener("click", function (): void {
            editItem(newDiv, _name, _density, _picker, _speed);
            deleteItem(newDiv, _index);
        });
        parent.appendChild(newDiv);
    }

    function editItem(newDiv: HTMLDivElement, _name: string, _density: number, _picker: string, _speed: string): void {
        let name: HTMLInputElement = document.querySelector("input#name");
        name.value = _name;

        let density: HTMLInputElement = document.querySelector("#slider1");
        density.value = _density.toString();

        let picker: HTMLInputElement = document.querySelector("#input2");
        picker.value = _picker;

        let speed: HTMLInputElement = document.querySelector("#slider2");
        speed.value = _speed;
    }

    async function deleteItem(_newDiv: HTMLDivElement, _index: string): Promise<void> {
        _newDiv.parentElement.removeChild(_newDiv);

        let query: URLSearchParams = new URLSearchParams();  
      
        query.set("command", "delete");
        query.set("collection", "data");
        query.set("id", _index.toString());  

        let response: Response = await fetch("https://webuser.hs-furtwangen.de/~blindenh/Database/index.php?" + query.toString());

        console.log("deletet");

    }

}
