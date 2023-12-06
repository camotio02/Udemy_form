import batery from "./js/batery.js";
import alertComponent from "../../../../components/alert/index.js";
function home() {
    return {
        horas() {
            const home = document.querySelector('.home');
            home.innerHTML += alertComponent;
            setInterval(() => {
                const TagTimeHome = document.querySelector('.timesHome')
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
const p = home()
p.horas()
batery.checkBatery()
