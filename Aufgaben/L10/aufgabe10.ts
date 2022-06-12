
window.addEventListener('load', function () {
    document.querySelector(".add").addEventListener('click', add);

});

function add(): void {

    //neues Listenelement erstellen
    var li = document.createElement("li");
    var inputVal: HTMLInputElement = <HTMLInputElement>document.getElementById("input1");
    //li.innerHTML = (inputVal.value);
    console.log(li);
    document.querySelector("#list").appendChild(li);
   

    //trash appears
    var trash = document.createElement("i");
    trash.innerHTML='<i class="fa-solid fa-trash-can" id="trash"></i>';
    trash.addEventListener(".fa-solid fa-trash-can", clear);

   var elements = document.createElement("elements");
   li.append(elements);
   elements.append(checked, inputVal.value, trash );
 
    //checked appears
    var checked = document.createElement("input");
    checked.innerHTML='<input type="checkbox" id="check">';


}

//delete list row
function clear(): void{
    var close = document.getElementById("trash");
    var i;
    for (i = 0; i < close.length; i++) {
      //close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
}



//let name = `HJalloe meinn name ${variable}`;
//var trash.innerHTML= 

// innerhtml += <>
