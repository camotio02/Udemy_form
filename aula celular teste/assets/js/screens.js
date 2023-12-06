import screenLockContent from '../js/apps/screenLock/js/content.js'
import contentHome from '../js/apps/home/js/content.js'
function screensMain() {

    return {
        creatScreenContent() {
            const screens = document.querySelector('.screens');
            const isScreen = localStorage.getItem('screens') || false;
            if (!isScreen) {
                localStorage.setItem('screens', 'lock')
            }
            if (isScreen === 'lock') {
                screens.innerHTML = screenLockContent
            } else if (isScreen === 'home') {
                console.log('opasasasas')
                screens.innerHTML = contentHome
            }else{
                const desabledScreens = document.querySelector('.screens-main')
                desabledScreens.style.display = 'none';
            }
        },
    }
}
const innerScreens = screensMain()
innerScreens.creatScreenContent()
export default screensMain()