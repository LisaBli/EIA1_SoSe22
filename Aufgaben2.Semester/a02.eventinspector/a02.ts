/*
Aufgabe: 02
Name: Lisa Blindenhöfer
Matrikel Nr.: 271450
Datum: 20.10.2022
Quellen: Bastian Aberle
*/

namespace EventInspector {

    window.addEventListener("load", handleload);
    
    function handleload(): void {
        document.addEventListener("click", logInfo);
        document.querySelector("#div0").addEventListener("click", logInfo);
        document.querySelector("#div1").addEventListener("click", logInfo);
        document.querySelector("#span").addEventListener("click", logInfo);
        document.querySelector("#div0").addEventListener("keyup", logInfo);
        document.querySelector("#div1").addEventListener("keyup", logInfo);
        document.querySelector("#span").addEventListener("keyup", logInfo);
        document.addEventListener("mousemove", setInfoBox);
        document.querySelector("#button").addEventListener("click", button);
    }
    
    function setInfoBox(_event: MouseEvent): void {
    
        let indexx: number = _event.clientX;
        let indexy: number = _event.clientY;
        console.log([indexx, indexy]);
    
        let hover: HTMLElement = document.getElementById("span");
    
        hover.style.position = "absolute";
        hover.style.left = indexx + 12 + "px";
        hover.style.top = indexy + 12 + "px";
    
        let cursortarget: EventTarget = _event.target;
        document.querySelector("#span").textContent = indexx + "," + " " + indexy + "," + " target: " + cursortarget;
    
    }
    
    function logInfo(_event: Event): void {
        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event);
    }
    
    function button(_event: CustomEvent): void {
    
        let path: EventTarget[] = _event.composedPath();
    
        if (path[5] == document) {
            console.log(_event);
        }
    }
    }