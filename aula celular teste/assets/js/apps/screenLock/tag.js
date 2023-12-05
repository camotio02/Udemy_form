import screenLockContent from './js/content.js'
import contentHome from '../home/js/content.js'
function screenLock() {
    return {
        lockedTime: document.querySelector('.locked'),
        slides: document.querySelector('.slides'),
        lcdMain: document.querySelector('.lcd'),
        radius: document.querySelector('.radius'),
        screens: document.querySelector('.screens'),
        tag: 'div',
        creatScreenLockContent() {
            const screens = document.querySelector('.screens')
            const isScreenLock = localStorage.getItem('isScreenLock') || 'icant'
            const isScreenHome = localStorage.getItem('isScreenHome') || 'icant'
            if (isScreenLock === 'cant') {
                screens.innerHTML = screenLockContent
            } else if (isScreenHome === 'cant') {
                console.log(screens.innerHTML)
                screens.innerHTML = contentHome
            }
        },
        createTags() {
            const tags = [
                {
                    tag: this.tag,
                    className: 'lcdScreenLock'
                },
            ];
            if (!this.isScreenLock) {
                localStorage.setItem('isScreenLock', 'cant');
            }

            tags.forEach((t, index) => {
                const div = document.createElement(t.tag);
                div.classList.add(t.className);
                this.screens.appendChild(div);
            });
        },

    };
}
const oFFscreen = screenLock();
oFFscreen.creatScreenLockContent()
export default screenLock();
