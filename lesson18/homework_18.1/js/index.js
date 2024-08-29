const timer = document.querySelector('.timer');
const message = document.querySelector('.timer-message');
const btnStart = document.querySelector('.btn-timer-start');
const btnStop = document.querySelector('.btn-timer-stop');
const btnRestart = document.querySelector('.btn-timer-restart');

let countdown;
let running = false;
let timeLeft = 85;

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

function updateTimerDisplay() {
    timer.textContent = formatTime(timeLeft);
}

function startTimer() {
    if (!running) {
        running = true;
        countdown = setInterval(function () {
            timeLeft--;
            updateTimerDisplay();

            if (timeLeft <= 0) {
                clearInterval(countdown);
                timer.textContent = "00:00";
                message.style.display = 'block'; 
                running = false;
                toggleButtons();
            }
        }, 1000);
        toggleButtons();
    }
}

function stopTimer() {
    clearInterval(countdown);
    running = false;
    toggleButtons(); 
}

function restartTimer() {
    stopTimer();
    timeLeft = 85; 
    updateTimerDisplay();
    message.style.display = 'none'; 
}

function toggleButtons() {
    if (running) {
        btnStart.style.display = 'none';
        btnStop.style.display = 'inline-block';
    } else {
        btnStart.style.display = 'inline-block';
        btnStop.style.display = 'none';
    }
}

btnStart.addEventListener('click', startTimer);
btnStop.addEventListener('click', stopTimer);
btnRestart.addEventListener('click', restartTimer);

updateTimerDisplay();
toggleButtons();
message.style.display = 'none';
