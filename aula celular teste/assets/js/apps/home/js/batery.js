
function batery() {
    return {
        checkBatery() {
            const loop = setInterval(() => {
                const batteryPercentageElement = document.querySelector('.bateriaPorcentagem');
                const loadingBatteryElement = document.querySelector('.loadingbactery');
                let batteryPercentageApi = parseFloat(localStorage.getItem('batteryPercentage')) || 100;
                const newBatteryPercentageApi = Math.max(batteryPercentageApi - 0.01, 0);
                localStorage.setItem('batteryPercentage', newBatteryPercentageApi);
                const newRightValue = (100 - newBatteryPercentageApi) * 0.18;
                loadingBatteryElement.style.right = `${newRightValue}px`;
                if (newBatteryPercentageApi === 0) {
                    clearInterval(loop);
                }
                batteryPercentageElement.innerHTML = `${Math.floor(batteryPercentageApi)}%`;
            }, 1000);
        }
    }
}
export default batery();
