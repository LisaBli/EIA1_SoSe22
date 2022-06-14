window.addEventListener('load', function () {
    document.querySelector(".add").addEventListener('click', add);
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
    trash.setAttribute("id", "trash");
    li.appendChild(trash);
    //checked appears
    var checked = document.createElement("input");
    checked.setAttribute('type', 'checkbox');
    checked.setAttribute('id', 'check');
    li.appendChild(checked);
    li.querySelector("#trash").addEventListener('click', clear);
    //counts
    document.querySelector(".total").innerHTML = "in total " + array.length;
    var array = ['1', '2', '3', 'count'];
    var count = "li.length";
}
var li = document.createElement("li");
//delete list row
function clear() {
    this.parentElement.remove();
}
// innerhtml += <>
//# sourceMappingURL=aufgabe10.js.map