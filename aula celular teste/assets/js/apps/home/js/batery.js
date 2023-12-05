function batery() {
    return {
        checkBatery() {
            setInterval(() => {
                let batteryPercentageElement = document.querySelector('.bateriaPorcentagem');
                let loadingBatteryElement = document.querySelector('.loadingbactery');
                let batteryPercentageApi = parseFloat(localStorage.getItem('batteryPercentage')) || 100;
                const newBatteryPercentageApi = Math.max(batteryPercentageApi - 0.01, 0);
                localStorage.setItem('batteryPercentage', newBatteryPercentageApi);
                const newRightValue = (100 - newBatteryPercentageApi) * 0.18; 
                loadingBatteryElement.style.right = `${newRightValue}px`;
                if (newBatteryPercentageApi === 0) {
                    clearInterval();
                }
                batteryPercentageElement.innerHTML = `${Math.floor(batteryPercentageApi)}%`
            }, 1000);
            
 
        }
    }
}
export default batery();

// document.addEventListener('DOMContentLoaded', function () {
//     // Selecione os elementos após o DOM estar totalmente carregado
//     const timesHomeElement = document.querySelector('.timesHome');
//     const signalElement = document.querySelector('.internet i');
//     const wifiElement = document.querySelector('.wifi i');
//     const loadingBatteryElement = document.querySelector('.loadingbactery');
//     const batteryPercentageElement = document.querySelector('.bateriaPorcentagem');

//     // Faça algo com os elementos selecionados, se necessário
//     console.log(timesHomeElement, signalElement, wifiElement, loadingBatteryElement, batteryPercentageElement);
// });