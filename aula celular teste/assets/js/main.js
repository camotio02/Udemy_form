import daysOfTheWeek from './diasDaSemana.js';
import piliticaDeUso from './piliticaDeUso.js';

function celphone() {
    return {
        isOn: localStorage.getItem('onCellphone'),
        data: new Date(),
        tagDateTimerShow: document.querySelector('.timer-hours-time'),
        tagDateSecondsShow: document.querySelector('.seconds'),
        tagDateShow: document.querySelector('.timer-date'),
        screen_ff: document.querySelector('.screen-off'),
        get canOnCell() {
            if (!this.isOn) {
                localStorage.setItem('onCellphone', this.isOn)
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
                const isFabric =
                    this.isOn &&
                    e.target.id === 'on' &&
                    display === 'flex';
                if (isFabric) {
                    const politicaDeUso = confirm(piliticaDeUso);
                    politicaDeUso && alert('Regras aceitas');
                    this.screen_ff.style.display = 'none';
                }
            })
        }



    }
}

const startCelphone = celphone()
startCelphone.horas;
startCelphone.clicks;
startCelphone.canOnCell;
