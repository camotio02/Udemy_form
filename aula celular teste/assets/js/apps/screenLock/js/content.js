function screenLockContent() {
    return `
    <div class="screen-lock">

        <div class="lockedIcon">
        <i class='bx bx-lock'></i>
    </div>
    <div class="enter-pesscode">
        Digite a senha
    </div>
    <div class="show-password">
        <div class="show-password-child"></div>
        <div class="show-password-child"></div>
        <div class="show-password-child"></div>
        <div class="show-password-child"></div>
        <div class="show-password-child"></div>
        <div class="show-password-child"></div>
    </div>
    <div class="nuns-lock">
        <div class="tr-lock">
            <div class="tr-lock-child">
                1
            </div>
            <div class="tr-lock-child">2</div>
            <div class="tr-lock-child">3</div>
        </div>
        <div class="tr-lock">
            <div class="tr-lock-child">4</div>
            <div class="tr-lock-child">5</div>
            <div class="tr-lock-child">6</div>
        </div>
        <div class="tr-lock">
            <div class="tr-lock-child">7</div>
            <div class="tr-lock-child">8</div>
            <div class="tr-lock-child">9</div>
        </div>
        <div class="tr-lock">
            <div class="tr-lock-child">0</div>
        </div>
    </div>
    <div class="btns-lock">
        <div class="emrg">Emegência</div>
        <div class="back-lock">Back</div>
    </div>
    </div>
    `
}
export default screenLockContent()