const dada = document.querySelector('form')
const userDataHtml = document.querySelector('div.users')
const nav = document.querySelector('nav')
const not = document.querySelector('div.not')
const div = document.querySelectorAll('div')
const users = []
const canAdd = (
    dada) => {
    if (!dada.name || !dada.surname || !dada.peso || !dada.altura) {
        alert('um campo está vazio, por favor preencha o formulário')
        return false
    }
    return true
}
const add = (e) => {
    const user = {
        name: dada.name.value,
        surname: dada.surname.value,
        peso: dada.peso.value,
        altura: dada.altura.value
    }
    if(canAdd(user)){
        users.push(user)
        const userDivs = users.map((user, index) => {
            return `
                <div class="user_dada">
                    <div class="avatar">${index + 1}</div>
                    <div class="user_infos">
                        <div>${user.name}</div>
                        <div>${user.surname}</div>
                        <div>${user.peso}</div>
                        <div>${user.altura}</div>
                    </div>
                    </div>
                `;
        });
        userDataHtml.innerHTML = userDivs.join('');
    }
    not.innerHTML = users.length
}
nav.addEventListener('click', (e) => {
    const isRoute = e.target;
    if (isRoute.classList.contains('linkActive')) {
        isRoute.classList.remove('linkActive');
    } else {
        isRoute.classList.add('linkActive');
    }
});

