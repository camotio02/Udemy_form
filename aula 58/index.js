function Game() {
    let meusPontos = 100;
    const form = document.querySelector('form');
    const tentativa = form.querySelector('input');

    function random(min, max) {
        const rand = Math.floor(Math.random() * (max - min + 1)) + min;
        return rand;
    }
    const sendValue = (e) => {
        e.preventDefault();
        if (isNaN(tentativa.value) || !Number.isInteger(Number(tentativa.value))) {
            alert('Por favor, insira informações corretas.');
            return;
        }
        const send = random(0, 20);
        verification(send, Number(tentativa.value));
    };

    const verification = (generatedValue, tentativa) => {
        const getTagPoints = document.querySelector('.points');
        if (generatedValue === tentativa) {
            alert("Parabéns! Você ganhou 1 ponto. Seus pontos agora são: " + (meusPontos + 10));
            meusPontos += 10;
            getTagPoints.innerHTML = '';
            getTagPoints.appendChild(creatTag(meusPontos));
        } else {
            alert("Ops! Fica para próxima. O valor correto é: " + generatedValue);
            console.log("Ops! Pontos diminuíram para: " + (meusPontos - 15));
            meusPontos -= 15;
            getTagPoints.innerHTML = '';
            getTagPoints.appendChild(creatTag(meusPontos));
        }
    };

    const creatTag = (value) => {
        const tag = document.createElement('div');
        tag.innerHTML = value;
        return tag;
    };

    form.addEventListener('submit', sendValue);
}

Game();
