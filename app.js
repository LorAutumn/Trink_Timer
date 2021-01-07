let minutes = 0  // 2
let seconds = 0
let timeInSeconds = 0

const timerOutput = document.getElementById('timer_output')
let timeInput = document.getElementById('timer_value').value
let timer

// reads in document input value as minutes and starts interval update timer
async function startTimer() {
    clearInterval(timer)
    
    minutes = document.getElementById('timer_value').value
    seconds = 0
    let promise = new Promise((resolve, reject) => {
         resolve(minutes)
         })
    if (minutes >= 1 ) {
        timer = setInterval(updateTimer, 1000)
    } else {
        alert('Die Dauer muss mindestens 1 Minute betragen')
    }
}

// updates minutes and seconds values
function updateMinutesSeconds() {
    minutes = Math.floor(timeInSeconds / 60)
    seconds = (timeInSeconds - (minutes * 60))
}

// counts down the timer and prints timer state to the dom
function updateTimer() {
    timeInSeconds = ((minutes * 60) + seconds)
    seconds = (timeInSeconds - (minutes * 60))
    if(timeInSeconds > 0) {
        timeInSeconds--
        updateMinutesSeconds()
        timerOutput.innerText = minutes + ' Minuten' + ':' + seconds + ' Sekunden'
    } else {
        clearInterval(timer)
        return(alert('Timer abgelaufen'))
    }
}

// stops the timer
function stopTimer() {
    clearInterval(timer)
}

// resumes timer with actual state of minutes and seconds
function resumeTimer() {
    if (seconds >= 1 ) {
        timer = setInterval(updateTimer, 1000)
        } else {
        alert('Der Timer ist bereits abgelaufen')
    }
}

// resets minutes and seconds values - delets timer value at the dom - clears timer input field
function resetTimer() {
    minutes = 0
    seconds = 0
    timerOutput.innerText = minutes + ' Sekunden'
    document.getElementById('timer_value').value = null
}

