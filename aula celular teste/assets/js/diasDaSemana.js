function daysOfTheWeek() {
    return {
        inicia(horario, newDate, tagDate) {
            const dayIndex = newDate.getDay()
            const day = horario.split(',')[0].split('/')[0];
            const month = horario.split(',')[0].split('/')[1]
            tagDate.innerHTML=`
            ${this.check_the_day(dayIndex)},
            ${this.check_the_month(month)} 
            ${this.dayMonth(day)}`
        },
        check_the_day(day) {
            const days = [
                'Domingo',
                'Segunda',
                'Terça',
                'Quarta',
                'Quinta',
                'Sexta',
                'Sábado'
            ];
            const isDay = days[day]
            return isDay;
        },
        check_the_month(month) {
            const months = [
                'Janeiro',
                'Fevereiro',
                'Março',
                'Abril',
                'Maio',
                'Junho',
                'Julho',
                'Agosto',
                'Setembro',
                'Outubro',
                'Novembro',
                'Dezembro'
            ];
            const isMonth = months[month - 1]
            return isMonth;
        },
        dayMonth(day) {
            return day;
        }
    }
}
export default daysOfTheWeek()