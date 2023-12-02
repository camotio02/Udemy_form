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

            ]
            if (!this.isScreenLock) {
                localStorage.setItem('isScreen', true)
            }
            return tags.forEach((t, index) => {
                const div = document.createElement(t.tag);
                div.classList.add(t.className)
                this.screenLock.appendChild(div)
            })
        },
        onScreenLock() {
            if (this.isScreenLock) {
                this.lcdMain.style.display = 'none'
                this.screenLock.style.display = 'flex'
                this.slides.style.display = 'none'
                this.lockedTime.style.display = 'none'
                this.radius.style.backgroundColor = 'white';
            }
            this.createTags()
        }
    }
    
}

export default screenLock()