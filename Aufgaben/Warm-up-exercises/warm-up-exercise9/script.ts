var names: string[] = ["Ben", "Ella", "Emil", "Emilia", "Emma", "Finn", "Hannah", "Lea", "Leon", "Lina", "Louis", "Luca", "Marie", "Matteo", "Mia", "Mila", "Noah", "Paul", "Sophia", "Theo"];

window.addEventListener('load', function(){
    document.querySelector('#gesamtzahl').innerHTML= names.length +"";
    document.querySelector('#liste').innerHTML += names[index] +"<br>";

    document.querySelector("#buttonaufsteigend").addEventListener('click', button1);
})

for (var index: number = 0; index < names.length; index++) {
   
    console.log(index);
    console.log( names[ index ] );
}

function button1(){

}