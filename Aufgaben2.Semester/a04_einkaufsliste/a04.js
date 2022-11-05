/*
Aufgabe: 04
Name: Lisa Blindenhöfer
Matrikel Nr.: 271450
Datum: 03.11.2022
Quellen: Bastian Aberle, W3Schools
*/
var a04_shoppinglist;
(function (a04_shoppinglist) {
    window.addEventListener("load", handleload);
    window.addEventListener("load", loaddata);
    function handleload() {
        document.querySelector("#add").addEventListener("click", addList);
        // document.querySelector("#listtext").addEventListener("click", editlistelement);
        //document.querySelector("#trash").addEventListener("click", deletelistelement);
        //document.querySelector("#check").addEventListener("click", checklistelement);
    }
    let inputproduct;
    let amount;
    let comment;
    let date;
    //lädt data aus data.ts
    function loaddata() {
        for (let i = 0; i < a04_shoppinglist.inputs.length; i++) {
            //console.log("test");
            let date = a04_shoppinglist.inputs[i].date;
            let amount = a04_shoppinglist.inputs[i].amount;
            let product = a04_shoppinglist.inputs[i].inputproduct;
            let comment = a04_shoppinglist.inputs[i].inputcomment;
            let nextelement = document.createElement("div");
            nextelement.classList.add("inputData");
            nextelement.innerHTML = date + " " + product + " " + amount + " " + comment;
            var getelement = document.querySelector("#alloutputs");
            getelement.appendChild(nextelement);
            //Neue Checkbox 
            let listcheck = document.createElement("input");
            listcheck.type = "checkbox";
            listcheck.name = "Checkbox1";
            listcheck.className = "checkbox1";
            nextelement.appendChild(listcheck);
            //neuer Trash 
            let listtrash = document.createElement("div");
            listtrash.innerHTML = "<i id='trash' class='fa-solid fa-trash-can'></i>";
            nextelement.appendChild(listtrash);
            //neues edit 
            let listedit = document.createElement("div");
            listedit.className = "edit";
            listedit.innerHTML = "<i id ='edit' class='fa-regular fa-pen-to-square'></i>";
            nextelement.appendChild(listedit);
            //delete funktion
            listtrash.addEventListener("click", deletelistelement);
            function deletelistelement() {
                console.log("delete list element");
                nextelement.parentElement.removeChild(nextelement);
            }
            //edit funktion
            listedit.addEventListener("click", editlistelement);
            function editlistelement() {
                console.log("edit list element");
            }
        }
    }
    //fügt Eingegebenes der Liste hinzu
    function addList() {
        //console.log("add inputs");
        let data = new FormData(document.forms[0]);
        let product = data.get("Product")?.toString();
        let amount = Number(data.get("Amount"));
        let comment = data.get("Comment"?.toString());
        let dateoftoday = new Date();
        // document.querySelector("#checkboxdate").addEventListener("click", dateappears);
        // function dateappears(): void {
        //     nextelement.innerHTML = dateoftoday.toLocaleDateString() + " " + product + " " + amount + " " + comment;
        // }
        //gibt die einzelnen inputs aus
        let nextelement = document.createElement("div");
        nextelement.classList.add("inputData");
        nextelement.innerHTML = dateoftoday.toLocaleDateString() + " " + product + " " + amount + " " + comment;
        var getelement = document.querySelector("#alloutputs");
        getelement.appendChild(nextelement);
        //Neue Checkbox 
        let listcheck = document.createElement("input");
        listcheck.type = "checkbox";
        listcheck.name = "Checkbox1";
        listcheck.className = "checkbox1";
        nextelement.appendChild(listcheck);
        //neuer Trash 
        let listtrash = document.createElement("div");
        listtrash.innerHTML = "<i id='trash' class='fa-solid fa-trash-can'></i>";
        nextelement.appendChild(listtrash);
        //neues edit 
        let listedit = document.createElement("div");
        listedit.className = "edit";
        listedit.innerHTML = "<i id ='edit' class='fa-regular fa-pen-to-square'></i>";
        nextelement.appendChild(listedit);
        //delete funktion
        listtrash.addEventListener("click", deletelistelement);
        function deletelistelement() {
            console.log("delete list element");
            nextelement.parentElement.removeChild(nextelement);
        }
        //edit funktion
        listedit.addEventListener("click", editlistelement);
        function editlistelement() {
            console.log("edit list element");
        }
        //alle inputs leeren
        let inputproductname = document.getElementById("inputproduct");
        inputproductname.value = "";
        let inputamount = document.getElementById("amount");
        inputamount.value = "";
        let inputcomment = document.getElementById("inputcomment");
        inputcomment.value = "";
    }
})(a04_shoppinglist || (a04_shoppinglist = {}));
//# sourceMappingURL=a04.js.map