import batery from './js/batery.js';
import contentHome from './js/content.js'
function home() {
    return {
        homeScreen: document.querySelector('.home'),
        get insertContent() {
            this.homeScreen.innerHTML += contentHome;
        },

        horas() {
            const TagTimeHome = document.querySelector('.timesHome')
            setInterval(() => {
                const currentTime = new Date();
                const hourTime = currentTime.toLocaleTimeString('pt-BR', {
                    hour12: false,

                });
                TagTimeHome.innerHTML = `${this.addZero(hourTime)}`
            }, 1000);
        },
        addZero(numero) {
            if (numero <= 9) {
                return `0${numero}`
            }
            return numero 
        }

    }
}

const setHome = home()
setHome.insertContent
setHome.horas()
batery.checkBatery()
