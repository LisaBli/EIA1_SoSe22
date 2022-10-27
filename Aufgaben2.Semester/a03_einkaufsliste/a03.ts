/*
Aufgabe: 03
Name: Lisa Blindenhöfer
Matrikel Nr.: 271450
Datum: 27.10.2022
In Zusammenarbeit mit: Marie Walter, Bastian Aberle
*/

namespace shoppinglist {

    window.addEventListener("load", handleload );

    function handleload(): void {
        document.querySelector("#add").addEventListener("click", newlistelement);
        document.querySelector("#listtext").addEventListener("click", editlistelement);
        document.querySelector("#trash").addEventListener("click", deletelistelement);
        document.querySelector("#check").addEventListener("click", checklistelement);
    }

    function newlistelement(): void {
        console.log("click on button: create new list element including item, amount, comment and date");
    }

    function editlistelement(): void {
        console.log("when list element is added: possibility to edit list element");
    }

    function deletelistelement(): void {
        console.log("delete list element");
    }

    function checklistelement(): void {
        console.log("list element checked");
    }

}