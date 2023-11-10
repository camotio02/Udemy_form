const date = new Date('2000-10-02 00:00:00');
const day = date.getDay()
const days = [
    'Domingo',
    'Segunda-Feira',
    'Terça-Feira',
    'Quarta-Feira',
    'Quinta-Feira',
    'Sexta-Feira',
    'Sabádo',
]
const getDay = days[day]
console.log(getDay)

const dataNascimento = '2000-10-';
function getFullInfoUser(year) {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(year)) {
        throw new Error('Formato inválido para a data de nascimento. Utilize o formato "YYYY-MM-DD".');
    }
    const date = new Date(`${year} 00:00:00`);
    const userDates = {
        year: date.getFullYear(),
        month: dataNascimento.split('-')[1],
        day: dataNascimento.split('-')[2],
    }
    return getAge(userDates);
}
const getAge = (user) => {
    const dateNow = new Date();
    const nowDateFullInfo = {
        year: dateNow.getFullYear(),
        month: dateNow.getMonth(),
        day: dateNow.getDate(),
    };
    let age = nowDateFullInfo.year - user.year;
    if (
        nowDateFullInfo.month >= user.month
        &&
        nowDateFullInfo.day >= user.day) {
        return age;
    }
    return age - 1;
}
const userAge = getFullInfoUser(dataNascimento);
console.log(`Idade: ${userAge} anos`);
