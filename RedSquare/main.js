RedSquareElement = document.querySelector("#redsquare");
Elem = document.querySelector(".red");
Score = document.querySelector("#score")
HScore = document.querySelector("#Hscore")
let HighScore = 0;


let counter = 0;


function startTimer(duration, display) {
    var timer = duration, minutes, seconds;

    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            RedSquareElement.style.top = "350px";
            RedSquareElement.style.left = "667px";
            Elem.style.backgroundColor = "blue";
            if(counter > HighScore){
             HighScore = counter;
            }
            HScore.innerHTML = HighScore;



            counter = 0;
            Score.innerHTML = counter;



            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var seconds = 10,
    display = document.querySelector('#time');

    startTimer(seconds, display);
};

RedSquareElement.addEventListener('click', (event) => {
    let top = Math.floor(Math.random() * (window.innerHeight - 100));
    let left = Math.floor(Math.random()* (window.innerWidth - 100));
    
    
    


    console.log("Clicked")
    counter++;
    Score.innerHTML = counter;

    Elem.style.backgroundColor = "red";

    event.target.style.display = "none";
    event.target.style.top = top + "px";
    event.target.style.left = left + "px";
    event.target.style.display = "block";


});

