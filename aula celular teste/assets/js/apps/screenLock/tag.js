import screenLockContent from './js/content.js'

function screenLock() {
    return {
        isScreenLock: localStorage.getItem('isScreen'),
        lockedTime: document.querySelector('.locked'),
        slides: document.querySelector('.slides'),
        lcdMain: document.querySelector('.lcd'),
        radius: document.querySelector('.radius'),
        screenLock: document.querySelector('.screen-lock'),
        homeScreen: document.querySelector('.home'),
        tag: 'div',
        creatScreenLockContent() {
            this.screenLock.innerHTML = screenLockContent
        },
        createTags() {
            const tags = [
                {
                    tag: this.tag,
                    className: 'lcdScreenLock'
                },
            ];

            if (!this.isScreenLock) {
                localStorage.setItem('isScreen', true);
            }

            tags.forEach((t, index) => {
                const div = document.createElement(t.tag);
                div.classList.add(t.className);
                this.screenLock.appendChild(div);
            });
        },
        onScreenLock() {
            const isScreenLock = localStorage.getItem('isScreen');
            console.log(isScreenLock)
            if (isScreenLock !== true) {
                this.homeScreen.style.display = 'flex';
                this.screenLock.style.display = 'none';
                this.lcdMain.style.display = 'none';
                this.slides.style.display = 'none';
                this.lockedTime.style.display = 'none';
                this.radius.style.backgroundColor = 'gray';
                return false;
            }
            this.homeScreen.style.display = 'none';
            this.lcdMain.style.display = 'none';
            this.screenLock.style.display = 'flex';
            this.slides.style.display = 'none';
            this.lockedTime.style.display = 'none';
            this.radius.style.backgroundColor = 'white';
            this.createTags();
        }
    };
}

const oFFscreen = screenLock();
oFFscreen.creatScreenLockContent()
oFFscreen.onScreenLock();
export default screenLock();
