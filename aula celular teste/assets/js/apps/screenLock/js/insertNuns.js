import loading from "../../../../loading.js";
import base from "./base.js";
import screensMain from '../../../screens.js'
function insertNuns() {
    return {
        tagPess: document.querySelector('.lockedIcon'),
        pessCodeUnlock: `<i class='bx bx-lock-open-alt' ></i>`,
        pessCodeEnter: document.querySelector('.enter-pesscode'),
        tempPassword: '',
        showPassword: document.querySelector('.show-password'),

        get start() {
            document.addEventListener('click', (e) => {
                const isTr_lock_child = e.target.classList.contains('tr-lock-child')
                if (isTr_lock_child) {
                    const allShowPasswordChild = document.querySelectorAll('.show-password-child')
                    const text = e.target.innerText
                    this.tempPassword += text;
                    allShowPasswordChild[this.tempPassword.length - 1].style.background = 'white';
                    if (this.tempPassword.length === 6) {
                        this.checkIfPasswordIsValid(this.tempPassword)
                    }
                }
            })
        },
        checkIfPasswordIsValid(tempPassword) {
            const newAllshowPassword = document.querySelectorAll('.show-password-child')
            if (tempPassword === '123456') {
                const screens = document.querySelector('.screens')
                this.tagPess.innerHTML = this.pessCodeUnlock;
                this.showPassword.innerHTML = 'Desploqueado!';
                localStorage.setItem('screens', 'home');
                screens.innerHTML = loading('Desploqueando...')
                setTimeout(() => {
                    screensMain.creatScreenContent()
                }, 2000)
            } else {
                const lastValue = base;
                this.pessCodeEnter.innerHTML = 'Senha incorreta!';
                this.showPassword.classList.add('show-password-incorreto')
                newAllshowPassword.forEach((tag) => {
                    tag.style.backgroundColor = 'red';
                })
                setTimeout(() => {
                    this.showPassword.innerHTML = lastValue;
                    this.tempPassword = '';
                    newAllshowPassword.forEach((tag) => {
                        tag.style.backgroundColor = ''
                    })
                    this.pessCodeEnter.innerHTML = 'Digite a senha'
                    this.showPassword.classList.remove('show-password-incorreto')
                }, 1000)
            }

        },
        listenTouchstart() {
            document.addEventListener('touchstart', (e) => {
                if (e.target.classList.contains('tr-lock-child')) {
                    e.target.classList.add('touchEvent');
                    setTimeout(() => {
                        e.target.classList.remove('touchEvent');
                    }, 500);
                }
            });
        }

    }

}



const insert = insertNuns()
insert.start
insert.listenTouchstart()