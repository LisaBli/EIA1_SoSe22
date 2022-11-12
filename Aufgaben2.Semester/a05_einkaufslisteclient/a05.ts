/*
Aufgabe: 05
Name: Lisa Blindenhöfer
Matrikel Nr.: 271450
Datum: 12.11.2022
Quellen: Bastian Aberle, W3Schools
*/

namespace a05_shoppinglist {

    window.addEventListener("load", handleload);
    // window.addEventListener("load", loaddata);

    export interface Input {
        inputproduct: string;
        amount: number;
        inputcomment: string;
        date: string;
        check: boolean;
    }

    async function handleload(): Promise<void> {
        document.querySelector("#add").addEventListener("click", handleaddbutton);
       
        let response: Response = await fetch("data.json");
        let report: string = await response.text();
        let inputs: Input[] = JSON.parse(report);
        loaddata(inputs);

    }

    //ruft Funktionen für Click auf Button auf
    function handleaddbutton(): void {
        addList();
        submitbutton();
    }

    //sendet
    async function submitbutton(): Promise<void> {
        console.log("send");
        let formData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        await fetch("a05.html?" + query.toString());
        alert ("sent");

    }

    //lädt data aus data.ts
    function loaddata(inputs: Input[]): void {
        console.log("load data");

        for (let i: number = 0; i < inputs.length; i++) {
            //console.log("test");

            let date: string = inputs[i].date;
            let amount: number = inputs[i].amount;
            let product: string = inputs[i].inputproduct;
            let comment: string = inputs[i].inputcomment;

            //buy next
            let buynext: string = inputs[i].check.toString();
            let buy: string;
            if (buynext == "false") {
                buy = " ";
            } else {
                buy = " buy";
            }

            let nextelement: HTMLDivElement = document.createElement("div");
            nextelement.classList.add("inputData");

            nextelement.innerHTML = date + " / " + product + " / " + amount + " / " + comment + " / " + buy;
            var getelement: HTMLElement = document.querySelector("#alloutputs");
            getelement.appendChild(nextelement);

            //Neue Checkbox 
            let listcheck: HTMLInputElement = document.createElement("input");
            listcheck.type = "checkbox";
            listcheck.name = "Checkbox1";
            listcheck.className = "checkbox1";
            nextelement.appendChild(listcheck);

            //neuer Trash 
            let listtrash: HTMLDivElement = document.createElement("div");
            listtrash.innerHTML = "<i id='trash' class='fa-solid fa-trash-can'></i>";
            nextelement.appendChild(listtrash);

            //neues edit 
            let listedit: HTMLDivElement = document.createElement("div");
            listedit.className = "edit";
            listedit.innerHTML = "<i id ='edit' class='fa-regular fa-pen-to-square'></i>";
            nextelement.appendChild(listedit);

            listtrash.addEventListener("click", function(): void {
                deletelistelement(nextelement);
            });
            
            listedit.addEventListener("click", function(): void {
                editlistelement(nextelement, product, amount, comment);
            });

        }

    }

    //fügt Eingegebenes der Liste hinzu
    function addList(): void {

        //console.log("add inputs");

        let data: FormData = new FormData(document.forms[0]);
        let product: string = data.get("Product")?.toString()!;
        let amount: number = Number(data.get("Amount")!);
        let comment: string = data.get("Comment")?.toString();

        let dateoftoday: Date = new Date();

        //buy next time 
        let element: HTMLInputElement = <HTMLInputElement>document.getElementById("checkboxdate");
        let nextpurchase: string;
        if (element.checked) {
            nextpurchase = " buy";
        } else {
            nextpurchase = " ";
        }

        //gibt die einzelnen inputs aus
        let nextelement: HTMLDivElement = document.createElement("div");
        nextelement.classList.add("inputData");
        nextelement.innerHTML = dateoftoday.toLocaleDateString() + " / " + product + " / " + amount + " / " + comment + " / " + nextpurchase;
        var getelement: HTMLElement = document.querySelector("#alloutputs");
        getelement.appendChild(nextelement);

        //Neue Checkbox 
        let listcheck: HTMLInputElement = document.createElement("input");
        listcheck.type = "checkbox";
        listcheck.name = "Checkbox1";
        listcheck.className = "checkbox1";
        nextelement.appendChild(listcheck);

        //neuer Trash 
        let listtrash: HTMLDivElement = document.createElement("div");
        listtrash.innerHTML = "<i id='trash' class='fa-solid fa-trash-can'></i>";
        nextelement.appendChild(listtrash);

        //neues edit 
        let listedit: HTMLDivElement = document.createElement("div");
        listedit.className = "edit";
        listedit.innerHTML = "<i id ='edit' class='fa-regular fa-pen-to-square'></i>";
        nextelement.appendChild(listedit);

        listtrash.addEventListener("click", function(): void {
            deletelistelement(nextelement);
        });
        
        listedit.addEventListener("click", function(): void {
            editlistelement(nextelement, product, amount, comment);
        });

        //alle inputs leeren
        let inputproductname: HTMLInputElement = document.getElementById("inputproduct") as HTMLInputElement;
        inputproductname.value = "";
        let inputamount: HTMLInputElement = document.getElementById("amount") as HTMLInputElement;
        inputamount.value = "";
        let inputcomment: HTMLTextAreaElement = document.getElementById("inputcomment") as HTMLTextAreaElement;
        inputcomment.value = "";

    }

    //delete funktion
    function deletelistelement(nextelement: HTMLDivElement): void {
        console.log("delete list element");
        nextelement.parentElement.removeChild(nextelement);
    }

    //edit funktion
    function editlistelement(nextelement: HTMLDivElement, product: string, amount: number, comment: string): void {
        console.log("edit list element");
        let input1: HTMLInputElement = document.querySelector("input#inputproduct");
        input1.value = product;
        let input2: HTMLInputElement = document.querySelector("input#amount");
        input2.value = amount.toString();
        let input3: HTMLInputElement = document.querySelector("input#inputcomment");
        input3.value = comment;

        deletelistelement(nextelement);
    }

}
