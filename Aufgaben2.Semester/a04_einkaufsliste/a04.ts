/*
Aufgabe: 04
Name: Lisa Blindenhöfer
Matrikel Nr.: 271450
Datum: 05.11.2022
Quellen: Bastian Aberle, W3Schools
*/

namespace a04_shoppinglist {

    window.addEventListener("load", handleload);
    window.addEventListener("load", loaddata);

    function handleload(): void {
        document.querySelector("#add").addEventListener("click", addList);
        // document.querySelector("#listtext").addEventListener("click", editlistelement);
        //document.querySelector("#trash").addEventListener("click", deletelistelement);
        //document.querySelector("#check").addEventListener("click", checklistelement);
    }

    let inputproduct: string;
    let amount: number;
    let comment: string;
    let date: string;
    let check: boolean;

    //lädt data aus data.ts
    function loaddata(): void {

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

            //delete funktion
            listtrash.addEventListener("click", deletelistelement);
            function deletelistelement(): void {
                console.log("delete list element");
                nextelement.parentElement.removeChild(nextelement);
            }

            //edit funktion
            listedit.addEventListener("click", editlistelement);
            function editlistelement(): void {
                console.log("edit list element");

            }

        }

    }

    //fügt Eingegebenes der Liste hinzu
    function addList(): void {

        //console.log("add inputs");

        let data: FormData = new FormData(document.forms[0]);
        let product: string = data.get("Product")?.toString()!;
        let amount: number = Number(data.get("Amount")!);
        let comment: FormDataEntryValue = data.get("Comment"?.toString());

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

        //delete funktion
        listtrash.addEventListener("click", deletelistelement);
        function deletelistelement(): void {
            console.log("delete list element");
            nextelement.parentElement.removeChild(nextelement);
        }

        //edit funktion
        listedit.addEventListener("click", editlistelement);
        function editlistelement(): void {
            console.log("edit list element");

        }

        //alle inputs leeren
        let inputproductname: HTMLInputElement = document.getElementById("inputproduct") as HTMLInputElement;
        inputproductname.value = "";
        let inputamount: HTMLInputElement = document.getElementById("amount") as HTMLInputElement;
        inputamount.value = "";
        let inputcomment: HTMLTextAreaElement = document.getElementById("inputcomment") as HTMLTextAreaElement;
        inputcomment.value = "";

    }

}
