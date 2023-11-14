function Game() {
    let meusPontos = 100;
    let randoms = []
    let nums = document.querySelector('.nums')
    const form = document.querySelector('form');
    const tentativa = form.querySelector('input');
    let tempValue;
    function random(min, max) {
        const rand = Math.floor(Math.random() * (max - min + 1)) + min;
        return rand;
    }
    function generededRandomNumbers() {
        gerarNumerosAleatorios()
        const rand = random(0, 100)
        randoms.push(rand)
        tempValue = rand;
        randoms.sort(() => Math.random() - 0.5);
        insertValueInDom()
    }
    function insertValueInDom() {

        randoms.map((number, index) => {
            const num = document.createElement('div');
            return (
                num.classList.add('num'),
                num.id = number,
                num.innerHTML = number,
                nums.appendChild(num)
            )
        })
        nums.innerHTML =
            nums.appendChild(nums);
    }
    function gerarNumerosAleatorios() {
        const num1 = Math.floor(Math.random() * 100) + 1;
        const num2 = Math.floor(Math.random() * 50) + 50;
        const num3 = Math.floor(Math.random() * 200) - 100;
        randoms.push(num1, num2, num3);
    }
    const sendValue = (e) => {
        e.preventDefault();
        if (isNaN(tentativa.value) || !Number.isInteger(Number(tentativa.value))) {
            alert('Por favor, insira um número inteiro válido.');
            return;
        }
        const send = random(0, 20);
        verification(send, Number(tentativa.value));
    };
    const verification = (generatedValue, tentativa, event) => {
        const getTagPoints = document.querySelector('.points');
        if (generatedValue === tentativa) {
            event.target.className = 'active_choosen_num',
            meusPontos += 10;
            getTagPoints.innerHTML = '';
            getTagPoints.appendChild(creatTag(meusPontos));
            randoms = [];
            setTimeout(() => {
                nums.innerHTML = '';
                generededRandomNumbers()
            }, 3000)
        } else {
            event.target.className = 'active_choosen_num_error',
            meusPontos -= 15;
            getTagPoints.innerHTML = '';
            getTagPoints.appendChild(creatTag(meusPontos));
            randoms = [];
            setTimeout(() => {
                nums.innerHTML = '';
                generededRandomNumbers()
            }, 2000)
        }
    };
    const creatTag = (value) => {
        const tag = document.createElement('div');
        tag.innerHTML = value;
        return tag;
    };
    document.addEventListener('click', (event) => {
        const defaultSubmits = document.querySelector('.submits')
        const defaultChoosen = document.getElementById('prompt')
        if (event.target.id === 'randomNumbers') {
            defaultChoosen.classList.remove('active_choosen')
            defaultSubmits.style.display = 'none'
            event.target.classList.add('active_choosen')
            generededRandomNumbers()
            return;
        }
        if (event.target.classList.contains('num')) {
            const tentativa = event.target.id;
            verification(tempValue, Number(tentativa), event)
            return;
        }
        form.addEventListener('submit', sendValue);
    })
    console.log(randoms)
}

Game();
