/*
Aufgabe: 03
Name: Lisa Blindenhöfer
Matrikel Nr.: 271450
Datum: 27.10.2022
In Zusammenarbeit mit: Marie Walter, Bastian Aberle
*/
var shoppinglist;
(function (shoppinglist) {
    window.addEventListener("load", handleload);
    function handleload() {
        document.querySelector("#add").addEventListener("click", newlistelement);
        document.querySelector("#listtext").addEventListener("click", editlistelement);
        document.querySelector("#trash").addEventListener("click", deletelistelement);
        document.querySelector("#check").addEventListener("click", checklistelement);
    }
    function newlistelement() {
        console.log("click on button: create new list element including item, amount, comment and date");
    }
    function editlistelement() {
        console.log("when list element is added: possibility to edit list element");
    }
    function deletelistelement() {
        console.log("delete list element");
    }
    function checklistelement() {
        console.log("list element checked");
    }
})(shoppinglist || (shoppinglist = {}));
//# sourceMappingURL=a03.js.map