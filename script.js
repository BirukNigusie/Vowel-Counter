const minuteLabel = document.getElementById('minute');
const secondLabel = document.getElementById('second');
const millisecondLabel = document.getElementById('millisecond');

const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const lapList = document.getElementById('laplist');

let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;
 

startBtn.addEventListener('click', () => {
interval = setInterval(updateTimer,10);
startBtn.disabled = true;
});

stopBtn.addEventListener('click', () => {
clearInterval(interval);
addLapList();
reset();
startBtn.disabled = false;
});

pauseBtn.addEventListener('click', () => {
clearInterval(interval);
startBtn.disabled = false;
});

resetBtn.addEventListener('click',reset );

function addLapList(){
    const lapTime = `${padValue(minutes)}:${padValue(seconds)}:${padValue(milliseconds)}`;
    const listItem = document.createElement('li')
    listItem.innerHTML = `<span>Lap ${lapList.childElementCount + 1}:</span>${lapTime}`;
    lapList.appendChild(listItem)
}
 function reset(){
clearInterval(interval);
milliseconds = 0;
seconds = 0;
minutes = 0;
displayTimer(); 
startBtn.disabled = false;
}
function updateTimer(){
    milliseconds++;
    if(milliseconds === 100){
        milliseconds = 0;
        seconds++;
    }
    if(seconds === 60){
        seconds = 0;
        minutes++;
    }
    displayTimer();
}
function displayTimer(){
    millisecondLabel.textContent = padValue(milliseconds); 
    secondLabel.textContent = padValue(seconds);
    minuteLabel.textContent = padValue(minutes);
}
function padValue(time){
return time.toString().padStart(2, "0")//add padding of certain value(0) until desiered length(2 digit)
}
