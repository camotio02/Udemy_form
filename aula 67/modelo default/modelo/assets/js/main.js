const defaultTimer = () => {
    const tagTimer = document.querySelector('.time')
    let hour = 0;
    let minute = 0;
    let seconds = 0;
    let beginTimer;

    const startTimer = () => {
        clearInterval(beginTimer);
        beginTimer = setInterval(() => {
            tagTimer.classList.replace('blinking', 'starting');
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minute++;
            } else if (minute === 60) {
                minute = 0;
                hour++;
            }
            tagTimer.innerHTML = (`
                ${addZero(hour)}:${addZero(minute)}:${addZero(seconds)}`)

        }, 1000)
    }
    const stopTimer = () => {
        clearInterval(beginTimer);
        tagTimer.style.color = 'red'
        tagTimer.classList.add('blinking')
        return;
    }
    const setTimer = () => {
        clearInterval(beginTimer);
        tagTimer.innerHTML = '00:00:00';
        hour = 0;
        minute = 0;
        seconds = 0;
    }
    const addZero = (numero) => {
        if (numero <= 9) {
            return (`0${numero}`)
        }
        return numero;
    }
    document.addEventListener('click', (e) => {
        document.addEventListener('click', (e) => {
            if (e.target.id === 'start') {
                startTimer();
            } else if (e.target.id === 'stop') {
                stopTimer();
            } else if (e.target.id === 'setTime') {
                setTimer();
            }
        });
    })
}
defaultTimer()