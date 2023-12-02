function screenLock() {
    return {
        isScreenLock: localStorage.getItem('isScreen'),
        lockedTime: document.querySelector('.locked'),
        slides: document.querySelector('.slides'),
        lcdMain: document.querySelector('.lcd'),
        radius: document.querySelector('.radius'),
        screenLock: document.querySelector('.screen-lock'),
        tag: 'div',
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
            const screenLock = document.querySelector('.screen-lock');
            const isScreenLock = localStorage.getItem('isScreen');

            if (!isScreenLock) {
                screenLock.style.display = 'none';
                this.lcdMain.style.display = 'none';
                this.slides.style.display = 'none';
                this.lockedTime.style.display = 'none';
                this.radius.style.backgroundColor = 'gray';
                return false;
            }

            this.lcdMain.style.display = 'none';
            screenLock.style.display = 'flex';
            this.slides.style.display = 'none';
            this.lockedTime.style.display = 'none';
            this.radius.style.backgroundColor = 'white';
            this.createTags();
        }
    };
}

const oFFscreen = screenLock();
oFFscreen.onScreenLock();

export default screenLock();
