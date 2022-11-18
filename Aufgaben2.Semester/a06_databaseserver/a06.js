/*
Aufgabe: 06
Name: Lisa Blindenhöfer
Matrikel Nr.: 271450
Datum: 19.11.2022
Quellen: Bastian Aberle, Cindy Nguyen, W3Schools
*/
var a06_shoppinglist;
(function (a06_shoppinglist) {
    window.addEventListener("load", handleload);
    async function handleload() {
        document.querySelector("#add").addEventListener("click", handleaddbutton);
        let response = await fetch("https://webuser.hs-furtwangen.de/~blindenh/Database/index.php/?command=find&collection=data");
        let report = await response.text();
        let inputs = JSON.parse(report);
        loaddata(inputs);
    }
    //ruft Funktionen für Click auf Button auf
    function handleaddbutton() {
        submitbutton();
        addList();
    }
    //sendet
    async function submitbutton() {
        let formData = new FormData(document.forms[0]);
        let json = {};
        for (let key of formData.keys())
            if (!json[key]) {
                let values = formData.getAll(key);
                json[key] = values.length > 1 ? values : values[0];
            }
        let query = new URLSearchParams();
        query.set("command", "insert");
        query.set("collection", "data");
        query.set("data", JSON.stringify(json));
        console.log("send");
        let response = await fetch("https://webuser.hs-furtwangen.de/~blindenh/Database/index.php?" + query.toString());
        console.log(response);
        alert("sent");
    }
    //lädt data aus data.ts
    function loaddata(inputs) {
        console.log("load data");
        let newlist = [];
        for (let index in inputs.data) {
            newlist.push(index);
            console.log(index + "index");
        }
        for (let counter of newlist) {
            //console.log("test");
            console.log(inputs.data[counter].Product);
            let amount = inputs.data[counter].Amount;
            let product = inputs.data[counter].Product;
            let comment = inputs.data[counter].Comment;
            //buy next time 
            let element = document.getElementById("checkboxdate");
            let nextpurchase;
            if (element.checked) {
                nextpurchase = " buy";
            }
            else {
                nextpurchase = " ";
            }
            let dateoftoday = new Date();
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
                deletelistelement(nextelement, counter);
            });
            listedit.addEventListener("click", function () {
                editlistelement(nextelement, product, amount, comment, counter);
            });
            listcheck.addEventListener("click", function () {
                daterefresh(nextelement, counter);
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
        //listcheck.checked = "checked";
        nextelement.appendChild(listcheck);
        //change date
        let checker = document.querySelector(".checkbox1");
        if (checker.checked) {
            dateoftoday.toLocaleDateString();
        }
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
            deletelistelement(nextelement, counter);
        });
        listedit.addEventListener("click", function () {
            editlistelement(nextelement, product, amount, comment, counter);
        });
        listcheck.addEventListener("click", function () {
            daterefresh(nextelement, counter);
        });
        //alle inputs leeren
        let inputproductname = document.getElementById("inputproduct");
        inputproductname.value = "";
        let inputamount = document.getElementById("amount");
        inputamount.value = "";
        let inputcomment = document.getElementById("inputcomment");
        inputcomment.value = "";
        setTimeout(function () {
            location.reload();
        }, 2000);
    }
    function daterefresh(nextelement, counter) {
        console.log("date");
        // let checker: HTMLInputElement = <HTMLInputElement>document.querySelector(".checkbox1");
        // var test: string;
        // if (checker.checked) {
        //     test = " test";
        //     nextelement.appendChild(test);
        // }
    }
    //delete funktion
    async function deletelistelement(nextelement, counter) {
        nextelement.parentElement.removeChild(nextelement);
        let query = new URLSearchParams();
        query.set("command", "delete");
        query.set("collection", "data");
        query.set("id", counter.toString());
        let response = await fetch("https://webuser.hs-furtwangen.de/~blindenh/Database/index.php?" + query.toString());
        console.log("delete");
    }
    //edit funktion
    function editlistelement(nextelement, product, amount, comment, counter) {
        console.log("edit list element");
        let input1 = document.querySelector("input#inputproduct");
        input1.value = product;
        let input2 = document.querySelector("input#amount");
        input2.value = amount.toString();
        let input3 = document.querySelector("input#inputcomment");
        input3.value = comment;
        deletelistelement(nextelement, counter);
    }
})(a06_shoppinglist || (a06_shoppinglist = {}));
//# sourceMappingURL=a06.js.map