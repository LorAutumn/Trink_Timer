let minutes = 0  // 2
let seconds = 0
let timeInSeconds = 0

const timerOutput = document.getElementById('timer_output')
let timeInput = document.getElementById('timer_value').value
let timer

async function startTimer() {
    clearInterval(timer)
    minutes = document.getElementById('timer_value').value
    let promise = new Promise((resolve, reject) => {
         resolve(minutes)
         console.log(minutes)
         })
    if (minutes >= 1 ) {
        timer = setInterval(updateTimer, 1000)
    } else {
        alert('Die Dauer muss mindestens 1 Minute betragen')
    }
}

function updateMinutesSeconds() {
    minutes = Math.floor(timeInSeconds / 60)
    seconds = (timeInSeconds - (minutes * 60))
}

function updateTimer() {
    timeInSeconds = ((minutes * 60) + seconds)
    seconds = (timeInSeconds - (minutes * 60))
    if(timeInSeconds > 0) {
        timeInSeconds--
        console.log('tis',timeInSeconds)
        updateMinutesSeconds()
        timerOutput.innerText = minutes + ' Minuten' + ':' + seconds + ' Sekunden'
        console.log(minutes)
    } else {
        clearInterval(timer)
        return(alert('Timer abgelaufen'))
    }
}

function stopTimer() {
    clearInterval(timer)
}

function resetTimer() {
    minutes = 0
    seconds = 0
    timerOutput.innerText = minutes + ' Sekunden'
}

