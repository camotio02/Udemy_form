import daysOfTheWeek from './diasDaSemana.js';
import piliticaDeUso from './piliticaDeUso.js';
import celularStatus from './default_mode_infos/infos.js'
import screenLock from './apps/screenLock/tag.js'
const isScreenLock = localStorage.getItem('isScreen')
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
                const display = getComputedStyle(this.screen_ff).display;
                const letsGoScreenLock = display === 'none' && !isScreenLock
                const isFabric =
                    this.isOn.neverbeenconnected &&
                    e.target.id === 'on' &&
                    display === 'flex';
                if (isFabric) {
                    const politicaDeUso = confirm(piliticaDeUso);
                    if (politicaDeUso) {
                        const celularInfosString = localStorage.getItem('informacoesCelular');
                        const celularInfos = JSON.parse(celularInfosString);
                        celularInfos.on = true;
                        const celularInfosAtualizadoString = JSON.stringify(celularInfos);
                        localStorage.setItem('informacoesCelular', celularInfosAtualizadoString);
                        return checkStatus(this.isOn.on)
                    }
                }
                if (letsGoScreenLock) {
                    screenLock.onScreenLock()
                }
            })
        },

    }
}
const startCelphone = celphone()
function checkStatus(status) {
    if (status || isOn?.on) {
        startCelphone.horas;
        function disploqueia() {
            return {
                displayLock: document.querySelector('.screen-off'),
                displayOnBotton: document.querySelector('.on'),
                get on() {
                    this.displayLock.style.display = 'none',
                        this.displayOnBotton.style.display = 'none'
                }
            }
        }
        const on = disploqueia()
        on.on
    }
}
function handleLocalStorageChange(event) {
    if (event.key === 'isScreen') {
        console.log('isScreen foi alterado:', localStorage.getItem('isScreen'));
        screenLock.onScreenLock()
    }
}
window.addEventListener('storage', handleLocalStorageChange);
screenLock.onScreenLock()
checkStatus()
startCelphone.canOnCell;
startCelphone.clicks;
