import daysOfTheWeek from './diasDaSemana.js'
function celphone() {
    return {
        data: new Date(),
        tagDateTimerShow: document.querySelector('.timer-hours-time'),
        tagDateSecondsShow: document.querySelector('.seconds'),
        tagDateShow: document.querySelector('.timer-date'),
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

            })
        }



    }
}

const startCelphone = celphone()
startCelphone.horas;
const celularStatus = {
    on: false,
    timeOnAll: 0,
    bactery: 50,

    modelo: 'iPhone 15 Pro',
    cor: 'Prateado',
    capacidade: '256GB',
    sistemaOperacional: 'iOS 16',
    tela: {
        tamanho: '6.7 polegadas',
        tipo: 'Super Retina XDR',
        resolucao: '2778 x 1284 pixels'
    },
    camera: {
        principal: {
            quantidadeLentes: 4,
            megapixels: 108,
            recursos: ['Night mode', 'Deep Fusion', 'Smart HDR 4']
        },
        frontal: {
            megapixels: 40,
            recursos: ['Retina Flash', 'Night mode', '4K Dolby Vision HDR recording']
        }
    },
    bateria: {
        capacidade: '4500 mAh',
        carregamento: 'Carregamento rápido de 30W'
    },
    conectividade: ['5G', 'Wi-Fi 6', 'Bluetooth 5.2'],
    recursosAdicionais: ['Face ID', 'MagSafe', 'Resistência à água e poeira (IP68)'],
    preco: 'A partir de $1.299'
}