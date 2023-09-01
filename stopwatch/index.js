const timerEl = document.getElementById("timer");

const startButtonEl = document.getElementById("start");

const stopButtonEl = document.getElementById("stop");

const resetButtonEl = document.getElementById("reset");

let startTime = 0 ;
let elaspedTime = 0;
let timerInterval; 

function startTimer(){
    startTime = Date.now() - elaspedTime;

    timerInterval = setInterval(()=>{
        elaspedTime = Date.now() - startTime;
        timerEl.textContent = formatTime(elaspedTime);
    }, 10); 

    startButtonEl.disabled = true;
    stopButtonEl.disabled = false;
    
};
function formatTime(elaspedTime){
   
   const milliseconds = Math.floor((elaspedTime % 1000) /10);

   const seconds = Math.floor((elaspedTime % (1000 * 60) / 1000));

   const minutes = Math.floor((elaspedTime % (1000 * 60 * 60)) / (1000 * 60));

   const hours = Math.floor(elaspedTime  / (1000 * 60 * 60));

   return (
        (hours ? (hours> 9 ? hours : "0" + hours) : "00") +
        ":" +
        (minutes ? (minutes> 9 ? minutes : "0" + minutes) : "00") +
        ":" +
        (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +
        ":" +
        (milliseconds > 9 ? milliseconds : "0" + milliseconds)
    );

}
function stopTimer(){
    clearInterval(timerInterval);
    
    startButtonEl.disabled = false;
    stopButtonEl.disabled = true;
}
function resetTimer(){
    clearInterval(timerInterval);
    timerEl.textContent = "00:00:00";
    elaspedTime = 0;
    startButtonEl.disabled = false;
    stopButtonEl.disabled = true;
}


startButtonEl.addEventListener("click", startTimer)
stopButtonEl.addEventListener("click", stopTimer)
resetButtonEl.addEventListener("click", resetTimer)