
window.addEventListener('load', function () {
    document.querySelector(".add").addEventListener('click', add);
});

function add(): void {

    //neues Listenelement erstellen
    var li = document.createElement("li");
    var inputVal: HTMLInputElement = <HTMLInputElement>document.getElementById("input1");
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
    var total = document.getElementById("total");
    total.innerHTML = "in total " + (parseInt(total.innerHTML.slice(-1)) + 1);
    
}

var li = document.createElement("li");


//delete list row
function clear(): void {
   this.parentElement.remove();
   var total = document.getElementById("total");
   total.innerHTML = "in total " + (parseInt(total.innerHTML.slice(-1)) - 1);
}


// innerhtml += <>
