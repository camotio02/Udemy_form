import daysOfTheWeek from './diasDaSemana.js';
import piliticaDeUso from './piliticaDeUso.js';
import celularStatus from './default_mode_infos/infos.js'
import screensMain from './screens.js'
const isScreenLock = localStorage.getItem('isScreenLock') || 'icant'
const isOn = JSON.parse(localStorage.getItem('informacoesCelular'))
function celphone() {
    return {
        isOn: JSON.parse(localStorage.getItem('informacoesCelular')),
        data: new Date(),
        tagDateTimerShow: document.querySelector('.timer-hours-time'),
        tagDateSecondsShow: document.querySelector('.seconds'),
        tagDateShow: document.querySelector('.timer-date'),
        screen_ff: document.querySelector('.screen-off'),
        get canOnCell() {
            if (this.isOn === null) {
                localStorage.setItem('informacoesCelular', JSON.stringify(celularStatus))
            }
            return;
        },
        get horas() {
            this.tagDateTimerShow.innerHTML = '';
            this.tagDateSecondsShow.innerHTML = '';
            setInterval(() => {
                const currentTime = new Date();
                const hourTime = currentTime.toLocaleTimeString('pt-BR', {
                    hour12: false,
                    hour: '2-digit',
                });
                const minutesTime = currentTime.toLocaleTimeString('pt-BR', {
                    minute: '2-digit',
                });
                const secondsTime = currentTime.toLocaleTimeString('pt-BR', {
                    second: '2-digit',
                });
                const currentDate = currentTime.toLocaleTimeString('pt-BR', {
                    day: '2-digit',
                    month: '2-digit',
                });
                daysOfTheWeek.inicia(currentDate, currentTime, this.tagDateShow)
                this.tagDateTimerShow.innerHTML = `${hourTime}:${minutesTime}`;
                this.tagDateSecondsShow.innerHTML = `${secondsTime}`;
            }, 1000);
        },
        get clicks() {
            document.addEventListener('click', (e) => {
                const screens_main = document.querySelector('.screens-main')
                if (e.target.id === 'on' && screens_main.style.display === 'none') {
                    localStorage.setItem('screens', 'lock')
                    setTimeout(() => {
                        screensMain.creatScreenContent()
                    }, 1500);
                }
            })
        },

    }
}
const startCelphone = celphone()
startCelphone.horas;
startCelphone.canOnCell;
startCelphone.clicks;

function handleLocalStorageChange(event) {
    if (event.key === 'screens') {
        screensMain.creatScreenContent()
    }
}
window.addEventListener('storage', handleLocalStorageChange);
