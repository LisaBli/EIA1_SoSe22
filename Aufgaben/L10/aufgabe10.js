window.addEventListener('load', function () {
    document.querySelector(".add").addEventListener('click', add);
    document.querySelector("#trash").addEventListener('click', clear);
});
function add() {
    //neues Listenelement erstellen
    var li = document.createElement("li");
    var inputVal = document.getElementById("input1");
    li.innerHTML = (inputVal.value);
    console.log(li);
    document.querySelector("#list").appendChild(li);
    //trash appears
    var trash = document.createElement("i");
    trash.classList.add("fa-solid");
    trash.classList.add("fa-trash-can");
    li.appendChild(trash);
    //checked appears
    var kasten = document.querySelectorAll('ul input');
    var checked = document.createElement(kasten);
    //checked.innerHTML = kasten;
    li.appendChild(checked);
    //counts
    document.querySelector(".total").innerHTML = element.getElementsByTagName("li").length.toString();
}
var element = document.querySelector("#list");
var li = document.createElement("li");
//delete list row
function clear() {
    this.removechild(li);
    document.querySelector(".total").innerHTML =
        element.getElementsByTagName("li").length.toString();
}
// innerhtml += <>
//# sourceMappingURL=aufgabe10.js.map