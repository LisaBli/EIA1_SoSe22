var colors: string[] = ["rgb(1,88,224)", "#ff0088", "yellow", "rgba(0,0,100,0.5)"];
var activeIndex: number = 0;

function clickbutton(){
document.body.style.backgroundColor = colors[activeIndex];
activeIndex++;
};

window.addEventListener('load', function() {
document.querySelector("#buttonA").addEventListener('click', clickbutton);
});