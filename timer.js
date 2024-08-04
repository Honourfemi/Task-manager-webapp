let alarmTimeout;
let alarmSound = new Audio('static/alarm.mp3');  // Path to your alarm sound file

function setAlarm() {
    const alarmTime = document.getElementById('alarm-time').value;
    const alarmMessage = document.getElementById('alarm-message');
    
    if (!alarmTime) {
        alarmMessage.textContent = 'Please select a time for the alarm.';
        return;
    }
    
    const now = new Date();
    const alarm = new Date(now.toDateString() + ' ' + alarmTime);
    
    if (alarm <= now) {
        alarmMessage.textContent = 'Please select a future time for the alarm.';
        return;
    }
    
    const timeToAlarm = alarm - now;
    
    clearTimeout(alarmTimeout);
    alarmTimeout = setTimeout(() => {
        alarmMessage.textContent = 'Alarm ringing!';
        alarmSound.play();
        alert('Alarm ringing!');
    }, timeToAlarm);
    
    alarmMessage.textContent = `Alarm set for ${alarm.toLocaleTimeString()}.`;
}

let timerInterval;

function startTimer() {
    const minutes = parseInt(document.getElementById('timer-minutes').value) || 0;
    const seconds = parseInt(document.getElementById('timer-seconds').value) || 0;
    const timerDisplay = document.getElementById('timer-display');
    
    let totalSeconds = minutes * 60 + seconds;
    
    clearInterval(timerInterval);
    
    if (totalSeconds <= 0) {
        timerDisplay.textContent = '00:00';
        return;
    }
    
    timerInterval = setInterval(() => {
        if (totalSeconds <= 0) {
            clearInterval(timerInterval);
            timerDisplay.textContent = '00:00';
            alarmSound.play();
            alert('Timer finished!');
            return;
        }
        
        totalSeconds--;
        const displayMinutes = Math.floor(totalSeconds / 60);
        const displaySeconds = totalSeconds % 60;
        
        timerDisplay.textContent = 
            `${displayMinutes.toString().padStart(2, '0')}:${displaySeconds.toString().padStart(2, '0')}`;
    }, 1000);
}
