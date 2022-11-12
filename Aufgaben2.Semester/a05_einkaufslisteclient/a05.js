/*
Aufgabe: 05
Name: Lisa Blindenhöfer
Matrikel Nr.: 271450
Datum: 12.11.2022
Quellen: Bastian Aberle, W3Schools
*/
var a05_shoppinglist;
(function (a05_shoppinglist) {
    window.addEventListener("load", handleload);
    async function handleload() {
        document.querySelector("#add").addEventListener("click", handleaddbutton);
        let response = await fetch("data.json");
        let report = await response.text();
        let inputs = JSON.parse(report);
        loaddata(inputs);
    }
    //ruft Funktionen für Click auf Button auf
    function handleaddbutton() {
        addList();
        submitbutton();
    }
    //sendet
    async function submitbutton() {
        console.log("send");
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        await fetch("a05.html?" + query.toString());
        alert("sent");
    }
    //lädt data aus data.ts
    function loaddata(inputs) {
        console.log("load data");
        for (let i = 0; i < inputs.length; i++) {
            //console.log("test");
            let date = inputs[i].date;
            let amount = inputs[i].amount;
            let product = inputs[i].inputproduct;
            let comment = inputs[i].inputcomment;
            //buy next
            let buynext = inputs[i].check.toString();
            let buy;
            if (buynext == "false") {
                buy = " ";
            }
            else {
                buy = " buy";
            }
            let nextelement = document.createElement("div");
            nextelement.classList.add("inputData");
            nextelement.innerHTML = date + " / " + product + " / " + amount + " / " + comment + " / " + buy;
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
            listtrash.addEventListener("click", function () {
                deletelistelement(nextelement);
            });
            listedit.addEventListener("click", function () {
                editlistelement(nextelement, product, amount, comment);
            });
        }
    }
    //fügt Eingegebenes der Liste hinzu
    function addList() {
        //console.log("add inputs");
        let data = new FormData(document.forms[0]);
        let product = data.get("Product")?.toString();
        let amount = Number(data.get("Amount"));
        let comment = data.get("Comment")?.toString();
        let dateoftoday = new Date();
        //buy next time 
        let element = document.getElementById("checkboxdate");
        let nextpurchase;
        if (element.checked) {
            nextpurchase = " buy";
        }
        else {
            nextpurchase = " ";
        }
        //gibt die einzelnen inputs aus
        let nextelement = document.createElement("div");
        nextelement.classList.add("inputData");
        nextelement.innerHTML = dateoftoday.toLocaleDateString() + " / " + product + " / " + amount + " / " + comment + " / " + nextpurchase;
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
        listtrash.addEventListener("click", function () {
            deletelistelement(nextelement);
        });
        listedit.addEventListener("click", function () {
            editlistelement(nextelement, product, amount, comment);
        });
        //alle inputs leeren
        let inputproductname = document.getElementById("inputproduct");
        inputproductname.value = "";
        let inputamount = document.getElementById("amount");
        inputamount.value = "";
        let inputcomment = document.getElementById("inputcomment");
        inputcomment.value = "";
    }
    //delete funktion
    function deletelistelement(nextelement) {
        console.log("delete list element");
        nextelement.parentElement.removeChild(nextelement);
    }
    //edit funktion
    function editlistelement(nextelement, product, amount, comment) {
        console.log("edit list element");
        let input1 = document.querySelector("input#inputproduct");
        input1.value = product;
        let input2 = document.querySelector("input#amount");
        input2.value = amount.toString();
        let input3 = document.querySelector("input#inputcomment");
        input3.value = comment;
        deletelistelement(nextelement);
    }
})(a05_shoppinglist || (a05_shoppinglist = {}));
//# sourceMappingURL=a05.js.map