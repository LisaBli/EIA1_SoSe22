window.addEventListener('load', function(){
    document.querySelector(".button1").addEventListener('click', playsample);
    document.querySelector(".button2").addEventListener('click', playsample);
    document.querySelector(".button3").addEventListener('click', playsample);
    document.querySelector(".button4").addEventListener('click', playsample);
    document.querySelector(".button5").addEventListener('click', playsample);
    document.querySelector(".button6").addEventListener('click', playsample);
    document.querySelector(".button7").addEventListener('click', playsample);
    document.querySelector(".button8").addEventListener('click', playsample);
    document.querySelector(".button9").addEventListener('click', playsample);
    document.querySelector(".playit").addEventListener('click', playbutton);
});

var sound: HTMLAudioElement[] = [new Audio('./assets/A.mp3'), 
new Audio('./assets/C.mp3'),
new Audio('./assets/F.mp3'),
new Audio('./assets/G.mp3'),
new Audio('./assets/hihat.mp3'),
new Audio('./assets/kick.mp3'),
new Audio('./assets/laugh-1.mp3'),
new Audio('./assets/laugh-2.mp3'),
new Audio('./assets/snare.mp3'),
];

function playsample(){
Index= document.querySelector("button:hover").getAttribute("id")
sound[Index].play();
}

var Index;

function playbutton(){
setInterval(playall, 1000);
}

function playall (){
    sound[5].play();
    sound[8].play();
    sound[4].play();
}

